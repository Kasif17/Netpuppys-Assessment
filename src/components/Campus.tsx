"use client";
import { useState } from "react";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { FACILITIES } from "@/lib/data";

const FALLBACK_COLORS = [
  "from-emerald-800 to-teal-900",
  "from-blue-800 to-indigo-900",
  "from-violet-800 to-purple-900",
  "from-rose-800 to-pink-900",
  "from-amber-800 to-orange-900",
  "from-cyan-800 to-sky-900",
];

export default function Campus() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [hovered, setHovered] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const handleImgError = (i: number) =>
    setImgErrors((prev) => ({ ...prev, [i]: true }));

  return (
    <section
      id="campus"
      className="section-padding bg-[#faf8f3] dark:bg-[#0f1a2e]"
      aria-label="TIS campus and facilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeading
            eyebrow="Campus & Facilities"
            title="A Campus Designed to "
            highlight="Inspire"
            description="Every corner of TIS is thoughtfully designed to support learning, creativity, and well-being."
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((facility, i) => (
            <div
              key={facility.title}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-default transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image or fallback gradient */}
              {imgErrors[i] ? (
                <div
                  className={`w-full h-full bg-gradient-to-br ${FALLBACK_COLORS[i % FALLBACK_COLORS.length]} flex items-center justify-center`}
                  aria-hidden="true"
                >
                  <span className="text-5xl opacity-40">
                    {["🔬", "🏃", "📖", "🎭", "💻", "🏠"][i]}
                  </span>
                </div>
              ) : (
                <img
                  src={facility.image}
                  alt={facility.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={() => handleImgError(i)}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342]/90 via-[#0a2342]/30 to-transparent transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {facility.title}
                </h3>
                <p
                  className={`text-sm text-white/80 leading-relaxed transition-all duration-300 ${
                    hovered === i ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {facility.description}
                </p>
              </div>

              {/* Gold accent */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#c9a84c] text-xs font-bold" aria-hidden="true">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
