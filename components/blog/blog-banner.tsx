"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BlogBanner() {
  return (
    <section className="relative bg-secondary text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1920&text=Professional%20Roofers%20Working"
          alt="Blog"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
      </div>

      {/* Red Diagonal Element */}
      <div className="absolute top-0 left-0 w-1/4 h-full z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-primary transform -skew-x-12 -translate-x-1/2 opacity-80"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Roofing Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Expert insights, tips, and news about roofing solutions and home maintenance
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center text-sm"
          >
            <Link href="/" className="text-white/70 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-white/50" />
            <span className="text-white">Blog</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

