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
- Backend = **one** catch-all Vercel Function at `api/index.ts` (Edge
  runtime) using **Hono**, with `vercel.json` rewriting `/api/:path*` →
  `/api` (avoids Hobby's function-count cap; see the 2026-07-04 deployment
  post-mortem below for why it's `index.ts` + a rewrite, not a bracket
  catch-all filename, and why Edge runtime not Node).
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
- [x] **Phase 4** — DONE (backend + frontend). See notes below.
- [x] **Phase 5** — polish (i18n, rate-limit guard, disclaimers, README). DONE.

## Status log

(Newest entry on top. Every session MUST add an entry here before stopping,
even mid-phase — note exactly what's done, what's broken, and the next
concrete step.)

- **2026-07-04 (scope extension)** — The repo owner asked why the crypto
  *catalog list* (BTC/ETH/BNB/... cards on the "Kripto aktivlar" page)
  still showed static demo numbers — the original Phase 2 scope only
  wired the **category-level trajectory chart** to real data, not the
  individual per-coin cards in `offers.js`'s `CRYPTO_OFFERS`. Extended
  scope: added `GET /api/market/prices?ids=<coingecko-ids>` (one batched
  CoinGecko `/coins/markets` call, cached 5min — `fetchCoingeckoMarkets`
  in `coingecko.ts`) and wired the frontend
  (`CRYPTO_COINGECKO_IDS` map, `ensureCryptoLivePrices`/
  `applyCryptoLivePrices` in app.js) to overlay real price/market-cap/
  30d-change onto the static offer objects in place, so
  `buildCryptoCard`/`filterAndSortCrypto` needed zero changes. A small
  LIVE badge (reusing Phase 2's `data-badge` component) appears per-coin
  once its live data lands; coins with no CoinGecko id mapped or a
  failed fetch just keep the static fallback, no crash.
  **Only crypto was done** — TSE (local stocks), gems, and gaming skins
  still have no data source (as established in Phase 1) and stay fully
  static by design. Precious metals' *individual* item list (gold/
  silver/platinum/palladium/rhodium cards, distinct from the
  `precious-metals` category's single aggregate chart) was **not**
  extended in this pass — Yahoo Finance futures tickers exist for gold/
  silver/platinum/palladium (`GC=F`/`SI=F`/`PL=F`/`PA=F`) but rhodium
  has no standard futures ticker; this is a reasonable next increment
  if requested, using the same `market/prices`-style pattern but with a
  generic multi-symbol Yahoo batch (Yahoo's chart API is one-symbol-per-
  call, so it'd need N parallel calls rather than one batched call like
  CoinGecko — worth designing carefully, not a copy-paste of this).
  **Verified** in a real Chromium browser via Playwright with a mocked
  `/api/market/prices` response: requested ids matched the ticker→
  CoinGecko-id map exactly; BTC/ETH cards updated to live numbers with
  the LIVE badge; untouched coins (no mock data for them) kept their
  normal static values with no errors. Not yet re-verified against the
  real CoinGecko API on a live deployment (should be — same
  `COINGECKO_API_KEY` already configured should make it work, but the
  batched `/coins/markets` endpoint hasn't been hit for real yet, only
  `/coins/{id}/market_chart` has).

- **2026-07-04 (later)** — **All three live data providers confirmed
  working end-to-end on the real Vercel Preview deployment**, closing out
  the deployment-verification gap that every prior phase flagged as
  unverified. Two more real bugs found and fixed beyond the entry below:
  1. **CoinGecko's free plan caps historical data at 365 days**, not the
     730 (2 years) this project defaulted to — requesting more returns a
     401 even with a valid API key (confirmed via CoinGecko's own docs).
     Added `COINGECKO_MAX_DAYS = 365` in `coingecko.ts` and updated every
     call site. `resampleMonthly()` already clamps to the earliest
     available price for out-of-range dates, so a 24-month chart still
     renders fine — the oldest ~12 months just flat-line.
  2. **Stooq (the original ETF/div-stocks/real-estate/precious-metals
     source) now runs a real JS bot-check challenge** on its CSV export —
     a browser-like `User-Agent` header was NOT enough to pass it (tried
     first, still blocked). Replaced Stooq entirely with **Yahoo
     Finance's keyless public chart API**
     (`query1.finance.yahoo.com/v8/finance/chart/{symbol}`) — new
     provider `src/server/lib/providers/yahoo.ts`, `stooq.ts` deleted.
     New symbols in `categoryMap.ts`: `SPY` (etf), `SCHD` (div-stocks),
     `VNQ` (real-estate), `GC=F` (gold futures, standing in for
     precious-metals — Yahoo has no direct spot XAUUSD ticker on this
     endpoint).
  **Verified live** (via `mcp__Vercel__web_fetch_vercel_url` + a manual
  browser check by the repo owner for the one request the tool's SSO
  bypass didn't get through on):
  - `GET /api/market/series?category=crypto` → `200`,
    `{"source":"live","symbol":"bitcoin",...}` with real BTC price points
    (needs `COINGECKO_API_KEY` set — see "Manual steps" below).
  - `GET /api/market/series?category=etf` → `200`,
    `{"source":"live","symbol":"SPY",...}` with real S&P 500 price points.
  - `GET /api/fx/uzs` → `200`, real CBU USD/UZS rate (confirmed by repo
    owner in their own browser: `{"date":"2026-07-03","rate":11909.66,...}`).
  - `GET /api/admin/migrate` → all 6 tables created successfully against
    the real Neon DB (confirmed earlier in this same log).
  **Not individually re-verified after the Yahoo swap** (same code path
  as the confirmed-working `etf`/`SPY` request, low risk, but flag if
  something looks off): `real-estate` (`VNQ`) and `precious-metals`
  (`GC=F`).
  **Tooling note added to**: `mcp__Vercel__web_fetch_vercel_url`
  intermittently gets through this project's "Vercel Authentication"
  Preview protection and intermittently gets redirected to
  `vercel.com/sso-api` — no pattern found for why; just retry once or
  two, and fall back to asking the repo owner to test the URL in their
  own logged-in browser if it keeps failing.
  **Manual steps still needed from the repo owner** (added to the
  existing list further down): sign up for a free CoinGecko Demo API key
  at https://www.coingecko.com/en/api/pricing and set `COINGECKO_API_KEY`
  in Vercel (done once already in this session — keep it working, it's
  what made the crypto category go live).
  **Next**: this branch's core functionality is now confirmed working
  against real infrastructure end-to-end (DB, auth is still worth a
  real register/login smoke test if not already done — check above/ask
  the repo owner — and all 3 live market data providers). Remaining
  open items are the "Known gaps"/"nice-to-haves" listed in each phase
  above (portfolio-series wiring into charts, badges on compare/
  portfolio charts, toast/retry UI for failed background writes) plus
  eventually merging this branch to `main` once the repo owner is happy
  with it.

- **2026-07-04** — **First real deployment verification, on the actual
  Vercel Preview for `feature/fullstack-mvp`.** This is the first time any
  of this code ran with a real DB and real network — every prior phase's
  "verified" claims were in-process/mocked only (see each phase's "Known
  gaps" above). Two real, deployment-only bugs were found and fixed, plus
  one third-party API policy change. **If you're debugging a fresh
  deployment and see 404s or hangs on `/api/*`, check these first before
  re-deriving them from scratch:**
  1. **`/api/*` returned Vercel's own 404 page (not our JSON 404), for
     every path.** Confirmed via `mcp__Vercel__get_runtime_logs`:
     `404 [info/static]` — the request never reached the Lambda at all,
     despite the function building successfully (`lambdaRuntimeStats`
     showed 1 function). Root cause: the catch-all filename
     `api/[[...route]].ts` (optional catch-all, double brackets) is a
     **Next.js-only** routing convention — Vercel's zero-config routing
     for non-framework ("Other") projects doesn't recognize it, so no
     route ever got registered for the function. **Fix**: renamed to
     `api/index.ts` and added an explicit rewrite in `vercel.json`:
     `{ "source": "/api/:path*", "destination": "/api" }` — the same
     mechanism already used for the `/pitch` rewrite, just pointed at a
     function. This is Hono's own documented pattern for standalone
     (non-Next) Vercel deployments; don't reintroduce bracket-catch-all
     filenames for `/api`.
  2. **After fixing #1, `/api/health` hung until Vercel's 300-second
     function timeout killed it** (confirmed via `get_runtime_logs`:
     `Vercel Runtime Timeout Error: Task timed out after 300 seconds`,
     preceded by `WARN: default export returned a Response... returns
     are ignored`). Root cause: `hono/vercel`'s `handle()` returns a
     Web-standard `Response` object; Vercel's **Node.js** function
     signature is the classic `(req, res) => void` and silently ignores
     a returned `Response` instead of writing it through `res` — so the
     function completes but nothing is ever sent back, and the request
     hangs. **Fix**: changed `api/index.ts`'s `export const config` to
     `runtime: "edge"` — Edge Runtime expects exactly a returned
     `Response`, matching Hono's output. Confirmed no code anywhere in
     `src/server/`, `src/db/`, or `api/` touches Node-core APIs (`fs`,
     `Buffer`, `node:crypto`, etc.) that would be Edge-incompatible;
     bcryptjs, jose, and `@neondatabase/serverless` are all explicitly
     designed to be Edge-compatible. **After both fixes, `GET
     /api/health` returned a real `200 {"ok":true,...}` for the first
     time.**
  3. **`GET /api/admin/migrate` (bootstrap endpoint, run once by the repo
     owner via a browser click, since this sandbox still can't reach
     Neon or any deployment behind Vercel Authentication) succeeded** —
     all 6 tables created (`{"steps":[{"name":"users","status":"ok"},
     ...]}` for users/positions/price_history/price_cache/fx_rates/
     rate_limits). **The DB schema is now live for the first time** —
     Phase 1-4's "never verified against a real DB" gap is closed for
     the schema itself (register/login/portfolio round-trips through
     the live DB are still not yet confirmed end-to-end — ask the repo
     owner for that result if it's not in a later log entry above this
     one).
  4. **CoinGecko now 401s anonymous requests** to
     `/coins/{id}/market_chart` on `api.coingecko.com` — confirmed via
     `get_runtime_logs`: `Error: CoinGecko series error 401 for
     bitcoin`. CoinGecko's free tier changed to require a (still free,
     no-card) "Demo" API key even for basic endpoints; this wasn't
     knowable when Phase 1 was written blind in a network-isolated
     sandbox. **Fix**: `src/server/lib/providers/coingecko.ts` now sends
     `x-cg-demo-api-key: $COINGECKO_API_KEY` when that env var is set
     (added to `.env.example`); without it, the crypto category simply
     falls back to the modeled curve (graceful, not a crash — this is
     exactly the fallback behavior Phase 2 was designed for). **Action
     needed**: repo owner signs up for a free key at
     https://www.coingecko.com/en/api/pricing and sets
     `COINGECKO_API_KEY` in Vercel. Stooq (etf/div-stocks/real-estate/
     precious-metals) and CBU (fx) have not yet been confirmed working
     on this deployment — check those next; they're different providers
     and may or may not have similar auth requirements (unknown as of
     this entry).
  **Tooling note for whoever debugs the next deployment**: this sandbox
  cannot directly curl/fetch the deployment or Neon (network policy
  blocks `*.vercel.app` and `*.neon.tech`) — use
  `mcp__Vercel__get_runtime_logs`/`get_runtime_errors` (by
  `projectId`/`deploymentId`, get these via `list_projects`/
  `list_deployments`) to see what actually happened server-side, and
  `mcp__Vercel__web_fetch_vercel_url` to attempt direct fetches (works
  sometimes, but this project's Preview deployments have "Vercel
  Authentication" protection enabled, which intermittently blocks even
  this tool with a redirect to `vercel.com/sso-api` — when that happens,
  ask the repo owner to test the URL in their own logged-in browser
  instead of retrying the tool indefinitely). **Do not** pass secrets
  (DB connection strings, API keys) as tool arguments that end up in a
  logged URL — the auto-mode permission classifier will (correctly)
  block it; ask the human to click the link themselves instead, which is
  exactly why `/api/admin/migrate` accepts the secret via `?secret=` in
  addition to a Bearer header.

- **2026-07-03** — Phase 5 done and committed on `feature/fullstack-mvp`.
  **This closes out the full 6-phase roadmap** (Phases 0-5 all done). What
  shipped in this pass:
  1. **i18n audit**: cross-checked every `t("...")` call site in `app.js`
     against both `I18N` (app.js) and `OFFERS_I18N` (offers.js, merged
     into `I18N` at script load) across all 3 languages. Zero real gaps —
     the large initial "missing" list from a naive grep was a false
     positive (most catalog-detail keys live in `offers.js`'s
     `OFFERS_I18N`, not `app.js`'s `I18N`, and one grep false-positive
     came from `e.target.closest("a")` matching the `t\("...")` pattern).
     No code changes needed here, just verification — logged so a future
     session doesn't redo this from scratch.
  2. **Rate limiting**: `src/server/lib/rateLimit.ts` — a fixed-window
     (60s) per-IP counter backed by the `rate_limits` table (added but
     unused since Phase 0). Applied to `POST /api/auth/register` (5/min),
     `POST /api/auth/login` (15/min), and all of
     `/api/portfolio/positions*` (60/min, covers GET/POST/PATCH/DELETE
     together). Explicitly documented as a *soft* limit — there's a small
     TOCTOU race between the read and the write under concurrent requests
     from the same IP, which is an acceptable tradeoff for MVP abuse
     protection, not a strict security guarantee. One side effect worth
     remembering: since the limiter is DB-backed and runs *before* the
     route handler (including zod validation), a request with a
     malformed body now fails with a `500` instead of a `400` when there's
     no `DATABASE_URL` — confirmed via smoke test, and it's correct
     behavior (the rate limiter itself requires the DB, so if the DB is
     down every DB-dependent route should fail, not silently skip its
     protection).
  3. **Disclaimers**: already fully covered — the `disclaimer.title`/
     `disclaimer.body` card in the page footer (`index.html`) is static
     markup outside the JS-swapped route content, so it's visible on
     every route (catalog, detail, portfolio) with no changes needed.
     Chart-level forecast disclaimers (`expand.disclaimer`) were already
     in place from before this project started. No new disclaimer needed
     for the auth modal (it doesn't make any financial claims).
  4. **README**: added a "Status" section summarizing what's implemented
     and explicitly flagging that none of it has been verified against a
     real deployment (real DB, real outbound network) — this sandbox
     blocks both, see every phase's "Known gaps" above for specifics.
     Updated the project layout listing to include the files added since
     Phase 0 (`api.js`, `src/server/lib/providers/`, `src/server/lib/
     schemas/`).
  **Verified**: `npm run typecheck` passes clean; `node --check app.js`/
  `api.js` pass; rate-limited routes still compose correctly with
  `requireAuth` and the existing DB-unavailable-graceful-500 behavior
  (smoke-tested).
  **What's deliberately NOT done** (out of scope for this pass, not
  forgotten — see each phase's own "Known gaps" for the authoritative
  list): real DB verification, real provider network verification, Phase
  4's known gap #3 (wiring `/api/portfolio/series` into the actual
  portfolio charts instead of the client-side-computed trajectory),
  toast/retry UI for failed optimistic portfolio writes.

- **2026-07-04** — Added `GET /api/admin/migrate` (`src/server/routes/admin.ts`)
  as a terminal-less fallback for creating the DB schema: idempotent
  `CREATE TABLE IF NOT EXISTS` statements mirroring `src/db/schema.ts`,
  gated by `CRON_SECRET` (Bearer header or `?secret=` query param — the
  query param exists specifically so it can be triggered by clicking a
  link in a browser that's already past Vercel's Preview deployment
  protection, no curl/terminal needed). Use `npm run db:push` instead
  whenever a real terminal + `DATABASE_URL` is available; this route is
  a fallback, not a replacement. Smoke-tested the auth gating (both
  secret forms correctly 401 without it); actual table creation is
  unverified in this sandbox (no DB access, same as every other DB-
  touching route).

## What a fresh session should do next

The roadmap is code-complete. The highest-value next steps, roughly in
order:

1. **Provision a real Neon DB** (see README's "One-time cloud setup") and
   run `npm run db:push`, then re-run every phase's smoke tests for real
   — register→login→me, add/remove/edit a portfolio position, and check
   `/api/market/series` for a `crypto`/`etf` category actually returns
   live data (needs real network to coingecko.com/stooq.com, also
   unavailable in the sandbox this was built in).
2. **Deploy to Vercel** and confirm the daily cron fires
   (`/api/cron/snapshot`) and the cookie-based auth survives a real HTTPS
   round trip (the `secure` cookie flag is conditional on
   `process.env.VERCEL === "1"`, untested against a real Vercel request).
3. Wire `GET /api/portfolio/series` into `buildPortfolioStackedChart` /
   the position cards (Phase 4's known gap #3) so logged-in users' charts
   use the server's authoritative trajectory instead of the client-side
   recomputation — most valuable for price-based positions (crypto/etf/
   div-stocks/real-estate/precious-metals), where the server has the real
   historical price and the client currently doesn't.
4. Nice-to-haves noted along the way but not done: LIVE/ACCRUAL/MODEL
   badges on the compare-chart legend and portfolio charts (currently
   only the single-category detail chart shows one — Phase 2's known gap
   #1), a toast/retry affordance for failed background portfolio writes
   (Phase 4's known gap #2).

- **2026-07-03** — Phase 4 **frontend half** done and committed on
  `feature/fullstack-mvp` — Phase 4 is now fully complete (backend +
  frontend). This closes out the original 6-phase roadmap; only Phase 5
  (polish) is left.
  **Backend additions in this pass**: added `positions.customRatePct`
  (nullable numeric) to the schema — when a portfolio item comes from a
  *specific* offer (e.g. one particular bank's 21% deposit, not the
  category's blended `retMid`), the frontend now sends that offer's exact
  rate and `accrualMultiplier()` prefers it over the category default.
  This preserves the precision the existing localStorage-based portfolio
  UI already had (each item stored its own `retMid`) instead of silently
  collapsing every position in a category to one shared rate. Also added
  `PATCH /api/portfolio/positions/:id` (amount-only update) since the
  existing portfolio UI lets you edit a position's invested amount
  in-place and the DB needed a way to persist that without a full
  remove+re-add.
  **Frontend integration strategy** (surgical, not a rewrite): kept
  `state.portfolio` as the *single* in-memory shape every existing render
  function already works with (`renderPortfolio`, `buildPortfolioPositionCard`,
  `buildPortfolioStackedChart`, etc. — untouched). Only the persistence
  layer changed:
  - `savePortfolio()` now no-ops when logged in (server is authoritative)
    and writes to `localStorage` exactly as before when logged out.
  - `loadPortfolio()` is now `async`: logged in → `GET /positions` +
    `hydratePositionFromApi()` reconstructs the full local item shape
    (name/avatar/color aren't stored server-side, they're re-derived from
    `OFFERS[categoryId].items` by `offerId`, falling back to the bare
    category via `INSTRUMENTS` if there's no matching offer, e.g. a
    symbol-only crypto position). Logged out → localStorage, unchanged.
  - `addToPortfolio`/`removeFromPortfolio`/the per-position amount input
    are optimistic: they mutate `state.portfolio` and `render()`
    immediately (snappy UI, unchanged feel), then — only when logged in —
    fire the matching `POST`/`DELETE`/`PATCH` in the background and patch
    in the real DB id on success. A failed background call just logs a
    warning; the item stays local-only for the rest of that session
    (documented gap below, not silently wrong — logs are visible in devtools).
  - `buildPortfolioItemFromOffer()` extracted from the old inline body of
    `addToPortfolio` so both "adding a new item" and "hydrating one from
    the API" build the exact same shape from one place.
  - `maybeMigrateLocalPortfolio()`: on first successful login, if the DB
    has zero positions and localStorage has items, POSTs each one
    (mapping `retMid` → `customRatePct` for fidelity) then clears the
    `inv_nav_portfolio` key. If the DB already has positions (e.g.
    logged in on another device before), it just clears the stale local
    copy without double-adding.
  **New UI**: `#account-area` placeholder in the topbar (index.html,
  next to the basket button) — `renderAccountArea()` renders either a
  "Kirish"/Login pill button (logged out) or an avatar+name chip with a
  dropdown menu (email + Logout) when logged in, called from the main
  `render()` dispatcher so it stays in sync across every navigation.
  `openAuthModal()` builds a single login/register modal from scratch
  (no prior modal component existed in this codebase) with a mode
  switch, styled with the existing design tokens (`--bg-1`, `--accent`,
  `--radius-lg`, etc.) — CSS added to `index.html` (`.account-*`,
  `.auth-modal-*`, `.auth-field`, `.auth-error`, `.auth-submit`,
  `.auth-switch`). 17 new `auth.*` I18N keys × 3 languages.
  **Bug found and fixed during browser testing**: the register-mode
  "Name" field was marked `required` unconditionally at creation, but
  gets `hidden` in login mode — a `hidden`-but-`required` form field
  makes the browser refuse to fire the `submit` event at all (console:
  "An invalid form control with name='' is not focusable"), silently
  breaking login. Fixed by toggling `nameInput.required` in `applyMode()`
  instead of setting it once at creation. Worth remembering for any
  future conditionally-hidden required field in this codebase.
  **Cosmetic bug found and fixed**: the no-matching-offer hydration
  fallback used a synthetic `kind: "category"` with no corresponding
  `pf.kind.category` I18N key, so the UI literally showed the string
  `"pf.kind.category"` instead of a translated label (this codebase's
  `t()` returns the key itself when missing, so `t(key) || fallback`
  never falls through) — added the key in all 3 languages.
  **Verified in a real Chromium browser** (Playwright + mocked
  `/api/auth/*` and `/api/portfolio/*` routes, since this sandbox still
  has no real DB or network to test against for real):
  1. Full login flow: seeded `localStorage` with one anonymous position →
     reloaded → logged-out topbar shows "Kirish" → opened modal → toggled
     to register mode (name field appears) and back to login → submitted
     login → mock server received `POST /auth/login` → `GET
     /portfolio/positions` (empty) → `POST /portfolio/positions` (the
     migrated local item, with `customRatePct: "18"` matching its
     original `retMid`) → modal closed → topbar chip shows "Test User" →
     `localStorage` key cleared (`null`) → confirmed the exact migration
     contract end-to-end.
  2. Account menu: click chip → dropdown opens (email + Logout) → click
     Logout → `POST /auth/logout` fires → topbar reverts to the "Kirish"
     button.
  3. Logged-in portfolio page with 2 mocked DB positions (one with a
     matching `offerId` → resolved to "Hayot depoziti" via `OFFERS`
     lookup; one symbol-only crypto position with no `offerId` → correctly
     fell back to the category-based hydration path) — both position
     cards rendered, the allocation donut and growth chart both rendered
     without errors, numbers looked sane ($800 total, both positions'
     annualized/12-month figures present). Screenshots confirm the
     layout matches the existing design system.
  `node --check app.js` / `node --check api.js` pass; `npm run typecheck`
  passes clean (backend).
  **Known gaps for a future session**:
  1. Never tested against a real DB (only mocked responses) — the exact
     wire format Drizzle returns for `numeric`/`date` columns (all
     strings) should be spot-checked against a live Neon DB once
     provisioned, in case any parsing assumption in `hydratePositionFromApi`
     or `accrualMultiplier` is off.
  2. Optimistic-UI failure handling is minimal: if a background
     `POST`/`PATCH`/`DELETE` fails after the UI already updated, the user
     gets no visible error — just a console warning — and the change can
     silently not persist past a reload. A toast/retry affordance would
     be a good Phase 5+ addition.
  3. `GET /api/portfolio/series` (the real per-position/total trajectory
     endpoint from the backend half of this phase) is still **not wired
     into the portfolio charts** — `buildPortfolioStackedChart` and the
     position cards still compute their own client-side trajectory via
     `generateSeries(pseudo)`/`accrualMultiplier`-equivalent logic
     duplicated in app.js, not by fetching the server's authoritative
     series. This means logged-in portfolio charts today are consistent
     with the localStorage-era behavior (good for continuity) but don't
     yet benefit from the server's real price-based trajectories for
     crypto/etf/etc. positions. Wiring `buildPortfolioStackedChart` to
     `window.API.portfolioSeries()` (already stubbed in `api.js`) is the
     natural next increment — flagged here rather than done now to keep
     this phase's diff reviewable.
  **Next**: Phase 5 — i18n completeness pass, a simple per-IP rate-limit
  guard (the `rate_limits` table from Phase 0 is still unused), the
  "not investment advice" disclaimer (the pitch/catalog pages already
  have one — check portfolio/auth surfaces too), empty/error states
  polish, and finalize the README. Optionally also close known gap #3
  above (wire `/api/portfolio/series` into the actual charts) if there's
  room in the phase.

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
