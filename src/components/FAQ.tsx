const faqs = [
    { q: "Is hijama painful?", a: "Most people feel little to no pain, only slight discomfort during suction." },
    { q: "How often should I do hijama?", a: "It depends on your health condition, but generally once every few months is beneficial." },
    { q: "Is it safe?", a: "Yes, when done professionally in a hygienic environment, hijama is very safe." }
  ];
  
  export default function FAQ() {
    return (
      <section id="FAQ" className="py-16 px-6 bg-gradient-to-b from-white to-emerald-50/80">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {faqs.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-emerald-800">{item.q}</h4>
                <p className="text-gray-700 text-sm mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  