import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import BlogTagBanner from "@/components/blog/blog-tag-banner"
import BlogGrid from "@/components/blog/blog-grid"
import BlogNewsletter from "@/components/blog/blog-newsletter"
import blogPosts from "@/data/blog-posts"
import { notFound } from "next/navigation"

// Get all unique tags for static generation
export function generateStaticParams() {
  const allTags = blogPosts.flatMap((post) => post.tags)
  const uniqueTags = Array.from(new Set(allTags))

  return uniqueTags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default function BlogTagPage({ params }: { params: { tag: string } }) {
  // Convert slug back to tag name format
  const tagSlug = params.tag

  // Find the original tag name (with proper casing)
  const allTags = blogPosts.flatMap((post) => post.tags)
  const tagName = allTags.find((tag) => tag.toLowerCase().replace(/\s+/g, "-") === tagSlug)

  if (!tagName) {
    notFound()
  }

  // Filter posts by this tag
  const tagPosts = blogPosts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase().replace(/\s+/g, "-") === tagSlug),
  )

  return (
    <main className="min-h-screen">
      <Header />
      <BlogTagBanner tag={tagName} />
      <BlogGrid posts={tagPosts} />
      <BlogNewsletter />
      <Footer />
      <BackToTop />
    </main>
  )
}

