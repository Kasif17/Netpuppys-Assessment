"use client";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal(0.15);
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal(0.15);

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-[#0a0f1e]"
      aria-label="About Tulas International School"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div
            ref={leftRef}
            className={`relative transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80"
                alt="Students and faculty at Tulas International School"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Decorative overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#0a2342]/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a84c] text-lg" aria-hidden="true">🏛️</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0a2342] dark:text-white">
                      Established 1999
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Dehradun, Uttarakhand
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#c9a84c]/10 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[#0a2342]/5 dark:bg-white/5 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Text side */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-150 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <SectionHeading
              eyebrow="Our Story"
              title="More Than a School — "
              highlight="A Community"
            />

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 1999, Tulas International School (TIS) stands as one of Dehradun's most
                respected educational institutions. Nestled in the scenic foothills of the Himalayas,
                our campus provides an inspiring environment where students discover their potential.
              </p>
              <p>
                We believe education is more than academic achievement. At TIS, we cultivate
                intellectual curiosity, emotional intelligence, and a strong moral compass — preparing
                students not just for university, but for life.
              </p>
              <p>
                Our CBSE-affiliated curriculum is enriched with co-curricular excellence, international
                exposure, and a deeply supportive community of educators, parents, and alumni.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Academic Excellence", icon: "📖" },
                { label: "Character Building", icon: "🌟" },
                { label: "Global Mindset", icon: "🌍" },
                { label: "Inclusive Community", icon: "🤝" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#faf8f3] dark:bg-[#0f1a2e] border border-gray-100 dark:border-gray-800"
                >
                  <span className="text-lg" aria-hidden="true">{v.icon}</span>
                  <span className="text-sm font-medium text-[#0a2342] dark:text-white">{v.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#academics"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#academics")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#c9a84c] hover:text-[#b8963e] transition-colors group"
            >
              Explore our academics
              <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
