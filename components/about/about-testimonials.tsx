"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Jennifer Anderson",
    role: "Homeowner",
    company: "Residential Client",
    quote:
      "The team at Multi-Bee 360 transformed our home with a beautiful new roof. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Martinez",
    role: "Operations Director",
    company: "Commercial Properties Inc.",
    quote:
      "We've worked with many roofing contractors over the years, but Multi-Bee 360 stands out for their exceptional quality and service. They handled our complex commercial project with expertise and precision.",
    rating: 5,
  },
  {
    id: 3,
    name: "Samantha Wilson",
    role: "Property Manager",
    company: "Lakeside Apartments",
    quote:
      "After severe storm damage, Multi-Bee 360 quickly assessed and repaired our apartment complex roofs. Their emergency response was impressive, and they worked seamlessly with our insurance company.",
    rating: 4,
  },
]

export default function AboutTestimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }
  }

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  // Auto-rotate testimonials
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrent((prev) => (prev + 1) % testimonials.length)
      }
    }, 8000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAnimating])

  // Reset animation state after completion
  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="assets/images/about/testimonial_bg.jpg"
          alt="Testimonials Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
      </div>

      {/* Diagonal Accent */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-full bg-primary/20 transform rotate-12"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full bg-primary/10 transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={handleAnimationComplete}
                className="bg-white rounded-lg p-8 md:p-12 shadow-xl relative"
              >
                {/* Quote mark accent */}
                <div className="absolute -top-6 -left-6 bg-primary text-white rounded-full p-4">
                  <Quote className="w-6 h-6" />
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[current].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 text-lg italic mb-6">
                      "{testimonials[current].quote}"
                    </blockquote>

                    {/* Client Info */}
                    <div>
                      <h4 className="text-xl font-bold text-secondary">{testimonials[current].name}</h4>
                      <p className="text-gray-600">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary text-white transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary text-white transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
                disabled={isAnimating}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

