import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPostHeader from "@/components/blog/blog-post-header"
import BlogPostContent from "@/components/blog/blog-post-content"
import BlogPostAuthor from "@/components/blog/blog-post-author"
import BlogRelatedPosts from "@/components/blog/blog-related-posts"
import BlogComments from "@/components/blog/blog-comments"
import BackToTop from "@/components/back-to-top"

// This would typically come from a CMS or API
const getBlogPost = (slug: string) => {
  return {
    title: "10 Signs Your Roof Needs Immediate Attention",
    slug: "10-signs-your-roof-needs-immediate-attention",
    excerpt:
      "Learn the critical warning signs that indicate your roof requires professional inspection and potential repairs.",
    content: `
      <p>Your roof is your home's first line of defense against the elements, and recognizing when it needs attention is crucial to prevent costly damage. Here are ten warning signs that indicate your roof may need immediate professional attention:</p>
      
      <h2>1. Missing or Damaged Shingles</h2>
      <p>After severe weather, inspect your roof for missing, cracked, or curling shingles. These damaged areas can allow water to penetrate your roof, leading to leaks and interior damage.</p>
      
      <h2>2. Sagging Roof Deck</h2>
      <p>A sagging roof deck is a serious structural issue that requires immediate attention. It often indicates water damage or weakened supporting structures.</p>
      
      <h2>3. Water Stains on Ceilings or Walls</h2>
      <p>Water stains on your interior ceilings or walls are clear indicators of a leaking roof. Even small stains should be investigated promptly.</p>
      
      <h2>4. Granules in Gutters</h2>
      <p>If you find an excessive amount of granules from your shingles in the gutters, it's a sign that your roof is deteriorating and may need replacement.</p>
      
      <h2>5. Daylight Through Roof Boards</h2>
      <p>Check your attic during daylight hours. If you can see light coming through the roof boards, it means there are gaps that can also let in water and air.</p>
      
      <h2>6. High Energy Bills</h2>
      <p>A sudden increase in heating or cooling costs could indicate that your roof is no longer providing proper insulation due to damage or wear.</p>
      
      <h2>7. Moss or Algae Growth</h2>
      <p>While sometimes just an aesthetic issue, extensive moss or algae growth can damage roofing materials over time by retaining moisture.</p>
      
      <h2>8. Damaged Flashing</h2>
      <p>Flashing seals the joints around chimneys, vents, and skylights. Damaged flashing can lead to leaks at these vulnerable points.</p>
      
      <h2>9. Roof Age</h2>
      <p>Most asphalt shingle roofs last 20-25 years. If your roof is approaching or has exceeded this age, it's time to consider replacement, even if there are no obvious signs of damage.</p>
      
      <h2>10. Interior Mold or Mildew</h2>
      <p>Unexplained mold or mildew growth in your attic or on upper floors can indicate roof leaks that are creating excess moisture.</p>
      
      <h2>When to Call a Professional</h2>
      <p>If you notice any of these signs, it's important to contact a professional roofing contractor for a thorough inspection. At Multi-Bee 360 Roofing System, our experienced team can identify issues early and recommend the appropriate repairs or replacement options.</p>
      
      <p>Remember, addressing roofing problems promptly can save you from more extensive and expensive repairs down the line. Regular maintenance and inspections are key to extending the life of your roof and protecting your home.</p>
    `,
    publishedAt: "2023-06-15T10:30:00Z",
    updatedAt: "2023-06-20T14:45:00Z",
    readTime: "6 min read",
    category: "Roof Maintenance",
    tags: ["Roof Repair", "Home Maintenance", "Roof Inspection", "Leaks"],
    coverImage: "/placeholder.svg?height=600&width=1200&text=Roof%20Warning%20Signs",
    author: {
      name: "Michael Davis",
      role: "Lead Engineer",
      image: "/placeholder.svg?height=100&width=100&text=MD",
      bio: "Michael has over 15 years of experience in roofing engineering and is passionate about educating homeowners on proper roof maintenance.",
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

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

