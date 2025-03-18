"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Signs Your Roof Needs Immediate Attention",
    slug: "10-signs-your-roof-needs-immediate-attention",
    excerpt:
      "Learn the critical warning signs that indicate your roof requires professional inspection and potential repairs.",
    publishedAt: "2023-06-15T10:30:00Z",
    readTime: "6 min read",
    category: "Roof Maintenance",
    tags: ["Roof Repair", "Home Maintenance", "Roof Inspection", "Leaks"],
    coverImage: "/placeholder.svg?height=400&width=600&text=Roof%20Warning%20Signs",
  },
  {
    id: 2,
    title: "Metal vs. Asphalt Shingles: Which Roofing Material is Right for You?",
    slug: "metal-vs-asphalt-shingles-comparison",
    excerpt:
      "Compare the benefits, drawbacks, and costs of metal roofing and asphalt shingles to make the best choice for your home.",
    publishedAt: "2023-05-22T09:15:00Z",
    readTime: "8 min read",
    category: "Roofing Materials",
    tags: ["Metal Roofing", "Asphalt Shingles", "Roofing Comparison", "Cost Analysis"],
    coverImage: "/placeholder.svg?height=400&width=600&text=Roofing%20Materials",
  },
  {
    id: 3,
    title: "How to Prepare Your Roof for the Rainy Season",
    slug: "prepare-roof-for-rainy-season",
    excerpt:
      "Essential steps to ensure your roof is ready to withstand heavy rains and prevent leaks and water damage.",
    publishedAt: "2023-04-10T14:20:00Z",
    readTime: "5 min read",
    category: "Seasonal Tips",
    tags: ["Rainy Season", "Roof Preparation", "Gutter Maintenance", "Waterproofing"],
    coverImage: "/placeholder.svg?height=400&width=600&text=Rainy%20Season%20Prep",
  },
  {
    id: 4,
    title: "The Complete Guide to Roof Ventilation",
    slug: "complete-guide-roof-ventilation",
    excerpt:
      "Understanding the importance of proper roof ventilation and how it affects your home's energy efficiency and roof longevity.",
    publishedAt: "2023-03-05T11:45:00Z",
    readTime: "7 min read",
    category: "Roof Design",
    tags: ["Ventilation", "Energy Efficiency", "Attic Insulation", "Roof Longevity"],
    coverImage: "/placeholder.svg?height=400&width=600&text=Roof%20Ventilation",
  },
  {
    id: 5,
    title: "5 Common Roofing Mistakes to Avoid",
    slug: "common-roofing-mistakes-to-avoid",
    excerpt: "Learn about the most common mistakes made during roof installation and repairs, and how to avoid them.",
    publishedAt: "2023-02-18T08:30:00Z",
    readTime: "6 min read",
    category: "DIY Tips",
    tags: ["Common Mistakes", "DIY Roofing", "Professional Installation", "Quality Materials"],
    coverImage: "/placeholder.svg?height=400&width=600&text=Roofing%20Mistakes",
  },
  {
    id: 6,
    title: "Understanding Roof Warranties: What's Covered and What's Not",
    slug: "understanding-roof-warranties",
    excerpt:
      "A comprehensive breakdown of manufacturer and contractor warranties for roofing, and what homeowners should know.",
    publishedAt: "2023-01-30T13:10:00Z",
    readTime: "9 min read",
    category: "Consumer Guide",
    tags: ["Warranties", "Consumer Protection", "Manufacturer Warranty", "Contractor Warranty"],
    coverImage: "/placeholder.svg?height=400&width=600&text=Roof%20Warranties",
  },
]

// All available categories
const allCategories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">ALL ARTICLES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Browse Our Roofing Knowledge Base</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert advice, industry insights, and practical tips to help you make informed decisions about your
            roofing needs.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="relative md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none bg-white"
              >
                {allCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ArrowRight className="w-5 h-5 text-gray-400 transform rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-secondary mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`w-10 h-10 rounded-md ${
                    currentPage === number
                      ? "bg-primary text-white"
                      : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

