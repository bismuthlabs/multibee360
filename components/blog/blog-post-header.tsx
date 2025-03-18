"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Tag, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type BlogPostHeaderProps = {
  post: {
    title: string
    publishedAt: string
    updatedAt?: string
    readTime: string
    category: string
    tags: string[]
    coverImage: string
  }
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <section className="relative bg-secondary text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-secondary/70"></div>
      </div>

      {/* Red Diagonal Element */}
      <div className="absolute top-0 left-0 w-1/4 h-full z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-primary transform -skew-x-12 -translate-x-1/2 opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-sm mb-6"
          >
            <Link href="/" className="text-white/70 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-white/50" />
            <Link href="/blog" className="text-white/70 hover:text-white transition-colors duration-300">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-white/50" />
            <span className="text-white">{post.title}</span>
          </motion.div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-block bg-primary text-white text-sm font-medium px-4 py-1 rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              {post.category}
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center text-sm text-white/80 mb-8"
          >
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                Published:{" "}
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {post.updatedAt && (
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  Updated:{" "}
                  {new Date(post.updatedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            )}

            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2"
          >
            <Tag className="w-4 h-4" />
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

