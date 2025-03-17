"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Metal Roofing Installation",
    category: "Commercial",
    description: "Complete metal roofing installation for industrial facility",
    image: "assets/images/projects/project_1.jpg"
  },
  {
    id: 2,
    title: "Modern House Roofing",
    category: "Residential",
    description: "Contemporary roofing design for modern architecture",
    image: "assets/images/projects/project_2.jpg"
  },
  {
    id: 3,
    title: "Solar Panel Integration",
    category: "Commercial",
    description: "Solar panel installation with roof modification",
    image: "assets/images/projects/project_3.jpg"
  },
  {
    id: 4,
    title: "Tile Roof Renovation",
    category: "Residential",
    description: "Premium tile roof renovation for luxury home",
    image: "assets/images/projects/project_4.jpg"
  },
  {
    id: 5,
    title: "Heritage Restoration",
    category: "Historical",
    description: "Careful restoration of historical building roofing",
    image: "assets/images/projects/project_5.jpg"
  },
  {
    id: 6,
    title: "Solar Panel Integration",
    category: "Commercial",
    description: "Solar panel installation with roof modification",
    image: "assets/images/projects/project_6.jpg"
  },
]

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <motion.div layout className="relative aspect-[4/3] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  )
}

export default function RecentWorks() {
  const [currentPage, setCurrentPage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Adjust projects per page based on screen size
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // For mobile, we'll show one project at a time
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0)
  const mobileMaxIndex = projects.length - 1

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const nextMobileProject = () => {
    setMobileCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevMobileProject = () => {
    setMobileCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-medium">RECENT WORKS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Explore Our Recent Projects</h2>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevPage}
              className="w-12 h-12 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center group"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={nextPage}
              className="w-12 h-12 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center group"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Mobile Projects (1 at a time) */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-project-${mobileCurrentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={projects[mobileCurrentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center items-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  mobileCurrentIndex === index ? "bg-primary w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prevMobileProject}
              className="w-12 h-12 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextMobileProject}
              className="w-12 h-12 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Projects Grid */}
        <div ref={containerRef} className="hidden md:block overflow-hidden">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial={false}>
            <AnimatePresence mode="popLayout">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}