# Using Claude for Neon + Vercel Integration

This is the process to connect your HJRBDA site to Neon using the **Vercel–Neon integration**, with Claude doing the code and config work.

---

## Part 1: What you do (manual)

### Step 1.1 – Add the Neon integration in Vercel

1. Open [vercel.com](https://vercel.com) and go to your **team** or **personal** account.
2. Open the **hjrbda-site** project (or whatever the project name is).
3. Go to **Settings** → **Integrations** (or **Project** → **Settings** → **Integrations**).
4. Find **Neon** in the integrations list and click **Add** / **Configure**.
5. Follow the prompts to:
   - Connect your Neon account (sign in or sign up at Neon if needed).
   - **Create a new Neon project** (or link an existing one). Prefer creating one for this app.
   - Let Vercel add the environment variable to the project.  
     This will add **DATABASE_URL** (pooled connection string) to your Vercel project for the environments you select (e.g. Production, Preview).

When this is done, **DATABASE_URL** exists in Vercel; you don’t need to copy it into Vercel by hand.

### Step 1.2 – Get DATABASE_URL for local use

You need the same connection string in your **local** `.env` so you can run `npm run dev` and `npm run db:push`.

**Option A – From Neon**

1. Go to [console.neon.tech](https://console.neon.tech).
2. Open the project you created (via Vercel or directly).
3. Go to **Dashboard** or **Connection details**.
4. Copy the **pooled** connection string (often has `-pooler` in the host, e.g. `ep-xxx-pooler.region.aws.neon.tech`).

**Option B – From Vercel**

1. In Vercel: your project → **Settings** → **Environment Variables**.
2. Find **DATABASE_URL** and click to reveal / copy its value (if your plan allows viewing).

Paste that value into your local `.env` (see Step 1.3). Do **not** commit `.env` to git.

### Step 1.3 – Set local .env

In the **project root**, create or edit **`.env`** (or **`.env.local`**). Add:

```env
DATABASE_URL="postgresql://...your-neon-pooled-url..."
```

If you use Better Auth, also set (for local dev):

```env
BETTER_AUTH_SECRET="at-least-32-character-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
```

Save the file. You’re done with the manual part; the rest can be done with Claude.

---

## Part 2: What you ask Claude to do

Use these prompts in order. You can paste this doc into the chat and say: “Follow the Claude steps in docs/CLAUDE_NEON_VERCEL_PROCESS.md.”

---

### Prompt 1 – Confirm env and push schema

Copy and send this to Claude:

```
I've added the Neon integration in Vercel and set DATABASE_URL in my local .env. 
Please:
1. Confirm the project uses Drizzle with DATABASE_URL (see src/lib/db/index.ts and drizzle.config.ts).
2. Run the schema push to Neon so all tables (articles, auth, etc.) exist. Use: npm run db:push
3. If db:push fails, run npm run db:generate and then npm run db:migrate and tell me the result.
```

Claude will run the commands in your repo. If `DATABASE_URL` is set correctly in `.env`, the push should succeed.

---

### Prompt 2 – (Optional) Use Neon serverless driver on Vercel

After the schema is pushed and the app works locally, you can ask Claude to switch to the Neon serverless driver for production so Vercel doesn’t open too many connections:

```
We're deployed on Vercel and use Neon. Please switch the app to use the Neon serverless driver for the database connection so it works well in serverless. Keep using the same DATABASE_URL env var. See docs/NEON_DB_SETUP.md “Optional: Neon serverless driver” and update src/lib/db/index.ts (and install @neondatabase/serverless if needed). Don’t change the schema or env variable names.
```

Claude will add the package, change the Drizzle client to use the Neon serverless driver, and leave `DATABASE_URL` as is.

---

### Prompt 3 – Verify production env

Ask Claude to remind you what Vercel needs:

```
List the environment variables that must be set in Vercel for this app when using Neon and Better Auth. I already have DATABASE_URL from the Neon integration. What else is required (e.g. BETTER_AUTH_SECRET, BETTER_AUTH_URL)?
```

Then in Vercel → **Settings** → **Environment Variables**, add any that are missing (e.g. **BETTER_AUTH_SECRET**, **BETTER_AUTH_URL** = your production URL). Redeploy after adding or changing variables.

---

## Summary

| Step | Who | What |
|------|-----|------|
| Add Neon integration in Vercel | You | Settings → Integrations → Neon → create/link project; DATABASE_URL is added automatically. |
| Get DATABASE_URL for local | You | Copy from Neon dashboard or Vercel env. |
| Set .env locally | You | Put DATABASE_URL (and optional auth vars) in `.env` / `.env.local`. |
| Push schema to Neon | Claude | Run `npm run db:push` (or generate + migrate) when you ask. |
| Optional: Neon serverless driver | Claude | Install and wire `@neondatabase/serverless` in `src/lib/db/index.ts`. |
| Production auth env | You | Add BETTER_AUTH_SECRET and BETTER_AUTH_URL in Vercel; Claude can list what’s needed. |

The “integration” is: you connect Neon to Vercel once (Part 1), then Claude handles the code and schema push (Part 2).
