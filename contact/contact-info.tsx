"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">CONTACT INFORMATION</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">We're Here To Help You</h2>

            <p className="text-gray-600 mb-10">
              Have questions about our roofing services or want to schedule a consultation? Reach out to us using any of
              the contact methods below, and our team will get back to you promptly.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-red-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Our Location</h3>
                  <p className="text-gray-600">Kumasi, Opp. Santaasi Clinic (Near Opoku Ware Sec. School)</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-red-50 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href="tel:+233244211506" className="hover:text-primary transition-colors duration-300">
                      +233-24-421-1506
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-red-50 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Email Address</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@multibee360.com" className="hover:text-primary transition-colors duration-300">
                      info@multibee360.com
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-red-50 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold text-secondary mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-lg border border-gray-100 flex flex-col justify-center"
          >
            <div className="bg-primary/10 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">Emergency Roofing Service</h3>
              <p className="text-gray-600 mb-6">
                Experiencing a roofing emergency? We offer 24/7 emergency services for situations that require immediate
                attention.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Emergency Hotline</p>
                  <a
                    href="tel:+233244211506"
                    className="text-xl font-bold text-primary hover:text-secondary transition-colors duration-300"
                  >
                    +233-24-421-1506
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Request a Free Quote</h3>
              <p className="mb-6">
                Fill out our contact form below to request a free, no-obligation quote for your roofing project.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-white/80 text-sm">Quick Response Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

