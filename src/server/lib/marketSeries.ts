import { resolveCategorySource } from "./categoryMap.js";
import { buildAccrualSeries } from "./accrual.js";
import { buildModelSeries } from "./model.js";
import { fetchCoingeckoSeries, type PricePoint } from "./providers/coingecko.js";
import { fetchYahooSeries } from "./providers/yahoo.js";
import { withCache } from "./cache.js";

export type SeriesSource = "live" | "accrual" | "model";

export interface PctPoint {
  date: string;
  pct: number; // % change vs the first point in the series
}

export interface MarketSeriesResult {
  source: SeriesSource;
  symbol?: string;
  currency: "USD" | "UZS";
  points: PctPoint[];
}

const LIVE_SERIES_TTL_MS = 12 * 60 * 60 * 1000; // 12h — well within daily cron cadence

function toPctSeries(points: PricePoint[]): PctPoint[] {
  const base = points[0]?.price;
  if (!base) return points.map((p) => ({ date: p.date, pct: 0 }));
  return points.map((p) => ({ date: p.date, pct: (p.price / base - 1) * 100 }));
}

/**
 * Downsamples a daily (or irregular) series to `months + 1` monthly points
 * ending today, each taken as the latest known price on/before that
 * month's anchor date. Assumes `raw` may be unsorted.
 */
function resampleMonthly(raw: PricePoint[], months: number): PricePoint[] {
  if (raw.length === 0) return [];
  const sorted = [...raw].sort((a, b) => a.date.localeCompare(b.date));
  const today = new Date();
  const out: PricePoint[] = [];
  for (let i = months; i >= 0; i--) {
    const target = new Date(
      Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - i, today.getUTCDate())
    );
    const targetIso = target.toISOString().slice(0, 10);
    let candidate = sorted[0]!;
    for (const p of sorted) {
      if (p.date <= targetIso) candidate = p;
      else break;
    }
    out.push({ date: targetIso, price: candidate.price });
  }
  return out;
}

export async function getCategorySeries(
  categoryId: string,
  months = 24
): Promise<MarketSeriesResult> {
  const cfg = resolveCategorySource(categoryId);

  if (cfg.kind === "accrual") {
    const raw = buildAccrualSeries(categoryId, months);
    return { source: "accrual", currency: cfg.currency, points: toPctSeries(raw) };
  }

  if (cfg.kind === "model") {
    const raw = buildModelSeries(categoryId, months);
    return { source: "model", currency: cfg.currency, points: toPctSeries(raw) };
  }

  if (cfg.kind === "coingecko") {
    const symbol = cfg.symbol!;
    const { data } = await withCache(`series:coingecko:${symbol}`, LIVE_SERIES_TTL_MS, () =>
      fetchCoingeckoSeries(symbol)
    );
    const monthly = resampleMonthly(data, months);
    return { source: "live", symbol, currency: cfg.currency, points: toPctSeries(monthly) };
  }

  // cfg.kind === "yahoo"
  const symbol = cfg.symbol!;
  const { data } = await withCache(`series:yahoo:${symbol}`, LIVE_SERIES_TTL_MS, () =>
    fetchYahooSeries(symbol)
  );
  const monthly = resampleMonthly(data, months);
  return { source: "live", symbol, currency: cfg.currency, points: toPctSeries(monthly) };
}
