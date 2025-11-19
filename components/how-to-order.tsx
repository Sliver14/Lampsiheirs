import { CheckCircle } from 'lucide-react'

export default function HowToOrder() {
  const steps = [
    {
      number: 1,
      title: 'Browse or Send',
      description: 'Browse products or send a picture of your space.'
    },
    {
      number: 2,
      title: 'Chat with Sales',
      description: 'Chat with our sales team about your requirements.'
    },
    {
      number: 3,
      title: 'Get Quote',
      description: 'Receive a tailored quote for materials & labour.'
    },
    {
      number: 4,
      title: 'Schedule Delivery',
      description: 'Schedule delivery to your site at your convenience.'
    },
    {
      number: 5,
      title: 'Book Installation',
      description: 'Book installation or get DIY guidance from experts.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How to Order</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 5-step process to get your project started with us.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {step.number < 5 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
