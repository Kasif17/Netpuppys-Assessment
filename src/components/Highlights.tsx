"use client";
import { useScrollReveal, useCounter } from "@/lib/hooks";
import { STATS } from "@/lib/data";

function StatCard({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 2000, start);
  return (
    <div className="text-center px-4 py-6 group">
      <div className="font-display text-4xl lg:text-5xl font-bold text-[#0a2342] dark:text-white mb-1 tabular-nums">
        {count.toLocaleString()}
        <span className="text-[#c9a84c]">{suffix}</span>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">{label}</div>
    </div>
  );
}

export default function Highlights() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="highlights"
      ref={ref}
      className="bg-[#faf8f3] dark:bg-[#0f1a2e] border-y border-gray-100 dark:border-gray-800"
      aria-label="School highlights and statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200 dark:divide-gray-700 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} start={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
