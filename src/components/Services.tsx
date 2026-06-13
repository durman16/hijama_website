const services = [
  {
    title: "Wet Cupping (Hijama)",
    description: "Traditional prophetic therapy using controlled suction and minor incisions to extract toxins and promote deep healing.",
    icon: "🩸",
    highlight: "Most Popular",
    pricing: "From $45 (3 cups) — up to $160 (18 cups)"
  },
  {
    title: "Dry Cupping Therapy",
    description: "Non-invasive suction technique to relieve muscle tension, improve circulation, and reduce pain without incisions.",
    icon: "🍃",
    pricing: "From $45 (3 cups) — up to $160 (18 cups)"
  },
  {
    title: "Full Back Fire Cupping",
    description: "A traditional alternative to Hijama using heated cups for deep muscle relief and circulation — ideal for those new to cupping.",
    icon: "🔥",
    highlight: "New Service",
    pricing: "$60"
  },
  {
    title: "Relaxation Bodywork",
    description: "A full-body relaxation session focused on relieving everyday stress and promoting a sense of calm and well-being. This is a wellness service only — not massage therapy as regulated by the CMTO.",
    icon: "🌿",
    pricing: "Contact us for pricing"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-emerald-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">
            Healing Modalities
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Hijama Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Evidence-based cupping therapies combining traditional wisdom with modern hygiene standards
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {service.highlight && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  service.highlight === "Most Popular"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}>
                  {service.highlight}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{service.description}</p>

                <div className="bg-emerald-50 rounded-lg px-4 py-2 mb-4">
                  <p className="text-sm text-emerald-700 font-medium">{service.pricing}</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 group-hover:underline"
                  >
                    Book now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-emerald-200"
          >
            Book Your Session
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
