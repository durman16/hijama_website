"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hijama01.jpg",
    title: "Natural Healing with Hijama",
    text: "Book a professional session in Ottawa. Clean. Sunnah-based. Holistic.",
  },
  {
    image: "/images/hijama02.jpg",
    title: "Relieve Pain & Toxins",
    text: "Cupping therapy to detox your body and ease chronic discomfort.",
  },
  {
    image: "/images/hijama03.jpg",
    title: "Prophetic Medicine Approach",
    text: "We follow the Sunnah and natural methods for optimal healing.",
  },
  {
    image: "/images/hijama04.jpg",
    title: "Balance Mind, Body & Soul",
    text: "Experience holistic wellness in a peaceful and clean environment.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Önceki / Sonraki Butonlar
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="hero"
      className="relative pt-[80px] h-screen bg-center bg-cover transition-all duration-1500 ease-in-out"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center px-4 text-white max-w-2xl">
            <h1 key={slides[currentIndex].title} className="text-3xl md:text-5xl font-bold mb-4 animate-slide-in-down">
            {slides[currentIndex].title}
            </h1>
            <p className="text-lg md:text-xl mb-6 animate-slide-in-up">
            {slides[currentIndex].text}
            </p>
            <a href="#contact" className="bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
                Book Now
            </a>
         </div>
    </div>

      {/* Dot navigation */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-yellow-300" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
