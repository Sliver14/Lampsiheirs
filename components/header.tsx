'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react' // Removed unused 'X' import
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const whatsappNumber = '2347034523498'
  const whatsappMessage = encodeURIComponent(
    'Hello LAMPSI HEIRS LIMITED, I would like to inquire about your products and services.'
  )

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/#products' },
    { label: 'Projects', href: '/projects' },
    { label: 'FAQs', href: '/#faqs' },
    { label: 'About Us', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (href: string) => {
    setOpen(false)

    // Extract hash (#section)
    const isHashLink = href.startsWith('/#')
    const hash = href.replace('/#', '#')

    if (isHashLink) {
      if (pathname === '/') {
        // Already on homepage → smooth scroll
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        // Navigate to homepage with hash
        router.push(href)
      }
    } else {
      // Normal navigation (like /projects)
      router.push(href)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-800/60 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="/lampsi_logo(2).png"
              alt="Lampsi Heirs Limited Logo"
              width={80}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-light text-white hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-light px-6"
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
              className="w-full max-w-none sm:w-[400px] p-0 bg-background/98 backdrop-blur-xl"
            >
              {/* Header: Manual Close Button Removed (SheetContent has one by default) */}
              <SheetHeader className="flex flex-row items-center justify-between p-6 border-b border-border/30">
                <SheetTitle className="text-left">
                  <Link href="#" onClick={() => setOpen(false)} className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-primary">Lampsi Heirs</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Navigation */}
              <nav className="px-6 py-8 space-y-1">
                {navItems.map((item, index) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="block py-4 text-xl font-medium text-foreground hover:text-primary hover:bg-accent/40 rounded-lg px-3 -mx-3 transition-all"
                    >
                      {item.label}
                    </a>
                    {index < navItems.length - 1 && (
                      <div className="h-px bg-border/20 last:hidden" />
                    )}
                  </div>
                ))}
              </nav>

              {/* Sticky WhatsApp Button at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-xl border-t border-border/30">
                <Button
                  onClick={() => {
                    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
                    setOpen(false)
                  }}
                  className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl"
                >
                  Chat on WhatsApp
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Instant response • Available 24/7
                </p>
              </div>

              <div className="pb-32" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}