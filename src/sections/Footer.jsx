import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalDetails, socialLinks } from "../data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 px-5 py-8 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        
        {/* Branding & Copyright */}
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-semibold text-white">
            {personalDetails.name}
          </p>
          <p className="mt-1 text-xs text-white/50">
            © {new Date().getFullYear()} All rights reserved. Designed & Developed with React & Tailwind CSS.
          </p>
        </div>

        {/* Quick Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-white/60 transition hover:text-cyan-300"
            >
              <Icon size={18} />
            </a>
          ))}

          <div className="h-4 w-px bg-white/20" />

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}