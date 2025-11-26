'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import Reveal from './reveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const whatsappNumber = '2347034523498'
  const phoneNumber = '+234-703-4523-498'
  const email = 'victorcourage375@gmail.com'
  const address = 'Lagos, Nigeria'

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello, I'm ${formData.name}. ${formData.message}`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`)
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions about our products or services? We're here to help.
              </p>
            </div>

    <div className="flex flex-col gap-6  ">
      {/* Phone – Click to Call */}
      <a
        href={`tel:${phoneNumber.replace(/[^+\d]/g, '')}`} // Strips spaces/dashes
        className="flex gap-4 group transition-all hover:bg-secondary/5 rounded-lg -m-2 p-2"
      >
        <div className="flex shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Phone</h3>
          <p className="text-primary font-medium ">
            {phoneNumber}
          </p>
        </div>
      </a>

      {/* Email – Click to Email */}
      <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 group transition-all hover:bg-secondary/5 rounded-lg -m-2 p-2"
      >
        <div className="flex shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Email</h3>
          <p className="text-primary font-medium break-all">
            {email}
          </p>
        </div>
      </a>

      {/* Location – Non-clickable (or add Google Maps link if you want) */}
      <div className="flex gap-4">
        <div className="flex shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Location</h3>
          <p className="text-muted-foreground">{address}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Business hours: Mon–Sat: 8am–6pm
          </p>
        </div>
      </div>
    </div>

            <Button
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg w-full md:w-auto"
            >
              Chat on WhatsApp
            </Button>
          </div>
          </Reveal>

          <Reveal>
          {/* Contact Form */}
          <div className="bg-secondary/5 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Get a Free Quote</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full bg-primary hover:bg-primary/80 text-white py-6 text-lg"
              >
                Send via WhatsApp
              </Button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
