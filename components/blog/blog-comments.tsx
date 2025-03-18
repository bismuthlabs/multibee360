"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageSquare } from "lucide-react"
import Image from "next/image"

// Mock comments data
const getComments = (postSlug: string) => {
  // In a real implementation, this would fetch comments for the specific post
  return [
    {
      id: 1,
      author: "Jennifer Anderson",
      authorImage: "/placeholder.svg?height=60&width=60&text=JA",
      date: "2023-06-18T15:30:00Z",
      content:
        "This article was incredibly helpful! I've been noticing some issues with my roof and now I know exactly what to look for. I'll definitely be scheduling an inspection soon.",
      replies: [
        {
          id: 101,
          author: "Michael Davis",
          authorImage: "/placeholder.svg?height=60&width=60&text=MD",
          date: "2023-06-18T16:45:00Z",
          content:
            "Thanks for your comment, Jennifer! I'm glad you found the article helpful. Feel free to reach out if you have any specific questions about your roof.",
        },
      ],
    },
    {
      id: 2,
      author: "David Thompson",
      authorImage: "/placeholder.svg?height=60&width=60&text=DT",
      date: "2023-06-20T09:15:00Z",
      content:
        "Great information! I never realized that high energy bills could be a sign of roof problems. I'll be checking my attic for proper insulation this weekend.",
      replies: [],
    },
  ]
}

type BlogCommentsProps = {
  postSlug: string
}

export default function BlogComments({ postSlug }: BlogCommentsProps) {
  const comments = getComments(postSlug)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Simulate comment submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, this would send the comment to the server
    alert("Comment submitted successfully! In a real implementation, this would be added to the comments section.")

    setNewComment("")
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-secondary">Comments ({comments.length})</h2>
          </div>

          {/* Comments List */}
          <div className="space-y-8 mb-12">
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    {/* Author Image */}
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={comment.authorImage || "/placeholder.svg"}
                        alt={comment.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-bold text-secondary">{comment.author}</h4>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">
                          {new Date(comment.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-0">{comment.content}</p>
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="ml-12 mt-4 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                        <div className="flex items-start gap-4">
                          {/* Author Image */}
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={reply.authorImage || "/placeholder.svg"}
                              alt={reply.author}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h4 className="font-bold text-secondary">{reply.author}</h4>
                              <span className="text-gray-500 text-sm">•</span>
                              <span className="text-gray-500 text-sm">
                                {new Date(reply.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>

                            <p className="text-gray-600 mb-0">{reply.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Comment Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-bold text-secondary mb-6">Leave a Comment</h3>

            <form onSubmit={handleSubmitComment}>
              <div className="mb-6">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts on this article..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || !newComment.trim()}
                  className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Post Comment</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

