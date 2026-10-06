"use client";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { STUDENT_LIFE } from "@/lib/data";

export default function StudentLife() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="student-life"
      className="section-padding bg-[#0a2342] relative overflow-hidden"
      aria-label="Student life at TIS"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#c9a84c] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#c9a84c] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeading
            eyebrow="Student Life"
            title="Life Beyond the "
            highlight="Classroom"
            description="At TIS, education extends far beyond textbooks. Our vibrant co-curricular ecosystem nurtures every talent and passion."
            centered
            light
          />
        </div>

        {/* Activity grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {STUDENT_LIFE.map((activity, i) => (
            <div
              key={activity.title}
              className={`group text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60 + 200}ms` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {activity.icon}
              </div>
              <div className="text-xs font-semibold text-white mb-1">{activity.title}</div>
              <div className="text-[10px] text-[#c9a84c] font-medium">{activity.count}</div>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
              alt="Students participating in sports and activities at TIS"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-white">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Every Student Finds Their{" "}
              <span className="text-[#c9a84c]">Passion</span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              With over 30 sports, 15 clubs, and year-round cultural events, TIS ensures every
              student has the opportunity to explore, excel, and express themselves beyond academics.
            </p>
            <ul className="space-y-3">
              {[
                "Annual Sports Day & Inter-House Competitions",
                "Cultural Festivals & Performing Arts Shows",
                "National & International Olympiads",
                "Community Service & Leadership Programs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                  <span className="text-[#c9a84c] mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
