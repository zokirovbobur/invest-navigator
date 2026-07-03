export interface PricePoint {
  date: string; // YYYY-MM-DD
  price: number;
}

/**
 * Stooq's keyless CSV export. Returns "N/D" (or an empty body) for unknown
 * symbols instead of an HTTP error, so both are treated as failures here.
 */
export async function fetchStooqSeries(symbol: string): Promise<PricePoint[]> {
  const url = `https://stooq.com/q/d/l/?s=${encodeURIComponent(symbol)}&i=d`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Stooq error ${res.status} for ${symbol}`);
  }
  const text = (await res.text()).trim();
  if (!text || /^n\/d/i.test(text)) {
    throw new Error(`Stooq: no data for symbol ${symbol}`);
  }

  const [header, ...rows] = text.split("\n");
  if (!header) {
    throw new Error(`Stooq: empty response for symbol ${symbol}`);
  }
  const cols = header.split(",").map((c) => c.trim().toLowerCase());
  const dateIdx = cols.indexOf("date");
  const closeIdx = cols.indexOf("close");
  if (dateIdx === -1 || closeIdx === -1) {
    throw new Error(`Stooq: unexpected CSV header for ${symbol}: "${header}"`);
  }

  const points: PricePoint[] = [];
  for (const row of rows) {
    if (!row.trim()) continue;
    const parts = row.split(",");
    const date = parts[dateIdx];
    const price = Number(parts[closeIdx]);
    if (date && Number.isFinite(price)) points.push({ date, price });
  }
  if (points.length === 0) {
    throw new Error(`Stooq: parsed zero rows for symbol ${symbol}`);
  }
  return points;
}

export async function fetchStooqLatest(symbol: string): Promise<PricePoint> {
  const series = await fetchStooqSeries(symbol);
  const last = series[series.length - 1];
  if (!last) throw new Error(`Stooq: no latest price for ${symbol}`);
  return last;
}
