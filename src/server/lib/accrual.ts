import type { PricePoint } from "./providers/coingecko.js";

/**
 * Best-known annual rate (%) per rate-based category, used to build a
 * smooth synthetic accrual curve since no public market price exists for
 * these instruments (bank deposits, bonds, sukuk, mudaraba, p2p).
 *
 * Keep these numbers in sync with `retMid` in app.js's INSTRUMENTS array —
 * that's the single visible "expected annual return" shown to users today.
 */
export const ACCRUAL_RATES: Record<string, number> = {
  "deposit-uzs": 21,
  "deposit-usd": 5,
  ozbonds: 18,
  sukuk: 12.5,
  mudaraba: 16,
  p2p: 24,
};

/** Indexed series (base = 1.0 at the oldest point), monthly compounding. */
export function buildAccrualSeries(categoryId: string, months = 24): PricePoint[] {
  const annualRate = ACCRUAL_RATES[categoryId];
  if (annualRate == null) {
    throw new Error(`No accrual rate configured for category "${categoryId}"`);
  }
  const monthlyRate = annualRate / 100 / 12;
  const points: PricePoint[] = [];
  const today = new Date();
  for (let i = months; i >= 0; i--) {
    const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - i, today.getUTCDate()));
    const monthsFromStart = months - i;
    const price = Math.pow(1 + monthlyRate, monthsFromStart);
    points.push({ date: d.toISOString().slice(0, 10), price });
  }
  return points;
}
