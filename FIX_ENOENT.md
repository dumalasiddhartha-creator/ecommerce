# 🔧 Fix ENOENT Error - package.json Not Found

## Problem
You're getting this error:
```
error enoent Could not read package.json: Error: ENOENT
```

## Solution

### The Issue
The error occurs when npm/Node.js can't find `package.json` because you're running commands from the wrong directory.

### Fix Steps:

1. **Open Terminal/PowerShell in the Project Directory**
   - Navigate to: `C:\Users\Palepally Snigdha\Desktop\ecommerce`
   - Or right-click the `ecommerce` folder → "Open in Terminal"

2. **Verify You're in the Right Directory**
   ```powershell
   cd "C:\Users\Palepally Snigdha\Desktop\ecommerce"
   Get-Location
   ```

3. **Verify package.json Exists**
   ```powershell
   Test-Path package.json
   # Should return: True
   ```

4. **Now Run Your Commands**
   ```powershell
   npm install
   npm run dev
   ```

---

## Quick Fix Script

**Option 1: Use the Batch File**
- Double-click `start-dev.bat` (it automatically navigates to the right directory)

**Option 2: Manual Fix**
```powershell
# Navigate to project
cd "C:\Users\Palepally Snigdha\Desktop\ecommerce"

# Verify package.json
dir package.json

# Install dependencies
npm install

# Run dev server
npm run dev
```

---

## Common Causes:

1. ❌ Running `npm install` from `C:\Users\Palepally Snigdha\` instead of `C:\Users\Palepally Snigdha\Desktop\ecommerce\`
2. ❌ Opening terminal in wrong folder
3. ❌ Using wrong working directory

---

## ✅ Solution Applied

The shell is now in the correct directory. You can run:
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production

---

**The error is fixed! You're now in the correct directory.** 🎉

