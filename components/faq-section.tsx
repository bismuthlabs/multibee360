"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ data
const faqs = [
  {
    id: 1,
    question: "How long does a typical roof installation take?",
    answer:
      "The duration of a roof installation depends on several factors including the size of your roof, the materials being used, and weather conditions. For an average residential property, a complete roof installation typically takes 2-5 days. Commercial projects may take longer depending on complexity and scale.",
  },
  {
    id: 2,
    question: "What roofing materials do you recommend?",
    answer:
      "We recommend materials based on your specific needs, budget, climate, and aesthetic preferences. Popular options include asphalt shingles (affordable and versatile), metal roofing (durable and energy-efficient), tile roofing (long-lasting and distinctive), and slate (premium and elegant). During our consultation, we'll discuss the pros and cons of each option for your specific situation.",
  },
  {
    id: 3,
    question: "Do you provide warranties on your roofing work?",
    answer:
      "Yes, we provide comprehensive warranties on both materials and workmanship. Our material warranties typically range from 25-50 years depending on the product, while our workmanship warranty covers installation quality for 10 years. This ensures you're protected against manufacturing defects and installation issues.",
  },
  {
    id: 4,
    question: "How do I know if I need a roof repair or a complete replacement?",
    answer:
      "Several factors determine whether you need a repair or replacement, including the age of your roof, extent of damage, and your long-term plans for the property. We provide thorough inspections to assess issues like missing shingles, leaks, sagging, or extensive wear. If damage is isolated, repairs may suffice. However, if your roof is approaching the end of its lifespan (typically 20-25 years for asphalt) or has widespread issues, replacement is often more cost-effective.",
  },
  {
    id: 5,
    question: "Do you offer emergency roofing services?",
    answer:
      "Yes, we provide 24/7 emergency roofing services for situations that require immediate attention, such as storm damage, fallen trees, or sudden leaks. Our emergency team can quickly implement temporary solutions to prevent further damage until permanent repairs can be completed.",
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our roofing services, materials, and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} isOpen={openIndex === index} toggleOpen={() => toggleFAQ(index)} />
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
          <a
            href="tel:+233244211506"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-colors duration-300"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  )
}

