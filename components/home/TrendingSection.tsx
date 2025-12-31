'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

const trendingProducts = [
  {
    id: 5,
    name: 'OnePlus 12 Pro',
    price: 69999,
    originalPrice: 79999,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
    rating: 4.9,
    reviews: 4567,
    discount: 12,
  },
  {
    id: 6,
    name: 'Canon EOS R6 Mark II',
    price: 189999,
    originalPrice: 209999,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400',
    rating: 4.8,
    reviews: 1234,
    discount: 10,
  },
  {
    id: 7,
    name: 'Dyson V15 Detect Vacuum',
    price: 54999,
    originalPrice: 59999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    rating: 4.7,
    reviews: 890,
    discount: 8,
  },
  {
    id: 8,
    name: 'Apple AirPods Pro 2',
    price: 24999,
    originalPrice: 27999,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400',
    rating: 4.6,
    reviews: 3456,
    discount: 11,
  },
]

export default function TrendingSection() {
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
          <TrendingUp className="h-6 w-6 text-red-500" />
          <h2 className="text-3xl font-heading font-bold text-text">
            🔥 Trending Today
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, index) => (
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

