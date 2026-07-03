interface CbuRateEntry {
  Ccy?: string;
  Rate?: string;
  Date?: string;
  [key: string]: unknown;
}

/** CBU 'Date' field is DD.MM.YYYY -> normalize to YYYY-MM-DD. */
function normalizeCbuDate(d: string): string {
  const m = d.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!m) return d;
  return `${m[3]}-${m[2]}-${m[1]}`;
}

export async function fetchCbuLatestRate(): Promise<{ date: string; rate: number }> {
  const url = "https://cbu.uz/en/arkhiv-kursov-valyut/json/USD/";
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`CBU error ${res.status}`);
  const json = (await res.json()) as CbuRateEntry[];
  const entry = json[0];
  if (!entry?.Rate) throw new Error("CBU: empty/unexpected response");
  const rate = Number(entry.Rate);
  if (!Number.isFinite(rate)) throw new Error(`CBU: unparsable rate "${entry.Rate}"`);
  const date = entry.Date ? normalizeCbuDate(entry.Date) : new Date().toISOString().slice(0, 10);
  return { date, rate };
}

/**
 * Historical rate for one date (YYYY-MM-DD). Returns null (rather than
 * throwing) when the provider has no data for that date, since this is
 * used in best-effort backfill loops that should skip gaps, not abort.
 */
export async function fetchCbuRateForDate(isoDate: string): Promise<number | null> {
  const [y, m, d] = isoDate.split("-");
  const path = `${d}.${m}.${y}`;
  const url = `https://cbu.uz/en/arkhiv-kursov-valyut/json/USD/${path}/`;
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) return null;
  const json = (await res.json()) as CbuRateEntry[];
  const entry = json[0];
  if (!entry?.Rate) return null;
  const rate = Number(entry.Rate);
  return Number.isFinite(rate) ? rate : null;
}
