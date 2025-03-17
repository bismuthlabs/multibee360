"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
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
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="assets/images/about/office_desk.jpg"
                alt="Multi-Bee 360 History"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Founding Year Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">2005</div>
              <div className="text-sm">Year Founded</div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">OUR STORY</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              The Journey of Multi-Bee 360 Roofing System
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2005, Multi-Bee 360 Roofing System began as a small family business with a simple mission: to
                provide quality roofing solutions with unmatched customer service. What started as a team of three
                dedicated professionals has now grown into one of the most trusted roofing companies in Ghana.
              </p>

              <p>
                Our founder, with over 30 years of experience in the construction industry, recognized a gap in the
                market for reliable, high-quality roofing services. Drawing on his expertise and passion for excellence,
                he established Multi-Bee 360 with a commitment to integrity, craftsmanship, and innovation.
              </p>

              <p>
                Over the years, we've weathered economic challenges, embraced technological advancements, and
                continuously refined our processes to stay at the forefront of the industry. Today, we're proud to have
                served thousands of satisfied customers, from homeowners to large commercial enterprises.
              </p>

              <p>
                Our growth is a testament to our unwavering dedication to quality and customer satisfaction. As we
                continue to expand, we remain true to our roots and the values that have guided us from the beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

