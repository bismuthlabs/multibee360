"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Home, PenToolIcon as Tool, Wrench, CheckCircle2, ArrowRight, Shield, Ruler } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Service data
const services = [
  {
    id: 1,
    icon: Building2,
    title: "Modified Roofing",
    description:
      "Custom roofing that blends strength with style, tailored to endure harsh weather conditions and provide long-lasting protection.",
    features: [
      "Accurate Testing Processes",
      "100% Satisfaction Guarantee",
      "Award-Winning Company",
      "Premium Materials",
    ],
    image: "assets/images/services/mod_roof.jpg",
  },
  {
    id: 2,
    icon: Tool,
    title: "Roof Installation",
    description:
      "Flawless installs with top-tier materials for a roof that stands tall against the elements, providing reliable protection for your property.",
    features: ["Expert Installation Team", "Premium Materials", "Lifetime Warranty", "Timely Completion"],
    image: "assets/images/services/project_5.jpg",
  },
  {
    id: 3,
    icon: Home,
    title: "Roof Renovation",
    description:
      "Revive your roof with stunning upgrades that shine and protect, transforming your property's appearance while enhancing its durability.",
    features: ["Full Assessment", "Modern Solutions", "Quality Materials", "Efficient Process"],
    image: "assets/images/services/project_3.jpg",
  },
  {
    id: 4,
    icon: Shield,
    title: "Roof Maintenance",
    description:
      "Regular maintenance services to extend the life of your roof, prevent costly repairs, and ensure optimal performance year-round.",
    features: ["Scheduled Inspections", "Preventative Care", "Debris Removal", "Minor Repairs"],
    image: "assets/images/services/roof_maintenance.jpg",
  },
  {
    id: 5,
    icon: Ruler,
    title: "Roof Inspection",
    description:
      "Thorough inspections to identify potential issues before they become major problems, ensuring the integrity and longevity of your roofing system.",
    features: ["Detailed Reports", "Thermal Imaging", "Structural Analysis", "Expert Recommendations"],
    image: "assets/images/services/roof_inspection.jpg",
  },
]

export default function ServicesOverview() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Comprehensive Roofing Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional roofing services to meet all your needs, from installation and repair
            to maintenance and inspection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-full">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-secondary font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 text-sm mb-4">
                          Our {service.title.toLowerCase()} service is designed to provide maximum value and long-term
                          protection for your property. We use only the highest quality materials and employ experienced
                          professionals to ensure exceptional results.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

