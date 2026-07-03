import type { PricePoint } from "./providers/coingecko.js";

/**
 * Deterministic seeded PRNG — same algorithm as `seededRand()` in app.js,
 * kept in sync so a given category+seed produces a recognizable curve
 * shape server-side. This is a fallback data source, not real market data.
 */
function seededRand(seed: string) {
  let x = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    x ^= seed.charCodeAt(i);
    x = Math.imul(x, 16777619) >>> 0;
  }
  return () => {
    x ^= x << 13;
    x >>>= 0;
    x ^= x >>> 17;
    x ^= x << 5;
    x >>>= 0;
    return (x >>> 0) / 4294967295;
  };
}

/** For categories with no public market data (tse, startup, gems, gaming). */
export const MODEL_META: Record<string, { retMid: number; risk: "low" | "mid" | "hi" }> = {
  tse: { retMid: 17, risk: "mid" },
  startup: { retMid: 50, risk: "hi" },
  gems: { retMid: 22, risk: "mid" },
  gaming: { retMid: 35, risk: "hi" },
};

const VOL_BY_RISK: Record<string, number> = { low: 0.4, mid: 2.2, hi: 7 };

/** Indexed series (base = 1.0 at the oldest point). */
export function buildModelSeries(categoryId: string, months = 24): PricePoint[] {
  const meta = MODEL_META[categoryId];
  if (!meta) throw new Error(`No model metadata configured for category "${categoryId}"`);
  const rand = seededRand(categoryId);
  const monthly = meta.retMid / 12 / 100;
  const vol = (VOL_BY_RISK[meta.risk] ?? 2) / 100;

  const pctSteps = [0];
  for (let i = 1; i <= months; i++) {
    const noise = (rand() - 0.5) * 2 * vol;
    pctSteps.push(pctSteps[i - 1]! + monthly + noise);
  }

  const points: PricePoint[] = [];
  const today = new Date();
  for (let i = months; i >= 0; i--) {
    const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - i, today.getUTCDate()));
    const monthsFromStart = months - i;
    points.push({ date: d.toISOString().slice(0, 10), price: 1 + pctSteps[monthsFromStart]! });
  }
  return points;
}
