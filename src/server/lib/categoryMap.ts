export type SourceKind = "accrual" | "coingecko" | "yahoo" | "model";

export interface CategorySource {
  kind: SourceKind;
  /** CoinGecko coin id or Yahoo Finance ticker symbol; unused for accrual/model. */
  symbol?: string;
  currency: "USD" | "UZS";
}

/**
 * Maps each catalog category (INSTRUMENTS[].id in app.js) to where its
 * chart data comes from. See docs/PROGRESS.md for the rationale per
 * category — most have no public market and use a modeled curve.
 */
export const CATEGORY_SOURCES: Record<string, CategorySource> = {
  "deposit-uzs": { kind: "accrual", currency: "UZS" },
  "deposit-usd": { kind: "accrual", currency: "USD" },
  ozbonds: { kind: "accrual", currency: "UZS" },
  sukuk: { kind: "accrual", currency: "UZS" },
  mudaraba: { kind: "accrual", currency: "UZS" },
  p2p: { kind: "accrual", currency: "UZS" },
  crypto: { kind: "coingecko", symbol: "bitcoin", currency: "USD" },
  etf: { kind: "yahoo", symbol: "SPY", currency: "USD" },
  "div-stocks": { kind: "yahoo", symbol: "SCHD", currency: "USD" },
  "real-estate": { kind: "yahoo", symbol: "VNQ", currency: "USD" },
  "precious-metals": { kind: "yahoo", symbol: "GC=F", currency: "USD" },
  tse: { kind: "model", currency: "UZS" },
  startup: { kind: "model", currency: "USD" },
  gems: { kind: "model", currency: "USD" },
  gaming: { kind: "model", currency: "USD" },
};

export function resolveCategorySource(categoryId: string): CategorySource {
  const source = CATEGORY_SOURCES[categoryId];
  if (!source) throw new Error(`Unknown category "${categoryId}"`);
  return source;
}
