"use client"

import { motion } from "framer-motion"
import { Building2, Wrench, Shield, Award } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Building2,
    title: "Quality Materials",
    description: "Top-grade materials for roofs that endure the toughest conditions.",
  },
  {
    icon: Wrench,
    title: "Expert Engineers",
    description: "Seasoned pros delivering precision and skill to every project.",
  },
  {
    icon: Shield,
    title: "Roofing Warranty",
    description: "Robust warranties to safeguard your investment, worry-free.",
  },
]

// Background dot pattern component
const DotPattern = () => (
  <div className="absolute right-0 top-0 w-32 h-32 opacity-10">
    <div className="grid grid-cols-6 gap-2">
      {[...Array(36)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-current rounded-full"></div>
      ))}
    </div>
  </div>
)

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="assets/images/roof_warehouse.jpg"
                alt="Roofing Professional at Work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 text-gray-100">
              <DotPattern />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Section Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-primary font-medium">WHY CHOOSE US</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Few Reasons to Choose Our Company</h2>

              {/* Description */}
              <p className="text-gray-600 mb-12">
                With decades of expertise, we craft roofing solutions that blend durability, style, and unmatched value.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-red-50 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

