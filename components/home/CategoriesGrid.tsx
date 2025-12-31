'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, Shirt, Home, Sparkles, ShoppingCart, Dumbbell } from 'lucide-react'

const categories = [
  { id: 1, name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-blue-600' },
  { id: 2, name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-pink-600' },
  { id: 3, name: 'Home', icon: Home, color: 'from-green-500 to-green-600' },
  { id: 4, name: 'Beauty', icon: Sparkles, color: 'from-purple-500 to-purple-600' },
  { id: 5, name: 'Grocery', icon: ShoppingCart, color: 'from-orange-500 to-orange-600' },
  { id: 6, name: 'Sports', icon: Dumbbell, color: 'from-red-500 to-red-600' },
]

export default function CategoriesGrid() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-text mb-8 text-center"
        >
          Shop by Category
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={`/categories/${category.id}`}
                  className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-medium text-text group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

