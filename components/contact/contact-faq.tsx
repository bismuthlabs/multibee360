"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ data
const faqs = [
  {
    id: 1,
    question: "How quickly can I expect a response after submitting a contact form?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our direct line at +233-24-421-1506 or +233-54-949-2005 for immediate assistance.",
  },
  {
    id: 2,
    question: "Do you offer free consultations?",
    answer:
      "Yes, we provide free consultations and estimates for all roofing projects. Our expert team will assess your needs, discuss options, and provide a detailed quote with no obligation.",
  },
  {
    id: 3,
    question: "What information should I have ready when requesting a quote?",
    answer:
      "To provide the most accurate quote, it helps to have information about your property size, current roofing material, any specific issues you're experiencing, and your timeline for the project. Photos of your roof can also be helpful but are not required.",
  },
  {
    id: 4,
    question: "Do you serve areas outside of Kumasi?",
    answer:
      "Yes, while our main office is in Kumasi, we serve surrounding areas as well. Contact us with your location details, and we'll let you know if we can accommodate your project.",
  },
  {
    id: 5,
    question: "How do I schedule an emergency roof repair?",
    answer:
      "For emergency roof repairs, please call our emergency hotline at +233-24-421-1506 or +233-54-949-2005. This line is monitored 24/7, and we'll dispatch a team as quickly as possible to address your urgent roofing needs.",
  },
]

const FAQItem = ({
  faq,
  isOpen,
  toggleOpen,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  toggleOpen: () => void
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
          {faq.question}
        </h3>
        <div className="ml-4 flex-shrink-0 text-primary">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Contact & Support FAQs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about contacting us and getting support for your roofing needs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} isOpen={openIndex === index} toggleOpen={() => toggleFAQ(index)} />
          ))}
        </div>
      </div>
    </section>
  )
}

