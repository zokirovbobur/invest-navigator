# Full-stack MVP — progress tracker

This file exists so work can resume across separate sessions/context windows.
Read this file FIRST before continuing work on branch `feature/fullstack-mvp`.

## Goal (full context)

Turn the static SPA (index.html + app.js + offers.js) into a full-stack MVP
that still deploys on **Vercel Hobby (free) plan**:

1. Real market data from free/keyless open APIs → charts become dynamic
   (price trajectories, like an exchange), replacing the fake seeded
   random-walk in `generateSeries()` (app.js).
2. User accounts (email + password) with portfolios stored in Postgres
   (Neon, free tier).
3. Users attach positions (asset + amount + entry date); the app tracks the
   **value trajectory** of each position from real market series — not a
   real brokerage balance, just trajectory tracking.

Full original spec lives in the chat history that produced this branch; the
condensed version is reproduced below so a fresh session doesn't need it.

## Hard constraints (Vercel Hobby)

- Do NOT rewrite the frontend framework — keep vanilla JS SPA, its design
  tokens, i18n (uz/ru/en) and hash routing; extend it, don't replace it.
- Backend = **one** catch-all Vercel Serverless Function at
  `api/[[...route]].ts` using **Hono** (avoids Hobby's function-count cap).
- DB = **Neon Postgres** (free tier, provisioned via Vercel Marketplace) +
  **Drizzle ORM** with migrations.
- Cron: Hobby allows only **daily** crons → exactly one cron,
  `/api/cron/snapshot`, declared in `vercel.json`, protected by
  `CRON_SECRET` bearer check.
- No websockets, no paid APIs, no long-running jobs (~5s function budget).
- Never call third-party market APIs from the browser directly — always
  proxy through `/api/*` with DB-backed caching.

## Data sources (all free/keyless)

- Crypto → CoinGecko public API (`bitcoin` as the crypto category proxy).
- Stocks/ETF/metals → Stooq daily CSV (`https://stooq.com/q/d/l/?s={symbol}&i=d`):
  `^spx` (S&P500 ref), `spy.us` (etf), `schd.us` (div-stocks),
  `vnq.us` (real-estate proxy), `xauusd` (precious-metals).
- USD/UZS → Central Bank of Uzbekistan JSON API (`cbu.uz`).
- Rate-based categories (deposit-uzs, deposit-usd, ozbonds, sukuk, mudaraba,
  p2p) → **no market API exists**; compute a smooth synthetic accrual curve
  server-side from the best `rate` found in `offers.js`.
- No-data categories (tse, startup, gems, gaming) → keep the existing
  seeded synthetic series, but flag the API response `"source":"model"` and
  show a "MODEL" badge in the UI (vs "LIVE" for real data).

### Category → series source map (implement as one config table)

```
deposit-uzs, deposit-usd, ozbonds, sukuk, mudaraba, p2p  -> accrual(best rate from offers.js)
crypto                                                    -> coingecko:bitcoin
etf                                                        -> stooq:spy.us
div-stocks                                                 -> stooq:schd.us
real-estate                                                -> stooq:vnq.us
precious-metals                                            -> stooq:xauusd
tse, startup, gems, gaming                                 -> model (existing seededRand fallback)
```

## API design (all mounted on the Hono catch-all under /api)

- `GET  /api/market/series?category={id}&months=24` → `{ source, symbol, currency, points:[{date,pct}] }`,
  pct = % change vs first point. Reads from `price_history`; backfills from
  provider on cache miss/stale.
- `GET  /api/market/latest?symbols=...` → cached latest prices (TTL 15min, `price_cache`).
- `GET  /api/fx/uzs` → current + historical USD/UZS (cached daily, `fx_rates`).
- `POST /api/auth/register` `{email,password,name}` — bcryptjs, zod.
- `POST /api/auth/login` → JWT (jose) in httpOnly Secure SameSite=Lax cookie.
- `POST /api/auth/logout`, `GET /api/auth/me`.
- `GET/POST/DELETE /api/portfolio/positions` (auth) —
  `{categoryId, offerId?, symbol?, amountUSD, entryDate}`; on create, resolve
  `entryPrice` from the series so trajectory = amountUSD × price_t/price_entry
  (or accrual formula for rate-based kinds).
- `GET  /api/portfolio/series` (auth) → per-position + total trajectory.
- `GET  /api/cron/snapshot` — daily refresh of all mapped symbols +
  CBU rate; idempotent upsert on (symbol,date). Requires `Authorization: Bearer $CRON_SECRET`.

## DB schema (Drizzle)

```
users(id uuid pk, email unique, password_hash, name, created_at)
positions(id uuid pk, user_id fk, category_id text, offer_id text?, symbol text?,
          amount_usd numeric, entry_date date, entry_price numeric?, created_at)
price_history(symbol text, date date, price numeric, pk(symbol,date))
price_cache(key text pk, payload jsonb, fetched_at timestamptz)
fx_rates(date date pk, usd_uzs numeric)
rate_limits(key text pk, count numeric, window_start timestamptz)   -- added in Phase 0, for Phase 5's per-IP guard
```

This is implemented in `src/db/schema.ts` (Drizzle). Nothing has been pushed
to a real DB yet — that requires the owner's `DATABASE_URL` (see "Manual
steps" below). Run `npm run db:push` once that's set.

## Frontend changes (surgical, inside app.js/index.html — not a rewrite)

1. `api.js` fetch client (`credentials:'include'`, JSON helpers, error normalization).
2. Replace `generateSeries(inst)` call sites: fetch `/api/market/series` async,
   render from real points; seeded generator becomes loading-placeholder /
   offline-fallback only. Add LIVE/MODEL badge (i18n'd).
3. Auth UI: login/register modal + user chip in topbar, matching existing
   design tokens. New I18N strings for uz/ru/en.
4. Portfolio: when logged in, read/write via API instead of localStorage;
   one-time migration of existing localStorage positions on first login,
   then clear the key. Logged-out users keep current localStorage behavior
   unchanged.
5. Loading skeletons + error states for every network call — app must still
   render if the API/DB is down.

## Phase checklist (update this as you go — check off + add notes)

- [x] **Phase 0** — TS + Hono + Drizzle + Neon scaffolding, `.env.example`,
      `vercel.json` cron, README setup section. DONE — see notes below.
- [ ] **Phase 1** — market data provider layer + caching + cron endpoint.
- [ ] **Phase 2** — wire charts (category/compare/detail) to real series.
- [ ] **Phase 3** — auth (register/login/me/logout).
- [ ] **Phase 4** — portfolio in DB + migration + trajectory charts.
- [ ] **Phase 5** — polish (i18n, rate-limit guard, disclaimers, README).

## Status log

(Newest entry on top. Every session MUST add an entry here before stopping,
even mid-phase — note exactly what's done, what's broken, and the next
concrete step.)

- **2026-07-03** — Phase 0 done and committed on `feature/fullstack-mvp`.
  Added: `package.json` deps (hono, drizzle-orm, @neondatabase/serverless,
  bcryptjs, jose, zod + drizzle-kit/typescript/@types/node/vercel CLI as
  dev deps), `tsconfig.json`, `src/db/schema.ts` (users, positions,
  price_history, price_cache, fx_rates, rate_limits), `src/db/client.ts`
  (lazy Neon+Drizzle client, throws a clear error if `DATABASE_URL` is
  unset), `drizzle.config.ts`, `src/server/app.ts` (Hono app, basePath
  `/api`, CORS, error handler, `/api/health`), `api/[[...route]].ts`
  (Vercel catch-all entry via `hono/vercel`'s `handle()`, `runtime: nodejs`),
  `.env.example`, `README.md`, `vercel.json` now declares the daily cron
  `/api/cron/snapshot` at 03:00 UTC (route not implemented yet — Phase 1).
  Verified: `npm run typecheck` passes clean; `/api/health` smoke-tested
  directly via Node (`app.request('/api/health')` → 200). Did NOT run
  `vercel dev` end-to-end (no Vercel login/token in this sandbox) — the
  repo owner should sanity-check `vercel dev` once, and must do the
  "Manual steps" below before Phase 1's endpoints will actually work in
  Preview/Production.
  **Next**: Phase 1 — provider modules (CoinGecko/Stooq/CBU), the
  category→series mapping table, `/api/market/*`, `/api/fx/uzs`, and
  `/api/cron/snapshot`.

## Manual steps required from the repo owner (cannot be done by the agent)

- [ ] Create a free Neon Postgres DB via Vercel Dashboard → Storage →
      Marketplace → Neon, and connect it to the `invest-navigator` Vercel
      project. This auto-populates `DATABASE_URL` in the project's env vars.
- [ ] Set `JWT_SECRET` (any long random string) in Vercel project env vars.
- [ ] Set `CRON_SECRET` (any long random string) in Vercel project env vars
      — Vercel automatically sends it as a Bearer token to cron routes if
      configured; see Vercel Cron docs.
- [ ] Run `npx drizzle-kit push` (or the generated migration) against the
      new `DATABASE_URL` once, to create tables — see README for the exact
      command once Phase 0 lands.
