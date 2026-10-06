"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, GraduationCap } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { useTheme } from "@/lib/hooks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0a0f1e]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          aria-label="Tulas International School — Home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="w-9 h-9 rounded-lg bg-[#0a2342] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c] transition-colors duration-300">
            <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-[#0a2342] dark:text-white tracking-wide">
              TULAS
            </span>
            <span className="block text-[10px] text-[#c9a84c] tracking-[0.15em] uppercase font-medium">
              International School
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 gold-underline ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-[#0a2342] dark:hover:text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className={`hidden sm:flex w-9 h-9 items-center justify-center rounded-full transition-colors duration-200 ${
              scrolled
                ? "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Sun className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          {/* Admissions CTA */}
          <button
            onClick={() => handleNavClick("#admissions")}
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-[#c9a84c] text-white hover:bg-[#b8963e] active:scale-95 transition-all duration-200 shadow-sm"
          >
            Apply Now
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-md transition-colors duration-200 ${
              scrolled
                ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-[#0a0f1e] border-t border-gray-100 dark:border-gray-800`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0a2342] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex items-center gap-2 border-t border-gray-100 dark:border-gray-800 mt-2">
            <button
              onClick={() => { toggle(); }}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <button
              onClick={() => handleNavClick("#admissions")}
              className="flex-1 py-2 text-sm font-semibold text-center rounded-lg bg-[#c9a84c] text-white hover:bg-[#b8963e] transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
