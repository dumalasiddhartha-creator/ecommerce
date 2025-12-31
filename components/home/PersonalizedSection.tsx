'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

const recommendedProducts = [
  {
    id: 1,
    name: 'Apple MacBook Pro 14" M2 Chip',
    price: 149999,
    originalPrice: 169999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    rating: 4.8,
    reviews: 3421,
    discount: 12,
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.7,
    reviews: 2156,
    discount: 17,
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    price: 124999,
    originalPrice: 134999,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
    rating: 4.6,
    reviews: 1890,
    discount: 7,
  },
  {
    id: 4,
    name: 'Nike Air Max 270',
    price: 8999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    rating: 4.5,
    reviews: 1234,
    discount: 18,
  },
]

export default function PersonalizedSection() {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-3 mb-8"
        >
          <Sparkles className="h-6 w-6 text-accent" />
          <h2 className="text-3xl font-heading font-bold text-text">
            Recommended For You, <span className="gradient-text">Siddhartha</span>
          </h2>
        </motion.div>

        {/* AI Learning Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-light mb-6 text-sm"
        >
          🧠 AI learns from your browsing history, cart behavior, and location preferences
        </motion.p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

