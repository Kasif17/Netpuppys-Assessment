"use client";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

const SLIDES = [
  {
    headline: "Where Excellence\nMeets Opportunity",
    sub: "Tulas International School — shaping curious minds, compassionate hearts, and confident leaders since 1999.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85",
    alt: "Students at Tulas International School campus",
  },
  {
    headline: "A Campus Built\nfor Tomorrow",
    sub: "State-of-the-art facilities, world-class faculty, and a vibrant community in the heart of Dehradun.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85",
    alt: "Modern school campus with smart classrooms",
  },
  {
    headline: "Nurturing Every\nChild's Potential",
    sub: "From Pre-Primary to Grade 12 — a holistic education that prepares students for life, not just exams.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=85",
    alt: "Students engaged in learning activities",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [entered, setEntered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Entrance animation — fires once on mount
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Auto-advance slides
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 6000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent(index);
    startInterval();
  };

  const scrollToNext = () => {
    document.querySelector("#highlights")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Welcome to Tulas International School"
    >
      {/* Background images — all rendered, only active one is visible */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342]/85 via-[#0a2342]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342]/50 via-transparent to-transparent" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#c9a84c]" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 mb-6 transition-all duration-700"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#e8c97a] text-xs font-semibold tracking-widest uppercase">
              Admissions Open 2025–26
            </span>
          </div>

          {/* Headline — crossfades per slide */}
          {SLIDES.map((slide, i) => (
            <h1
              key={i}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 absolute"
              style={{
                whiteSpace: "pre-line",
                opacity: i === current && entered ? 1 : 0,
                transform: i === current && entered ? "translateY(0)" : "translateY(24px)",
                transitionDelay: i === current ? "100ms" : "0ms",
                position: i === current ? "relative" : "absolute",
                pointerEvents: i === current ? "auto" : "none",
              }}
              aria-hidden={i !== current}
            >
              {slide.headline}
            </h1>
          ))}

          {/* Subtext — crossfades per slide */}
          {SLIDES.map((slide, i) => (
            <p
              key={i}
              className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg transition-all duration-700"
              style={{
                opacity: i === current && entered ? 1 : 0,
                transform: i === current && entered ? "translateY(0)" : "translateY(16px)",
                transitionDelay: i === current ? "200ms" : "0ms",
                position: i === current ? "relative" : "absolute",
                pointerEvents: i === current ? "auto" : "none",
              }}
              aria-hidden={i !== current}
            >
              {slide.sub}
            </p>
          ))}

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 transition-all duration-700"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "300ms",
            }}
          >
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold rounded-lg transition-all duration-200 active:scale-95 shadow-lg shadow-[#c9a84c]/25"
            >
              Apply for Admission
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              <Play className="w-4 h-4" aria-hidden="true" />
              Explore TIS
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-4 mt-10 transition-all duration-700"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateY(0)" : "translateY(12px)",
              transitionDelay: "500ms",
            }}
          >
            {["CBSE Affiliated", "25+ Years", "3500+ Students", "Dehradun"].map((badge) => (
              <span
                key={badge}
                className="text-xs text-white/60 font-medium tracking-wide border-l border-white/20 pl-4 first:border-0 first:pl-0"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-all duration-300"
        style={{
          opacity: entered ? 1 : 0,
          transitionDelay: "700ms",
        }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
