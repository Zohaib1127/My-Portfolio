import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function TiltCard({ children, className = "", glow = "rgba(68, 216, 255, 0.24)" }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, ${glow}, transparent 40%)`;

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    rotateX.set((py - 0.5) * -12);
    rotateY.set((px - 0.5) * 14);
    mouseX.set(px * 100);
    mouseY.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={`glass-panel group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl ${className}`}
    >
      {/* Interactive Radial Glow Effect */}
      <motion.div 
        aria-hidden="true" 
        style={{ background }} 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
      />
      
      {/* 3D Content Container */}
      <div className="relative z-10 h-full" style={{ transform: "translateZ(34px)" }}>
        {children}
      </div>
    </motion.div>
  );
}