"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

type BlogPostAuthorProps = {
  author: {
    name: string
    role: string
    image: string
    bio: string
  }
}

export default function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start"
          >
            {/* Author Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/10">
              <Image
                src={author.image || "/placeholder.svg"}
                alt={author.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>

            {/* Author Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-secondary mb-1">{author.name}</h3>
              <p className="text-primary mb-4">{author.role}</p>
              <p className="text-gray-600 mb-4">{author.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={`${author.name}'s Facebook`}
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={`${author.name}'s Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={`${author.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${author.name.toLowerCase().replace(/\s+/g, ".")}@multibee360.com`}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={`Email ${author.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

