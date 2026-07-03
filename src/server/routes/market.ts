import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { getCategorySeries } from "../lib/marketSeries.js";
import { CATEGORY_SOURCES } from "../lib/categoryMap.js";

const market = new Hono();

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

export default market;
