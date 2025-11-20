import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HowToOrder() {
  const whatsappNumber = '2347034523498'
  const whatsappMessage = encodeURIComponent(
    'Hello LAMPSI HEIRS LIMITED, I would like to inquire about your products and services.'
  )

  const steps = [
    { number: 1, title: 'Browse or Send', description: 'Browse products or send a picture of your space.' },
    { number: 2, title: 'Chat with Sales', description: 'Chat with our sales team about your requirements.' },
    { number: 3, title: 'Get Quote', description: 'Receive a tailored quote for materials & labour.' },
    { number: 4, title: 'Schedule Delivery', description: 'Schedule delivery to your site at your convenience.' },
    { number: 5, title: 'Book Installation', description: 'Book installation or get DIY guidance from experts.' },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background w-screen flex justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            How to Order
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 5-step process to get your project started with us.
          </p>
        </div>

        {/* Steps – Vertical on mobile, Horizontal on larger screens */}
        <div className="relative">
          {/* Mobile: Vertical flow with arrows */}
          <div className="flex flex-col space-y-10 md:hidden">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary/50 ml-auto" />
                )}
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal with connecting line */}
          <div className="hidden md:grid md:grid-cols-5 gap-6 relative">
            {/* Connecting Line */}
            <div className="absolute top-7 left-20 right-20 h-0.5 bg-border hidden lg:block pointer-events-none" />
            
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-5 shadow-xl z-10">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-40">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons – Perfectly spaced & stacked on mobile */}
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-semibold shadow-xl"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            Chat on WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-10 py-7 text-lg border-2 border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  )
}