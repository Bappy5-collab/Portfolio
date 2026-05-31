import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { scrollToId } from "../lib/scroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (e, id) => {
  e.preventDefault();
  scrollToId(id);
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      const sections = navItems.map(({ id }) => ({
        id,
        top: document.getElementById(id)?.getBoundingClientRect().top ?? 0,
      }));
      const current = sections.find(({ top }) => top <= 120 && top >= -200)?.id ?? "home";
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-surface-900/90 backdrop-blur-xl border-b border-white/[0.06]" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="container-narrow flex items-center justify-between h-16 px-4">
        <a
          href="#home"
          onClick={(e) => { scrollToSection(e, "home"); setMobileOpen(false); }}
          className="group flex items-center gap-2.5 text-lg font-semibold text-white"
        >
          <img
            src={logo}
            alt="Chandon Kumar logo"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display tracking-tight">Chandon<span className="text-accent">.</span></span>
        </a>

        {/* Desktop nav — segmented pill */}
        <ul className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 backdrop-blur-sm">
          {navItems.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeSection === id ? "text-white" : "text-mute-400 hover:text-white"
                }`}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent/15 ring-1 ring-accent/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(59,130,246,0.5)]"
        >
          Let&apos;s talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-mute-400 hover:text-white hover:bg-white/5"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <motion.span className="h-0.5 w-full bg-current rounded-full" animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} transition={{ duration: 0.2 }} />
            <motion.span className="h-0.5 w-full bg-current rounded-full" animate={{ opacity: mobileOpen ? 0 : 1 }} transition={{ duration: 0.2 }} />
            <motion.span className="h-0.5 w-full bg-current rounded-full" animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} transition={{ duration: 0.2 }} />
          </div>
        </button>
      </nav>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent via-cyan-glow to-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-surface-900 backdrop-blur-xl border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container-narrow px-4 py-6 flex flex-col gap-1">
              {navItems.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={(e) => { scrollToSection(e, id); setMobileOpen(false); }}
                    className={`block rounded-lg px-4 py-3 text-base font-medium ${
                      activeSection === id ? "text-accent bg-accent/10" : "text-mute-400"
                    }`}
                  >
                    <span className="font-mono text-xs text-mute-600 mr-3">0{i + 1}</span>
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
