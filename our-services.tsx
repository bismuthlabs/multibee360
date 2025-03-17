"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Home, PenToolIcon as Tool, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Service data with image paths
const services = [
  {
    id: 1,
    icon: Tool,
    title: "Roof Installation",
    description: "Roof installations using industry-leading materials and a seamless finish that elevates your home or business.",
    features: ["Expert Installation Team", "Premium Materials", "Lifetime Warranty"],
    image: "assets/images/roof_installation.jpg"
  },
  {
    id: 2,
    icon: Home,
    title: "Roof Renovation",
    description: "Breathe new life into your property with combining cutting-edge techniques and lasting beauty.",
    features: ["Full Assessment", "Modern Solutions", "Quality Materials"],
    image: "assets/images/roof_renovation.jpg"
  },
  {
    id: 3,
    icon: Building2,
    title: "Modified Roofing",
    description: "Innovative roofing solutions engineered for resilience and aesthetic appeal, designed to withstand the elements while enhancing your property's character.",
    features: ["Accurate Testing Processes", "100% Satisfaction Guarantee", "Award-Winning Company"],
    image: "assets/images/about_us.jpg"
  },
]

// Background spiral pattern component
const SpiralPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    {[...Array(8)].map((_, i) => (
      <path
        key={i}
        d={`M ${500 + i * 50} 0 Q ${800 + i * 50} ${500} ${500 + i * 50} 1000`}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
      />
    ))}
    {[...Array(8)].map((_, i) => (
      <path
        key={i + 8}
        d={`M ${500 - i * 50} 0 Q ${200 - i * 50} ${500} ${500 - i * 50} 1000`}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
      />
    ))}
  </svg>
)

export default function OurServices() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="relative bg-secondary py-20 overflow-hidden">
      {/* Background Pattern */}
      <SpiralPattern />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">WHAT WE DO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
              Delivering High Quality Roof Services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-3 hover:bg-primary hover:border-primary transition-colors duration-300"
          >
            ALL SERVICES
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full group flex items-center gap-4 p-6 rounded-lg transition-all duration-300 ${
                    activeService.id === service.id
                      ? "bg-primary text-white"
                      : "bg-white text-secondary hover:bg-primary/10 hover:text-white"
                  }`}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <service.icon
                    className={`w-8 h-8 ${
                      activeService.id === service.id ? "text-white" : "text-primary group-hover:text-white"
                    }`}
                  />
                  <span className="flex-grow text-left text-lg font-medium">{service.title}</span>
                  <ArrowRight
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      activeService.id === service.id
                        ? "translate-x-0"
                        : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">{activeService.title}</h3>
                    <p className="text-gray-600 mb-6">{activeService.description}</p>
                    <ul className="space-y-4 mb-8">
                      {activeService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${activeService.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 hover:bg-secondary transition-colors duration-300"
                    >
                      READ MORE
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}