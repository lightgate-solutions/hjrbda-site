# Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)

## Step-by-Step Deployment Process

### 1. Push Your Code to GitHub
```bash
# Make sure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `hjrbda-site`
4. Vercel will auto-detect it's a monorepo

### 3. Configure Vercel Settings

**Important:** Configure these in the Vercel Dashboard (not in vercel.json):

1. **Root Directory:** Set to `apps/web` in the Vercel Dashboard
   - Go to Settings → General → Root Directory
   - Enter: `apps/web`

2. **Framework Preset:** Next.js (should auto-detect)

3. **Build & Output Settings:** The `vercel.json` file provides defaults, but you can override in dashboard:
   - **Build Command:** `cd ../.. && bun install && bun run build`
   - **Output Directory:** `apps/web/.next`
   - **Install Command:** `cd ../.. && bun install`

**Note:** If Vercel doesn't support bun, you can change the commands to use npm:
- Build Command: `cd ../.. && npm install && npm run build`
- Install Command: `cd ../.. && npm install`

### 4. Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

**Required:**
```env
BETTER_AUTH_URL=https://your-app.vercel.app
CORS_ORIGIN=https://your-app.vercel.app
```

**Optional (for auth features):**
```env
DATABASE_URL=your-postgres-url (if you add database later)
BETTER_AUTH_SECRET=your-32-char-secret (if you add auth later)
```

**Note:** Since you're not using a database, you can skip `DATABASE_URL` and `BETTER_AUTH_SECRET` for now.

### 5. Deploy

1. Click **"Deploy"**
2. Wait for build to complete
3. Your site will be live at `https://your-app.vercel.app`

## Post-Deployment

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Environment Variables for Production
Update `BETTER_AUTH_URL` and `CORS_ORIGIN` to your production URL after first deployment.

## Troubleshooting

### Build Fails
- Check that `bun` is available (Vercel uses Node.js by default)
- You may need to add `packageManager` field or use npm instead

### Monorepo Issues
- Ensure `vercel.json` is in the root
- Check that build command runs from root directory

### Missing Dependencies
- Make sure all workspace packages are properly linked
- Check `package.json` workspace configuration

## Notes

- **No Database Required:** The app is configured to work without a database
- **Auth Routes:** Login/dashboard pages may not work without database, but the main site will function
- **Static Pages:** All public pages (Home, About, Projects, etc.) will work perfectly
