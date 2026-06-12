const testimonials = [
  {
    name: "Alex D.",
    location: "Kanata, ON",
    rating: 5,
    text: "I have been struggling with chronic lower back pain for years. After just two sessions, the difference was remarkable. The environment is clean, calm, and professional. I felt completely at ease throughout. Highly recommend ShifaSana to anyone looking for natural relief.",
    service: "Full Back Renewal"
  },
  {
    name: "Mustafa D.",
    location: "Ottawa, ON",
    rating: 5,
    text: "Finally found a certified practitioner in Ottawa who truly understands the Sunnah approach. The consultation beforehand was thorough, the session itself was deeply relaxing, and I felt lighter and more energetic within days. Will definitely be returning.",
    service: "Wet Cupping (Hijama)"
  },
  {
    name: "Harun A.",
    location: "Nepean, ON",
    rating: 5,
    text: "I came in for head and neck therapy for my migraines. I was a bit nervous but the therapist was patient and explained everything step by step. My headaches have reduced significantly. The space is spotless and the care is genuine. Truly grateful.",
    service: "Head & Neck Therapy"
  }
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-emerald-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">
            Client Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
              {/* Quote mark */}
              <div className="text-5xl text-emerald-200 font-serif leading-none mb-2">&ldquo;</div>

              <StarRating count={t.rating} />

              <p className="text-gray-700 leading-relaxed flex-1 mb-6 text-sm">{t.text}</p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
                <span className="inline-block mt-2 text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-emerald-700 rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to experience the difference?</h3>
          <p className="text-emerald-200 mb-6 max-w-xl mx-auto">Join our growing community of clients who have found natural relief and renewed vitality through Hijama therapy.</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition shadow-lg"
          >
            Book Your First Session
          </a>
        </div>
      </div>
    </section>
  );
}
