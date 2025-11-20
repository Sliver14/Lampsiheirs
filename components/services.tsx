// import { Lightbulb, Truck, Award, Users, Home, Wrench } from 'lucide-react'

// export default function Services() {
//   const services = [
//     {
//       icon: Award,
//       title: 'Durable, premium finishes built to last',
//       description: 'Tiles & Surfaces'
//     },
//     {
//       icon: Award,
//       title: 'Clear, competitive pricing — no surprises',
//       description: 'Transparent quotations'
//     },
//     {
//       icon: Truck,
//       title: 'Fast nationwide delivery across Nigeria',
//       description: 'Nationwide Delivery'
//     },
//     {
//       icon: Users,
//       title: 'Certified installers with quality workmanship',
//       description: 'Installation & Construction'
//     },
//     {
//       icon: Home,
//       title: 'Customer satisfaction promise',
//       description: 'Guaranteed Excellence'
//     }
//     // {
//     //   icon: Wrench,
//     //   title: 'Nationwide Delivery',
//     //   description: 'Professional finishing'
//     // }
//   ]

//   return (
//     <section id="about" className="py-12 md:py-20 bg-secondary/5 w-screen justify-center flex overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Lampsiheirs</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             We make renovation simple, we give your building a world class finish — from sourcing to installation. Choose LAMPSI HEIRS for quality materials, skilled installers, and hassle-free nationwide delivery.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon
//             return (
//               <div key={index} className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition">
//                 <div className="mb-4">
//                   <Icon className="w-12 h-12 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
//                 <p className="text-sm text-primary font-medium">{service.description}</p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


import { Lightbulb, Truck, Award, Users, Home, Wrench } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Durable, premium finishes built to last',
      description: 'Tiles & Surfaces',
    },
    {
      icon: Award,
      title: 'Clear, competitive pricing — no surprises',
      description: 'Transparent quotations',
    },
    {
      icon: Truck,
      title: 'Fast nationwide delivery across Nigeria',
      description: 'Nationwide Delivery',
    },
    {
      icon: Users,
      title: 'Certified installers with quality workmanship',
      description: 'Installation & Construction',
    },
    {
      icon: Home,
      title: 'Customer satisfaction promise',
      description: 'Guaranteed Excellence',
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/5 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
         <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Why Lampsiheirs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We make renovation simple — giving your building a world-class finish from sourcing to installation. Choose LAMPSI HEIRS for quality materials, skilled installers, and hassle-free nationwide delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 md:p-8 border border-border hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-5">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>

                {/* Title - responsive & readable */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-2">
                  {service.title}
                </h3>

                {/* Description - slightly larger on mobile */}
                <p className="text-sm sm:text-base text-primary font-medium mt-auto">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}