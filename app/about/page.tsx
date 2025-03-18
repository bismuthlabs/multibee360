import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutBanner from "@/components/about/about-banner"
import AboutStory from "@/components/about/about-story"
import AboutMission from "@/components/about/about-mission"
import AboutStats from "@/components/about/about-stats"
import AboutTeam from "@/components/about/about-team"
import AboutCertifications from "@/components/about/about-certifications"
import AboutTestimonials from "@/components/about/about-testimonials"
import AboutCTA from "@/components/about/about-cta"
import BackToTop from "@/components/back-to-top"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutBanner />
      <AboutStory />
      <AboutMission />
      <AboutStats />
      {/* <AboutTeam /> */}
      {/* <AboutCertifications /> */}
      <AboutTestimonials />
      <AboutCTA />
      <Footer />
      <BackToTop />
    </main>
  )
}

