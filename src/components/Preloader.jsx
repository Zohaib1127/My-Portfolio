import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Counter speed logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 300); // 100% ke baad "WELCOME TO" dikhane ke liye delay
          setTimeout(() => onComplete(), 1400);  // Screen fade-out timing
          return 100;
        }
        return prev + 2; // Incremental speed
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white font-sans overflow-hidden"
    >
      {/* Background Neon Glow Effects */}
      <div className="absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center">
        {!isDone ? (
          <>
            {/* Animated Neon Spinner */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="h-24 w-24 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 border-r-cyan-400 animate-spin shadow-[0_0_20px_rgba(34,211,238,0.3)]" />
              <div className="absolute h-16 w-16 rounded-full border-2 border-violet-500/20 border-b-violet-400 border-l-violet-400 animate-spin [animation-direction:reverse] shadow-[0_0_20px_rgba(167,139,250,0.3)]" />
              <span className="absolute text-xs font-bold tracking-widest text-cyan-300">ZB</span>
            </div>

            {/* Percentage Number */}
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {progress}<span className="text-2xl text-cyan-400">%</span>
            </h1>

            {/* Loading Bar */}
            <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-75 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="mt-3 text-xs tracking-[0.25em] uppercase text-white/50">
              Initializing Environment...
            </p>
          </>
        ) : (
          /* Welcome Text Animation */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              WELCOME TO
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm tracking-[0.35em] uppercase text-cyan-200/90 font-medium">
              M. Zohaib Butt Portfolio
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}