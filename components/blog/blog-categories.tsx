"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Categories data
const categories = [
  {
    name: "Roof Maintenance",
    slug: "roof-maintenance",
    count: 12,
    icon: "🔧",
    description: "Tips and guides for keeping your roof in optimal condition",
  },
  {
    name: "Roofing Materials",
    slug: "roofing-materials",
    count: 8,
    icon: "🏠",
    description: "Information about different roofing materials and their benefits",
  },
  {
    name: "Seasonal Tips",
    slug: "seasonal-tips",
    count: 6,
    icon: "🌦️",
    description: "Seasonal advice for protecting your roof year-round",
  },
  {
    name: "Roof Design",
    slug: "roof-design",
    count: 5,
    icon: "📐",
    description: "Architectural insights and design considerations for roofing",
  },
  {
    name: "DIY Tips",
    slug: "diy-tips",
    count: 7,
    icon: "🛠️",
    description: "Simple repairs and maintenance you can do yourself",
  },
  {
    name: "Consumer Guide",
    slug: "consumer-guide",
    count: 4,
    icon: "📋",
    description: "Helpful information for making informed roofing decisions",
  },
]

export default function BlogCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">EXPLORE BY CATEGORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Browse Articles By Topic</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the information you need by exploring our categorized content covering all aspects of roofing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/category/${category.slug}`}>
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-primary/5 transition-colors duration-300 border border-gray-100 hover:border-primary/20 h-full flex flex-col">
                  <div className="text-4xl mb-4">{category.icon}</div>

                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 flex-grow">{category.description}</p>

                  <div className="inline-flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 mt-auto">
                    <span>View Articles</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

