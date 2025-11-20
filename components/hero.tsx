// 'use client'

// import { Button } from '@/components/ui/button'

// export default function Hero() {
//   const whatsappNumber = '2347034523498'
//   const whatsappMessage = encodeURIComponent('I am interested in LAMPSI HEIRS LIMITED products and services. Please tell me more.')

//   return (
//     <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-accent/5 py-8 md:py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6">
//             <div className="inline-block">
//               {/* <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
//                 Premium Quality Tiles & Sanitary Wares
//               </span> */}
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
//               Beautiful Spaces Start with Quality.
//             </h1>
            
//             <p className="text-lg text-muted-foreground max-w-lg">
//               Premium Tiles and Granites, PVC Cladding, Sanitary Wares | Nationwide Delivery, Installation.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Button
//                 onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`)}
//                 className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg"
//               >
//                 Get a Free Quote
//               </Button>
//               <Button
//                 variant="outline"
//                 className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/10 hover:text-primary"
//                 onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 View Gallery
//               </Button>
//             </div>

//             <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
//               <div>
//                 <p className="text-2xl font-bold text-primary">500+</p>
//                 <p className="text-sm text-muted-foreground">Happy Clients</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-primary">15+</p>
//                 <p className="text-sm text-muted-foreground">Years Experience</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-primary">100%</p>
//                 <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="hidden md:block">
//             <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
//               <img
//                 src="/premium-tiles-and-sanitary-wares-showroom.jpg"
//                 alt="Premium tiles and sanitary wares"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

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
          src="/commercial-building-tiles-installation.jpg"  // Correct path (inside /public folder)
          alt="Premium tiles and sanitary wares showroom"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Dark Overlay — This one will NEVER fail */}
        <div 
          className="absolute inset-0 bg-orange-950/60 backdrop-blur-xs"
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
            <span className="inline-block bg-white/20 text-white backdrop-blur-sm px-5 py-2.5 rounded-full text-sm sm:text-base font-medium border border-white/30">
              Premium Quality Tiles & Sanitary Wares
            </span>

            {/* Main Heading - Responsive */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Beautiful Spaces Start<br className="sm:hidden" /> with Quality.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Premium Tiles and Granites, PVC Cladding, Sanitary Wares | Nationwide Delivery & Professional Installation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6">
              <Button
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-lg font-semibold shadow-xl transition-all"
              >
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 sm:px-10 py-6 sm:py-7 text-lg border-2 border-white text-primary hover:bg-white/20 backdrop-blur-sm transition-all"
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