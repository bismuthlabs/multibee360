import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import BlogCategoryBanner from "@/components/blog/blog-category-banner"
import BlogGrid from "@/components/blog/blog-grid"
import BlogNewsletter from "@/components/blog/blog-newsletter"
import blogPosts from "@/data/blog-posts"
import { notFound } from "next/navigation"

// Get all unique categories for static generation
export function generateStaticParams() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  // Convert slug back to category name format
  const categorySlug = params.category

  // Find posts that match this category
  const categoryName = blogPosts.find(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === categorySlug,
  )?.category

  if (!categoryName) {
    notFound()
  }

  // Filter posts by this category
  const categoryPosts = blogPosts.filter((post) => post.category === categoryName)

  return (
    <main className="min-h-screen">
      <Header />
      <BlogCategoryBanner category={categoryName} />
      <BlogGrid posts={categoryPosts} />
      <BlogNewsletter />
      <Footer />
      <BackToTop />
    </main>
  )
}

