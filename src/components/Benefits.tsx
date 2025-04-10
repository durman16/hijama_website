const benefits = [
    "Improves blood circulation",
    "Boosts immunity",
    "Relieves pain & tension",
    "Supports detoxification",
    "Improves energy and sleep"
  ];

  export default function Benefits() {
    return (
      <section className="py-16 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8">Benefits of Hijama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-emerald-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }