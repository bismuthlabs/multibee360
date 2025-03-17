"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

// Roofing products data with image paths
const products = [
  {
    id: 1,
    name: "Euro Tiles",
    description: "Premium European-style roof tiles with elegance and durability.",
    color: "bg-red-600",
    image: "assets/images/euro-tile-sheet.jpg"
  },
  {
    id: 2,
    name: "IBR Roofing Sheet",
    description: "Cost-effective roofing in various colors and styles.",
    color: "bg-gray-700",
    image: "assets/images/colour-coated-roofing-sheets.jpg"
  },
  {
    id: 3,
    name: "Self Lock",
    description: "Durable, energy-efficient metal roofing systems.",
    color: "bg-blue-700",
    image: "assets/images/self-lock.webp"
  },
  {
    id: 4,
    name: "Aluzinc",
    description: "Aluminum-zinc coated steel with corrosion resistance.",
    color: "bg-zinc-600",
    image: "assets/images/roofing-sheets-color-coated-aluzinc.webp"
  },
]

export default function RoofingProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Dynamic products to show based on screen size
  const getProductsToShow = () => {
    return 1 // Default to 1 for mobile
  }

  const productsToShow = getProductsToShow()
  const maxIndex = Math.max(0, products.length - 1)

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setCurrentIndex(0) // Loop back to the beginning
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    } else {
      setCurrentIndex(maxIndex) // Loop to the end
    }
  }

  // Get the current visible products - on mobile we only show the current index
  const visibleProducts = [products[currentIndex]]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium text-base">OUR PRODUCTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-2 municipalsmb-3">
            Premium Roofing Materials
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-base">
            High-quality roofing products to protect and enhance your property.
          </p>
        </div>

        {/* Products Display */}
        <div className="relative mx-auto">
          {/* Mobile View (1 product) */}
          <div className="block md:hidden">
            <motion.div
              key={`mobile-${products[currentIndex].id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col mx-auto max-w-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={products[currentIndex].image}
                  alt={products[currentIndex].name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="100vw"
                />
                <div
                  className={`absolute top-3 left-3 ${products[currentIndex].color} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
                >
                  {products[currentIndex].name}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3">{products[currentIndex].name}</h3>
                <p className="text-gray-600 flex-grow">{products[currentIndex].description}</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop View (grid of products) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={`desktop-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className={`absolute top-3 left-3 ${product.color} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
                  >
                    {product.name}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-secondary mb-3">{product.name}</h3>
                  <p className="text-gray-600 flex-grow">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Dots */}
            <div className="flex items-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-primary w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              aria-label="Next products"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* View All Products Button */}
        {/* <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-md transition-colors duration-300"
          >
            <span>View All Products</span>
            <ArrowRight size={20} />
          </Link>
        </div> */}
      </div>
    </section>
  )
}