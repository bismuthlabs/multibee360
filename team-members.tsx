"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import Image from "next/image"

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    position: "CEO & Founder",
    phone: "+1 (208) 555-0121",
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Project Manager",
    phone: "+1 (208) 555-0122",
  },
]

// Background pattern component
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Top right circles */}
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-primary/5"></div>
    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-primary/5"></div>

    {/* Bottom left circles */}
    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-primary/5"></div>
    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-primary/5"></div>

    {/* Diagonal lines */}
    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
    <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
    <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
  </div>
)

export default function TeamMembers() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <BackgroundPattern />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">OUR TEAM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of dedicated professionals brings years of experience and expertise to every roofing project,
            ensuring quality and satisfaction.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=320&width=240&text=${encodeURIComponent(member.name)}`}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Phone Number - Appears on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a href={`tel:${member.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-white">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

