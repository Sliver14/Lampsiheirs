'use client'

import { 
  Square, 
  Droplets, 
  ShowerHead, 
  Bath, 
  CarFront 
} from 'lucide-react'
import Image from 'next/image'

export default function ProductsGallery() {
  const categories = [
    {
      icon: Square,           // Represents tiles perfectly
      title: 'Floor & Wall Tiles',
      subtitle: 'Patterned, porcelain & marble options',
      alt: 'porcelain floor tile pattern',
    },
    {
      icon: Droplets,         // Kitchen/water theme
      title: 'Kitchen Tiles & Backsplashes',
      subtitle: 'Stylish, easy-to-clean designs',
      alt: 'kitchen backsplash tiles installed',
    },
    {
      icon: ShowerHead,
      title: 'Bathroom Suites',
      subtitle: 'Modern basins & WC sets',
      alt: 'contemporary bathroom basin and wc',
    },
    {
      icon: Bath,
      title: 'Bathtubs & Jacuzzis',
      subtitle: 'Relaxation redefined',
      alt: 'freestanding bathtub in luxury bathroom',
    },
    {
      icon: CarFront,         // Best match for parking/outdoor
      title: 'Outdoor & Parking Tiles',
      subtitle: 'Durable anti-slip surfaces',
      alt: 'outdoor parking tiles installation',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium tiles and sanitary ware for every space.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative overflow-hidden rounded-xl bg-secondary/5 border border-border cursor-pointer transition-all hover:shadow-xl hover:-translate-y-2"
            >
              {/* Replace with your real images */}
              <div className="aspect-square bg-gray-200 relative">
                <Image
                  src={`/public/${cat.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}.jpg`}
                  alt={cat.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <cat.icon className="w-10 h-10 mb-3 opacity-90" />
                <h3 className="text-xl font-bold leading-tight">{cat.title}</h3>
                <p className="text-sm opacity-90 mt-1">{cat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}