import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesBanner from "@/components/services/services-banner"
import ServicesOverview from "@/components/services/services-overview"
import ServiceProcess from "@/components/services/service-process"
import ServicesCTA from "@/components/services/services-cta"
import ServicesTestimonials from "@/components/services/services-testimonials"
import ServicesFAQ from "@/components/services/services-faq"
import BackToTop from "@/components/back-to-top"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesBanner />
      <ServicesOverview />
      <ServiceProcess />
      <ServicesCTA />
      <ServicesTestimonials />
      <ServicesFAQ />
      <Footer />
      <BackToTop />
    </main>
  )
}

