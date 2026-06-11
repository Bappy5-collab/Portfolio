import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowRight } from "react-icons/fa";
import AuroraBackground from "../../../components/AuroraBackground";
import MagneticButton from "../../../components/MagneticButton";
import CountUp from "../../../components/CountUp";
import { scrollToId } from "../../../lib/scroll";

const socialLinks = [
  { href: "https://github.com/Bappy5-collab", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/chandon-kumar-4033072a0/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/chandonkumerbappy.chandonkumerbappy", Icon: FaFacebook, label: "Facebook" },
];

const stats = [
  { value: 3, suffix: "+", label: "Years building" },
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 15, suffix: "+", label: "Happy clients" },
];

const marqueeTech = [
  "React", "Next.js", "TypeScript", "Node.js", "MongoDB",
  "Tailwind", "Express", "Framer Motion", "GSAP", "Supabase", "AWS",
];

const ease = [0.22, 1, 0.36, 1];

export default function Banner() {
  const scrollTo = (id) => scrollToId(id);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <AuroraBackground />

      <div className="container-narrow relative z-10 px-4 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-10 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm mb-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-xs font-medium text-mute-400">
              Available for freelance &amp; full-time
            </span>
          </motion.div>

          <motion.p
            className="section-num mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
          >
            <span>Full Stack Engineer · React / Next.js</span>
          </motion.p>

          <motion.h1
            className="heading-display text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.04] mb-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
          >
            <span className="block text-white">Hi, I&apos;m Chandon —</span>
            <span className="block gradient-text">I craft fast, modern web apps.</span>
          </motion.h1>

          <motion.p
            className="text-mute-400 text-lg max-w-prose leading-relaxed mb-9"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
          >
            I design and build production-grade applications with{" "}
            <span className="text-white">React, Next.js, and the MERN stack</span> — obsessed with
            clean architecture, performance, and pixel-level detail for clients worldwide.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <MagneticButton
              as="a"
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="btn-primary group"
            >
              <span className="relative z-10">Hire Me</span>
              <FaArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              {/* shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </MagneticButton>
            <MagneticButton
              as="button"
              type="button"
              onClick={() => scrollTo("projects")}
              className="btn-ghost"
              strength={0.25}
            >
              View Projects
            </MagneticButton>

            <div className="flex items-center gap-1.5 ml-1">
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
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-md border-t border-white/[0.06] pt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-mute-500 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <div className="relative animate-float">
            {/* Conic gradient ring */}
            <div className="absolute -inset-3 rounded-[2rem] bg-[conic-gradient(from_180deg,rgba(59,130,246,0.5),rgba(34,211,238,0.3),transparent,rgba(59,130,246,0.5))] blur-md opacity-70 animate-pulse-glow" />
            <div className="absolute inset-0 rounded-[1.6rem] bg-accent/20 blur-2xl scale-95" />
            <div className="relative rounded-[1.6rem] p-px bg-gradient-to-br from-white/20 via-white/5 to-transparent">
              <img
                src="https://i.ibb.co.com/535jf96/chandon-fiver-1-Picsart-Background-Changer.png"
                alt="Chandon Kumar"
                className="w-64 h-72 sm:w-80 sm:h-96 rounded-[1.55rem] object-cover object-top bg-surface-700"
              />
            </div>
            {/* Floating chip */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 rounded-xl border border-white/10 bg-surface-800/90 backdrop-blur-md px-4 py-3 shadow-card">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-mute-500">Currently</p>
              <p className="text-sm font-semibold text-white">Full Stack Engineer @ ZesXai</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech ticker — horizontal infinite scroll */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.05] bg-surface-900/40 backdrop-blur-sm overflow-hidden py-4">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee-track gap-10">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-mono text-sm text-mute-500/80 whitespace-nowrap select-none"
              >
                {tech}
                <span className="text-accent/40">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
