export default function Footer() {
  return (
    <footer
      className="relative py-16 md:py-20 text-white overflow-hidden"
      style={{
        backgroundImage: `url('/Gold_Background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // looks premium on mobile too
      }}
    >
      {/* Strong dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/90" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight">
              LAMPSI HEIRS LIMITED
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Premium tiles, granites, PVC cladding, and sanitary wares with nationwide delivery and expert installation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Products', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-white/70 hover:text-white transition duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-4 text-sm">
              {['Tiles & Surfaces', 'Sanitary Wares', 'Installation Service'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition duration-300 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-white/70">Phone:</span>
                <a
                  href="tel:+2347034523498"
                  className="font-semibold text-white/70 hover:text-white transition duration-300"
                >
                  +234 703 452 3498
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-white/70">Email:</span>
                <a
                  href="mailto:victorcourage375@gmail.com"
                  className="font-semibold text-white/70 hover:text-white transition duration-300 break-all"
                >
                  victorcourage375@gmail.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-white/70">Location:</span>
                <span className="font-semibold">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <p className="text-center text-white/60 text-sm tracking-wide">
            © 2025 LAMPSI HEIRS LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}