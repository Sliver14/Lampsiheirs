export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">LAMPSI HEIRS LIMITED</h3>
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
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {/* Phone – Click to Call */}
              <li className="flex items-center gap-2">
                <span className="">Phone:</span>
                <a
                  href="tel:+2347034523498"
                  className="font-medium hover:text-primary-foreground transition"
                >
                  +234-703-4523-498
                </a>
              </li>

              {/* Email – Click to Email */}
              <li className="flex items-center gap-2">
                <span className="">Email:</span>
                <a
                  href="mailto:victorcourage375@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary-foreground break-all transition"
                >
                  victorcourage375@gmail.com
                </a>
              </li>

              {/* Location – Optional: make clickable to Google Maps */}
              <li className="flex items-center gap-2">
                <span className="">Location:</span>
                <span
                  // href="https://maps.google.com/?q=Lagos,Nigeria"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © 2025 LAMPSI HEIRS LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
