import { resolveCategorySource } from "./categoryMap.js";
import { ACCRUAL_RATES } from "./accrual.js";
import { MODEL_META } from "./model.js";
import { fetchCoingeckoSeries, type PricePoint } from "./providers/coingecko.js";
import { fetchStooqSeries } from "./providers/stooq.js";
import { withCache } from "./cache.js";

const LIVE_SERIES_TTL_MS = 12 * 60 * 60 * 1000;

export function isPriceBased(categoryId: string): boolean {
  const cfg = resolveCategorySource(categoryId);
  return cfg.kind === "coingecko" || cfg.kind === "stooq";
}

/**
 * Annual rate (%) used to grow a position smoothly for categories with no
 * per-date real price. For "model" categories this deliberately drops the
 * random noise component of the category chart — a position's trajectory
 * needs to be stable across repeated calls on different days, and the
 * chart's seeded noise is only stable relative to "today", not to a fixed
 * entry date in the past.
 */
function annualRateFor(categoryId: string): number | null {
  if (categoryId in ACCRUAL_RATES) return ACCRUAL_RATES[categoryId]!;
  if (categoryId in MODEL_META) return MODEL_META[categoryId]!.retMid;
  return null;
}

function monthsBetween(a: Date, b: Date): number {
  return (
    (b.getUTCFullYear() - a.getUTCFullYear()) * 12 +
    (b.getUTCMonth() - a.getUTCMonth()) +
    (b.getUTCDate() - a.getUTCDate()) / 30.4375
  );
}

/**
 * Value multiplier (>=1 typically) for a rate-based/model position as of
 * `asOf`. `customRatePct`, when given, overrides the category's blended
 * rate with the specific offer's actual rate (e.g. one particular bank's
 * deposit %) for better fidelity with what the user actually picked.
 */
export function accrualMultiplier(
  categoryId: string,
  entryDate: string,
  asOf: Date = new Date(),
  customRatePct?: number | null
): number {
  const annualRate = customRatePct ?? annualRateFor(categoryId);
  if (annualRate == null) {
    throw new Error(`No accrual/model rate configured for category "${categoryId}"`);
  }
  const months = Math.max(0, monthsBetween(new Date(entryDate + "T00:00:00Z"), asOf));
  return Math.pow(1 + annualRate / 100 / 12, months);
}

/** Full raw (calendar-anchored) price history for a price-based category, cached. */
export async function fetchRawSeriesCached(categoryId: string): Promise<PricePoint[]> {
  const cfg = resolveCategorySource(categoryId);
  if (cfg.kind !== "coingecko" && cfg.kind !== "stooq") {
    throw new Error(`fetchRawSeriesCached: category "${categoryId}" is not price-based`);
  }
  const symbol = cfg.symbol!;
  const cacheKey = `series:${cfg.kind}:${symbol}`;
  const { data } = await withCache(cacheKey, LIVE_SERIES_TTL_MS, () =>
    cfg.kind === "coingecko" ? fetchCoingeckoSeries(symbol) : fetchStooqSeries(symbol)
  );
  return [...data].sort((a, b) => a.date.localeCompare(b.date));
}

/** Latest known price on or before `date` from a pre-sorted raw series. */
export function priceOnOrBefore(sortedSeries: PricePoint[], date: string): number | null {
  if (sortedSeries.length === 0) return null;
  let candidate = sortedSeries[0]!;
  for (const p of sortedSeries) {
    if (p.date <= date) candidate = p;
    else break;
  }
  return candidate.price;
}

export async function resolvePriceAtDate(categoryId: string, date: string): Promise<number> {
  const sorted = await fetchRawSeriesCached(categoryId);
  const price = priceOnOrBefore(sorted, date);
  if (price == null) throw new Error(`resolvePriceAtDate: no price data for ${categoryId}`);
  return price;
}
