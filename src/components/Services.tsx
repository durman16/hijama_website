const services = [
    { title: "Wet Cupping (Hijama)", description: "Traditional hijama therapy with minor incisions to remove toxins." },
    { title: "Dry Cupping", description: "Non-invasive cupping for pain relief and relaxation." },
    { title: "Head & Neck Therapy", description: "Targeted hijama for migraines, sinus, and stress." }
  ];
  
  export default function Services() {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-emerald-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">{service.title}</h3>
                <p className="text-emerald-800 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }