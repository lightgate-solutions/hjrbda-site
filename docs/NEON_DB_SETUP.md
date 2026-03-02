# Setting up Neon (Postgres) for HJRBDA Site

Use this process when you're ready to connect the app to a real database. The app already uses **Drizzle ORM** and **Better Auth** with an optional `DATABASE_URL`; adding Neon is mainly configuration and schema push.

---

## 1. Create a Neon project and get the connection string

1. Go to [neon.tech](https://neon.tech) and sign in (or create an account).
2. Create a new project (e.g. `hjrbda-site`), choose a region close to your users.
3. In the Neon dashboard, open **Connection details** (or **Dashboard** → your project).
4. Copy the **connection string**:
   - Prefer the **pooled** connection string (often labeled "Pooled connection" or "Connection string" with `-pooler` in the host). Use this for both local dev and Vercel.
   - It looks like:  
     `postgresql://USER:PASSWORD@HOST/database?sslmode=require`  
     or  
     `postgresql://USER:PASSWORD@ep-xxx-pooler.region.aws.neon.tech/neondb?sslmode=require`

---

## 2. Configure environment variables locally

1. In the project root, create or edit `.env` (and optionally `.env.local`; Next.js loads both).
2. Set:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
```

Use the **pooled** URL from Neon for serverless (e.g. Vercel) and local dev.

3. If you use auth (Better Auth), also set:

```env
BETTER_AUTH_SECRET="your-long-random-secret-at-least-32-chars"
BETTER_AUTH_URL="http://localhost:3000"
```

(For production, set `BETTER_AUTH_URL` to your production URL and add `BETTER_AUTH_SECRET` in Vercel.)

---

## 3. Apply the schema to Neon (create tables)

The app uses Drizzle with schema in `src/lib/db/schema`. Push that schema to Neon:

```bash
npm run db:push
```

Or, if you prefer migrations:

```bash
npm run db:generate
npm run db:migrate
```

- **db:push** – Pushes current schema to the DB (good for getting started; no migration history).
- **db:generate** – Generates migration files from schema.
- **db:migrate** – Runs pending migrations.

After this, Neon will have the tables used by the app (e.g. `user`, `session`, `article`).

---

## 4. Verify locally

1. Start the app:

```bash
npm run dev
```

2. Optional: open Drizzle Studio to inspect data:

```bash
npm run db:studio
```

3. Test:
   - Sign up / sign in (Better Auth uses the DB).
   - Create or view a news article (articles are stored in the DB).

If anything fails, check the terminal and browser console; ensure `DATABASE_URL` is loaded (no typos, no extra spaces).

---

## 5. Configure Vercel (production)

1. In Vercel: Project → **Settings** → **Environment Variables**.
2. Add:
   - **DATABASE_URL** – The same Neon **pooled** connection string.  
     (Enable for Production, and optionally Preview if you want DB in preview deploys.)
   - **BETTER_AUTH_SECRET** – Same as local, or a new long random string (min 32 chars).  
   - **BETTER_AUTH_URL** – Your production URL, e.g. `https://your-domain.vercel.app`.

3. Redeploy the project so the new env vars are used.

---

## 6. Optional: Neon serverless driver (for Vercel)

The project currently uses **node-postgres** (`pg`) with Drizzle. In serverless (Vercel), that can open many connections. To reduce connection usage you can switch to Neon’s serverless driver:

1. Install:

```bash
npm install @neondatabase/serverless
```

2. Change `src/lib/db/index.ts` to use the Neon serverless driver instead of `drizzle-orm/node-postgres` (see [Drizzle Neon serverless docs](https://orm.drizzle.team/docs/get-started-neon#neon-serverless)).  
3. Keep using the same **pooled** `DATABASE_URL` from Neon.

You can do this in a follow-up step; the app will work with the current `pg` setup and Neon’s pooled URL.

---

## Summary checklist

- [ ] Create Neon project and copy **pooled** connection string.
- [ ] Set `DATABASE_URL` (and auth vars) in `.env` / `.env.local`.
- [ ] Run `npm run db:push` (or generate + migrate).
- [ ] Run `npm run dev` and test login + articles.
- [ ] Add `DATABASE_URL`, `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL` in Vercel.
- [ ] Redeploy and test production.
- [ ] (Optional) Switch to `@neondatabase/serverless` for Vercel.

---

## Reference: current DB usage in the app

- **Drizzle** – Schema in `src/lib/db/schema` (e.g. `article`, auth tables). Config: `drizzle.config.ts`.
- **Better Auth** – Uses Drizzle adapter when `DATABASE_URL` is set; stores users and sessions in Neon.
- **Env** – `src/lib/env/server.ts` expects optional `DATABASE_URL`; app runs without DB if not set.
