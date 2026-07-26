import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { TiltCard } from "../components/TiltCard";
import { skills } from "../data";

export function Skills() {
  return (
    <Section 
      id="skills" 
      eyebrow="Technical Proficiency" 
      title="A modern stack for scalable web apps & robust software engineering."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skills.map(({ name, level, category, icon: Icon, color }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.035 }}
          >
            <TiltCard className="flex flex-col justify-between min-h-[190px] p-5">
              <div>
                {/* Header: Icon & Category Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-neon`}>
                    <Icon size={22} />
                  </div>
                  {category && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-200/60 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                      {category}
                    </span>
                  )}
                </div>

                {/* Skill Name & Level Percentage */}
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {name}
                  </h3>
                  <span className="text-sm font-semibold text-cyan-300">
                    {level}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.15 + index * 0.02, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${color}`}
                />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}