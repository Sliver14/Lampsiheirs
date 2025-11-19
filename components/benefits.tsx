export default function Benefits() {
  const benefits = [
    {
      stat: '15+',
      title: 'Years in Business',
      description: 'Trusted by builders, architects, and homeowners since establishment'
    },
    {
      stat: '500+',
      title: 'Satisfied Customers',
      description: 'Countless successful projects delivered across Nigeria'
    },
    {
      stat: '100%',
      title: 'Quality Promise',
      description: 'All products undergo strict quality control before delivery'
    },
    {
      stat: '24/7',
      title: 'Customer Support',
      description: 'Always available to answer questions and provide assistance'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {benefit.stat}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
