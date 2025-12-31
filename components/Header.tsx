'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X, Mic } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-heading font-bold text-text">Siddhartha Store</span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full" ref={searchRef}>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products... Try 'Best laptop under ₹50,000'"
                className="w-full pl-12 pr-24 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-2">
                <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                  <Mic className="h-5 w-5" />
                </button>
                <button className="px-4 py-1.5 bg-gradient-primary text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/categories" className="text-text hover:text-primary transition-colors font-medium">
              Categories
            </Link>
            <Link href="/deals" className="text-text hover:text-primary transition-colors font-medium">
              Deals
            </Link>
            <Link href="/orders" className="text-text hover:text-primary transition-colors font-medium">
              Orders
            </Link>
            <Link href="/cart" className="relative p-2 text-text hover:text-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link href="/profile" className="p-2 text-text hover:text-primary transition-colors">
              <User className="h-6 w-6" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search with AI..."
              className="w-full pl-10 pr-20 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button className="p-2 text-gray-500">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="px-4 py-4 space-y-3">
              <Link href="/categories" className="block py-2 text-text hover:text-primary">
                Categories
              </Link>
              <Link href="/deals" className="block py-2 text-text hover:text-primary">
                Deals
              </Link>
              <Link href="/orders" className="block py-2 text-text hover:text-primary">
                Orders
              </Link>
              <Link href="/cart" className="flex items-center justify-between py-2 text-text hover:text-primary">
                <span>Cart</span>
                <span className="bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link href="/profile" className="block py-2 text-text hover:text-primary">
                Profile
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Search Suggestions */}
      <AnimatePresence>
        {isSearchOpen && searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg max-w-7xl mx-auto z-50"
          >
            <div className="px-4 py-4 space-y-2">
              <p className="text-sm text-text-light">AI Suggestions:</p>
              <div className="space-y-1">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md text-sm">
                  Best laptop under ₹50,000
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md text-sm">
                  Wireless headphones with noise cancellation
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md text-sm">
                  Smartphone with best camera
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

