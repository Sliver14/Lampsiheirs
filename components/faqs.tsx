'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do you deliver outside Lagos?',
      answer: 'Yes — we deliver nationwide. Delivery timelines vary by location and order size.'
    },
    {
      question: 'Do you offer installation?',
      answer: 'Yes — full professional installation and site preparation services are available.'
    },
    {
      question: 'Can you handle large hotel or commercial projects?',
      answer: 'Absolutely — we work with contractors, architects and hotels on bulk orders and installations.'
    },
    {
      question: 'What is your delivery timeframe?',
      answer: 'Delivery timelines depend on location and product availability. Contact us for specific estimates.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we offer competitive pricing for bulk orders. Get a quote for your specific requirements.'
    },
    {
      question: 'What are your business hours?',
      answer: 'We operate Mon–Sat: 8am–6pm. Contact us via WhatsApp for immediate assistance anytime.'
    }
  ]

  return (
    <section id="faqs" className="py-12 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-secondary/5 rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/10 transition text-left"
              >
                <h3 className="font-bold text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
