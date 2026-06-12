"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/hijama01.jpg", alt: "Hijama cupping session" },
  { src: "/images/hijama02.jpg", alt: "Professional cupping therapy" },
  { src: "/images/hijama03.jpg", alt: "Hijama healing session" },
  { src: "/images/hijama04.jpg", alt: "Holistic wellness treatment" },
  { src: "/images/cupping01.jpg", alt: "Cupping cups and tools" },
  { src: "/images/cupping02.jpg", alt: "Cupping therapy close-up" },
  { src: "/images/cupping03.jpg", alt: "Traditional cupping method" },
  { src: "/images/massage01.jpg", alt: "Relaxation massage" },
  { src: "/images/oil01.jpg", alt: "Therapeutic oils used in treatment" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">
            Our Practice
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Inside ShifaSana</h2>
          <p className="text-gray-600 max-w-xl mx-auto">A glimpse of our clean, peaceful clinic environment and professional sessions</p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <div
                className="h-52 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${img.src})` }}
                aria-label={img.alt}
              />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
                aria-label="Close"
              >
                &times;
              </button>
              <Image
                src={lightbox}
                alt="Gallery"
                width={900}
                height={600}
                className="w-full rounded-xl shadow-2xl object-contain max-h-[80vh]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
