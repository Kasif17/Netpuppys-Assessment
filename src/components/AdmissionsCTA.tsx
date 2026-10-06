"use client";
import { useScrollReveal } from "@/lib/hooks";
import { ArrowRight } from "lucide-react";

export default function AdmissionsCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="admissions"
      className="section-padding bg-white dark:bg-[#0a0f1e]"
      aria-label="Admissions at Tulas International School"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a2342] to-[#1a4a8a] p-8 sm:p-12 lg:p-16 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c9a84c]/10 translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" aria-hidden="true" />
                <span className="text-[#e8c97a] text-xs font-semibold tracking-widest uppercase">
                  Now Accepting Applications
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Begin Your Child's{" "}
                <span className="text-[#c9a84c]">TIS Journey</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
                Admissions are open for Academic Year 2025–26 across all grades. Seats are limited.
                Apply early to secure your child's place at one of Dehradun's finest schools.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://tis.edu.in/admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold rounded-lg transition-all duration-200 active:scale-95 shadow-lg shadow-[#c9a84c]/25"
                >
                  Apply Online
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-200"
                >
                  Contact Admissions
                </a>
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
                Admission Process
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "01", title: "Submit Application", desc: "Complete the online form with required documents." },
                  { step: "02", title: "Entrance Assessment", desc: "Age-appropriate assessment for the applied grade." },
                  { step: "03", title: "Parent Interaction", desc: "Brief interaction with the admissions team." },
                  { step: "04", title: "Offer Letter", desc: "Receive your admission offer and complete enrollment." },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="text-[#c9a84c] font-bold text-sm font-mono flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-white text-sm font-semibold">{item.title}</div>
                      <div className="text-white/60 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
