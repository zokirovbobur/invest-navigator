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
  **Implemented in Phase 1** with `source: "live" | "accrual" | "model"`
  (refined from the original 2-way live/model split — accrual categories
  are deterministic curves from a real published rate, not randomness, so
  they get their own badge value; frontend Phase 2 should render 3 badge
  variants, not 2).
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
- [x] **Phase 1** — market data provider layer + caching + cron endpoint. DONE — see notes below.
- [x] **Phase 2** — wire charts (category/compare/detail) to real series. DONE — see notes below (badge UI is category-detail-only, see gaps).
- [x] **Phase 3** — auth backend (register/login/me/logout). DONE, backend
      only — see notes below for the scope refinement (frontend auth UI
      moved into Phase 4, bundled with portfolio wiring).
- [~] **Phase 4** — IN PROGRESS. Backend portfolio routes DONE (see notes
      below). Still TODO: frontend auth UI (login/register modal + topbar
      user chip) + wiring the portfolio page to the API + localStorage
      migration. (Scope note: originally the auth UI was scoped to Phase
      3; moved here so login and "what do I do once logged in" ship as
      one testable flow instead of a login modal with nothing behind it.)
- [ ] **Phase 5** — polish (i18n, rate-limit guard, disclaimers, README).

## Status log

(Newest entry on top. Every session MUST add an entry here before stopping,
even mid-phase — note exactly what's done, what's broken, and the next
concrete step.)

