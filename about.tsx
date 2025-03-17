"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Medal, Building, Shield, ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image and Experience Banner */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full lg:w-1/2"
          >
            {/* Main Image */}
            <div className="relative h-[500px] w-full">
              <Image
                src="assets/images/office_desk.jpg"
                alt="Roofing Professional"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Experience Banner */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -left-6 top-12 bg-primary text-white p-6 rounded-r-lg shadow-lg"
            >
              <Medal className="w-12 h-12 mb-3" />
              <div className="text-2xl font-bold">25 Years</div>
              <div className="text-sm">Working Experience</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">ABOUT US</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Devoted to Delivering Top Notch Roofing Solutions
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8">
              With over 25 years of expertise, we provide durable, high-quality roofing solutions tailored to your
              needs.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {/* Commercial Roofing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-red-50 rounded-lg">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Commercial Roofing</h3>
                  <p className="text-gray-600">Expert roofing for businesses, built to withstand the elements.</p>
                </div>
              </motion.div>

              {/* Best Roofing Warranty */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-red-50 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Best Roofing Warranty</h3>
                  <p className="text-gray-600">Industry-leading warranties for long-term peace of mind.</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center bg-primary hover:bg-secondary text-white px-8 py-4 font-medium transition-colors duration-300"
            >
              <span>ABOUT US</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

