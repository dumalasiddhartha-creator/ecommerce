# 🚀 Quick Start Guide

## Prerequisites

Before you begin, make sure you have:
- **Node.js** installed (version 18 or higher)
- **npm** or **yarn** package manager

## Installation Steps

### 1. Install Node.js (if not installed)
- Download from: https://nodejs.org/
- Choose the LTS version
- Run the installer and follow the setup wizard

### 2. Install Project Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to: **http://localhost:3000**

You should see the Siddhartha Store homepage! 🎉

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
ecommerce/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── product/[id]/      # Product detail pages
│   ├── checkout/          # Checkout page
│   └── profile/           # User profile
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── AIChatbot.tsx      # AI chatbot
│   ├── ProductCard.tsx    # Product card component
│   └── home/             # Homepage sections
└── public/               # Static assets
```

## Features to Explore

1. **Homepage** - Hero section, AI search, recommendations
2. **Product Cards** - Hover effects, quick view
3. **AI Chatbot** - Click the floating button (bottom-right)
4. **Product Details** - Visit `/product/1`
5. **Checkout** - Visit `/checkout`
6. **Profile** - Visit `/profile`

## Troubleshooting

### Port Already in Use
If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.)

### Module Not Found Errors
Run `npm install` again to ensure all dependencies are installed.

### TypeScript Errors
Make sure you're using Node.js 18+ and all dependencies are installed correctly.

## Next Steps

1. Customize colors in `tailwind.config.js`
2. Add your own products and data
3. Integrate with a backend API
4. Connect to a real AI service (OpenAI, etc.)
5. Add authentication
6. Set up payment gateway

## Need Help?

Check the main `README.md` for more detailed documentation.

---

Happy Coding! 🎨✨

