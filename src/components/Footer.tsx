const Footer = () => {
  return (
    <footer className="bg-green-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">ShifaSana</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              Holistic Hijama & Wellness in Ottawa. Sunnah-based, professional, and hygienic cupping therapy services.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-1.613.074-3.067.372-4.243 1.548C1.634 2.796 1.336 4.25 1.262 5.863 1.204 7.143 1.19 7.551 1.19 12c0 4.449.014 4.857.072 6.137.074 1.613.372 3.067 1.548 4.243 1.176 1.176 2.63 1.474 4.243 1.548C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.613-.074 3.067-.372 4.243-1.548 1.176-1.176 1.474-2.63 1.548-4.243.058-1.28.072-1.688.072-6.137 0-4.449-.014-4.857-.072-6.137-.074-1.613-.372-3.067-1.548-4.243C19.014.386 17.56.088 15.947.014 14.667-.042 14.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.023 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.096 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/16138780458" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <div className="space-y-3 text-green-200 text-sm">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="https://www.google.com/maps?q=2047+Carp+Road,+Ottawa,+ON" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  2047 Carp Road, Ottawa, ON
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+16138780458" className="hover:text-white transition">+1 (613) 878-0458</a>
              </div>
              <p className="text-green-300 text-xs pt-2">* By appointment only.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200 text-sm">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition">Services & Pricing</a></li>
              <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
              <li><a href="#FAQ" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition">Book an Appointment</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-green-600 pt-6 text-center text-sm text-green-300">
          <p>&copy; {new Date().getFullYear()} ShifaSana — Hijama Therapy in Ottawa. All rights reserved.</p>
          <p className="mt-1">
            Developed by <a href="https://github.com/durman16" className="underline hover:text-white">durman16</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
