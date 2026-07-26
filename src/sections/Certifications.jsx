import { Award, CheckCircle, Calendar, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { TiltCard } from "../components/TiltCard";
import { certifications } from "../data";

export function Certifications() {
  return (
    <Section 
      id="certificates" 
      eyebrow="Verified Credentials" 
      title="Cisco Certifications & Technical Training Qualifications."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <TiltCard className="flex h-full flex-col justify-between p-6">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-neon`}>
                    <Award size={22} />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <CheckCircle size={12} /> Verified
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="font-display text-xl font-bold text-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-cyan-300">
                  {cert.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {cert.description}
                </p>
              </div>

              {/* Metadata Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-cyan-300" />
                    {cert.date}
                  </span>
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-cyan-200 border border-white/10">
                    {cert.type}
                  </span>
                </div>
                {cert.details && (
                  <div className="flex items-center gap-1.5 text-[11px] text-white/40">
                    <UserCheck size={12} />
                    <span>{cert.details}</span>
                  </div>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}