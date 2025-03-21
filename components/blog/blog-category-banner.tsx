"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

// Helper function to get category description
const getCategoryDescription = (category: string): string => {
  const descriptions: Record<string, string> = {
    "Roof Maintenance": "Tips and guides for keeping your roof in optimal condition",
    "Roofing Materials": "Information about different roofing materials and their benefits",
    "Seasonal Tips": "Seasonal advice for protecting your roof year-round",
    "Roof Design": "Architectural insights and design considerations for roofing",
    "DIY Tips": "Simple repairs and maintenance you can do yourself",
    "Consumer Guide": "Helpful information for making informed roofing decisions",
  }

  return descriptions[category] || "Articles related to roofing and home maintenance"
}

// Helper function to get category image
const getCategoryImage = (category: string): string => {
  const images: Record<string, string> = {
    "Roof Maintenance": "/placeholder.svg?height=800&width=1920&text=Roof%20Maintenance%20Professional",
    "Roofing Materials": "/placeholder.svg?height=800&width=1920&text=Various%20Roofing%20Materials",
    "Seasonal Tips": "/placeholder.svg?height=800&width=1920&text=Seasonal%20Roof%20Protection",
    "Roof Design": "/placeholder.svg?height=800&width=1920&text=Architectural%20Roof%20Designs",
    "DIY Tips": "/placeholder.svg?height=800&width=1920&text=DIY%20Roof%20Repair%20Tools",
    "Consumer Guide": "/placeholder.svg?height=800&width=1920&text=Homeowner%20Reviewing%20Roofing%20Options",
  }

  return images[category] || "/placeholder.svg?height=800&width=1920&text=Roofing%20Blog"
}

type BlogCategoryBannerProps = {
  category: string
}

export default function BlogCategoryBanner({ category }: BlogCategoryBannerProps) {
  const description = getCategoryDescription(category)
  const backgroundImage = getCategoryImage(category)

  return (
    <section className="relative bg-secondary text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={category}
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

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {category}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            {description}
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
            <Link href="/blog" className="text-white/70 hover:text-white transition-colors duration-300">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-white/50" />
            <span className="text-white">{category}</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

