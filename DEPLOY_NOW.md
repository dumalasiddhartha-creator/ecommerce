# ⚡ Deploy in 5 Minutes - Get Your Live URL

## 🎯 Fastest Way to Get Your URL

### Step 1: Install Node.js (2 minutes)
1. Go to: https://nodejs.org/
2. Download the **LTS version** (recommended)
3. Install it (just click Next, Next, Install)
4. Restart your terminal/command prompt

### Step 2: Install Vercel CLI (30 seconds)
Open terminal in your project folder and run:
```bash
npm install -g vercel
```

### Step 3: Deploy (2 minutes)
```bash
# Login to Vercel
vercel login

# Deploy your project
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (choose your account)
# - Link to existing project? No
# - Project name? siddhartha-store (or any name)
# - Directory? ./
# - Override settings? No
```

### Step 4: Get Your URL! 🎉
After deployment, you'll see:
```
✅ Production: https://siddhartha-store-xxxxx.vercel.app
```

**That's your live URL!** Share it with anyone.

---

## 🔄 Update Your Site

Whenever you make changes:
```bash
vercel --prod
```

---

## 🌐 Add Custom Domain (Optional)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Domains
4. Add your domain (e.g., `siddhartha-store.com`)
5. Follow DNS setup instructions

---

## 📱 Alternative: Deploy via GitHub

1. **Create GitHub repo:**
   ```bash
   git init
   git add .
   git commit -m "Siddhartha Store"
   ```
   Then create repo on GitHub and push

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your repo
   - Click "Deploy"
   - **Done!** Get your URL

---

## ✅ Your URL Format

**Default Vercel URL:**
```
https://siddhartha-store-xxxxx.vercel.app
```

**After adding custom domain:**
```
https://siddhartha-store.com
```

---

**That's it! Your store will be live in minutes!** 🚀

