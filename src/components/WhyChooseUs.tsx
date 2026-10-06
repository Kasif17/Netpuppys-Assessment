"use client";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { WHY_TIS } from "@/lib/data";

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      className="section-padding bg-white dark:bg-[#0a0f1e]"
      aria-label="Why choose Tulas International School"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading + description */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <SectionHeading
              eyebrow="Why TIS"
              title="The TIS Difference — "
              highlight="What Sets Us Apart"
              description="We don't just educate — we inspire, challenge, and empower every student to become the best version of themselves."
            />

            <div className="mt-8 p-6 rounded-2xl bg-[#0a2342] text-white">
              <blockquote className="text-base italic leading-relaxed text-white/90">
                "Our mission is to provide a world-class education that nurtures intellectual
                curiosity, builds character, and prepares students to thrive in an ever-changing
                global landscape."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                  <span className="text-[#c9a84c] text-sm font-bold">TIS</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">TIS Leadership</div>
                  <div className="text-xs text-white/60">Tulas International School</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_TIS.map((item, i) => (
              <div
                key={item.title}
                className={`group p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#c9a84c]/40 hover:bg-[#faf8f3] dark:hover:bg-[#0f1a2e] transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 60 + 200}ms` }}
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#0a2342] dark:text-white mb-1.5 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
