export type SourceKind = "accrual" | "coingecko" | "stooq" | "model";

export interface CategorySource {
  kind: SourceKind;
  /** CoinGecko coin id or Stooq ticker symbol; unused for accrual/model. */
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
  etf: { kind: "stooq", symbol: "spy.us", currency: "USD" },
  "div-stocks": { kind: "stooq", symbol: "schd.us", currency: "USD" },
  "real-estate": { kind: "stooq", symbol: "vnq.us", currency: "USD" },
  "precious-metals": { kind: "stooq", symbol: "xauusd", currency: "USD" },
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
