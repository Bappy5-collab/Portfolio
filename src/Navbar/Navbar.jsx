import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems.map(({ id }) => ({
        id,
        top: document.getElementById(id)?.getBoundingClientRect().top ?? 0,
      }));
      const current = sections.find(({ top }) => top <= 120 && top >= -200)?.id ?? "home";
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-900/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="container-narrow flex items-center justify-between h-16 px-4">
        <a
          href="#home"
          onClick={(e) => { scrollToSection(e, "home"); setMobileOpen(false); }}
          className="text-lg font-semibold text-white hover:text-accent transition-colors"
        >
          Chandon Kumar
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === id
                    ? "text-accent bg-accent/10"
                    : "text-mute-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-mute-400 hover:text-white hover:bg-white/5"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <motion.span
              className="h-0.5 w-full bg-current rounded-full"
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 w-full bg-current rounded-full"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 w-full bg-current rounded-full"
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-surface-900/95 backdrop-blur-xl border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container-narrow px-4 py-6 flex flex-col gap-1">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { scrollToSection(e, id); setMobileOpen(false); }}
                    className={`block px-4 py-3 rounded-lg text-base font-medium ${
                      activeSection === id ? "text-accent bg-accent/10" : "text-mute-400"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
