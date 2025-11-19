'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  const whatsappNumber = '2348012345678'
  const whatsappMessage = encodeURIComponent('I am interested in Lampsiheirs Limited products and services. Please tell me more.')

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Premium Quality Tiles & Sanitary Wares
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Beautiful Spaces Start with Quality.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Premium Tiles and Granites, PVC Cladding, Sanitary Wares | Nationwide Delivery, Installation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`)}
                className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg"
              >
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/10 hover:text-primary"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Gallery
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/premium-tiles-and-sanitary-wares-showroom.jpg"
                alt="Premium tiles and sanitary wares"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
