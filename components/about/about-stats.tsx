"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Users, Home, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    icon: Home,
    value: 3800,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    value: 100,
    suffix: "%",
    label: "On-Time Completion",
  },
]

export default function AboutStats() {
  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Red Diagonal Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 z-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary transform skew-x-12 translate-x-1/3 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-medium">OUR ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Numbers That Define Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Over the years, we've achieved significant milestones that reflect our commitment to excellence and customer
            satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="p-4 bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              <div className="text-4xl font-bold mb-2">
                <CountUp to={stat.value} />
                {stat.suffix}
              </div>

              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simple counter animation component
function CountUp({ to }: { to: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!countRef.current) return

    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        animateCount()
      }
    })

    observer.current.observe(countRef.current)

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])

  const animateCount = () => {
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const easeOutQuad = (t: number) => t * (2 - t)

    let frame = 0
    const countTo = to

    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      const currentCount = Math.round(countTo * progress)

      if (currentCount >= countTo) {
        clearInterval(counter)
        setCount(countTo)
      } else {
        setCount(currentCount)
      }
    }, frameDuration)
  }

  return <span ref={countRef}>{count}</span>
}

