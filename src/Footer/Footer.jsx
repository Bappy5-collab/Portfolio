import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { scrollToId } from "../lib/scroll";
import Reveal from "../components/Reveal";

const socialLinks = [
  { href: "https://github.com/Bappy5-collab", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/chandon-kumar-4033072a0/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/chandonkumerbappy.chandonkumerbappy", Icon: FaFacebook, label: "Facebook" },
];

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id) => scrollToId(id);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-surface-900">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-narrow relative z-10 px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand / CTA */}
          <Reveal>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
              className="inline-flex items-center gap-2.5 font-display text-xl font-semibold text-white"
            >
              <img
                src={logo}
                alt="Chandon Kumar Bappy logo"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
              />
              Chandon Kumar Bappy<span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute-400">
              Full Stack Engineer crafting fast, modern web applications. Open to freelance and
              full-time opportunities.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(59,130,246,0.5)]"
            >
              Start a project
            </a>
          </Reveal>

          {/* Nav */}
          <Reveal delay={0.08}>
            <p className="font-mono text-xs uppercase tracking-widest text-mute-500">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                    className="text-sm text-mute-400 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Social */}
          <Reveal delay={0.16}>
            <p className="font-mono text-xs uppercase tracking-widest text-mute-500">Connect</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-3 text-mute-400 transition-all hover:-translate-y-0.5 hover:border-accent/25 hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:chandonkumar2023@gmail.com"
              className="mt-4 block text-sm text-mute-400 transition-colors hover:text-white"
            >
              chandonkumar2023@gmail.com
            </a>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-sm text-mute-500">
            © {new Date().getFullYear()} Chandon Kumar Bappy. Designed &amp; built with care.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-xs font-medium text-mute-400 transition-all hover:-translate-y-0.5 hover:border-accent/25 hover:text-white"
          >
            Back to top <FaArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
