import { motion } from "framer-motion";
import { Code2, Cpu, Database, ServerCog, Binary } from "lucide-react";

export function FloatingDeveloperScene() {
  const floatingBadges = [
    { icon: Code2, className: "left-3 top-20", label: "React" },
    { icon: ServerCog, className: "right-2 top-28", label: "Node.js" },
    { icon: Database, className: "bottom-24 left-6", label: "MongoDB" },
    { icon: Binary, className: "bottom-16 right-9", label: "C++ Advanced" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Outer Rotating Dotted Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[8%] rounded-full border border-dashed border-cyan-200/20"
      />
      
      {/* Inner Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[18%] rounded-full border border-violet-300/20"
      />

      {/* Glassmorphism Background Panel */}
      <div className="absolute inset-[18%] rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-neon backdrop-blur-xl" />
      
      {/* Floating Code Editor Graphic */}
      <motion.div
        animate={{ y: [-10, 12, -10], rotateX: [0, 7, 0], rotateY: [-7, 6, -7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[23%] grid place-items-center rounded-[2rem] border border-cyan-200/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] shadow-card backdrop-blur-xl"
      >
        <div className="relative w-[74%]">
          <div className="rounded-t-2xl border border-white/[0.12] bg-slate-950/90 px-4 py-3">
            <div className="mb-4 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <div className="space-y-2">
              <span className="block h-2 rounded bg-cyan-300/80" />
              <span className="block h-2 w-4/5 rounded bg-violet-300/70" />
              <span className="block h-2 w-2/3 rounded bg-blue-300/70" />
              <span className="block h-2 w-5/6 rounded bg-white/30" />
            </div>
          </div>
          <div className="mx-auto h-4 w-28 rounded-b-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
        </div>
      </motion.div>

      {/* Dynamic Floating Skill Badges */}
      {floatingBadges.map(({ icon: Icon, className, label }, index) => (
        <motion.div
          key={label}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${className} flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-3.5 py-2 text-xs font-semibold text-white shadow-neon backdrop-blur-xl transition hover:border-cyan-300/40`}
        >
          <Icon size={16} className="text-cyan-300" />
          <span>{label}</span>
        </motion.div>
      ))}
    </div>
  );
}