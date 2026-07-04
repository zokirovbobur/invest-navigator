/* ============================================================
   FINPORT.UZ — API CLIENT
   Thin fetch wrapper for the /api/* backend. Loaded before app.js;
   exposes window.API. Every call is best-effort from the caller's POV —
   callers must handle rejected promises (the UI falls back to modeled
   data when a request fails, see generateSeries() in app.js).
============================================================ */
(function () {
  const BASE = "/api";

  async function request(path, options) {
    const res = await fetch(BASE + path, {
      credentials: "include",
      headers: { "content-type": "application/json" },
      ...options,
    });
    let body = null;
    try { body = await res.json(); } catch (e) { /* no/invalid JSON body */ }
    if (!res.ok) {
      const message = (body && body.error) || res.statusText || ("HTTP " + res.status);
      throw new Error(message);
    }
    return body;
  }

  window.API = {
    marketSeries(category, months) {
      const q = new URLSearchParams({ category, months: String(months || 24) });
      return request("/market/series?" + q.toString());
    },
    marketLatest(categories) {
      const q = new URLSearchParams({ categories: categories.join(",") });
      return request("/market/latest?" + q.toString());
    },
    marketPrices(ids) {
      const q = new URLSearchParams({ ids: ids.join(",") });
      return request("/market/prices?" + q.toString());
    },
    yahooQuotes(symbols) {
      const q = new URLSearchParams({ symbols: symbols.join(",") });
      return request("/market/yahoo-quotes?" + q.toString());
    },
    fxUzs() {
      return request("/fx/uzs");
    },
    register(email, password, name) {
      return request("/auth/register", { method: "POST", body: JSON.stringify({ email, password, name }) });
    },
    login(email, password) {
      return request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
    },
    logout() {
      return request("/auth/logout", { method: "POST" });
    },
    me() {
      return request("/auth/me");
    },
    listPositions() {
      return request("/portfolio/positions");
    },
    addPosition(position) {
      return request("/portfolio/positions", { method: "POST", body: JSON.stringify(position) });
    },
    updatePosition(id, amountUsd) {
      return request("/portfolio/positions/" + encodeURIComponent(id), {
        method: "PATCH",
        body: JSON.stringify({ amountUsd }),
      });
    },
    removePosition(id) {
      return request("/portfolio/positions/" + encodeURIComponent(id), { method: "DELETE" });
    },
    portfolioSeries() {
      return request("/portfolio/series");
    },
  };
})();
