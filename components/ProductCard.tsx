'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Eye } from 'lucide-react'

interface ProductCardProps {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  discount?: number
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  discount,
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md card-hover group relative"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <Link href={`/product/${id}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-accent text-white px-2 py-1 rounded-md text-xs font-semibold">
              {discount}% OFF
            </div>
          )}
          {/* Quick View Button */}
          <Link
            href={`/product/${id}`}
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-full p-3">
              <Eye className="h-5 w-5 text-primary" />
            </div>
          </Link>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium ml-1">{rating}</span>
          </div>
          <span className="text-xs text-text-light">({reviews.toLocaleString()} reviews)</span>
        </div>

        {/* Product Name */}
        <Link href={`/product/${id}`}>
          <h3 className="font-medium text-text mb-2 line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-text">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-text-light line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button className="flex-1 gradient-button text-sm py-2 flex items-center justify-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-lg border transition-colors ${
              isLiked
                ? 'bg-red-50 border-red-200 text-red-500'
                : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-red-200 hover:text-red-500'
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

