'use client'

import { motion } from 'framer-motion'
import { Package, Heart, MapPin, Bot, MessageSquare, Settings } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  { id: 1, name: 'My Orders', icon: Package, href: '/orders', count: 5 },
  { id: 2, name: 'Wishlist', icon: Heart, href: '/wishlist', count: 12 },
  { id: 3, name: 'Saved Addresses', icon: MapPin, href: '/addresses', count: 3 },
  { id: 4, name: 'AI Preferences', icon: Bot, href: '/ai-preferences' },
  { id: 5, name: 'Chat History', icon: MessageSquare, href: '/chat-history' },
  { id: 6, name: 'Settings', icon: Settings, href: '/settings' },
]

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-primary text-white rounded-2xl p-8 mb-8"
      >
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl font-bold">
            S
          </div>
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">
              Hello Siddhartha 👋
            </h1>
            <p className="text-blue-100">Welcome back! Ready to discover something new?</p>
          </div>
        </div>
      </motion.div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={item.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    {item.count && (
                      <p className="text-sm text-text-light">{item.count} items</p>
                    )}
                  </div>
                </div>
                <span className="text-text-light group-hover:text-primary transition-colors">→</span>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* AI Preferences Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6"
      >
        <div className="flex items-start space-x-4">
          <Bot className="h-8 w-8 text-accent flex-shrink-0" />
          <div>
            <h3 className="text-xl font-heading font-bold text-text mb-2">
              AI Learning Your Preferences
            </h3>
            <p className="text-text-light mb-4">
              Our AI is continuously learning from your browsing patterns, purchase history, and preferences to provide you with the most relevant recommendations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 rounded-full text-sm text-text">Electronics</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm text-text">Premium Brands</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm text-text">Fast Delivery</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

