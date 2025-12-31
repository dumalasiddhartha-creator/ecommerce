# 🌐 Get Your Live URL - Step by Step

## Your URL Will Be:
```
https://siddhartha-store-xxxxx.vercel.app
```
(Replace `xxxxx` with your unique ID)

---

## ⚡ Quick Method (Recommended)

### 1. Install Node.js
- Download: https://nodejs.org/
- Install the LTS version
- Restart terminal

### 2. Open Terminal in Project Folder
```bash
cd "C:\Users\Palepally Snigdha\Desktop\ecommerce"
```

### 3. Install Vercel CLI
```bash
npm install -g vercel
```

### 4. Deploy
```bash
vercel login
vercel
```

### 5. Answer Prompts:
- ✅ Set up and deploy? → **Yes**
- ✅ Which scope? → **Your email/account**
- ✅ Link to existing? → **No**
- ✅ Project name? → **siddhartha-store** (or press Enter)
- ✅ Directory? → **./** (press Enter)
- ✅ Override? → **No** (press Enter)

### 6. Wait 2-3 minutes...

### 7. ✅ You'll See:
```
✅ Production: https://siddhartha-store-xxxxx.vercel.app
```

**That's your live URL!** 🎉

---

## 📋 Alternative: GitHub Method

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `siddhartha-store`
3. Click "Create repository"

### Step 2: Push Code to GitHub

Open terminal in project folder:
```bash
git init
git add .
git commit -m "Siddhartha Store - Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/siddhartha-store.git
git push -u origin main
```
(Replace `YOUR_USERNAME` with your GitHub username)

### Step 3: Deploy on Vercel

1. Go to: https://vercel.com
2. Sign up/Login (use GitHub)
3. Click "Add New Project"
4. Import `siddhartha-store` repository
5. Click "Deploy"
6. Wait 2-3 minutes
7. **Get your URL!** ✅

---

## 🔗 Your Final URL Examples

**Vercel Default:**
- `https://siddhartha-store.vercel.app`
- `https://siddhartha-store-abc123.vercel.app`

**Custom Domain (Optional):**
- `https://siddhartha-store.com`
- `https://www.siddhartha-store.com`

---

## ✅ After Deployment

1. **Share your URL** - It's live!
2. **Test all features:**
   - Homepage
   - Product pages
   - AI Chatbot
   - Checkout
   - Profile

3. **Update anytime:**
   ```bash
   vercel --prod
   ```

---

## 🆘 Troubleshooting

**"node not found"**
- Install Node.js from nodejs.org

**"vercel not found"**
- Run: `npm install -g vercel`

**Deployment fails**
- Check: All files are committed
- Check: No syntax errors
- Check: `package.json` is correct

---

## 📞 Need Help?

- Vercel Support: https://vercel.com/support
- Vercel Docs: https://vercel.com/docs

---

**Your store will be live in 5 minutes!** 🚀

