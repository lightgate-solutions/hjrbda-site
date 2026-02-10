# Production Deployment Guide

## Quick Start - Deploy to Vercel Production

### Option 1: Deploy from Main Branch (Recommended)

1. **Ensure your code is on `main` branch:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Vercel will automatically deploy:**
   - If you have Vercel connected to your GitHub repo
   - It will automatically deploy when you push to `main`
   - Check your Vercel dashboard for deployment status

### Option 2: Manual Deploy via Vercel Dashboard

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Select your project: `hjrbda-site`

2. **Deploy:**
   - Click **"Deployments"** tab
   - Click **"Redeploy"** on the latest deployment
   - Or click **"Deploy"** button

3. **Select Branch:**
   - Choose `main` branch for production
   - Click **"Deploy"**

## Production Environment Variables

### Required Variables

Set these in **Vercel Dashboard → Settings → Environment Variables**:

```env
# Application URLs (Update with your actual domain)
BETTER_AUTH_URL=https://your-domain.vercel.app
CORS_ORIGIN=https://your-domain.vercel.app

# Optional: If you add database later
DATABASE_URL=your-production-database-url
BETTER_AUTH_SECRET=your-32-character-secret-key
```

### Setting Environment Variables

1. Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**
2. Add each variable:
   - **Key:** `BETTER_AUTH_URL`
   - **Value:** `https://your-domain.vercel.app`
   - **Environment:** Production (and Preview if needed)
3. Click **"Save"**
4. **Redeploy** for changes to take effect

## Production Checklist

### Before Deploying

- [ ] All code is committed and pushed to `main` branch
- [ ] Build passes locally: `bun run build`
- [ ] No TypeScript errors: `bun run check-types`
- [ ] Environment variables are set in Vercel
- [ ] `BETTER_AUTH_URL` matches your production domain
- [ ] `CORS_ORIGIN` matches your production domain

### After Deploying

- [ ] Verify site loads at your Vercel URL
- [ ] Test all public pages (Home, About, Projects, etc.)
- [ ] Check that static pages render correctly
- [ ] Verify no console errors in browser
- [ ] Test on mobile devices

## Custom Domain Setup

### Add Custom Domain

1. **In Vercel Dashboard:**
   - Go to **Settings → Domains**
   - Click **"Add Domain"**
   - Enter your domain (e.g., `hjrbda.gov.ng`)

2. **Configure DNS:**
   - Vercel will provide DNS records to add
   - Add the records to your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)

3. **Update Environment Variables:**
   - Update `BETTER_AUTH_URL` to your custom domain
   - Update `CORS_ORIGIN` to your custom domain
   - Redeploy after updating

## Deployment Workflow

### Standard Workflow

```bash
# 1. Make changes on dev branch
git checkout dev
# ... make changes ...
git add .
git commit -m "your changes"
git push origin dev

# 2. Test on dev
# (Vercel preview deployment will be created)

# 3. Merge to main for production
git checkout main
git merge dev
git push origin main

# 4. Vercel automatically deploys to production
```

### Quick Production Deploy

```bash
# If you're already on main and ready to deploy
git add .
git commit -m "Production deployment"
git push origin main
# Vercel will automatically deploy
```

## Monitoring Production

### Vercel Dashboard

- **Deployments:** View all deployments and their status
- **Analytics:** Monitor traffic and performance
- **Logs:** Check server logs for errors
- **Functions:** Monitor API route performance

### Health Checks

- Visit your production URL regularly
- Monitor Vercel dashboard for failed deployments
- Check error logs if issues arise

## Troubleshooting Production Issues

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Ensure `bun` is available (or switch to npm)
4. Check that all dependencies are installed

### Site Not Loading

1. Verify deployment succeeded
2. Check domain DNS configuration
3. Verify environment variables are correct
4. Check browser console for errors

### Environment Variables Not Working

1. Ensure variables are set for "Production" environment
2. Redeploy after adding/changing variables
3. Check variable names match exactly (case-sensitive)

## Production Best Practices

1. **Always test on preview first** before merging to main
2. **Use environment variables** for all sensitive data
3. **Monitor deployments** regularly
4. **Keep main branch stable** - only merge tested code
5. **Use Vercel's preview deployments** for testing
6. **Set up custom domain** for professional appearance
7. **Enable Vercel Analytics** for monitoring

## Rollback Production

If something goes wrong:

1. Go to **Vercel Dashboard → Deployments**
2. Find the last working deployment
3. Click **"..."** menu → **"Promote to Production"**
4. This will rollback to that deployment

## Next Steps After Deployment

1. ✅ Share your production URL
2. ✅ Set up custom domain (if needed)
3. ✅ Configure analytics (optional)
4. ✅ Set up monitoring alerts (optional)
5. ✅ Document your deployment process

---

**Your production URL will be:** `https://hjrbda-site.vercel.app` (or your custom domain)
