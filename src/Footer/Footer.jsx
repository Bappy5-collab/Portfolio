import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Bappy5-collab", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/chandon-kumar-4033072a0/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/chandonkumerbappy.chandonkumerbappy", Icon: FaFacebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-900 py-10">
      <div className="container-narrow px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-mute-500 text-sm order-2 sm:order-1">
          © {new Date().getFullYear()} Chandon Kumar. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 order-1 sm:order-2" aria-label="Social links">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mute-500 hover:text-accent transition-colors p-1"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </nav>
      </div>
      <p className="container-narrow px-4 mt-4 text-center text-mute-600 text-sm">
        Designed & built by Chandon Kumar
      </p>
    </footer>
  );
}
