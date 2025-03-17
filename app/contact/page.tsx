import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactBanner from "@/components/contact/contact-banner"
import ContactInfo from "@/components/contact/contact-info"
import ContactForm from "@/components/contact/contact-form"
import ContactMap from "@/components/contact/contact-map"
import ContactFAQ from "@/components/contact/contact-faq"
import BackToTop from "@/components/back-to-top"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactFAQ />
      <Footer />
      <BackToTop />
    </main>
  )
}

