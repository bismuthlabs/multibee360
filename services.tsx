"use client"

import { motion } from "framer-motion"
import { Hammer, Home, Building2, Clock } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Expert Engineer",
    description: "Skilled engineers ensure precise, reliable roofing solutions.",
  },
  {
    icon: Building2,
    title: "Quality Material",
    description: "Premium materials built to last in any weather.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your roofing needs.",
  },
  {
    icon: Home,
    title: "Roof Renovation",
    description: "Transform your roof with expert upgrades and repairs.",
  },
]

const DotPattern = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="absolute right-0 top-0 opacity-10">
    <g clipPath="url(#clip0_1_2)">
      <circle cx="90" cy="10" r="2" fill="currentColor" />
      <circle cx="70" cy="10" r="2" fill="currentColor" />
      <circle cx="50" cy="10" r="2" fill="currentColor" />
      <circle cx="30" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="90" cy="30" r="2" fill="currentColor" />
      <circle cx="70" cy="30" r="2" fill="currentColor" />
      <circle cx="50" cy="30" r="2" fill="currentColor" />
      <circle cx="30" cy="30" r="2" fill="currentColor" />
      <circle cx="10" cy="30" r="2" fill="currentColor" />
      <circle cx="90" cy="50" r="2" fill="currentColor" />
      <circle cx="70" cy="50" r="2" fill="currentColor" />
      <circle cx="50" cy="50" r="2" fill="currentColor" />
      <circle cx="30" cy="50" r="2" fill="currentColor" />
      <circle cx="10" cy="50" r="2" fill="currentColor" />
      <circle cx="90" cy="70" r="2" fill="currentColor" />
      <circle cx="70" cy="70" r="2" fill="currentColor" />
      <circle cx="50" cy="70" r="2" fill="currentColor" />
      <circle cx="30" cy="70" r="2" fill="currentColor" />
      <circle cx="10" cy="70" r="2" fill="currentColor" />
      <circle cx="90" cy="90" r="2" fill="currentColor" />
      <circle cx="70" cy="90" r="2" fill="currentColor" />
      <circle cx="50" cy="90" r="2" fill="currentColor" />
      <circle cx="30" cy="90" r="2" fill="currentColor" />
      <circle cx="10" cy="90" r="2" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_1_2">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const RedCorner = () => (
  <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
    <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary transform rotate-45 translate-x-8 translate-y-8"></div>
  </div>
)

export default function Services() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white p-8 group hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Background Pattern */}
              <div className="text-gray-200 group-hover:text-primary/20 transition-colors duration-300">
                <DotPattern />
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-16 h-16 bg-white rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3">{service.description}</p>
              </div>

              {/* Red Corner */}
              <RedCorner />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

