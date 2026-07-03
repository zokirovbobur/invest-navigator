import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { and, eq } from "drizzle-orm";
import { getDb } from "../../db/client.js";
import { positions } from "../../db/schema.js";
import { requireAuth, type AppEnv } from "../lib/authMiddleware.js";
import { createPositionSchema } from "../lib/schemas/portfolio.js";
import { CATEGORY_SOURCES, resolveCategorySource } from "../lib/categoryMap.js";
import {
  isPriceBased,
  accrualMultiplier,
  fetchRawSeriesCached,
  priceOnOrBefore,
} from "../lib/positionValue.js";
import type { PricePoint } from "../lib/providers/coingecko.js";

const portfolio = new Hono<AppEnv>();
portfolio.use("*", requireAuth);

portfolio.get("/positions", async (c) => {
  const db = getDb();
  const rows = await db.select().from(positions).where(eq(positions.userId, c.get("userId")));
  return c.json({ positions: rows });
});

portfolio.post("/positions", async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = createPositionSchema.safeParse(body);
  if (!parsed.success) {
    throw new HTTPException(400, { message: parsed.error.issues[0]?.message ?? "Invalid input" });
  }
  const { categoryId, offerId, symbol, amountUsd, entryDate } = parsed.data;
  if (!(categoryId in CATEGORY_SOURCES)) {
    throw new HTTPException(400, { message: `Unknown category "${categoryId}"` });
  }

  let entryPrice: string | null = null;
  if (isPriceBased(categoryId)) {
    try {
      const sorted = await fetchRawSeriesCached(categoryId);
      const price = priceOnOrBefore(sorted, entryDate);
      if (price == null) throw new Error("no price data");
      entryPrice = String(price);
    } catch (err) {
      console.error("POST /api/portfolio/positions: entryPrice resolution failed", err);
      throw new HTTPException(502, {
        message: "Could not resolve a market price for this entry date, try again shortly",
      });
    }
  }

  const db = getDb();
  const [row] = await db
    .insert(positions)
    .values({
      userId: c.get("userId"),
      categoryId,
      offerId: offerId ?? null,
      symbol: symbol ?? null,
      amountUsd: String(amountUsd),
      entryDate,
      entryPrice,
    })
    .returning();
  return c.json({ position: row }, 201);
});

portfolio.delete("/positions/:id", async (c) => {
  const db = getDb();
  const id = c.req.param("id");
  const deleted = await db
    .delete(positions)
    .where(and(eq(positions.id, id), eq(positions.userId, c.get("userId"))))
    .returning({ id: positions.id });
  if (deleted.length === 0) {
    throw new HTTPException(404, { message: "Position not found" });
  }
  return c.json({ ok: true });
});

const SERIES_MONTHS = 24;

function buildMonthlyGrid(months: number): string[] {
  const today = new Date();
  const grid: string[] = [];
  for (let i = months; i >= 0; i--) {
    const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - i, today.getUTCDate()));
    grid.push(d.toISOString().slice(0, 10));
  }
  return grid;
}

portfolio.get("/series", async (c) => {
  const db = getDb();
  const rows = await db.select().from(positions).where(eq(positions.userId, c.get("userId")));
  const grid = buildMonthlyGrid(SERIES_MONTHS);

  // Pre-fetch each distinct price-based symbol's raw series once.
  const rawSeriesBySymbolKey = new Map<string, PricePoint[]>();
  for (const p of rows) {
    if (!isPriceBased(p.categoryId)) continue;
    const cfg = resolveCategorySource(p.categoryId);
    const key = `${cfg.kind}:${cfg.symbol}`;
    if (rawSeriesBySymbolKey.has(key)) continue;
    try {
      rawSeriesBySymbolKey.set(key, await fetchRawSeriesCached(p.categoryId));
    } catch (err) {
      console.error(`GET /api/portfolio/series: failed to load prices for ${key}`, err);
      rawSeriesBySymbolKey.set(key, []);
    }
  }

  const positionSeries = rows.map((p) => {
    const amount = Number(p.amountUsd);
    const points = grid
      .filter((d) => d >= p.entryDate)
      .map((d) => {
        let valueUsd: number;
        if (isPriceBased(p.categoryId)) {
          const cfg = resolveCategorySource(p.categoryId);
          const series = rawSeriesBySymbolKey.get(`${cfg.kind}:${cfg.symbol}`) ?? [];
          const entryPrice = p.entryPrice != null ? Number(p.entryPrice) : priceOnOrBefore(series, p.entryDate);
          const priceNow = priceOnOrBefore(series, d);
          valueUsd = entryPrice && priceNow ? amount * (priceNow / entryPrice) : amount;
        } else {
          valueUsd = amount * accrualMultiplier(p.categoryId, p.entryDate, new Date(d + "T00:00:00Z"));
        }
        return { date: d, valueUsd };
      });
    return {
      positionId: p.id,
      categoryId: p.categoryId,
      amountUsd: amount,
      entryDate: p.entryDate,
      points,
    };
  });

  const totalByDate = new Map<string, number>(grid.map((d) => [d, 0]));
  for (const ps of positionSeries) {
    for (const pt of ps.points) {
      totalByDate.set(pt.date, (totalByDate.get(pt.date) ?? 0) + pt.valueUsd);
    }
  }
  const total = grid.map((d) => ({ date: d, valueUsd: totalByDate.get(d) ?? 0 }));

  return c.json({ positions: positionSeries, total });
});

export default portfolio;
