import { Lightbulb, Truck, Award, Users, Home, Wrench } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Durable, premium finishes built to last',
      description: 'Tiles & Surfaces'
    },
    {
      icon: Award,
      title: 'Clear, competitive pricing — no surprises',
      description: 'Transparent quotations'
    },
    {
      icon: Truck,
      title: 'Fast nationwide delivery across Nigeria',
      description: 'Nationwide Delivery'
    },
    {
      icon: Users,
      title: 'Certified installers with quality workmanship',
      description: 'Installation & Construction'
    },
    {
      icon: Home,
      title: 'Customer satisfaction promise',
      description: 'Guaranteed Excellence'
    }
    // {
    //   icon: Wrench,
    //   title: 'Nationwide Delivery',
    //   description: 'Professional finishing'
    // }
  ]

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Lampsiheirs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make renovation simple, we give your building a world class finish — from sourcing to installation. Choose LAMPSI HEIRS for quality materials, skilled installers, and hassle-free nationwide delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition">
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-primary font-medium">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
