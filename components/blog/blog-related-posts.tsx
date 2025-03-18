"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock related posts data
const getRelatedPosts = (currentSlug: string) => {
  // In a real implementation, this would fetch posts related to the current one
  return [
    {
      id: 1,
      title: "How to Prepare Your Roof for the Rainy Season",
      slug: "prepare-roof-for-rainy-season",
      excerpt:
        "Essential steps to ensure your roof is ready to withstand heavy rains and prevent leaks and water damage.",
      publishedAt: "2023-04-10T14:20:00Z",
      readTime: "5 min read",
      category: "Seasonal Tips",
      coverImage: "/placeholder.svg?height=400&width=600&text=Rainy%20Season%20Prep",
    },
    {
      id: 2,
      title: "5 Common Roofing Mistakes to Avoid",
      slug: "common-roofing-mistakes-to-avoid",
      excerpt: "Learn about the most common mistakes made during roof installation and repairs, and how to avoid them.",
      publishedAt: "2023-02-18T08:30:00Z",
      readTime: "6 min read",
      category: "DIY Tips",
      coverImage: "/placeholder.svg?height=400&width=600&text=Roofing%20Mistakes",
    },
    {
      id: 3,
      title: "Understanding Roof Warranties: What's Covered and What's Not",
      slug: "understanding-roof-warranties",
      excerpt:
        "A comprehensive breakdown of manufacturer and contractor warranties for roofing, and what homeowners should know.",
      publishedAt: "2023-01-30T13:10:00Z",
      readTime: "9 min read",
      category: "Consumer Guide",
      coverImage: "/placeholder.svg?height=400&width=600&text=Roof%20Warranties",
    },
  ].filter((post) => post.slug !== currentSlug)
}

type BlogRelatedPostsProps = {
  currentSlug: string
}

export default function BlogRelatedPosts({ currentSlug }: BlogRelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentSlug)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">CONTINUE READING</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Related Articles</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Related Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100">
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <div className="flex items-center mr-3">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary text-sm font-medium hover:text-secondary transition-colors duration-300 mt-auto"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

