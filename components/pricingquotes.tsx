import { FileText, Check, MessageCircle } from 'lucide-react'

export default function PricingAndQuotes() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Itemised quotes — materials, delivery & installation clearly separated.<br />
            Pay only for what you actually need.
          </p>
        </div>

        {/* 3 concise points */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-secondary/5 rounded-lg border border-border p-6 text-center">
            <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground">Itemised Quote</h3>
            <p className="text-sm text-muted-foreground mt-1">Everything broken down clearly</p>
          </div>

          <div className="bg-secondary/5 rounded-lg border border-border p-6 text-center">
            <Check className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground">No Hidden Fees</h3>
            <p className="text-sm text-muted-foreground mt-1">Supply-only or full service — you choose</p>
          </div>

          <div className="bg-secondary/5 rounded-lg border border-border p-6 text-center">
            <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-foreground">Quote in Minutes</h3>
            <p className="text-sm text-muted-foreground mt-1">Just send a photo on WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  )
}