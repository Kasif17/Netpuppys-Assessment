"use client";
import { useScrollReveal } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { CONTACT_INFO } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-[#0a0f1e]"
      aria-label="Contact Tulas International School"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactInner />
      </div>
    </section>
  );
}

function ContactInner() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <SectionHeading
        eyebrow="Get in Touch"
        title="We'd Love to "
        highlight="Hear From You"
        description="Whether you have questions about admissions, academics, or campus life — our team is here to help."
        centered
      />

      <div className="grid lg:grid-cols-2 gap-10 mt-4">
        {/* Contact info */}
        <div className="space-y-5">
          {[
            {
              icon: MapPin,
              label: "Address",
              value: CONTACT_INFO.address,
              href: "https://maps.google.com/?q=Tulas+International+School+Dehradun",
            },
            {
              icon: Phone,
              label: "Phone",
              value: CONTACT_INFO.phone,
              href: `tel:${CONTACT_INFO.phone}`,
            },
            {
              icon: Mail,
              label: "General Enquiries",
              value: CONTACT_INFO.email,
              href: `mailto:${CONTACT_INFO.email}`,
            },
            {
              icon: Mail,
              label: "Admissions",
              value: CONTACT_INFO.admissionsEmail,
              href: `mailto:${CONTACT_INFO.admissionsEmail}`,
            },
            {
              icon: Clock,
              label: "Office Hours",
              value: "Monday – Saturday: 8:00 AM – 4:00 PM",
              href: null,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#faf8f3] dark:bg-[#0f1a2e] border border-gray-100 dark:border-gray-800"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0a2342] flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-[#c9a84c]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#0a2342] dark:text-white hover:text-[#c9a84c] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-[#0a2342] dark:text-white">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 min-h-[400px] bg-gray-100 dark:bg-gray-800 relative">
          <iframe
            title="Tulas International School location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d77.8!3d30.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c1b9b1%3A0x5a5a5a5a5a5a5a5a!2sTulas%20International%20School!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