- **2026-07-03** — Phase 4 **backend half** done and committed on
  `feature/fullstack-mvp` (frontend half — auth UI + portfolio page
  wiring — still TODO, see below).
  **Key design decision**: a position's value trajectory needs to be
  stable across repeat calls on different days (a user should see a
  coherent line, not one that reshuffles daily), but the category charts'
  "model" source (tse/startup/gems/gaming) is a seeded random walk that's
  only stable *relative to today* — it redraws its whole 24-month window
  every day. That's fine for a catalog chart, not for tracking a specific
  entry from a specific date. So portfolio positions use exactly **two**
  valuation modes, not three:
  1. **Price-based** (crypto/etf/div-stocks/real-estate/precious-metals —
     anything with a real coingecko/stooq symbol): store the actual
     historical price on the entry date (`positions.entryPrice`,
     resolved at creation time from the same cached raw series Phase 1
     already fetches), then value(t) = amountUsd × price(t)/entryPrice.
  2. **Rate-based** (everything else — accrual categories AND the 4
     "model" categories): value(t) = amountUsd × (1 + annualRate/100/12)
     ^monthsBetween(entryDate, t), using `ACCRUAL_RATES` for accrual
     categories and `MODEL_META[id].retMid` for model categories as the
     rate. `entryPrice` stays `null` in the DB for these — not needed,
     the formula is self-contained given `categoryId` + `entryDate`.
  This is a deliberate, documented simplification for the model
  categories: their portfolio trajectory is the category's *expected
  average* growth, not the same noisy curve shown on the catalog chart.
  **Added**: `src/server/lib/positionValue.ts` (`isPriceBased`,
  `accrualMultiplier`, `fetchRawSeriesCached`, `priceOnOrBefore`,
  `resolvePriceAtDate`), `src/server/lib/schemas/portfolio.ts` (zod:
  positive `amountUsd` capped at 1e9, `entryDate` must be `YYYY-MM-DD`
  and not in the future), `src/server/routes/portfolio.ts` — all routes
  behind `requireAuth` (from Phase 3):
  - `GET /positions` — list the caller's positions.
  - `POST /positions` — validates, resolves `entryPrice` for price-based
    categories (502 if the provider/cache can't be reached — no silent
    wrong price), inserts, returns the created row.
  - `DELETE /positions/:id` — scoped to `eq(userId)` so you can't delete
    someone else's position by guessing an id; 404 if not found/not
    yours (same response either way, doesn't leak existence).
  - `GET /series` — builds a 24-month-back-to-today monthly grid, fetches
    each distinct price-based symbol's raw series **once** (not once per
    position — positions sharing a symbol, e.g. two crypto entries,
    reuse the same fetch), returns each position's own value trajectory
    plus a summed `total` trajectory. A position's points start at its
    own `entryDate` (no phantom pre-investment history).
  Mounted at `/api/portfolio/*` in `src/server/app.ts`.
  **Verified**: `requireAuth` correctly 401s all four routes with no
  cookie, *without* touching the DB (checked via stack trace absence);
  with a validly-signed JWT cookie (crafted via `signAuthToken` directly,
  no real user needed for this check) the same requests correctly get
  past auth and fail at the DB layer with a clean 500 (no DATABASE_URL
  in this sandbox — expected, not a bug). Unit-checked the value math in
  isolation (no DB needed): `accrualMultiplier("deposit-uzs", ...)` over
  exactly 12 months from a 21%-annual rate gives 1.2314× — matches
  `(1+0.21/12)^12` by hand; 0 months gives exactly 1.0×;
  `priceOnOrBefore` correctly picks the latest price ≤ the target date
  and clamps to the earliest/latest available point outside the data
  range. `npm run typecheck` passes clean.
  **Known gaps**: never exercised `POST /positions` → `GET /series`
  against a real DB + real price data (needs `DATABASE_URL` and working
  network to coingecko/stooq — both unavailable in this sandbox, see
  Phase 1's gaps). The `502` path on `POST /positions` when entryPrice
  resolution fails is untested against a real provider outage.
  **Next** (same session likely, or a fresh one): frontend half of
  Phase 4 — login/register modal + topbar user chip (new I18N strings),
  wire `api.js`'s already-stubbed `register/login/logout/me/
  listPositions/addPosition/removePosition/portfolioSeries` methods into
  the UI, one-time migration of existing `localStorage` positions into
  the DB on first login (then clear the key), logged-out users keep
  today's localStorage behavior unchanged. After that: Phase 5 polish.

- **2026-07-03** — Phase 3 done and committed on `feature/fullstack-mvp`
  (**backend only** — see the scope-refinement note added to the Phase 4
  checklist entry above: frontend login/register UI moved into Phase 4).
  Added `src/server/lib/auth.ts` (`signAuthToken`/`verifyAuthToken` via
  `jose`, HS256, 30-day expiry, subject = user id; `AUTH_COOKIE =
  "fp_session"`; cookie options — `httpOnly`, `sameSite: "Lax"`, and
  `secure` conditional on `process.env.VERCEL === "1"` so `vercel dev`/
  plain local HTTP still works), `src/server/lib/schemas/auth.ts` (zod:
  register requires email/password min 8 chars/name, login just requires
  well-formed email + non-empty password), `src/server/lib/
  authMiddleware.ts` (`requireAuth` Hono middleware + the shared `AppEnv`
  type — `{ Variables: { userId, userEmail } }` — that Phase 4's
  portfolio routes will reuse), and `src/server/routes/auth.ts`:
  - `POST /register` — pre-checks email uniqueness (friendly 409 before
    paying for a bcrypt hash), bcryptjs cost 10, and also catches a
    unique-constraint violation from the insert itself as a race-condition
    backstop (409 either way, never a raw DB error leaked to the client).
  - `POST /login` — bcrypt.compare, generic "Invalid email or password"
    on both not-found and wrong-password (doesn't leak which one failed).
  - `POST /logout` — clears the cookie.
  - `GET /me` — returns `{user: null}` (200, not a 401) when there's no
    valid session; this is the one route that never needs a DB round
    trip for the "logged out" case, which is what most page loads will be.
  Mounted at `/api/auth/*` in `src/server/app.ts`.
  **Verified** via `npx tsx` running the Hono app in-process (JWT_SECRET
  set to a dummy value, still no real `DATABASE_URL`/network in this
  sandbox): `GET /me` with no cookie → `200 {"user":null}`, no DB touched;
  `POST /register` with malformed email/short password → `400` with the
  zod message; `POST /register` with valid input → clean `500` (correct:
  account creation genuinely requires a DB, there's no fallback); `POST
  /login` with malformed input → `400`. Also isolated the JWT layer:
  `signAuthToken`/`verifyAuthToken` round-trip correctly, and
  `verifyAuthToken` returns `null` (not a throw) for a garbage token.
  `npm run typecheck` passes clean.
  **Known gaps**: never exercised the actual DB-backed register→login→me
  round trip (needs a real Neon `DATABASE_URL`) — next session with a
  provisioned DB should `db:push` then hit these three routes for real
  before trusting them in production. No frontend UI yet (by design,
  see scope note above).
  **Next**: Phase 4 — portfolio routes (`GET/POST/DELETE
  /api/portfolio/positions`, `GET /api/portfolio/series`, using
  `requireAuth`/`AppEnv` from this phase), plus the frontend: login/
  register modal + topbar user chip (new `data.badge.*`-style I18N
  entries), wiring the portfolio page to the API when logged in with a
  one-time localStorage→DB migration, logged-out users keep today's
  localStorage behavior unchanged.

- **2026-07-03** — Phase 2 done and committed on `feature/fullstack-mvp`.
  Added `api.js` (new file, loaded via `<script>` before `offers.js`/
  `app.js` in index.html — plain global `window.API`, not an ES module,
  matching the existing frontend's no-bundler style). It only wires up
  `marketSeries`/`marketLatest`/`fxUzs` for real use right now;
  `register/login/logout/me/listPositions/addPosition/removePosition/
  portfolioSeries` methods are stubbed ahead of time for Phases 3-4 and
  will 404 until those routes exist — harmless, unused by the UI yet.
  **app.js changes** (surgical, no rewrite): renamed the original
  `generateSeries` → `generateSyntheticSeries` (body untouched, now
  tags its output `source:"model"`). New `generateSeries(inst)` is a
  synchronous wrapper: if `inst.id` is one of the 14 catalog category
  ids, it returns cached real data immediately if present
  (`seriesFromRealPoints`), else kicks off a background
  `window.API.marketSeries()` fetch (`ensureRealSeries`, one in-flight
  fetch per category, cached in module-level `realSeriesCache`) and
  falls back to the synthetic curve for *this* render — a `render()`
  call fires when the fetch resolves so the chart upgrades in place.
  Non-category ids (per-offer pseudo-instruments used by the portfolio
  and offer-compare charts) always go straight to synthetic, since
  Phase 1's API is category-level only. `seriesFromRealPoints` derives
  the 12-month forecast's drift/volatility from the *real* historical
  monthly steps (not the static `retMid` guess) — satisfies the "derive
  forecast from real series stats" requirement.
  Because every call site (`buildChart`, `buildCompareChart`, the two
  portfolio chart builders) already goes through `generateSeries(inst)`,
  none of them needed to change to start receiving real data — only
  `buildChart` was touched, to thread `source` out through its return
  value so the UI can show a badge.
  **Badge UI**: added `buildDataSourceBadge()` + a small pill next to
  the "Kategoriya dinamikasi" eyebrow in `buildExpandedPanel` (the
  single-category detail chart) — 3 states, LIVE/RATE-BASED/MODEL
  (uz: JONLI/STAVKA/MODEL, ru: ЖИВЫЕ/СТАВКА/МОДЕЛЬ), each with a
  `title=` hover hint, i18n'd in all 3 languages under the `data.badge.*`
  keys in `I18N`. CSS in `index.html` (`.data-badge*` rules, next to
  `.eyebrow`).
  **Verified in a real Chromium browser** (Playwright, `playwright-core`
  + the pre-installed browser at `/opt/pw-browsers/chromium`, served via
  `python3 -m http.server` from the repo root — no bundler/build step
  needed since this is a plain static SPA):
  1. Offline/API-down path: expanded the `deposit-uzs` card
     (`state.expandedId = "deposit-uzs"; render()`) against the plain
     static server (no `/api/*` routes exist there → 404) — chart
     rendered, badge showed **MODEL**, `realSeriesCache.deposit-uzs`
     correctly settled to `"error"` (no retry loop), console showed only
     the expected graceful warning, no crash. Screenshot confirms layout
     (badge pill renders correctly next to the eyebrow, matches design
     tokens).
  2. Live-data path: mocked `**/api/market/series*` via
     `page.route()` to return a realistic 25-point payload with
     `source:"live"` for `crypto` — badge correctly showed **JONLI**
     (LIVE) and `realSeriesCache.crypto` held the exact mocked payload.
  `npm run typecheck` still passes (TS side untouched by this phase);
  `node --check app.js` / `node --check api.js` both pass.
  **Known gaps for a future session**:
  1. The LIVE/ACCRUAL/MODEL badge only appears on the single-category
     detail panel (`buildExpandedPanel`). The compare-chart legend and
     the two portfolio charts silently benefit from real data (via
     `generateSeries`) but don't show a badge — nice-to-have, not done.
  2. The offer-level "expand" chart (pseudo-instrument keyed by a bank/
     stock offer id, around the `offer.expand.eyebrow` i18n key) always
     stays synthetic — Phase 1's API has no per-offer granularity, only
     per-category. This is intentional/acceptable for the MVP, not a bug.
  3. Never tested against a real deployed `/api/market/series` (only
     mocked) — once Phase 1's "Known gaps" (real provider network calls)
     are verified, re-check this phase's browser flow end-to-end again
     for good measure.
  **Next**: Phase 3 — auth (register/login/me/logout with JWT cookie),
  then Phase 4 wires the already-stubbed `api.js` portfolio methods to
  real backend routes.

- **2026-07-03** — Phase 1 done and committed on `feature/fullstack-mvp`.
  Added: `src/server/lib/providers/{coingecko,stooq,cbu}.ts` (fetchers,
  no API keys needed), `src/server/lib/accrual.ts` (synthetic accrual
  curve for deposit-uzs/deposit-usd/ozbonds/sukuk/mudaraba/p2p, rates
  duplicated from app.js's `INSTRUMENTS[].retMid` — **keep these two
  numbers in sync by hand**, there's no shared import since offers.js/app.js
  are plain `<script>` globals, not ES modules the backend can import),
  `src/server/lib/model.ts` (server-side port of app.js's `seededRand` +
  `generateSeries`, used only for tse/startup/gems/gaming which have no
  public market — NOT required to bit-match the frontend's own local
  fallback generator, they're independent implementations of the same
  idea), `src/server/lib/categoryMap.ts` (the category→source config
  table), `src/server/lib/cache.ts` (`withCache()`: TTL read-through over
  the `price_cache` table, serves stale data on fetch failure instead of
  erroring if a prior cache row exists), `src/server/lib/marketSeries.ts`
  (`getCategorySeries()`: the one function that ties source-kind →
  provider/accrual/model → monthly resampling → % change normalization),
  and three routes: `GET /api/market/series`, `GET /api/market/latest`,
  `GET /api/fx/uzs` (backed by `fx_rates` table + CBU), `GET
  /api/cron/snapshot` (bearer-guarded by `CRON_SECRET`, best-effort per
  symbol, refreshes `price_cache` + `price_history` + `fx_rates` daily).
  All mounted in `src/server/app.ts`.
  **Verified** (via `npx tsx` running the Hono app in-process, since this
  sandbox's network policy blocks outbound calls to coingecko.uz/stooq.com/
  cbu.uz and there's no real `DATABASE_URL` here — see "Known gaps" below):
  `/api/health` 200; `/api/market/series?category=deposit-uzs` (accrual)
  and `?category=tse` (model) both return clean 200 JSON with sane `pct`
  curves and don't touch the DB at all; `?category=unknown-cat` → 400;
  `?category=crypto` (needs DB for caching) → clean 502, not a crash;
  `/api/market/latest?categories=deposit-uzs,tse,crypto` → 200 with
  per-category partial failure (`{"category":"crypto","error":"unavailable"}`)
  instead of failing the whole request; `/api/fx/uzs` and
  `/api/cron/snapshot` → clean 500 when `DATABASE_URL` is unset (correct:
  these two hard-require a DB, there's no meaningful fallback). `npm run
  typecheck` passes clean.
  **Known gaps / not yet verified for real** (next session with real
  network + a provisioned Neon DB should check these before trusting
  Phase 1 in production):
  1. Never made a live HTTP call to coingecko.com, stooq.com, or cbu.uz —
     this sandbox's egress policy 403s all three. The provider parsing
     logic (esp. `cbu.ts`'s field names `Ccy`/`Rate`/`Date` and date
     format `DD.MM.YYYY`, and `stooq.ts`'s CSV column names) is written
     from documented/remembered API shapes, not verified against a live
     response. **Test these three fetchers for real before relying on
     them** — easiest way: `vercel dev` or a plain Node script with
     working internet, hitting `/api/market/series?category=crypto`,
     `?category=etf`, and `/api/fx/uzs` once `DATABASE_URL` is set.
  2. Never ran `npm run db:push` against a real Postgres — the Drizzle
     schema has not been validated to actually create tables without
     migration errors.
  3. `price_history` is currently only written by the cron job (one row
     per symbol per day) — nothing reads it yet. It exists for Phase 4's
     position `entryPrice` resolution.
  **Next**: Phase 2 — frontend `api.js` client, wire the category/compare/
  detail charts in app.js to `/api/market/series`, add LIVE/ACCRUAL/MODEL
  badges (i18n'd uz/ru/en).

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
