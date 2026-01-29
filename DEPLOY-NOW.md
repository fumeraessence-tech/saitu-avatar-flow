# 🚀 Deploy AvatarFlow to Vercel - Step by Step

## ✅ What's Ready
- Landing page with stunning UI
- Photo-to-Avatar API (works without database)
- Health check endpoint
- No authentication required (development mode)
- All code committed and ready

---

## 📋 Step 1: Create GitHub Repository (2 minutes)

### A. Go to GitHub
1. Open: https://github.com/new
2. Fill in:
   - **Repository name**: `avatarflow`
   - **Description**: `AI-Powered UGC Video Creation Platform`
   - **Visibility**: ✅ **Public** (or Private if you prefer)
   - ⚠️ **DO NOT** check any of these:
     - ❌ Add README
     - ❌ Add .gitignore
     - ❌ Add license
3. Click **"Create repository"**

### B. Copy Your Repository URL
You'll see a page with commands. Copy your repository URL:
```
https://github.com/YOUR_USERNAME/avatarflow.git
```

Example:
```
https://github.com/narayanvaish/avatarflow.git
```

---

## 📤 Step 2: Push Code to GitHub (1 minute)

### Open Terminal and Run:

```bash
# Navigate to project
cd /Users/narayanvaish/synthavatar

# Add GitHub remote (REPLACE with YOUR URL from Step 1B)
git remote add origin https://github.com/YOUR_USERNAME/avatarflow.git

# Push code
git push -u origin main
```

**Example:**
```bash
cd /Users/narayanvaish/synthavatar
git remote add origin https://github.com/narayanvaish/avatarflow.git
git push -u origin main
```

### Expected Output:
```
Enumerating objects: 40, done.
Counting objects: 100% (40/40), done.
...
To https://github.com/narayanvaish/avatarflow.git
 * [new branch]      main -> main
```

✅ **Success!** Your code is now on GitHub.

---

## 🌐 Step 3: Deploy to Vercel (3 minutes)

### A. Sign Up / Log In to Vercel

1. Go to: https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Sign in with **GitHub** (recommended)
4. Authorize Vercel to access your GitHub account

### B. Import Your Project

1. After login, you'll see your dashboard
2. Click **"Add New..."** → **"Project"**
3. You'll see a list of your GitHub repositories
4. Find **"avatarflow"** in the list
5. Click **"Import"** next to it

### C. Configure Project

Vercel will auto-detect Next.js. You'll see:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**✅ Leave everything as default!**

### D. Environment Variables (Skip for Now)

You'll see "Environment Variables" section.

**For now: SKIP IT** ⏭️
- We'll add API keys later
- The landing page works without any env vars
- Click **"Deploy"** at the bottom

### E. Wait for Deployment (2-3 minutes)

You'll see:
```
Building...
██████████ 100%
Deploying...
✓ Deployment successful!
```

### F. Your Live URL!

You'll get a URL like:
```
https://avatarflow-xyz123.vercel.app
```

🎉 **CLICK IT!** Your site is live!

---

## ✅ What You Should See

### Landing Page
- Beautiful gradient background (black/gray)
- "AvatarFlow" logo
- "Turn Photos into Ultra-Realistic AI Avatars" headline
- Feature cards (Photo-to-Avatar, Voice Cloning, etc.)
- Tech stack badges
- API status section

### Test the API
Visit:
```
https://your-app.vercel.app/api/health
```

You should see:
```json
{
  "status": "degraded",
  "timestamp": "2026-01-29T...",
  "services": {
    "database": "unhealthy",
    "redis": "unhealthy",
    "storage": "not-configured"
  }
}
```

**This is NORMAL!** ✅ We haven't connected database yet.

---

## 🎯 Next Steps (Optional - Add Later)

### 1. Add Environment Variables

Go to your Vercel project → **Settings** → **Environment Variables**

#### For Photo-to-Avatar to work:
```env
GEMINI_API_KEY=your-key-here
```

Get free key: https://ai.google.dev/

#### For Database (Optional):
```env
DATABASE_URL=postgresql://...
```

Use Vercel Postgres (free): Storage tab → Create Database

### 2. Redeploy After Adding Env Vars

After adding environment variables:
- Go to **Deployments** tab
- Click **"Redeploy"** on latest deployment
- Or just push new code to GitHub (auto-deploys)

---

## 🧪 Test Photo-to-Avatar API

Once you add `GEMINI_API_KEY`:

```bash
# Test endpoint
curl -X POST https://your-app.vercel.app/api/v1/characters/from-image \
  -H "Content-Type: application/json" \
  -d '{
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
    "name": "Test Avatar",
    "enhanceDetails": true,
    "saveCharacter": false
  }'
```

Response:
```json
{
  "success": true,
  "dna": { /* Full Character DNA */ },
  "analysis": {
    "confidence": 92,
    "qualityScore": 88
  }
}
```

---

## 🔧 Troubleshooting

### "Module not found" error
```bash
# Delete node_modules and reinstall
cd /Users/narayanvaish/synthavatar
rm -rf node_modules .next
npm install
git add -A
git commit -m "fix: rebuild dependencies"
git push
```

### Build fails on Vercel
- Check **Build Logs** in Vercel dashboard
- Usually a missing dependency
- Try local build first: `npm run build`

### Can't push to GitHub
```bash
# Check if remote is set
git remote -v

# If not set, add it
git remote add origin https://github.com/YOUR_USERNAME/avatarflow.git

# If already exists, update it
git remote set-url origin https://github.com/YOUR_USERNAME/avatarflow.git
```

---

## 📱 Share Your Deployment

Once deployed, you can share:
```
Landing Page: https://your-app.vercel.app
API Health: https://your-app.vercel.app/api/health
Photo-to-Avatar: https://your-app.vercel.app/api/v1/characters/from-image
```

---

## ⏱️ Timeline

- **GitHub Setup**: 2 minutes
- **Push Code**: 1 minute
- **Vercel Deploy**: 3 minutes
- **Total**: ~6 minutes

---

## 🎉 Success Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Deployment successful
- [ ] Landing page loads
- [ ] `/api/health` endpoint returns JSON
- [ ] Shared live URL

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com

**Ready?** Start with Step 1! 🚀
