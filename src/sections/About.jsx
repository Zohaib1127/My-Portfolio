import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { TiltCard } from "../components/TiltCard";
import { stats } from "../data";

export function About() {
  return (
    <Section 
      id="about" 
      eyebrow="About Me" 
      title="Building thoughtful software with polish, performance, and purpose."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="glass-panel p-7 sm:p-10 flex flex-col justify-center gap-4"
        >
          <p className="text-lg leading-8 text-white/[0.82] sm:text-xl sm:leading-9">
            I am a <span className="font-semibold text-cyan-300">Software Engineering Student</span> at the University of Gujrat and a passionate <span className="font-semibold text-cyan-300">MERN Stack Developer</span>. I specialize in building scalable web applications, RESTful APIs, and responsive, dynamic user interfaces.
          </p>
          <p className="text-base leading-7 text-white/[0.68] sm:text-lg">
            With hands-on industrial workplace training in Front End Web Development and advanced certifications in C++ and JavaScript, I enjoy turning complex real-world problems into clean, high-performance digital products.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map(({ label, value, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <TiltCard className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100 shadow-neon">
                  <Icon size={22} />
                </div>
                <p className="font-display text-3xl font-bold text-white">{value}</p>
                <p className="mt-2 text-sm font-medium text-white/[0.58]">{label}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}