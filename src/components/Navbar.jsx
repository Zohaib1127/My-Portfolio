import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-neon backdrop-blur-2xl sm:px-5">
        
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 font-display text-sm font-bold text-white shadow-neon transition group-hover:scale-105">
            ZB
          </span>
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.28em] text-white sm:block">
            Zohaib Butt
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <a 
                key={item.href} 
                href={item.href} 
                className={`nav-link ${isActive ? "nav-link-active text-cyan-300 font-semibold" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="hidden rounded-full border border-cyan-300/30 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10 lg:block"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="icon-button lg:hidden" 
          aria-label="Toggle menu" 
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-4 shadow-card backdrop-blur-2xl lg:hidden flex flex-col gap-1"
          >
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive 
                      ? "bg-cyan-300/10 text-cyan-300 border border-cyan-300/20" 
                      : "text-white/[0.76] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}