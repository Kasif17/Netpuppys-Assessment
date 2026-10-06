"use client";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { NEWS } from "@/lib/data";

export default function NewsEvents() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="news"
      className="section-padding bg-[#faf8f3] dark:bg-[#0f1a2e]"
      aria-label="News and events at TIS"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeading
            eyebrow="News & Events"
            title="Latest from "
            highlight="TIS"
          />
          <a
            href="https://tis.edu.in/news"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#c9a84c] hover:text-[#b8963e] transition-colors flex-shrink-0 mb-12"
          >
            View all news →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((item, i) => (
            <article
              key={item.title}
              className={`group bg-white dark:bg-[#0a0f1e] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-[#c9a84c]/40 hover:shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="font-display text-base font-bold text-[#0a2342] dark:text-white mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="mt-4 text-xs font-semibold text-[#c9a84c] group-hover:gap-2 flex items-center gap-1 transition-all duration-200">
                  Read more
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
