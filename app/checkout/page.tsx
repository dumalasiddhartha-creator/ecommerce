'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, CreditCard, Smartphone, Wallet, Truck, MapPin } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

const checkoutSteps = [
  { id: 1, name: 'Address', icon: MapPin, completed: true },
  { id: 2, name: 'Payment', icon: CreditCard, completed: false },
  { id: 3, name: 'Review', icon: Check, completed: false },
]

const paymentMethods = [
  { id: 'upi', name: 'UPI', icon: Smartphone, popular: true },
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, popular: false },
  { id: 'wallet', name: 'Wallet', icon: Wallet, popular: false },
]

const suggestedProducts = [
  {
    id: 13,
    name: 'USB-C Hub Adapter',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1587825147138-346b228eefd2?w=400',
    rating: 4.5,
    reviews: 456,
  },
]

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState('upi')
  const [address] = useState({
    name: 'Siddhartha',
    street: '123 Main Street',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    phone: '+91 9876543210',
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        {checkoutSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    step.completed
                      ? 'bg-gradient-primary border-primary text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-2 text-sm font-medium text-text">{step.name}</span>
              </div>
              {index < checkoutSteps.length - 1 && (
                <div
                  className={`w-24 h-1 mx-4 ${
                    step.completed ? 'bg-gradient-primary' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-heading font-bold text-text mb-4">Delivery Address</h2>
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-text">{address.name}</p>
                  <p className="text-text-light">{address.street}</p>
                  <p className="text-text-light">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                  <p className="text-text-light mt-2">Phone: {address.phone}</p>
                </div>
                <button className="text-primary font-medium hover:underline">Change</button>
              </div>
            </div>
          </motion.div>

          {/* Payment Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-heading font-bold text-text mb-4">Payment Method</h2>
            <div className="space-y-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`w-full flex items-center justify-between p-4 border-2 rounded-xl transition-all ${
                      selectedPayment === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <span className="font-medium text-text">{method.name}</span>
                      {method.popular && (
                        <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === method.id
                          ? 'border-primary bg-primary'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedPayment === method.id && (
                        <div className="w-3 h-3 rounded-full bg-white" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* AI Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6"
          >
            <h3 className="font-semibold text-text mb-3 flex items-center space-x-2">
              <span>🤖</span>
              <span>People Also Bought This</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {suggestedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg p-3 flex items-center space-x-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text">{product.name}</p>
                    <p className="text-sm text-primary font-semibold">₹{product.price.toLocaleString()}</p>
                  </div>
                  <button className="text-primary text-sm font-medium hover:underline">Add</button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
          >
            <h2 className="text-2xl font-heading font-bold text-text mb-4">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-text">MacBook Pro 14"</p>
                  <p className="text-xs text-text-light">Qty: 1</p>
                </div>
                <p className="text-sm font-semibold text-text">₹1,49,999</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-text-light">
                <span>Subtotal</span>
                <span>₹1,49,999</span>
              </div>
              <div className="flex justify-between text-text-light">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-text-light">
                <span>Discount</span>
                <span className="text-green-600">-₹20,000</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-text pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>₹1,29,999</span>
              </div>
            </div>

            <button className="w-full gradient-button text-lg py-4 mb-4">
              Place Order
            </button>

            <div className="flex items-center justify-center space-x-2 text-sm text-text-light">
              <Truck className="h-4 w-4" />
              <span>Free delivery in 2-3 days</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

