const Hero = () => {
    return (
      <section
        className="relative h-[80vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hijama01.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
              Natural Healing with <span className="text-yellow-300">Hijama</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto animate-fade-in-up">
              Book a professional session in Ottawa. Clean. Sunnah-based. Holistic.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  