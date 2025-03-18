"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="assets/images/testimonial_bg.jpg"
          alt="Roofing Services"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/90"></div>
      </div>

      {/* Red Diagonal Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 z-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary transform skew-x-12 translate-x-1/3 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Roof?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 mb-10 text-lg"
          >
            Contact us today for a free consultation and estimate. Our expert team is ready to provide the perfect
            roofing solution for your property.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 font-medium transition-colors duration-300 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <span>GET A QUOTE</span>
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+233244211506"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-medium transition-colors duration-300 flex items-center gap-3 min-w-[200px] justify-center backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span>+233-24-421-1506</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

