const benefits = [
  { title: "Improves Blood Circulation", description: "Enhances oxygen and nutrient delivery throughout the body", icon: "🩸" },
  { title: "Boosts Immunity", description: "Stimulates the immune system for better disease resistance", icon: "💪" },
  { title: "Relieves Pain & Tension", description: "Reduces muscle stiffness and chronic pain effectively", icon: "🍃" },
  { title: "Supports Detoxification", description: "Helps remove toxins and metabolic waste from tissues", icon: "🌿" },
  { title: "Improves Energy & Sleep", description: "Promotes better sleep quality and natural energy levels", icon: "💤" },
  { title: "Holistic Healing", description: "Addresses physical, mental, and spiritual well-being", icon: "❤️‍🩹" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">Health Advantages</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Healing Benefits of Hijama</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Centuries of tradition backed by modern wellness science</p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-200 group overflow-hidden"
            >
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-emerald-200 gap-2"
          >
            Experience the Benefits
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
