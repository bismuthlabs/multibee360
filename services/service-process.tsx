"use client"

import { motion } from "framer-motion"
import { PhoneCall, ClipboardCheck, HardHat, CheckSquare } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    id: 1,
    icon: PhoneCall,
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your roofing needs and receive expert advice.",
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: "Detailed Assessment",
    description:
      "Our team conducts a thorough inspection and provides a comprehensive proposal with transparent pricing.",
  },
  {
    id: 3,
    icon: HardHat,
    title: "Professional Installation",
    description:
      "Experienced technicians execute the project with precision, using quality materials and best practices.",
  },
  {
    id: 4,
    icon: CheckSquare,
    title: "Final Inspection",
    description: "We perform a detailed quality check and walkthrough to ensure your complete satisfaction.",
  },
]

export default function ServiceProcess() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">OUR PROCESS</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">How We Deliver Excellence</h2>

            <p className="text-gray-600 mb-10">
              Our streamlined process ensures quality, efficiency, and satisfaction at every step of your roofing
              project. We prioritize clear communication and exceptional craftsmanship from start to finish.
            </p>

            {/* Process Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                      <step.icon className="w-6 h-6" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2"></div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="assets/images/services/roof_maintenance.jpg"
                alt="Roofing Process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-lg shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3,800+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

