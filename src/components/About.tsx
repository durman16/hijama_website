export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">Traditional Healing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Art of Hijama Therapy
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-emerald-200 z-0"></div>
            <div
              className="relative z-10 h-96 bg-cover bg-center rounded-2xl shadow-xl"
              style={{ backgroundImage: "url('/images/cupping01.jpg')" }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-emerald-600 text-white rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-2xl font-bold">5+</p>
              <p className="text-emerald-200 text-xs">Years of Practice</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              Hijama (cupping therapy) is an ancient healing practice rooted in prophetic medicine and traditional holistic therapies.
              This evidence-based treatment uses controlled suction to promote detoxification, improve circulation, and stimulate the body&apos;s natural healing processes.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Recognized by both traditional Islamic medicine and modern wellness practitioners, Hijama offers a comprehensive approach to health — addressing physical ailments while supporting mental and spiritual well-being.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { number: '100+', label: 'Happy Clients' },
                { number: '100%', label: 'Sterile Equipment' },
                { number: '5★', label: 'Client Rating' },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-emerald-50 rounded-xl py-4 px-2">
                  <p className="text-2xl font-bold text-emerald-700">{stat.number}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#benefits"
                className="px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition shadow-lg hover:shadow-emerald-200 flex items-center gap-2">
                Discover Benefits
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#contact"
                className="px-7 py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium transition">
                Book Session
              </a>
            </div>
          </div>
        </div>

        {/* Bottom 3 pillars */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { icon: '🌿', title: 'Holistic Approach', desc: 'Addresses body, mind & spirit as one' },
            { icon: '📖', title: 'Prophetic Tradition', desc: 'Rooted in authentic Sunnah practice' },
            { icon: '🔬', title: 'Evidence-Based', desc: 'Supported by modern wellness research' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
