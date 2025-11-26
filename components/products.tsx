import { Button } from '@/components/ui/button'
import Reveal from './reveal'

export default function Products() {
  const whatsappNumber = '2347034523498'

  const categories = [
    {
      name: 'Floor & Wall Tiles',
      description: 'Floor & wall tiles, kitchen tiles, marble and porcelain — styles for modern to classic interiors.',
      image: '/products/tile.jpg'
    },
    {
      name: 'Bathroom & Sanitary Wares',
      description: 'Modern designs perfect for contemporary kitchens.',
      image: '/products/bathroom.webp'
    },
    {
      name: 'Doors & Interior Solutions',
      description: 'Interior doors, trims, thresholds and finishing accessories.',
      image: '/products/images.jpeg'
    },
    {
      name: 'Installation & Construction',
      description: 'Full tiling and bathroom installation services — from site prep to grout and seal.',
      image: '/products/installation.jpg'
    },
    {
      name: 'Outdoor & Parking Tiles',
      description: 'Durable tiles for external areas and driveways.',
      image: '/outdoor-parking-tiles-durable.jpg'
    },
    {
      name: 'Nationwide Delivery',
      description: 'We ship direct to site — Lagos, Abuja, Port Harcourt, Enugu, Ibadan and beyond.',
      image: '/products/nationwide.jpg'
    }
  ]

  return (
    <Reveal>
      <section
      id="products"
      className="relative py-20 md:py-28 w-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/Gold_Background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Light overlay to match the "Why" section */}
      <div className="absolute inset-0 bg-amber-950/80" />
      {/* <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/60 to-white/90" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold  mb-6 drop-shadow-lg">
            What We Offer
          </h2>
          <p className=" md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive solutions for all your tiling and sanitary ware needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((product, index) => (
            <div
              key={index}
              // className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition"
              className="bg-white/90 backdrop-blur-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-7 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-6 font-light leading-relaxed">
                  {product.description}
                </p>
                <Button
                  // variant="default"
                  // className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg shadow-lg"
                  // size="lg"
                  variant="outline"
                  className="w-full center sm:w-auto md:px-10 py-6 text-lg border-2 border-primary font-light text-primary hover:text-primary hover:bg-primary/10"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello! I'm interested in ${product.name}. Please send me details and pricing.`
                      )}`
                    )
                  }
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
    
  )
}