# Vercel Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (https://vercel.com)

## Deploy

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. **Add New...** → **Project**
3. Import the `hjrbda-site` repo

### 3. Configure project

- **Root Directory:** leave empty (project root)
- **Framework Preset:** Next.js (auto-detected)
- **Build Command:** `bun run build` (or leave default)
- **Output Directory:** `.next` (default)

### 4. Environment variables

In Vercel → Settings → Environment Variables add:

**Required (for auth):**
```env
BETTER_AUTH_URL=https://your-app.vercel.app
CORS_ORIGIN=https://your-app.vercel.app
```

**Optional (database):**
```env
DATABASE_URL=your-postgres-url
BETTER_AUTH_SECRET=your-32-char-secret
```

### 5. Deploy

Click **Deploy**. The site will be available at `https://your-app.vercel.app`.

## Troubleshooting

- **Build fails:** Ensure Node/bun is set correctly; try default “Build Command” and “Install Command”.
- **Auth/DB:** Main site works without database; login/dashboard need `DATABASE_URL` and `BETTER_AUTH_SECRET` if you use them.
