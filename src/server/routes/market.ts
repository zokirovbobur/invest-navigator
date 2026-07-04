import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { getCategorySeries } from "../lib/marketSeries.js";
import { CATEGORY_SOURCES } from "../lib/categoryMap.js";
import { fetchCoingeckoMarkets } from "../lib/providers/coingecko.js";
import { fetchYahooSeries, quoteFromSeries } from "../lib/providers/yahoo.js";
import { withCache } from "../lib/cache.js";

const market = new Hono();
const PRICES_TTL_MS = 5 * 60 * 1000;
const MAX_PRICE_IDS = 50;
const YAHOO_QUOTE_TTL_MS = 12 * 60 * 60 * 1000; // matches marketSeries.ts's LIVE_SERIES_TTL_MS
const MAX_YAHOO_SYMBOLS = 20;

market.get("/series", async (c) => {
  const category = c.req.query("category");
  const monthsParam = c.req.query("months");
  const months = monthsParam ? Number(monthsParam) : 24;

  if (!category || !(category in CATEGORY_SOURCES)) {
    throw new HTTPException(400, { message: `Unknown or missing "category" query param` });
  }
  if (!Number.isFinite(months) || months < 1 || months > 60) {
    throw new HTTPException(400, { message: `"months" must be an integer between 1 and 60` });
  }

  try {
    const result = await getCategorySeries(category, months);
    return c.json(result);
  } catch (err) {
    console.error(`GET /api/market/series?category=${category}`, err);
    throw new HTTPException(502, { message: `Failed to load market data for "${category}"` });
  }
});

market.get("/latest", async (c) => {
  const categoriesParam = c.req.query("categories");
  if (!categoriesParam) {
    throw new HTTPException(400, { message: `Missing "categories" query param (comma-separated)` });
  }
  const categories = categoriesParam
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const unknown = categories.filter((id) => !(id in CATEGORY_SOURCES));
  if (unknown.length > 0) {
    throw new HTTPException(400, { message: `Unknown categories: ${unknown.join(", ")}` });
  }

  const results = await Promise.all(
    categories.map(async (id) => {
      try {
        const series = await getCategorySeries(id, 1);
        const last = series.points[series.points.length - 1];
        return {
          category: id,
          source: series.source,
          symbol: series.symbol,
          currency: series.currency,
          pct: last?.pct ?? 0,
          date: last?.date ?? null,
        };
      } catch (err) {
        console.error(`GET /api/market/latest: failed for category=${id}`, err);
        return { category: id, error: "unavailable" };
      }
    })
  );

  return c.json({ results });
});

/**
 * Batch live quote for a catalog item list (e.g. the crypto offers grid) —
 * one shared request per set of ids instead of one per coin. Cached 5min.
 */
market.get("/prices", async (c) => {
  const idsParam = c.req.query("ids");
  if (!idsParam) {
    throw new HTTPException(400, { message: `Missing "ids" query param (comma-separated CoinGecko ids)` });
  }
  const ids = [...new Set(idsParam.split(",").map((s) => s.trim()).filter(Boolean))]
    .sort()
    .slice(0, MAX_PRICE_IDS);
  if (ids.length === 0) {
    throw new HTTPException(400, { message: `"ids" must contain at least one id` });
  }

  try {
    const cacheKey = `prices:coingecko:${ids.join(",")}`;
    const { data } = await withCache(cacheKey, PRICES_TTL_MS, () => fetchCoingeckoMarkets(ids));
    return c.json({ prices: data });
  } catch (err) {
    console.error(`GET /api/market/prices?ids=${idsParam}`, err);
    throw new HTTPException(502, { message: "Failed to load live prices" });
  }
});

/**
 * Batch live quote for a set of Yahoo Finance symbols (e.g. the precious
 * metals offers grid) — reuses the same `series:yahoo:{symbol}` cache
 * entries the category-level chart already populates, so this rarely
 * costs an extra real fetch on top of what Phase 1/2 already does.
 */
market.get("/yahoo-quotes", async (c) => {
  const symbolsParam = c.req.query("symbols");
  if (!symbolsParam) {
    throw new HTTPException(400, { message: `Missing "symbols" query param (comma-separated)` });
  }
  const symbols = [...new Set(symbolsParam.split(",").map((s) => s.trim()).filter(Boolean))].slice(
    0,
    MAX_YAHOO_SYMBOLS
  );
  if (symbols.length === 0) {
    throw new HTTPException(400, { message: `"symbols" must contain at least one symbol` });
  }

  const entries = await Promise.all(
    symbols.map(async (symbol) => {
      try {
        const { data } = await withCache(`series:yahoo:${symbol}`, YAHOO_QUOTE_TTL_MS, () =>
          fetchYahooSeries(symbol)
        );
        return [symbol, quoteFromSeries(data)] as const;
      } catch (err) {
        console.error(`GET /api/market/yahoo-quotes: failed for ${symbol}`, err);
        return [symbol, null] as const;
      }
    })
  );

  const quotes = Object.fromEntries(entries.filter((entry): entry is [string, NonNullable<(typeof entries)[number][1]>] => entry[1] != null));
  return c.json({ quotes });
});

export default market;
