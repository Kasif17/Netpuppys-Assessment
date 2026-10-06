import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/data";

const FOOTER_LINKS = {
  "Quick Links": NAV_LINKS,
  Academics: [
    { label: "Pre-Primary", href: "https://tis.edu.in/academics" },
    { label: "Primary School", href: "https://tis.edu.in/academics" },
    { label: "Middle School", href: "https://tis.edu.in/academics" },
    { label: "Secondary (CBSE)", href: "https://tis.edu.in/academics" },
    { label: "Senior Secondary", href: "https://tis.edu.in/academics" },
  ],
  Admissions: [
    { label: "Apply Online", href: "https://tis.edu.in/admissions" },
    { label: "Admission Process", href: "https://tis.edu.in/admissions" },
    { label: "Fee Structure", href: "https://tis.edu.in/admissions" },
    { label: "Scholarships", href: "https://tis.edu.in/admissions" },
    { label: "FAQs", href: "https://tis.edu.in/admissions" },
  ],
};

// SVG social icons (lucide-react v0.x doesn't export brand icons)
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  ),
};

const SOCIAL = [
  { Icon: SocialIcons.Facebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: SocialIcons.Twitter, label: "Twitter / X", href: "https://twitter.com" },
  { Icon: SocialIcons.Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: SocialIcons.Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2342] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold tracking-wide">TULAS</span>
                <span className="block text-[10px] text-[#c9a84c] tracking-[0.15em] uppercase font-medium">
                  International School
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Nurturing excellence, building character, and inspiring a lifelong love of learning
              since 1999. Dehradun's premier educational institution.
            </p>

            {/* Contact brief */}
            <div className="space-y-2.5">
              <a
                href={`https://maps.google.com/?q=Tulas+International+School+Dehradun`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs text-white/60 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#c9a84c]" aria-hidden="true" />
                Dhoolkot, Selaqui, Dehradun, Uttarakhand 248197
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#c9a84c]" aria-hidden="true" />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[#c9a84c]" aria-hidden="true" />
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-6">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#c9a84c] flex items-center justify-center transition-colors duration-200"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c] mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/60 hover:text-white transition-colors gold-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} Tulas International School. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://tis.edu.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="https://tis.edu.in/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Terms of Use
            </a>
            <a href="https://tis.edu.in/sitemap" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
