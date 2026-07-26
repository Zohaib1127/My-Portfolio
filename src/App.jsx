import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { About } from "./sections/About";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Journey } from "./sections/Journey";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { useMousePosition } from "./hooks/useMousePosition";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 250); // Show "WELCOME TO"
          setTimeout(() => onComplete(), 1400);  // Unmount loader
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] grid place-items-center bg-midnight text-white font-sans overflow-hidden"
    >
      {/* Background Neon Glow Effects */}
      <div className="absolute h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative z-10 flex flex-col items-center">
        {!isDone ? (
          <>
            {/* Double Neon Spinner Ring */}
            <div className="relative flex items-center justify-center mb-7">
              <div className="h-24 w-24 rounded-full border-2 border-cyan-500/20 border-t-cyan-300 border-r-cyan-300 animate-spin shadow-[0_0_20px_rgba(68,216,255,0.4)]" />
              <div className="absolute h-16 w-16 rounded-full border-2 border-violet-500/20 border-b-violet-400 border-l-violet-400 animate-spin [animation-direction:reverse] shadow-[0_0_20px_rgba(167,139,250,0.4)]" />
              <span className="absolute font-display text-xl font-bold text-white tracking-widest">ZB</span>
            </div>

            {/* Counter Percentage */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400">
              {progress}<span className="text-2xl text-cyan-300">%</span>
            </h1>

            {/* Neon Progress Bar */}
            <div className="mt-5 h-1.5 w-52 overflow-hidden rounded-full bg-white/10 p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 transition-all duration-75 shadow-[0_0_14px_rgba(68,216,255,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="mt-3 text-xs tracking-[0.25em] uppercase text-white/50 font-medium">
              Loading Portfolio...
            </p>
          </>
        ) : (
          /* Welcome Text Animation */
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 drop-shadow-[0_0_25px_rgba(68,216,255,0.7)]">
              WELCOME TO
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm tracking-[0.35em] uppercase text-cyan-200/80 font-medium">
              M. Zohaib Butt Portfolio
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const mouse = useMousePosition();

  return (
    <div className="min-h-screen overflow-x-hidden bg-midnight text-white">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-80"
        style={{
          background: `radial-gradient(520px circle at ${mouse.x}px ${mouse.y}px, rgba(68,216,255,.12), transparent 42%)`
        }}
      />
      <ParticleCanvas />
      <div aria-hidden="true" className="fixed inset-0 z-0 bg-radial-neon" />
      <div aria-hidden="true" className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.11]" />
      
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Journey />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}