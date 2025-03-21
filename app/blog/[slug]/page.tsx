import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPostHeader from "@/components/blog/blog-post-header"
import BlogPostContent from "@/components/blog/blog-post-content"
import BlogPostAuthor from "@/components/blog/blog-post-author"
import BlogRelatedPosts from "@/components/blog/blog-related-posts"
import BlogComments from "@/components/blog/blog-comments"
import BackToTop from "@/components/back-to-top"
import blogPosts from "@/data/blog-posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      <BlogPostAuthor author={post.author} />
      <BlogRelatedPosts currentSlug={post.slug} />
      <BlogComments postSlug={post.slug} />
      <Footer />
      <BackToTop />
    </main>
  )
}

