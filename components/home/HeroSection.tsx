'use client'

import { motion } from 'framer-motion'
import { Search, MessageCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <Sparkles className="h-16 w-16 mx-auto" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-heading font-bold">
            Smart Shopping Starts Here{' '}
            <span className="inline-block">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="inline-block"
              >
                🤖
              </motion.span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Discover products tailored just for you with AI-powered recommendations
          </p>

          {/* AI Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Try: 'Best laptop under ₹50,000' or 'Wireless headphones'"
                className="w-full pl-14 pr-32 py-4 bg-white text-text rounded-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-2xl text-lg"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button className="px-6 py-2 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center space-x-2"
            >
              <span>Shop Now</span>
              <span>→</span>
            </Link>
            <Link
              href="#chatbot"
              className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-opacity-30 transition-all border-2 border-white border-opacity-50 flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Talk to Assistant</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

