"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Certification/Partner data
const certifications = [
  {
    id: 1,
    name: "Ghana Standards Authority",
    logo: "/placeholder.svg?height=100&width=200&text=GSA",
    description: "Certified for meeting the highest standards in roofing materials and installation practices.",
  },
  {
    id: 2,
    name: "Ghana Green Building Council",
    logo: "/placeholder.svg?height=100&width=200&text=GGBC",
    description: "Recognized for our commitment to sustainable and environmentally friendly roofing solutions.",
  },
  {
    id: 3,
    name: "International Roofing Association",
    logo: "/placeholder.svg?height=100&width=200&text=IRA",
    description:
      "Member of the global network of professional roofing contractors adhering to international best practices.",
  },
  {
    id: 4,
    name: "Ghana Contractors Association",
    logo: "/placeholder.svg?height=100&width=200&text=GCA",
    description: "Registered and certified member of the national association for professional contractors.",
  },
]

export default function AboutCertifications() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">OUR CREDENTIALS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Certifications & Partnerships</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to be recognized by leading industry organizations for our commitment to quality, safety, and
            excellence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="relative w-40 h-20 mb-6">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <h3 className="text-lg font-bold text-secondary mb-3">{cert.name}</h3>

              <p className="text-gray-600 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Partners */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-secondary text-center mb-8">Our Trusted Partners</h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((partner) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: partner * 0.05 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=Partner%20${partner}`}
                  alt={`Partner ${partner}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

