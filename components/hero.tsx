"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Youtube, Users, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Slide content data (fixed syntax with commas)
const slideContent = [
  {
    heading: "🔨 We Handle Everything—So You Don’t Have To!",
    paragraph: "From material selection to expert installation, we take care of your roofing needs while you focus on enjoying your home.",
  },
  {
    heading: "Eco-Friendly & Modern Roofing Solutions",
    paragraph: "Energy-efficient materials, expert craftmanship, and long-lasting protection. Schedule a consultation today.",
  },
  {
    heading: "🏗 Your Roofing Partner for Large-Scale Projects",
    paragraph: "We deliver high-quality roofing solutions at competitive prices—on schedule, on budget, and built to last. Partner with us for seamless execution.",
  },
  {
    heading: "🏢 Reliable, Cost-Effective Roofing for Real Estate Projects",
    paragraph: "We specialize in large-scale roofing solutions, ensuring premium quality at developer-friendly pricing. Let’s build together.",
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveSlide((prev) => (prev + 1) % slideContent.length)
        setIsAnimating(true) // Set to true when changing slide
      }
    }, 8000)
    return () => clearInterval(interval)
  }, [isAnimating]) // Simplified dependency array

  // Reset isAnimating after animation completes
  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const handleSlideChange = useCallback(
    (index: number) => {
      if (index !== activeSlide && !isAnimating) {
        setIsAnimating(true)
        setActiveSlide(index)
      }
    },
    [activeSlide, isAnimating],
  )

  return (
    <section className="relative bg-secondary text-white min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="assets/images/aaa.jpg"
          alt="Roofing Services"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
      </div>

      {/* Red Diagonal Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-primary transform -skew-x-12 -translate-x-1/2 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-primary transform -skew-x-12 -translate-x-1/3 opacity-60"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 z-10">
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary transform skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary transform skew-x-12 translate-x-1/3 opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary transform skew-x-12 translate-x-1/4 opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-20 flex flex-col h-full justify-center">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6">
            {/* <div className="bg-primary rounded-full h-2 w-8 mr-4 border border-white p-1"></div> */}
            <p className="uppercase tracking-widest text-sm md:text-base">A Strong Roof, A Safe Home</p>
          </div>

          {/* Main Heading - Animated */}
          <div className="h-[130px] sm:h-[150px] md:h-[180px] mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`heading-${activeSlide}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line"
              >
                {slideContent[activeSlide].heading}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Paragraph - Animated */}
          <div className="h-[115px] mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={`paragraph-${activeSlide}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                onAnimationComplete={handleAnimationComplete} // Reset isAnimating here
                className="text-lg max-w-2xl"
              >
                {slideContent[activeSlide].paragraph}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <Link
            href="/services"
            className="inline-flex items-center bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 font-medium transition-colors duration-300 mb-12"
          >
            <span>VIEW SERVICES</span>
            <ArrowRight className="ml-2" size={20} />
          </Link>

          {/* Satisfied Clients Counter */}
          <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 w-fit">
            <div className="bg-primary rounded-full p-3 mr-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold mr-2">2,500+</span>
              </div>
              <p className="text-sm uppercase tracking-wider">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-8 z-30 flex space-x-3">
        {slideContent.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index ? "bg-primary w-6" : "bg-white opacity-50 hover:opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Social Media Sidebar */}
      <div className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 z-30 flex-col space-y-6">
        <Link
          href="#"
          className="w-10 h-10 bg-white hover:bg-primary text-secondary hover:text-white flex items-center justify-center transition-colors duration-300"
        >
          <Facebook size={20} />
        </Link>
        <Link
          href="#"
          className="w-10 h-10 bg-white hover:bg-primary text-secondary hover:text-white flex items-center justify-center transition-colors duration-300"
        >
          <Twitter size={20} />
        </Link>
        <Link
          href="#"
          className="w-10 h-10 bg-white hover:bg-primary text-secondary hover:text-white flex items-center justify-center transition-colors duration-300"
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href="#"
          className="w-10 h-10 bg-white hover:bg-primary text-secondary hover:text-white flex items-center justify-center transition-colors duration-300"
        >
          <Youtube size={20} />
        </Link>
      </div>

      {/* Follow Us Text */}
      <div className="hidden md:block absolute right-4 bottom-24 z-30">
        <div className="flex flex-col items-center">
          <div className="transform -rotate-90 origin-center whitespace-nowrap tracking-widest text-sm font-medium">
            FOLLOW US
          </div>
        </div>
      </div>
    </section>
  )
}

