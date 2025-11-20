// import { Button } from '@/components/ui/button'

// export default function Products() {
//   const whatsappNumber = '2347034523498'

//   const categories = [
//     {
//       name: 'Floor & Wall Tiles',
//       description: 'Floor & wall tiles, kitchen tiles, marble and porcelain — styles for modern to classic interiors.',
//       image: '/floor-and-wall-tiles-porcelain-marble.jpg'
//     },
//     {
//       name: 'Bathroom & Sanitary Wares',
//       description: 'Modern designs perfect for contemporary kitchens.',
//       image: '/kitchen-tiles-backsplash-modern.jpg'
//     },
//     {
//       name: 'Doors & Interior Solutions',
//       description: 'Interior doors, trims, thresholds and finishing accessories.',
//       image: '/bathroom-suites-basins-toilets.jpg'
//     },
//     {
//       name: 'Installation & Construction',
//       description: 'Full tiling and bathroom installation services — from site prep to grout and seal.',
//       image: '/luxury-bathtubs-jacuzzis-bathroom.jpg'
//     },
//     {
//       name: 'Outdoor & Parking Tiles',
//       description: 'Durable tiles for external areas and driveways.',
//       image: '/outdoor-parking-tiles-durable.jpg'
//     },
//     {
//       name: 'Nationwide Delivery',
//       description: 'We ship direct to site — Lagos, Abuja, Port Harcourt, Enugu, Ibadan and beyond.',
//       image: '/interior-doors-pvc-cladding.jpg'
//     }
//   ]

//   return (
//     <section id="products" className="py-12 md:py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What We Offer</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive solutions for all your tiling and sanitary ware needs.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {categories.map((product, index) => (
//             <div key={index} className="bg-secondary/5 rounded-lg overflow-hidden hover:shadow-xl transition group">
//               <div className="h-64 overflow-hidden">
//                 <img
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
//                 <p className="text-muted-foreground mb-4">{product.description}</p>
//                 <Button
//                   variant="outline"
//                   className="w-full border-primary text-primary hover:bg-primary/60"
//                   onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}`)}
//                 >
//                   Inquire Now
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { Button } from '@/components/ui/button'

export default function Products() {
  const whatsappNumber = '2347034523498'

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-6 drop-shadow-lg">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive solutions for all your tiling and sanitary ware needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((product, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/50"
            >
              <div className="h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg shadow-lg"
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
  )
}