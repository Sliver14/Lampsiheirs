"use client"

import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Products from '@/components/products'
import Projects from '@/components/projects'
import HowToOrder from '@/components/how-to-order'
import Testimonials from '@/components/testimonials'
import FAQs from '@/components/faqs'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function ClientLayout() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Products />
      <Projects />
      <HowToOrder />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </>
  )
}
