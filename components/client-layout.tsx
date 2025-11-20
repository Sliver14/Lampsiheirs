"use client"

import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Products from '@/components/products'
import Projects from '@/components/projects'
import HowToOrder from '@/components/how-to-order'
import Pricingquotes from '@/components/pricingquotes'
import Testimonials from '@/components/testimonials'
import FAQs from '@/components/faqs'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ProductsGallery from '@/components/productgallery'
import VideoReels from '@/components/videoreel'

export default function ClientLayout() {
  return (
    <div
      className="bg-background text-foreground min-h-screen w-screen overflow-x-hidden"
    >
      {/* <Header /> */}
      <Hero />
      <Services />
      <Products />
      <Projects />
      <VideoReels />
      <HowToOrder />
      <Pricingquotes />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  )
}
