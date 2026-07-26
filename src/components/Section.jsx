import { motion } from "framer-motion";

const defaultReveal = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0 }
};

export function Section({ 
  id, 
  eyebrow, 
  title, 
  description, 
  children, 
  className = "",
  variants = defaultReveal
}) {
  return (
    <section id={id} className={`relative z-10 px-5 py-24 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow && <p className="section-eyebrow mb-2">{eyebrow}</p>}
            {title && <h2 className="section-title text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>}
            {description && <p className="mt-4 text-base text-white/70 sm:text-lg">{description}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}