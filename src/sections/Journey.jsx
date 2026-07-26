import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { timeline } from "../data";

export function Journey() {
  return (
    <Section 
      id="journey" 
      eyebrow="Education & Experience" 
      title="A focused path through software engineering & full-stack development."
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Glowing Timeline Center Line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        {timeline.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className={`relative mb-10 flex flex-col gap-6 pl-12 sm:flex-row sm:pl-0 ${
                isEven ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Icon Node */}
              <div className="absolute left-0 top-0 z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan-200/40 bg-slate-950 text-cyan-300 shadow-neon sm:left-1/2 sm:-translate-x-1/2">
                {item.title.includes("BS") ? (
                  <GraduationCap size={19} />
                ) : item.title.includes("Training") || item.title.includes("Developer") ? (
                  <Briefcase size={18} />
                ) : (
                  <Award size={18} />
                )}
              </div>

              {/* Timeline Content Card */}
              <div
                className={`glass-panel p-6 sm:w-[calc(50%-2.25rem)] ${
                  isEven ? "sm:ml-auto" : "sm:mr-auto"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="mt-1 text-sm font-medium text-cyan-100/70">
                    {item.subtitle}
                  </p>
                )}

                <p className="mt-3 leading-relaxed text-white/[0.68]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}