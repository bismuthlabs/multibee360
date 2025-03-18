"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export default function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("There was an error subscribing. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Red Diagonal Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 z-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary transform skew-x-12 translate-x-1/3 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">STAY UPDATED</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>

            <p className="text-white/80 mb-8">
              Get the latest roofing tips, industry news, and exclusive offers delivered straight to your inbox.
            </p>

            {isSubmitted ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-white/80 mb-6">
                  You've successfully subscribed to our newsletter. Look out for our next update in your inbox!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-white hover:text-primary text-white px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Subscribe Another Email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-white hover:text-primary text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>

                {error && <div className="text-red-300 text-sm mt-2">{error}</div>}

                <p className="text-white/60 text-xs mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

