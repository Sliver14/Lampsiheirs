import { Lightbulb, Truck, Award, Users, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from './reveal'

export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Durable, Premium finishes built to last',
      description: 'Tiles & Surfaces',
    },
    {
      icon: Award,
      title: 'Clear, Competitive Pricing — no surprises',
      description: 'Transparent quotations',
    },
    {
      icon: Truck,
      title: 'Fast Nationwide Delivery across Nigeria',
      description: 'Nationwide Delivery',
    },
    {
      icon: Users,
      title: 'Certified Installers with Quality workmanship',
      description: 'Installation & Construction',
    },
    {
      icon: Home,
      title: 'Customer Satisfaction Promise',
      description: 'Guaranteed Excellence',
    },
  ]

  return (
    <div
        id="about"
        className="py-16 md:py-24 relative bg-linear-to-b from-white to-primary/5 overflow-hidden"
      >
      {/* Light Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-primary/10 rounded-full blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-40 h-40 bg-primary/10 rounded-3xl bottom-0 right-0"></div>
      </div>
      <Reveal>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Why Lampsiheirs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            We make renovation simple — premium materials, professional installers,
            and hassle-free nationwide delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-background/80 backdrop-blur rounded-2xl p-8 border border-border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center max-w-xs"
              >
                <div className="mb-6 flex justify-center">
                  <Icon
                    className="w-20 h-20 sm:w-24 sm:h-24 text-primary group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="sm:text-2xl font-semibold text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-base sm:text-lg text-primary font-light">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      </Reveal>
      
    </div>
  )
}
