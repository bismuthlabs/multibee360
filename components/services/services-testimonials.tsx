"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Mr Akwasi Kwateng",
    role: "",
    company: "",
    quote:
      "The team at Multi-Bee 360 transformed our home with a beautiful new roof. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr Thomas Boakye",
    role: "",
    company: "",
    quote:
      "We've worked with many roofing contractors over the years, but Multi-Bee 360 stands out for their exceptional quality and service. They handled our complex commercial project with expertise and precision.",
    rating: 5,
  },

  {
    id: 3,
    name: "Elder Philip",
    role: "",
    company: "",
    quote:
      "After severe storm damage, Multi-Bee 360 quickly assessed and repaired our apartment complex roofs. Their emergency response was impressive, and they worked seamlessly with our insurance company.",
    rating: 4,
  },
]

export default function ServicesTestimonials() {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">CLIENT FEEDBACK</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What Our Clients Say About Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experience with our roofing
            services.
          </p>
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
                className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-md relative"
              >
                {/* Service tag */}
                {/* <div className="absolute top-6 right-6 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                  {testimonials[current].service}
                </div> */}

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
                      {/* <p className="text-gray-600">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p> */}
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
                    current === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-primary text-secondary hover:text-white transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-primary text-secondary hover:text-white transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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

