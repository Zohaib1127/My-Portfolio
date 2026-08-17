import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { TiltCard } from "../components/TiltCard";
import { projects } from "../data";

export function Projects() {
  // Dynamic Live Demo links lookup object
  const liveDemoLinks = {
    settlein: "https://settlein27.netlify.app/",
    ishqe: "https://ishqeaura.netlify.app/",
    aura: "https://ishqeaura.netlify.app/",
    wahab: "https://wahabauto.netlify.app/",
    auto: "https://wahabauto.netlify.app/",
  };

  return (
    <Section 
      id="projects" 
      eyebrow="Featured Projects" 
      title="Production-ready MERN systems & software applications."
    >
      <div className="grid gap-7 lg:grid-cols-2">
        {projects.map((project, index) => {
          const titleLower = project.title.toLowerCase();

          // Check if explicit demoUrl exists or match keywords for Live Demo link
          let liveUrl = project.demoUrl || project.liveUrl || null;

          if (!liveUrl) {
            if (titleLower.includes("settlein")) {
              liveUrl = liveDemoLinks.settlein;
            } else if (titleLower.includes("ishq") || titleLower.includes("aura")) {
              liveUrl = liveDemoLinks.ishqe;
            } else if (titleLower.includes("wahab") || titleLower.includes("auto")) {
              liveUrl = liveDemoLinks.wahab;
            }
          }

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <TiltCard className="flex h-full flex-col justify-between p-5 sm:p-6" glow={project.glow}>
                <div>
                  {/* Visual Glassmorphic Preview Header */}
                  <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/40">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.22),transparent_32%,rgba(0,0,0,.35)_70%)]" />
                    
                    {/* Mock Window Controls */}
                    <div className="absolute left-5 top-5 flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-white/75" />
                      <span className="h-3 w-3 rounded-full bg-white/[0.45]" />
                      <span className="h-3 w-3 rounded-full bg-white/25" />
                    </div>

                    {/* Glass Card Inner Mock Content */}
                    <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/20 bg-black/[0.28] p-5 backdrop-blur-xl">
                      <div className="mb-4 flex h-6 w-32 items-center rounded-full bg-white/80 px-3 font-mono text-[10px] font-bold tracking-wider text-black/80">
                        {project.tech[0]}
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded bg-white/[0.35]" />
                        <div className="h-2 w-4/5 rounded bg-white/25" />
                        <div className="h-2 w-2/3 rounded bg-white/20" />
                      </div>
                    </div>
                  </div>

                  {/* Project Metadata */}
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/[0.68]">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span 
                        key={item} 
                        className="rounded-full border border-cyan-200/[0.18] bg-cyan-200/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Container */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  {/* Live Demo Button (Renders if liveUrl exists) */}
                  {liveUrl && (
                    <a 
                      href={liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="neon-button flex flex-1 items-center justify-center gap-2 py-2.5 text-sm font-semibold"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {/* GitHub Repository Link */}
                  <a 
                    href={project.githubUrl || "https://github.com/Zohaib1127"} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`compact-button compact-button-muted flex items-center justify-center gap-2 ${
                      liveUrl ? "flex-1" : "w-full sm:w-auto"
                    }`}
                  >
                    <Github size={17} />
                    <span>View Repository</span>
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}