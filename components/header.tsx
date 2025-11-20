'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

export default function Header() {
  const [open, setOpen] = useState(false)

  const whatsappNumber = '2347034523498'
  const whatsappMessage = encodeURIComponent(
    'Hello LAMPSI HEIRS LIMITED, I would like to inquire about your products and services.'
  )

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'Projects', href: '#projects' },
    { label: 'Installation', href: '#productgallery' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (href: string) => {
    setOpen(false)
    // Smooth scroll with slight delay to ensure sheet closes first
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl font-bold text-primary uppercase tracking-tight">
              Lampsi Heirs
            </h1>
            <span className="hidden sm:block text-xs text-white/60 font-medium">
              Limited
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6"
            >
              Chat on WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-white hover:text-primary transition p-2 -mr-2">
                <Menu size={28} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-none sm:w-[400px] p-0 bg-gradient-to-b from-background via-background to-background/98"
            >
              {/* Custom Header with Close Button */}
              <SheetHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b border-border/30">
                <SheetTitle className="text-left">
                  <Link href="#" onClick={() => setOpen(false)} className="flex items-center space-x-3">
                    <div className="text-2xl font-bold text-primary">Lampsi Heirs</div>
                  </Link>
                </SheetTitle>
                <SheetClose className="rounded-full p-2 hover:bg-accent/50 transition">
                  <X size={26} className="text-foreground/70" />
                </SheetClose>
              </SheetHeader>

              {/* Navigation Links */}
              <nav className="flex flex-col px-6 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(item.href)
                      }}
                      className="block py-4 px-2 -mx-2 rounded-lg text-xl font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 tap-highlight-transparent"
                    >
                      {item.label}
                    </a>
                    {index < navItems.length - 1 && (
                      <div className="h-px bg-border/30 -mx-2" />
                    )}
                  </div>
                ))}
              </nav>

              {/* WhatsApp CTA - Sticky at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-lg border-t border-border/50">
                <Button
                  onClick={() => {
                    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
                    setOpen(false)
                  }}
                  className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl"
                  size="lg"
                >
                  Chat on WhatsApp
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Instant response • Available 24/7
                </p>
              </div>

              {/* Extra bottom padding to avoid overlap */}
              <div className="pb-32" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}