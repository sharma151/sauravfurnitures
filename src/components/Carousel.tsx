"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/carousel/carousel-1.svg", alt: "Premium Bedroom Collection" },
  { src: "/images/carousel/carousel-2.svg", alt: "Living Room Furniture" },
  { src: "/images/carousel/carousel-3.svg", alt: "Dining & Office Solutions" },
  { src: "/images/carousel/carousel-4.svg", alt: "Trust, Comfort & Experience" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-xl px-4 py-8 sm:px-6 lg:px-8" aria-label="Featured furniture collection">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-border bg-section shadow-md">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={i === 0} sizes="(max-width: 1280px) 100vw, 1280px" />
          </div>
        ))}

        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 text-primaryText shadow-md transition-colors hover:bg-section"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 text-primaryText shadow-md transition-colors hover:bg-section"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-accent" : "w-2 bg-card/70 hover:bg-card/90"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
