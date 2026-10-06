"use client";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { ACADEMICS } from "@/lib/data";

export default function Academics() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="academics"
      className="section-padding bg-[#faf8f3] dark:bg-[#0f1a2e]"
      aria-label="Academic programs at TIS"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeading
            eyebrow="Academics"
            title="A Curriculum Built for "
            highlight="Every Stage"
            description="From early childhood through senior secondary, our programs are designed to challenge, inspire, and prepare students for the world ahead."
            centered
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {ACADEMICS.map((program, i) => (
            <div
              key={program.title}
              className={`group relative bg-white dark:bg-[#0a0f1e] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#c9a84c]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/10 to-[#c9a84c]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl" aria-hidden="true">{program.icon}</span>
              </div>

              {/* Grade badge */}
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded-full mb-3">
                {program.grades}
              </span>

              <h3 className="font-display text-lg font-bold text-[#0a2342] dark:text-white mb-2 leading-tight">
                {program.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {program.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://tis.edu.in/academics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0a2342] dark:border-white text-[#0a2342] dark:text-white font-semibold rounded-lg hover:bg-[#0a2342] hover:text-white dark:hover:bg-white dark:hover:text-[#0a2342] transition-all duration-200"
          >
            View Full Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}
