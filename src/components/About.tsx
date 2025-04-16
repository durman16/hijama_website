export default function About() {
    return (
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-600 font-medium mb-3">Traditional Healing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
              <span className="relative inline-block">
                The Art of Hijama Therapy
                <span className="absolute bottom-0 left-0 w-full h-2 bg-emerald-400/40 -z-10 transform -translate-y-1"></span>
              </span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Hijama (cupping therapy) is an ancient healing practice with roots in prophetic medicine and traditional holistic therapies. 
                This evidence-based treatment uses controlled suction to promote detoxification, improve circulation, and stimulate the body's 
                natural healing processes.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Recognized by both traditional Islamic medicine and modern wellness practitioners, Hijama offers a comprehensive approach to health, 
                addressing physical ailments while also supporting mental and spiritual well-being.
              </p>
  
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#learn-more" className="px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-emerald-200 flex items-center">
                  Discover Benefits
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#contact" className="px-8 py-3.5 rounded-lg border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium transition-all duration-300">
                  Book Session
                </a>
              </div>
            </div>
  
            <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-100 transform hover:scale-[1.02] transition duration-500">
              <div className="h-80 bg-[url('/images/cupping01.jpg')] bg-cover bg-center rounded-lg"></div>
            </div>
          </div>
  
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            {[
              {icon: '🌿', title: 'Holistic Approach', desc: 'Addresses body, mind & spirit'},
              {icon: '⚕️', title: 'Prophetic Tradition', desc: 'Rooted in authentic Sunnah'},
              {icon: '🔬', title: 'Evidence-Based', desc: 'Supported by modern research'}
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50">
                <span className="text-4xl mb-4 inline-block">{item.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }