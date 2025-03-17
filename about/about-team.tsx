"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    position: "CEO & Founder",
    bio: "With over 30 years in the industry, Robert founded Multi-Bee 360 with a vision to transform the roofing sector through quality and innovation.",
    phone: "+233-24-421-1506",
    email: "robert@multibee360.com",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Project Manager",
    bio: "Sarah brings 15 years of project management expertise, ensuring every roofing project is completed on time, within budget, and to the highest standards.",
    phone: "+233-24-421-1507",
    email: "sarah@multibee360.com",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Michael Davis",
    position: "Lead Engineer",
    bio: "Michael's engineering background and passion for innovative solutions have been instrumental in developing our cutting-edge roofing techniques.",
    phone: "+233-24-421-1508",
    email: "michael@multibee360.com",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Customer Relations",
    bio: "Emily ensures our clients receive exceptional service from initial consultation through project completion and beyond.",
    phone: "+233-24-421-1509",
    email: "emily@multibee360.com",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
]

export default function AboutTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">OUR LEADERSHIP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Meet The Team Behind Our Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced team of professionals is dedicated to providing exceptional roofing solutions and customer
            service.
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
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
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

                {/* Social Media - Appears on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.facebook}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook size={16} className="text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={16} className="text-white" />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram size={16} className="text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 text-primary mr-2" />
                    <a
                      href={`tel:${member.phone.replace(/\D/g, "")}`}
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 text-primary mr-2" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

