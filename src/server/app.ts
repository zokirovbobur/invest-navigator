import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import market from "./routes/market.js";
import fx from "./routes/fx.js";
import cron from "./routes/cron.js";
import auth from "./routes/auth.js";

const app = new Hono().basePath("/api");

app.use("*", cors({ origin: (origin) => origin, credentials: true }));

app.get("/health", (c) => c.json({ ok: true, ts: new Date().toISOString() }));

app.route("/market", market);
app.route("/fx", fx);
app.route("/cron", cron);
app.route("/auth", auth);

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ error: err.message }, err.status);
  }
  console.error(err);
  return c.json({ error: "Internal server error" }, 500);
});

app.notFound((c) => c.json({ error: "Not found" }, 404));

export default app;
