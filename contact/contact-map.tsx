"use client"

import { motion } from "framer-motion"

export default function ContactMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">OUR LOCATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Find Us On The Map</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our office in Kumasi, opposite Santaasi Clinic, near Opoku Ware Secondary School.
          </p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md"
        >
          {/* This is a placeholder for the map. In a real implementation, you would use Google Maps or another mapping service */}
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-600 mb-4">Map Placeholder</p>
              <p className="text-gray-600">
                In a real implementation, this would be replaced with an interactive Google Map showing the location of
                Multi-Bee 360 Roofing System in Kumasi.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Location Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-secondary mb-2">Address</h3>
            <p className="text-gray-600">Kumasi, Opp. Santaasi Clinic (Near Opoku Ware Sec. School)</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-secondary mb-2">Working Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-secondary mb-2">Contact</h3>
            <p className="text-gray-600">
              Phone:{" "}
              <a href="tel:+233244211506" className="hover:text-primary transition-colors duration-300">
                +233-24-421-1506
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@multibee360.com" className="hover:text-primary transition-colors duration-300">
                info@multibee360.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

