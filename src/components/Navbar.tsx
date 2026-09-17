"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { name: "Home", href: "#", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Workshops", href: "#workshops", id: "workshops" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode from system preference or class
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (document.documentElement.classList.contains("dark") || prefersDark) {
        // Default starts as light mode per Stitch design unless toggled
      }
    }

    const handleScroll = () => {
      const sections = NAV_ITEMS.filter((item) => item.href.startsWith("#") && item.href.length > 1).map(
        (item) => document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 100;

      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i + 1]?.id || "home");
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const isNowDark = !isDark;
    setIsDark(isNowDark);
    if (isNowDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30">
      <div className="h-16 max-w-[1120px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        {/* Brand */}
        <div className="flex items-center gap-space-sm">
          <a
            className="flex items-center gap-space-xs group"
            href="#"
            onClick={(e) => handleNavClick(e, "#", "home")}
          >
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors">
              SELVENDRAN M
            </span>
            <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed border border-outline-variant/50">
              B.Tech IT
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-space-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-medium rounded-lg px-2.5 py-1.5 font-label-md text-label-md"
                    : "font-label-md text-label-md px-2 py-1 text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-space-sm">
          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            aria-label="Toggle Dark/Light Mode"
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          >
            {isDark ? (
              <span className="material-symbols-outlined text-[20px]">light_mode</span>
            ) : (
              <span className="material-symbols-outlined text-[20px]">dark_mode</span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label="Toggle Mobile Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Avatar Icon */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-md px-margin-mobile py-space-md">
          <nav className="flex flex-col gap-space-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors ${
                    isActive
                      ? "bg-primary-container text-on-primary-container font-medium rounded-lg px-space-sm py-space-xs font-label-md"
                      : "font-label-md text-label-md px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
