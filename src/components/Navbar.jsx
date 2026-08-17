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
        
        {/* Stylish 3D Logo / Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-[2px] shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] group-hover:rotate-3">
            {/* Inner Glass Card for 3D Layering */}
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950/90 backdrop-blur-md">
              {/* 3D Styled Text with Drop Shadow & Metallic Gradient */}
              <span className="font-display text-base font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 via-white to-fuchsia-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter">
                ZB
              </span>
            </div>
            
            {/* Top Light Reflection Gloss */}
            <span className="absolute inset-x-2 top-1 h-[2px] rounded-full bg-white/40 blur-[0.5px]" />
          </div>

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