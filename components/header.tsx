"use client"

import { useState } from "react"
import { usePathname } from "next/navigation" // Import usePathname
import Link from "next/link"
import { Phone, Menu, X, ArrowRight } from "lucide-react"
import Logo from "@/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // Get the current pathname

  // Navigation links array for DRY code
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-secondary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-primary" : "text-white hover:text-primary"
              } transition-colors duration-300 font-medium`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-primary hover:bg-secondary text-white px-6 py-3 font-medium transition-colors duration-300 flex items-center space-x-2 border border-primary"
          >
            <span>FREE CONSULTATION</span>
            <ArrowRight className="ml-1" size={18} />
          </Link>
          <div className="flex items-center space-x-3 ml-4">
            <div className="bg-primary rounded-full p-2 flex items-center justify-center">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm">Call Us Now</p>
              <p className="font-bold">+233-24-421-1506</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary absolute top-20 left-0 w-full p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-primary" : "text-white hover:text-primary"
                } transition-colors duration-300 font-medium py-2`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary hover:bg-secondary text-white px-6 py-3 font-medium transition-colors duration-300 flex items-center justify-center space-x-2 border border-primary"
            >
              <span>FREE CONSULTATION</span>
              <ArrowRight className="ml-1" size={18} />
            </Link>
            <div className="flex items-center space-x-3 py-2">
              <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm">Call Us Now</p>
                <p className="font-bold">+233-24-421-1506</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}