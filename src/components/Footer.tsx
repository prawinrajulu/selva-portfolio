export default function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Workshops", href: "#workshops" },
  ];

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-xl">
      <div className="max-w-280 mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
        {/* Branding & Attribution */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
              SELVENDRAN M
            </span>
            <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-DEFAULT bg-secondary-container text-on-secondary-fixed border border-outline-variant/50">
              Portfolio
            </span>
          </div>
          <p className="font-code-sm text-code-sm text-on-surface-variant">
            B.Tech Information Technology | Final Year
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            &copy; {new Date().getFullYear()} Selvendran M. High-signal software architecture &amp; engineering artifacts.
          </p>
        </div>

        {/* Links & CTA */}
        <div className="flex flex-wrap items-center gap-space-md">
          <div className="flex flex-wrap items-center gap-space-sm">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-label-md text-label-md px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">send</span>
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
