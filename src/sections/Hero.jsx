import { Download, Eye, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingDeveloperScene } from "../components/FloatingDeveloperScene";
import { TypingText } from "../components/TypingText";
import { personalDetails, socialLinks } from "../data";

const words = [
  "Full-Stack MERN Developer", 
  "Software Engineer", 
  "REST API & JWT Specialist", 
  "C++ & MATLAB Developer"
];

export function Hero() {
  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        
        {/* Left Column: Heading, Bio, CTAs & Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/5 px-4 py-2 text-sm font-medium text-cyan-100 shadow-neon backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(68,216,255,.9)] animate-pulse" />
            Available for Full-Time, Internship & Remote Roles
          </div>

          {/* Adjusted Greeting Row with Prominent Avatar */}
          <div className="mb-6 flex items-center gap-5">
            {/* 112px Avatar Frame with Edge Ring & Glow */}
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(34,211,238,0.45)] bg-slate-950">
              <img 
                src="/profile.png" 
                alt="M. Zohaib Butt" 
                className="absolute inset-0 h-full w-full rounded-full object-cover object-top block transform-gpu"
                style={{
                  imageRendering: "crisp-edges",
                  WebkitBackfaceVisibility: "hidden"
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextSibling) {
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback Badge */}
              <span className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 font-display text-xl font-bold text-white">
                ZB
              </span>
            </div>

            {/* Tag Line Aligned with Image Center */}
            <div>
              <p className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-2xl">
                Welcome To,My
              </p>
              <p className="text-xs text-white/50 tracking-wider uppercase font-medium mt-1">
                Portfolio &amp; Showcase
              </p>
            </div>
          </div>

          {/* Main Name Heading */}
          <h1 className="font-display text-[clamp(3.5rem,10vw,9.5rem)] font-bold leading-[0.85] text-white tracking-tight">
            M. Zohaib <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400">Butt</span>
          </h1>

          {/* Role Subtitle */}
          <p className="mt-7 max-w-2xl text-xl font-medium text-white/90 sm:text-2xl">
            Software Engineer & Full MERN Stack Developer
          </p>

          {/* Dynamic Typing Sub-heading */}
          <p className="mt-5 max-w-2xl text-lg text-white/[0.68] sm:text-xl leading-relaxed">
            Building responsive web applications, secure REST APIs, and scalable software systems with{" "}
            <TypingText words={words} />.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a 
              href="/resume.pdf" 
              download="M_Zohaib_Butt_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button flex items-center justify-center gap-2.5"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            
            <a 
              href="#projects" 
              className="secondary-button flex items-center justify-center gap-2.5"
            >
              <Eye size={18} />
              <span>View Projects</span>
            </a>
          </div>

          {/* Social Links & Direct Mail Badge */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={label} 
                title={label}
                className="icon-button transition hover:scale-110 hover:border-cyan-300/50 hover:text-cyan-300"
              >
                <Icon size={19} />
              </a>
            ))}

            <div className="ml-2 hidden h-6 w-px bg-white/20 sm:block" />

            <a 
              href={`mailto:${personalDetails.email}`} 
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-300 sm:flex"
            >
              <Mail size={14} className="text-cyan-300" />
              <span>{personalDetails.email}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <FloatingDeveloperScene />
        </motion.div>

      </div>
    </section>
  );
}