export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Lampsiheirs Limited</h3>
            <p className="text-primary-foreground/80 text-sm">
              Premium tiles, granites, PVC cladding, and sanitary wares with nationwide delivery and expert installation.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition">About Us</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition">Products</a></li>
              <li><a href="#projects" className="hover:text-primary-foreground transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition">Tiles & Surfaces</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Sanitary Wares</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Installation Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Phone: +234-801-2345-678</li>
              <li>Email: info@lampsiheirs.com</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © 2025 Lampsiheirs Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
