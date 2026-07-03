import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { setCookie, deleteCookie, getCookie } from "hono/cookie";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { getDb } from "../../db/client.js";
import { users } from "../../db/schema.js";
import { registerSchema, loginSchema } from "../lib/schemas/auth.js";
import { AUTH_COOKIE, authCookieOptions, signAuthToken, verifyAuthToken } from "../lib/auth.js";
import type { AppEnv } from "../lib/authMiddleware.js";

const auth = new Hono<AppEnv>();

auth.post("/register", async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    throw new HTTPException(400, { message: parsed.error.issues[0]?.message ?? "Invalid input" });
  }
  const { email, password, name } = parsed.data;
  const db = getDb();

  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) {
    throw new HTTPException(409, { message: "An account with this email already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  let user;
  try {
    const inserted = await db
      .insert(users)
      .values({ email, passwordHash, name })
      .returning({ id: users.id, email: users.email, name: users.name });
    user = inserted[0];
  } catch (err) {
    console.error("POST /api/auth/register: insert failed", err);
    throw new HTTPException(409, { message: "An account with this email already exists" });
  }
  if (!user) throw new HTTPException(500, { message: "Failed to create account" });

  const token = await signAuthToken({ sub: user.id, email: user.email });
  setCookie(c, AUTH_COOKIE, token, authCookieOptions);
  return c.json({ user }, 201);
});

auth.post("/login", async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    throw new HTTPException(400, { message: "Invalid email or password" });
  }
  const { email, password } = parsed.data;
  const db = getDb();

  const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
  const user = rows[0];
  if (!user) throw new HTTPException(401, { message: "Invalid email or password" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new HTTPException(401, { message: "Invalid email or password" });

  const token = await signAuthToken({ sub: user.id, email: user.email });
  setCookie(c, AUTH_COOKIE, token, authCookieOptions);
  return c.json({ user: { id: user.id, email: user.email, name: user.name } });
});

auth.post("/logout", async (c) => {
  deleteCookie(c, AUTH_COOKIE, { path: "/" });
  return c.json({ ok: true });
});

auth.get("/me", async (c) => {
  const token = getCookie(c, AUTH_COOKIE);
  const payload = token ? await verifyAuthToken(token) : null;
  if (!payload) return c.json({ user: null });

  const db = getDb();
  const rows = await db
    .select({ id: users.id, email: users.email, name: users.name })
    .from(users)
    .where(eq(users.id, payload.sub))
    .limit(1);
  const user = rows[0];
  return c.json({ user: user ?? null });
});

export default auth;
