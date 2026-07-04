import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { getDb } from "../../db/client.js";
import { priceHistory, priceCache, fxRates } from "../../db/schema.js";
import { fetchCoingeckoSeries } from "../lib/providers/coingecko.js";
import { fetchStooqSeries } from "../lib/providers/stooq.js";
import { fetchCbuLatestRate } from "../lib/providers/cbu.js";
import { CATEGORY_SOURCES } from "../lib/categoryMap.js";

const cron = new Hono();

/**
 * Daily Vercel Cron target (see vercel.json). Refreshes the price_cache
 * blob + latest price_history row for every live-market symbol, plus
 * today's USD/UZS rate. Runs best-effort per source: one provider failing
 * doesn't block the others.
 */
cron.get("/snapshot", async (c) => {
  const secret = process.env.CRON_SECRET;
  const auth = c.req.header("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    throw new HTTPException(401, { message: "Unauthorized" });
  }

  const db = getDb();
  const results: Record<string, "ok" | "error"> = {};
  const seen = new Set<string>();

  for (const cfg of Object.values(CATEGORY_SOURCES)) {
    if (cfg.kind !== "coingecko" && cfg.kind !== "stooq") continue;
    const dedupeKey = `${cfg.kind}:${cfg.symbol}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    try {
      const series =
        cfg.kind === "coingecko"
          ? await fetchCoingeckoSeries(cfg.symbol!)
          : await fetchStooqSeries(cfg.symbol!);

      const cacheKey = `series:${cfg.kind}:${cfg.symbol}`;
      await db
        .insert(priceCache)
        .values({ key: cacheKey, payload: series, fetchedAt: new Date() })
        .onConflictDoUpdate({
          target: priceCache.key,
          set: { payload: series, fetchedAt: new Date() },
        });

      const last = series[series.length - 1];
      if (last) {
        await db
          .insert(priceHistory)
          .values({ symbol: cfg.symbol!, date: last.date, price: String(last.price) })
          .onConflictDoUpdate({
            target: [priceHistory.symbol, priceHistory.date],
            set: { price: String(last.price) },
          });
      }
      results[dedupeKey] = "ok";
    } catch (err) {
      console.error(`cron/snapshot: failed for ${dedupeKey}`, err);
      results[dedupeKey] = "error";
    }
  }

  try {
    const { date, rate } = await fetchCbuLatestRate();
    await db
      .insert(fxRates)
      .values({ date, usdUzs: String(rate) })
      .onConflictDoUpdate({ target: fxRates.date, set: { usdUzs: String(rate) } });
    results["fx:usd-uzs"] = "ok";
  } catch (err) {
    console.error("cron/snapshot: CBU fetch failed", err);
    results["fx:usd-uzs"] = "error";
  }

  return c.json({ ranAt: new Date().toISOString(), results });
});

export default cron;
