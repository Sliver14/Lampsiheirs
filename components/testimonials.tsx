import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ada O.',
      text: 'Lampsiheirs delivered on time and the installation team was professional — our bathroom looks brand new.'
    },
    {
      name: 'Emmanuel T.',
      text: 'We needed a fast turnaround for an apartment. Great prices and no hidden costs.'
    },
    {
      name: 'Chioma K.',
      text: 'Quality tiles and excellent finish. Highly recommended.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our satisfied customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-primary">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
