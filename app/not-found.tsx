"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Home, Search, ArrowLeft, Wrench, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-grow py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-40 mb-8"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold text-gray-200">404</div>
                {/* <div className="absolute">
                  <Image src="/roof-icon.svg" alt="Roof Icon" width={120} height={120} className="opacity-90" />
                </div> */}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Page Not Found</h1>

              <p className="text-gray-600 mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily
                unavailable.
              </p>

              {/* Suggestions */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-bold text-secondary mb-4">Here are some helpful links:</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 p-4 bg-gray-50 hover:bg-primary/5 text-secondary hover:text-primary rounded-lg transition-colors duration-300"
                  >
                    <Home className="w-5 h-5" />
                    <span>Home Page</span>
                  </Link>

                  <Link
                    href="/services"
                    className="flex items-center justify-center gap-2 p-4 bg-gray-50 hover:bg-primary/5 text-secondary hover:text-primary rounded-lg transition-colors duration-300"
                  >
                    <Wrench className="w-5 h-5" />
                    <span>Our Services</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 p-4 bg-gray-50 hover:bg-primary/5 text-secondary hover:text-primary rounded-lg transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>

              {/* Back and Search Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-md transition-colors duration-300 w-full sm:w-auto"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Go Back</span>
                </button>

                <Link
                  href="/blog"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md transition-colors duration-300 w-full sm:w-auto"
                >
                  <Search className="w-5 h-5" />
                  <span>Browse Our Blog</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

