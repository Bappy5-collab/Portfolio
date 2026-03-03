import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Bappy5-collab", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/chandon-kumar-4033072a0/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/chandonkumerbappy.chandonkumerbappy", Icon: FaFacebook, label: "Facebook" },
];

export default function Banner() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900 via-surface-800/50 to-surface-900 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-narrow relative z-10 px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <motion.p
            className="section-label text-accent mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full-Stack Developer
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="text-accent">Chandon Kumar</span>
          </motion.h1>
          <motion.p
            className="text-mute-400 text-lg max-w-prose leading-relaxed mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build modern web applications with React, Next.js, and the MERN stack. 
            Focused on clean architecture, performance, and user experience for clients worldwide.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-600 transition-colors shadow-lg shadow-accent/20"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-600 text-white font-medium rounded-lg border border-white/10 hover:border-accent/50 hover:bg-surface-500 transition-colors"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-mute-400 hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl scale-95" />
            <img
              src="https://i.ibb.co.com/535jf96/chandon-fiver-1-Picsart-Background-Changer.png"
              alt="Chandon Kumar"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover object-top shadow-card border border-white/5"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mute-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span
          className="w-6 h-10 rounded-full border-2 border-mute-500 flex flex-col items-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-mute-500" />
        </motion.span>
      </motion.div>
    </section>
  );
}
