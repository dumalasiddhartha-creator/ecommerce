'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

interface Message {
  id: number
  type: 'user' | 'ai'
  text: string
  products?: Array<{
    id: number
    name: string
    price: number
    image: string
    rating: number
    reviews: number
  }>
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      text: "Hello! I'm Siddhartha AI Assistant 🤖. How can I help you today?",
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
    }
    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        text: "Here are some great options for you! 👟",
        products: inputValue.toLowerCase().includes('shoe') || inputValue.toLowerCase().includes('2k') || inputValue.toLowerCase().includes('2000') ? [
          { id: 1, name: 'Nike Air Max', price: 1899, image: 'https://via.placeholder.com/200', rating: 4.5, reviews: 234 },
          { id: 2, name: 'Adidas Running Shoes', price: 1999, image: 'https://via.placeholder.com/200', rating: 4.7, reviews: 189 },
        ] : [],
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)

    setInputValue('')
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-primary rounded-full shadow-lg flex items-center justify-center text-white z-50 pulse-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-semibold">Siddhartha AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-gradient-primary text-white'
                        : 'bg-gray-100 text-text'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {message.products && message.products.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.products.map((product) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-lg p-2 flex items-center space-x-2"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <p className="text-xs font-medium text-text">{product.name}</p>
                              <p className="text-xs text-primary font-semibold">₹{product.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-text-light mt-2">
                Try: "I need shoes under ₹2,000" or "Track my order"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

