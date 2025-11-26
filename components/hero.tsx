'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Header from './header'

export default function Hero() {
  const whatsappNumber = '2347034523498'
  const whatsappMessage = encodeURIComponent(
    'I am interested in LAMPSI HEIRS LIMITED products and services. Please tell me more.'
  )

  return (
    <section className="relative min-h-screen w-screen flex flex-col justify-center overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/porcelain-tiles-modern-design.jpg"  // Correct path (inside /public folder)
          alt="Premium tiles and sanitary wares showroom"
          fill
          priority
          quality={75}
          className="object-cover object-center"
        />
        {/* Dark Overlay — This one will NEVER fail */}
        <div 
          className="absolute inset-0 bg-amber-900/60 "
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} // Extra insurance
        />
      </div>

      {/* Header (assumed to be fixed/absolute) */}
      <Header />

      {/* Main Hero Content - Perfectly Centered & Mobile Responsive */}
      <div className="relative flex-1 flex items-center justify-center px-4 md:mt-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">

            {/* Badge */}
            <span className="inline-block bg-white/20 text-white backdrop-blur-sm px-5 py-2.5 rounded-full text-sm sm:text-base font-light border border-white/30">
              Premium Quality Tiles & Sanitary Wares
            </span>
            <div className='flex flex-col gap-2'>
              {/* Main Heading - Responsive */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Beautiful Spaces Start<br className="sm:hidden" /> with Quality
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto">
                Premium Tiles and Granites, PVC Cladding, Sanitary Wares | Nationwide Delivery & Professional Installation.
              </p>
            </div>
            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6">
              <Button
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-lg font-light shadow-xl transition-all"
              >
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 sm:px-10 py-6 sm:py-7 text-lg border-2 border-white text-primary font-light hover:bg-white/20 backdrop-blur-sm transition-all"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Gallery
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}