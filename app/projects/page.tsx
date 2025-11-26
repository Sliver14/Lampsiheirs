'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Reveal from '@/components/reveal'

// Lightbox Modal Component (Improved)
function Lightbox({ item, onClose }: { item: any; onClose: () => void }) {
  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-primary transition z-10 p-2 bg-black/30 rounded-full backdrop-blur-sm"
      >
        <X className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      {/* Content */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <div className="relative max-w-full max-h-full">
            <Image
              src={item.src}
              alt={item.title}
              width={1400}
              height={1000}
              className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        ) : (
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              src={item.src}
              title={item.title}
              className="w-full h-full rounded-lg shadow-2xl border-0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
            />
          </div>
        )}

        {/* Caption */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center max-w-2xl px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            {item.title}
          </h3>
          <p className="text-white/90 text-sm md:text-base mt-2 drop-shadow-md">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [lightboxItem, setLightboxItem] = useState<any>(null)

  const projects = [
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0020.jpg',
      thumbnail: '/featured/IMG-20251120-WA0020.jpg',
      title: 'Presidential Villa Bathroom - Abuja',
      description: 'Italian Carrara marble tiles with gold accents',
    },
    // {
    //   type: 'video',
    //   src: 'https://www.youtube.com/embed/6dIhy4Zpq8U',
    //   thumbnail: 'https://img.youtube.com/vi/6dIhy4Zpq8U/maxresdefault.jpg',
    //   title: 'Complete House Tiling Transformation',
    //   description: '3-month full house renovation in Lekki Phase 1',
    // },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0022.jpg',
      thumbnail: '/featured/IMG-20251120-WA0022.jpg',
      title: 'Modern Kitchen - Victoria Island',
      description: 'Spanish porcelain tiles & Brazilian granite countertops',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0028.jpg',
      thumbnail: '/featured/IMG-20251120-WA0028.jpg',
      title: '5-Star Hotel Lobby - Lagos',
      description: 'Large format 120x240cm tiles installation',
    },
    // {
    //   type: 'video',
    //   src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    //   thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    //   title: 'Outdoor Swimming Pool Tiling',
    //   description: 'Anti-slip mosaic tiles installation',
    // },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0030.jpg',
      thumbnail: '/featured/IMG-20251120-WA0030.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0034.jpg',
      thumbnail: '/featured/IMG-20251120-WA0034.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0036.jpg',
      thumbnail: '/featured/IMG-20251120-WA0036.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
     {
      type: 'image',
      src: '/featured/IMG-20251126-WA0008.jpg',
      thumbnail: '/featured/IMG-20251126-WA0008.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251126-WA0009.jpg',
      thumbnail: '/featured/IMG-20251126-WA0009.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251126-WA0010.jpg',
      thumbnail: '/featured/IMG-20251126-WA0010.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
     {
      type: 'image',
      // src: '/featured/IMG-20251120-WA0030.jpg',
      thumbnail: '/featured/IMG-20251126-WA0012.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0034.jpg',
      thumbnail: '/featured/IMG-20251126-WA0014.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0036.jpg',
      thumbnail: '/featured/IMG-20251126-WA0015.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
     {
      type: 'image',
      src: '/featured/IMG-20251120-WA0030.jpg',
      thumbnail: '/featured/IMG-20251126-WA0016.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0034.jpg',
      thumbnail: '/featured/IMG-20251126-WA0018.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0036.jpg',
      thumbnail: '/featured/IMG-20251126-WA0020.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
     {
      type: 'image',
      src: '/featured/IMG-20251120-WA0030.jpg',
      thumbnail: '/featured/IMG-20251126-WA0022.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0034.jpg',
      thumbnail: '/featured/IMG-20251126-WA0023.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0036.jpg',
      thumbnail: '/featured/IMG-20251126-WA0024.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    //  {
    //   type: 'image',
    //   src: '/featured/IMG-20251120-WA0030.jpg',
    //   thumbnail: '/featured/IMG-20251126-WA0025.jpg',
    //   title: 'PVC Wall Cladding - Office Space',
    //   description: 'Waterproof & easy-to-clean solution',
    // },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0034.jpg',
      thumbnail: '/featured/IMG-20251126-WA0026.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    {
      type: 'image',
      src: '/featured/IMG-20251120-WA0036.jpg',
      thumbnail: '/featured/IMG-20251126-WA0027.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
     {
      type: 'image',
      src: '/featured/IMG-20251120-WA0030.jpg',
      thumbnail: '/featured/IMG-20251126-WA0028.jpg',
      title: 'PVC Wall Cladding - Office Space',
      description: 'Waterproof & easy-to-clean solution',
    },
    
  ]

  return (
    <>
      <Header />
    <Reveal>
      <section className="py-16 md:py-24 mt-10 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              Our Completed <span className="text-primary">Projects</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl font-light text-muted-foreground max-w-3xl mx-auto">
              From luxury homes to 5-star hotels, see how we've transformed spaces across Nigeria with premium tiles, granites, and sanitary wares.
            </p>
          </div>

          {/* Responsive Masonry-like Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setLightboxItem(project)}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-primary/50"
                aria-label={`View ${project.title}`}
              >
                <div className="aspect-4/3 md:aspect-5/4 relative bg-muted overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Video Play Icon */}
                  {project.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-primary/90 p-4 md:p-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                        <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Caption */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-left text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg md:text-xl font-bold line-clamp-2">{project.title}</h3>
                    <p className="text-sm md:text-base text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div> */}
                </div>
              </button>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 md:mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life with premium materials and expert installation.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-light rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() =>
                window.open(
                  'https://wa.me/2347034523498?text=Hi!%20I%20saw%20your%20amazing%20projects%20and%20would%20like%20to%20discuss%20mine.',
                  '_blank'
                )
              }
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </Reveal>
      

      {/* Lightbox */}
      {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}

      <Footer />
    </>
  )
}