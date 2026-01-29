# 🚀 AvatarFlow Deployment Guide

## Quick Deploy to Vercel (5 Minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a **new repository**:
   - **Name**: `avatarflow`
   - **Description**: `AI-Powered UGC Video Creation Platform`
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have them)

3. Click "Create repository"

### Step 2: Push Code to GitHub

Copy and run these commands in your terminal:

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/avatarflow.git

# Push code
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/narayanvaish/avatarflow.git
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Click **"Add New Project"**
3. **Import** your GitHub repository (`avatarflow`)
4. Vercel will auto-detect Next.js
5. **Configure Environment Variables** (see below)
6. Click **"Deploy"**

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

---

## 🔐 Environment Variables for Vercel

Go to your Vercel project → **Settings** → **Environment Variables**

Add these (you can start with minimal set and add more later):

### Essential (Required for Basic Deployment)

```env
# Database (Use Vercel Postgres or external)
DATABASE_URL=postgresql://user:pass@host:5432/database

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Redis (Use Upstash Redis for Vercel)
REDIS_HOST=your-redis.upstash.io
REDIS_PORT=6379
REDIS_PASSWORD=your-password
```

### AI Models (Optional - Add as needed)

```env
# Google Gemini (Recommended)
GEMINI_API_KEY=AIza...

# OpenAI (Recommended)
OPENAI_API_KEY=sk-...

# Kling AI (Optional)
KLING_API_KEY=...

# ElevenLabs Voice Cloning (Optional)
ELEVENLABS_API_KEY=...
```

### Storage (Optional)

```env
# Cloudflare R2 or AWS S3
R2_ACCOUNT_ID=...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=avatarflow

# Pinecone Vector DB (Optional)
PINECONE_API_KEY=...
PINECONE_ENVIRONMENT=us-east-1
PINECONE_INDEX_NAME=character-dna
```

---

## 🎯 Vercel-Specific Setup

### 1. Use Vercel Postgres (Free Tier)

Instead of self-hosted PostgreSQL, use Vercel's managed database:

1. Go to your Vercel project
2. Click **Storage** tab
3. Create **Postgres** database
4. Vercel will auto-inject `DATABASE_URL`

### 2. Use Upstash Redis (Free Tier)

1. Go to [Upstash](https://upstash.com)
2. Create Redis database
3. Copy connection details
4. Add to Vercel environment variables

### 3. Setup Clerk

1. Go to [Clerk.com](https://clerk.com)
2. Create new application
3. Copy API keys
4. Add to Vercel:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

---

## 📋 Minimal Deployment (Just to See UI)

You can deploy with **ZERO external services** initially:

1. **Skip** all optional environment variables
2. Deploy to Vercel
3. You'll see the landing page ✅
4. API endpoints will return errors (expected without DB)
5. Add services incrementally as needed

### What Works Without Services:

- ✅ Landing page (fully functional)
- ✅ Static content
- ✅ UI components
- ❌ API endpoints (need database)
- ❌ Photo-to-Avatar (needs AI APIs)
- ❌ Video generation (needs AI APIs)

---

## 🔧 Post-Deployment

### 1. Run Database Migrations

After adding `DATABASE_URL`:

```bash
# Install Vercel CLI
npm i -g vercel

# Link to your project
vercel link

# Run migrations
vercel env pull .env.local
npx prisma migrate deploy
```

### 2. Test Health Endpoint

Visit: `https://your-app.vercel.app/api/health`

You should see:
```json
{
  "status": "healthy",
  "services": {
    "database": "healthy",
    "redis": "healthy"
  }
}
```

### 3. Test Photo-to-Avatar

```bash
curl -X POST https://your-app.vercel.app/api/v1/characters/from-image \
  -H "Content-Type: application/json" \
  -d '{
    "image": "data:image/jpeg;base64,..."
  }'
```

---

## 🎨 Customize Domain

1. Go to Vercel project → **Settings** → **Domains**
2. Add custom domain (e.g., `avatarflow.com`)
3. Follow DNS configuration steps
4. Enable HTTPS (automatic)

---

## 📊 Monitoring

### Vercel Dashboard

- **Analytics**: View traffic, performance
- **Logs**: Real-time function logs
- **Deployments**: Rollback if needed

### External Monitoring

Add to environment variables:

```env
# Sentry Error Tracking
SENTRY_DSN=https://...

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

---

## 🚨 Troubleshooting

### "Module not found" error

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
git add -A
git commit -m "fix: rebuild dependencies"
git push
```

### Database connection fails

- Check `DATABASE_URL` format
- Ensure database is accessible from internet
- For Vercel Postgres, it's auto-configured

### Build timeout

- Vercel free tier: 45s build time
- Our app builds in ~30s (safe)
- If timeout occurs, upgrade to Pro plan

---

## ✅ Success Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] Landing page accessible
- [ ] `/api/health` endpoint returns 200
- [ ] Custom domain configured (optional)

---

## 🎯 Next Steps After Deployment

1. **Add Clerk Authentication**
   - Set up sign-in/sign-up pages
   - Test authentication flow

2. **Connect Database**
   - Run Prisma migrations
   - Test character creation

3. **Add AI API Keys**
   - Start with Gemini (free tier available)
   - Test photo-to-avatar endpoint

4. **Invite Beta Users**
   - Share your deployed URL
   - Gather feedback
   - Iterate!

---

**Deployment Time**: ~5 minutes (just landing page)
**Full Setup Time**: ~30 minutes (with all services)

**Questions?** Check [Vercel Docs](https://vercel.com/docs) or open an issue on GitHub.
