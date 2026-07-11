"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSlider({ images, autoPlayMs = 5000 }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = images.length;

  const goTo = (i) => setIndex((i + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Auto-play
  useEffect(() => {
    if (!autoPlayMs) return;
    const id = setInterval(() => goTo(index + 1), autoPlayMs);
    return () => clearInterval(id);
  }, [index, autoPlayMs, total]);

  // Swipe handlers (mobile)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 50;

    if (diff > threshold) next();
    else if (diff < -threshold) prev();

    touchStartX.current = null;
  };

  return (
    <div
      className="relative h-[360px] sm:h-[480px] md:h-[520px] overflow-hidden touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Fade slides */}
      {images.map((image, i) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          {/* Blurred backdrop — hides low-res artifacts */}
          <img
            src={image.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-[0.55] saturate-110"          />

          {/* Main image */}
          <img
            src={image.src}
            alt={image.alt}
            className="relative h-full w-full object-cover brightness-[0.65] contrast-105 saturate-90"          />
        </div>
      ))}

      {/* Blend overlays — soften edges + help text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-[#1f3b57]/15 mix-blend-multiply" />

      {/* Dot pagination */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/40 px-3 py-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}