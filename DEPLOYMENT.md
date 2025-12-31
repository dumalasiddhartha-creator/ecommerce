# 🚀 Deployment Guide - Get Your Live URL

## Option 1: Deploy to Vercel (Recommended - FREE & Easiest)

Vercel is the best platform for Next.js projects. It's free and gives you a live URL instantly!

### Steps:

1. **Install Node.js** (if not installed)
   - Download from: https://nodejs.org/ (LTS version)
   - Install it

2. **Install Dependencies Locally** (optional, for testing)
   ```bash
   npm install
   ```

3. **Deploy to Vercel:**

   **Method A: Using Vercel CLI (Fastest)**
   ```bash
   # Install Vercel CLI globally
   npm install -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy (from project directory)
   vercel
   
   # For production deployment
   vercel --prod
   ```

   **Method B: Using GitHub + Vercel (Recommended)**
   
   a. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Siddhartha Store"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
   
   b. Go to [vercel.com](https://vercel.com)
   
   c. Sign up/Login with GitHub
   
   d. Click "Add New Project"
   
   e. Import your GitHub repository
   
   f. Vercel will auto-detect Next.js settings
   
   g. Click "Deploy"
   
   h. Wait 2-3 minutes
   
   i. **Get your live URL!** 🎉
      - Example: `https://siddhartha-store.vercel.app`
      - Or custom domain: `https://siddhartha-store.com`

### Your Live URL Format:
- **Default**: `https://your-project-name.vercel.app`
- **Custom Domain**: You can add your own domain later

---

## Option 2: Deploy to Netlify (Alternative - FREE)

1. **Push to GitHub** (same as above)

2. **Go to [netlify.com](https://netlify.com)**

3. **Sign up/Login with GitHub**

4. **Click "Add new site" → "Import an existing project"**

5. **Select your repository**

6. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

7. **Click "Deploy"**

8. **Get your URL**: `https://your-project-name.netlify.app`

---

## Option 3: Deploy to Railway (Alternative - FREE tier available)

1. **Go to [railway.app](https://railway.app)**

2. **Sign up with GitHub**

3. **Click "New Project" → "Deploy from GitHub repo"**

4. **Select your repository**

5. **Railway auto-detects Next.js**

6. **Get your URL**: `https://your-project-name.up.railway.app`

---

## Option 4: Deploy to Render (Alternative - FREE)

1. **Go to [render.com](https://render.com)**

2. **Sign up with GitHub**

3. **Click "New" → "Web Service"**

4. **Connect your GitHub repository**

5. **Settings:**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

6. **Click "Create Web Service"**

7. **Get your URL**: `https://your-project-name.onrender.com`

---

## Quick Deploy Commands (After Node.js Installation)

Once Node.js is installed, you can test locally first:

```bash
# Install dependencies
npm install

# Test locally
npm run dev
# Visit: http://localhost:3000

# Build for production
npm run build

# Test production build
npm start
```

---

## Recommended: Vercel Deployment

**Why Vercel?**
- ✅ Made by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free tier is generous
- ✅ Instant deployments
- ✅ Custom domains support

**Your final URL will be:**
```
https://siddhartha-store.vercel.app
```
(or your custom domain)

---

## After Deployment

1. **Share your URL** with others
2. **Add custom domain** (optional)
3. **Set up environment variables** (if needed for AI APIs)
4. **Enable analytics** (optional)

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

**Your site will be live in minutes!** 🚀

