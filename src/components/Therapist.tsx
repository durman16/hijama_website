const credentials = [
  { label: "Certified Hijama Practitioner", icon: "🏅" },
  { label: "Traditional Islamic Medicine", icon: "📖" },
  { label: "Holistic Wellness Specialist", icon: "🌿" },
  { label: "5+ Years of Practice", icon: "⭐" },
];

export default function Therapist() {
  return (
    <section id="therapist" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">
            Meet Your Practitioner
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experienced & Certified Care</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="bg-white p-1 rounded-2xl shadow-lg border border-gray-100">
            <div
              className="h-96 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: "url('/images/massage01.jpg')" }}
            />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Talha Dogan</h3>
              <p className="text-emerald-600 font-medium mt-1">Certified Hijama & Wellness Practitioner — Ottawa, ON</p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              With over 5 years of dedicated practice, our therapist combines deep knowledge of prophetic medicine with modern hygiene standards to deliver safe, effective Hijama sessions. Every client receives a personalised consultation before treatment to ensure the right approach for their unique health needs.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our practice is rooted in the Sunnah — honouring the healing traditions of the Prophet ﷺ — while embracing evidence-based wellness principles to serve every client with trust and care.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-emerald-50 rounded-lg px-4 py-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition shadow-lg hover:shadow-emerald-200"
            >
              Book a Session
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
