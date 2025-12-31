'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, Truck, Shield, Bot, ThumbsUp, ThumbsDown } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

// Type definitions
interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  images: string[]
  rating: number
  reviews: number
  discount: number
  description: string
  features: string[]
  deliveryETA: string
  inStock: boolean
}

// Mock product data
const productData: Record<number, Product> = {
  1: {
    id: 1,
    name: 'Apple MacBook Pro 14" M2 Chip',
    price: 149999,
    originalPrice: 169999,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800',
    ],
    rating: 4.8,
    reviews: 3421,
    discount: 12,
    description: 'The most powerful MacBook Pro ever. With the M2 chip, stunning Liquid Retina XDR display, and all-day battery life.',
    features: [
      'M2 Pro or M2 Max chip',
      '14.2-inch Liquid Retina XDR display',
      'Up to 22 hours battery life',
      '1080p FaceTime HD camera',
      'Six-speaker sound system',
    ],
    deliveryETA: '2-3 business days',
    inStock: true,
  },
}

const similarProducts = [
  {
    id: 2,
    name: 'Dell XPS 15',
    price: 129999,
    originalPrice: 149999,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
    rating: 4.6,
    reviews: 1890,
    discount: 13,
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    price: 119999,
    originalPrice: 139999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    rating: 4.5,
    reviews: 1234,
    discount: 14,
  },
]

const aiReviewSummary = {
  pros: [
    'Excellent performance with M2 chip',
    'Stunning display quality',
    'Great battery life',
    'Premium build quality',
  ],
  cons: [
    'Expensive compared to alternatives',
    'Limited port selection',
  ],
}

export default function ProductPage() {
  const params = useParams()
  const productId = parseInt(params.id as string, 10)
  const product = productData[productId]
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  if (!product || isNaN(productId)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-text mb-2">Product not found</p>
          <p className="text-text-light mb-4">The product you're looking for doesn't exist.</p>
          <a href="/" className="text-primary hover:underline">Return to homepage</a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-100 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-1 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-heading font-bold text-text mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">{product.rating}</span>
            </div>
            <span className="text-text-light">({product.reviews.toLocaleString()} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-4xl font-bold text-text">₹{product.price.toLocaleString()}</span>
            <span className="text-2xl text-text-light line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
            <span className="bg-accent text-white px-3 py-1 rounded-md font-semibold">
              {product.discount}% OFF
            </span>
          </div>

          {/* AI Size Recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 mb-6"
          >
            <div className="flex items-start space-x-3">
              <Bot className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-text mb-1">AI Recommendation</h3>
                <p className="text-sm text-text-light">
                  Based on your profile, this product matches 95% of your preferences. Perfect for professional work and creative projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-text mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-text-light">
                  <span className="text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-2 text-text-light mb-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-medium">Delivery: {product.deliveryETA}</span>
            </div>
            <div className="flex items-center space-x-2 text-text-light">
              <Shield className="h-5 w-5 text-primary" />
              <span>1 Year Warranty Included</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 mb-8">
            <button className="flex-1 gradient-button text-lg py-4 flex items-center justify-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button className="px-8 py-4 bg-text text-white rounded-lg font-semibold hover:bg-text/90 transition-colors">
              Buy Now
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-4 rounded-lg border-2 transition-colors ${
                isLiked
                  ? 'bg-red-50 border-red-200 text-red-500'
                  : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-red-200'
              }`}
            >
              <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Why AI Recommends */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border border-primary/20 rounded-xl p-4 bg-gradient-to-br from-primary/5 to-accent/5"
          >
            <h3 className="font-semibold text-text mb-3 flex items-center space-x-2">
              <Bot className="h-5 w-5 text-accent" />
              <span>Why AI Recommends This?</span>
            </h3>
            <p className="text-sm text-text-light">
              Based on your browsing history and preferences, this product aligns with your needs for high-performance computing and premium design. 95% of users with similar preferences rated this 5 stars.
            </p>
          </motion.div>
        </div>
      </div>

      {/* AI Review Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 shadow-lg mb-12"
      >
        <h2 className="text-2xl font-heading font-bold text-text mb-6 flex items-center space-x-2">
          <Bot className="h-6 w-6 text-accent" />
          <span>AI Review Summary</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-600 mb-3 flex items-center space-x-2">
              <ThumbsUp className="h-5 w-5" />
              <span>Pros:</span>
            </h3>
            <ul className="space-y-2">
              {aiReviewSummary.pros.map((pro, index) => (
                <li key={index} className="flex items-start space-x-2 text-text-light">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-600 mb-3 flex items-center space-x-2">
              <ThumbsDown className="h-5 w-5" />
              <span>Cons:</span>
            </h3>
            <ul className="space-y-2">
              {aiReviewSummary.cons.map((con, index) => (
                <li key={index} className="flex items-start space-x-2 text-text-light">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Similar Products */}
      <div>
        <h2 className="text-2xl font-heading font-bold text-text mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

