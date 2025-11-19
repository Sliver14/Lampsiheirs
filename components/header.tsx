'use client'

import { useState} from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = '2348012345678'
  const whatsappMessage = encodeURIComponent('Hello Lampsiheirs Limited, I would like to inquire about your products and services.')

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" >
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary uppercase">Lampsi heirs limited</h1>
              <p className="text-xs text-muted-foreground">Premium Building Materials</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition">
              About Us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition">
              Products
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition">
              Projects
            </a>
            <a href="#faqs" className="text-foreground hover:text-primary transition">
              FAQs
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
            <Button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`)}
              className="bg-primary hover:bg-primary/80 text-white"
            >
              Chat on WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="#about" className="block text-foreground hover:text-primary">
              About Us
            </a>
            <a href="#services" className="block text-foreground hover:text-primary">
              Services
            </a>
            <a href="#products" className="block text-foreground hover:text-primary">
              Products
            </a>
            <a href="#projects" className="block text-foreground hover:text-primary">
              Projects
            </a>
            <a href="#faqs" className="block text-foreground hover:text-primary">
              FAQs
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary">
              Contact
            </a>
            <Button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`)}
              className="w-full bg-primary hover:bg-primary/80 text-white"
            >
              Chat on WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
