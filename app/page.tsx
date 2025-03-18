import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import RoofingProducts from "@/components/roofing-products"
import About from "@/components/about"
import OurServices from "@/components/our-services"
import WhyChooseUs from "@/components/why-choose-us"
import RecentWorks from "@/components/recent-works"
import TeamMembers from "@/components/team-members"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <RoofingProducts />
      <About />
      <OurServices />
      <WhyChooseUs />
      <RecentWorks />
      <TeamMembers />
      <Testimonials />
      <FAQSection />
      <Footer />
      <BackToTop />
    </main>
  )
}

