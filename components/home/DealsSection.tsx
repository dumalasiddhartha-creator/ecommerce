'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

const dealProducts = [
  {
    id: 9,
    name: 'Samsung 55" QLED 4K TV',
    price: 59999,
    originalPrice: 89999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
    rating: 4.8,
    reviews: 2345,
    discount: 33,
  },
  {
    id: 10,
    name: 'LG Refrigerator 300L',
    price: 34999,
    originalPrice: 42999,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d5067eb6?w=400',
    rating: 4.6,
    reviews: 1567,
    discount: 19,
  },
  {
    id: 11,
    name: 'Philips Air Fryer',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1626082895616-7e7efd86c5e2?w=400',
    rating: 4.5,
    reviews: 890,
    discount: 29,
  },
  {
    id: 12,
    name: 'Boat Stone 1000 Speaker',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    rating: 4.4,
    reviews: 1234,
    discount: 25,
  },
]

export default function DealsSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Countdown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-yellow-500" />
            <h2 className="text-3xl font-heading font-bold text-text">
              ⚡ Limited Time Deals
            </h2>
          </div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 bg-gradient-primary text-white px-6 py-3 rounded-xl shadow-lg"
          >
            <Clock className="h-5 w-5" />
            <div className="flex items-center space-x-2">
              <div className="text-center">
                <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs opacity-80">Hours</div>
              </div>
              <span className="text-xl">:</span>
              <div className="text-center">
                <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs opacity-80">Minutes</div>
              </div>
              <span className="text-xl">:</span>
              <div className="text-center">
                <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs opacity-80">Seconds</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product, index) => (
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

