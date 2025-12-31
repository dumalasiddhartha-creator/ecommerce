# Siddhartha Store - AI-Powered E-Commerce Platform

A premium, modern e-commerce platform with AI-first features, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Features
- **AI-Powered Search** - Natural language product search with voice input
- **Personalized Recommendations** - AI learns from browsing history and preferences
- **AI Chatbot Assistant** - 24/7 shopping assistant with product recommendations
- **Smart Product Cards** - Hover effects, quick view, and AI insights
- **Modern Checkout** - Streamlined checkout with AI suggestions
- **User Dashboard** - Complete profile management with AI preferences

### Design Highlights
- Clean, premium, minimal design inspired by Apple Store
- Gradient buttons and modern UI elements
- Smooth animations with Framer Motion
- Fully responsive mobile-first design
- Professional color palette (Deep Blue + Electric Purple)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 🚀 Quick Deploy - Get Your Live URL

### Fastest Way (5 minutes):

1. **Install Node.js** from [nodejs.org](https://nodejs.org/) (if not installed)

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel login
   vercel
   ```

4. **Get Your URL!** 🎉
   - You'll receive: `https://siddhartha-store-xxxxx.vercel.app`
   - Or see detailed guide in `DEPLOY_NOW.md`

### Alternative: Deploy via GitHub
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy automatically

**See `DEPLOYMENT.md` for detailed instructions.**

---

## 📦 Local Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Version 18+ recommended

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header & Chatbot
│   ├── page.tsx            # Homepage
│   ├── product/[id]/       # Product detail pages
│   ├── checkout/           # Checkout page
│   └── profile/             # User profile dashboard
├── components/
│   ├── Header.tsx           # Sticky navigation header
│   ├── AIChatbot.tsx       # Floating AI chatbot
│   ├── ProductCard.tsx     # Reusable product card
│   └── home/               # Homepage sections
│       ├── HeroSection.tsx
│       ├── PersonalizedSection.tsx
│       ├── CategoriesGrid.tsx
│       ├── TrendingSection.tsx
│       └── DealsSection.tsx
└── public/                  # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#1E40AF)
- **Accent**: Electric Purple (#7C3AED)
- **Background**: Soft White (#F9FAFB)
- **Text**: Dark Gray (#111827)

### Typography
- **Headings**: Poppins (Bold, Semi-bold)
- **Body**: Inter (Regular, Medium)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Pages

- **Homepage** (`/`) - Hero, recommendations, categories, trending, deals
- **Product Detail** (`/product/[id]`) - Full product info with AI recommendations
- **Checkout** (`/checkout`) - Modern checkout flow
- **Profile** (`/profile`) - User dashboard

## 🤖 AI Features

1. **AI Search Bar** - Natural language queries
2. **Personalized Recommendations** - Based on user behavior
3. **AI Chatbot** - Product search, order tracking, suggestions
4. **AI Review Summary** - Pros/cons analysis
5. **Smart Notifications** - Price drops, stock alerts

## 📱 Mobile Responsive

Fully responsive design with:
- Mobile-first approach
- Bottom navigation (ready for mobile)
- Touch-friendly buttons
- Optimized layouts for all screen sizes

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Real AI/ML integration (OpenAI API)
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Real product database
- [ ] Image upload for visual search
- [ ] Voice shopping features

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ for Siddhartha Store

