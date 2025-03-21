"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"

type BlogPostContentProps = {
  post: {
    title: string
    content: string
    slug: string
  }
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const shareUrl = `https://multibee360.com/blog/${post.slug}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    alert("Link copied to clipboard!")
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Social Sharing Sidebar */}
          <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 space-y-4">
            <div className="flex flex-col items-center space-y-3">
              <span className="text-xs font-medium text-gray-500 mb-2">SHARE</span>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Share via Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <button
                onClick={handleCopyLink}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Copy link"
              >
                <LinkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.article>

          {/* Mobile Social Sharing */}
          <div className="mt-12 lg:hidden">
            <div className="border-t border-b border-gray-200 py-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Share This Article</h3>
              <div className="flex items-center space-x-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Share via Email"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Copy link"
                >
                  <LinkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

