import { Button } from '@/components/ui/button'

export default function Products() {
  const whatsappNumber = '2348012345678'

  const categories = [
    {
      name: 'Floor & Wall Tiles',
      description: 'Floor & wall tiles, kitchen tiles, marble and porcelain — styles for modern to classic interiors.',
      image: '/floor-and-wall-tiles-porcelain-marble.jpg'
    },
    {
      name: 'Bathroom & Sanitary Wares',
      description: 'Modern designs perfect for contemporary kitchens.',
      image: '/kitchen-tiles-backsplash-modern.jpg'
    },
    {
      name: 'Doors & Interior Solutions',
      description: 'Interior doors, trims, thresholds and finishing accessories.',
      image: '/bathroom-suites-basins-toilets.jpg'
    },
    {
      name: 'Installation & Construction',
      description: 'Full tiling and bathroom installation services — from site prep to grout and seal.',
      image: '/luxury-bathtubs-jacuzzis-bathroom.jpg'
    },
    {
      name: 'Outdoor & Parking Tiles',
      description: 'Durable tiles for external areas and driveways.',
      image: '/outdoor-parking-tiles-durable.jpg'
    },
    {
      name: 'Nationwide Delivery',
      description: 'We ship direct to site — Lagos, Abuja, Port Harcourt, Enugu, Ibadan and beyond.',
      image: '/interior-doors-pvc-cladding.jpg'
    }
  ]

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your tiling and sanitary ware needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((product, index) => (
            <div key={index} className="bg-secondary/5 rounded-lg overflow-hidden hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}`)}
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
