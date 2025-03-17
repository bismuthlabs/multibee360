import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogBanner from "@/components/blog/blog-banner"
import BlogFeatured from "@/components/blog/blog-featured"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import BlogNewsletter from "@/components/blog/blog-newsletter"
import BackToTop from "@/components/back-to-top"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogBanner />
      <BlogFeatured />
      <BlogGrid />
      <BlogCategories />
      <BlogNewsletter />
      <Footer />
      <BackToTop />
    </main>
  )
}

