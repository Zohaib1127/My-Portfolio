import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { personalDetails, socialLinks } from "../data";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(event.target);
    // Aapki provided Web3Forms Access Key
    formData.append("access_key", "10ba42cb-2fd9-401e-a7e2-97918bd3e1db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        event.target.reset(); // Clear input fields
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section 
      id="contact" 
      eyebrow="Get In Touch" 
      title="Let’s build something sharp, scalable, and memorable."
    >
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        
        {/* Left Side: Direct Details & Verified Profile Links */}
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="glass-panel flex flex-col justify-between p-7 sm:p-8"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Open to full-time roles, internships, and collaborations.
            </h3>
            <p className="mt-4 leading-7 text-white/[0.68]">
              Reach out for MERN Stack applications, responsive React frontends, REST APIs, authentication systems, or C++/MATLAB software project ideas.
            </p>

            {/* Direct Contact Links */}
            <div className="mt-8 space-y-4">
              <a 
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm text-white/90 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-white/50">Email</div>
                  <div className="font-medium">{personalDetails.email}</div>
                </div>
              </a>

              <a 
                href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm text-white/90 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-white/50">Phone</div>
                  <div className="font-medium">{personalDetails.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm text-white/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-white/50">Location</div>
                  <div className="font-medium">{personalDetails.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
              Connect With Me
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={label} 
                  title={label}
                  className="icon-button transition hover:scale-110 hover:border-cyan-300/50 hover:text-cyan-300"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Working Form linked to Web3Forms */}
        <motion.form
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="glass-panel p-6 sm:p-8 flex flex-col justify-between"
          onSubmit={onSubmit}
        >
          {submitted ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <CheckCircle2 size={52} className="text-cyan-300 animate-bounce mb-4" />
              <h4 className="font-display text-2xl font-bold text-white">Message Delivered!</h4>
              <p className="mt-2 text-white/70 max-w-md">
                Thank you! Your email has been delivered to <span className="text-cyan-300">zaibi4052@gmail.com</span>[cite: 1]. I will review it and reply back shortly.
              </p>
              <button 
                type="button" 
                onClick={() => setSubmitted(false)} 
                className="secondary-button mt-6 text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field sm:col-span-1">
                  <span className="text-xs font-semibold text-white/70">Your Name</span>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="M. Zohaib" 
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-cyan-300/50"
                  />
                </label>

                <label className="field sm:col-span-1">
                  <span className="text-xs font-semibold text-white/70">Email Address</span>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="you@example.com" 
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-cyan-300/50"
                  />
                </label>

                <label className="field sm:col-span-2">
                  <span className="text-xs font-semibold text-white/70">Message</span>
                  <textarea 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder="Hi Zohaib, I'd like to discuss a software project or opportunity..." 
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-cyan-300/50 resize-none"
                  />
                </label>
              </div>

              {error && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
                  <AlertCircle size={16} />
                  <span>Something went wrong while sending. Please try again or email directly!</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="neon-button mt-6 flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <Send size={18} className={loading ? "animate-pulse" : ""} />
                <span>{loading ? "Sending Email..." : "Send Message"}</span>
              </button>
            </>
          )}
        </motion.form>

      </div>
    </Section>
  );
}