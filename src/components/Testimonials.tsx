"use client";
import { useState } from "react";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "TIS gave my daughter not just an education, but a foundation for life. The teachers genuinely care about every child's growth, and the campus environment is truly world-class.",
    name: "Priya Sharma",
    role: "Parent, Grade 10",
    initials: "PS",
  },
  {
    quote:
      "The holistic approach at TIS is what sets it apart. My son discovered his passion for robotics here, and the school provided every resource to help him excel at national competitions.",
    name: "Rajesh Mehta",
    role: "Parent, Grade 8",
    initials: "RM",
  },
  {
    quote:
      "As a TIS alumnus, I can say the values and skills I developed here have been invaluable in my university journey abroad. TIS truly prepares you for the world.",
    name: "Ananya Kapoor",
    role: "TIS Alumna, Batch 2022",
    initials: "AK",
  },
  {
    quote:
      "The boarding facilities are excellent and the staff ensures every student feels at home. My child has grown tremendously in confidence and academics since joining TIS.",
    name: "Vikram Singh",
    role: "Parent, Grade 11",
    initials: "VS",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section
      className="section-padding bg-white dark:bg-[#0a0f1e]"
      aria-label="Testimonials from TIS parents and alumni"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="Voices from Our "
            highlight="Community"
            centered
          />

          <div className="relative mt-8">
            {/* Quote card */}
            <div className="bg-[#faf8f3] dark:bg-[#0f1a2e] rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 text-center">
              {/* Quote mark */}
              <div className="text-6xl text-[#c9a84c]/30 font-serif leading-none mb-4 select-none" aria-hidden="true">
                "
              </div>

              <blockquote className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0a2342] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c9a84c] text-xs font-bold">{t.initials}</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#0a2342] dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>

              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-[#c9a84c]" : "w-1.5 bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs text-gray-400 mt-4">
              * Testimonials are representative of the TIS community experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
