"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide exceptional roofing solutions that protect and enhance properties while delivering unmatched customer service and value.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description:
      "To be the most trusted and innovative roofing company in Ghana, setting the standard for quality, reliability, and customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, Excellence, Innovation, Teamwork, and Customer-Centricity guide every aspect of our business operations and relationships.",
  },
]

export default function AboutMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">OUR PURPOSE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Mission, Vision & Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The guiding principles that drive our company forward and shape our approach to every project.
          </p>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">{item.title}</h3>

              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

