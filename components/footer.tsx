"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Providing top-quality roofing solutions with over 25 years of experience. We pride ourselves on
              exceptional craftsmanship and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Kumasi, Opp. Santaasi Clinic (Near Opoku Ware Sec. School)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+12085550112" className="hover:text-primary transition-colors duration-300">
                  +233-24-421-1506
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@multibee360.com" className="hover:text-primary transition-colors duration-300">
                  info@multibee360.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Office Hours</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-300">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-gray-300">9:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-300">Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {["About", "Services", "Blog", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Multi-Bee 360 Roofing System. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

