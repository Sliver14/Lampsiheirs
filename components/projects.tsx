'use client'

import { useRouter } from 'next/navigation'

import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const router = useRouter();
  const projects = [
    {
      name: 'Duplex bathroom overhaul',
      // location: 'Abuja',
      image: '/featured/IMG-20251120-WA0020.jpg'
    },
    {
      name: '5-bedroom apartment tiling',
      // location: 'Lagos',
      image: '/featured/IMG-20251120-WA0036.jpg'
    },
    {
      name: 'Hotel bathroom renovation',
      // location: 'Port Harcourt',
      image: '/featured/IMG-20251120-WA0022.jpg'
    },
    {
      name: 'Marble living room feature',
      // location: 'Enugu',
      image: '/featured/IMG-20251120-WA0028.jpg'
    },
    {
      name: 'External parking & walkways',
      // location: 'Ibadan',
      image: '/featured/IMG-20251120-WA0030.jpg'
    },
    {
      name: 'Commercial complex tiling',
      // location: 'Nationwide',
      image: '/featured/IMG-20251120-WA0034.jpg'
    }
  ]

  return (
    <section id="projects" className="py-12 bg-white md:py-20 w-screen overflow-hidden justify-center flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our recent successful installations and transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              {/* <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <p className="text-sm">{project.location}</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6 sm:w-2xl mx-auto mt-10">
              <Button
                onClick={()=> router.push('/projects')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-lg font-semibold shadow-xl transition-all"
              >
                View All Projects
              </Button>
            </div>
    </section>
  )
}
