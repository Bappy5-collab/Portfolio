import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Bappy5-collab", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/chandon-kumar-4033072a0/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/chandonkumerbappy.chandonkumerbappy", Icon: FaFacebook, label: "Facebook" },
];

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || "";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const sendMessage = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const name = form.user_name?.value?.trim();
    const email = form.user_email?.value?.trim();
    const message = form.message?.value?.trim();
    if (!name || !email || !message) return;

    setStatus("sending");
    try {
      const base = contactApiUrl.replace(/\/$/, "");
      const url = base ? `${base}/api/contact` : "/api/contact";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-section bg-surface-800/40">
      <div className="container-narrow px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label text-accent mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Get in touch
          </h2>
          <p className="text-mute-400">
            Have a project in mind? Send a message or reach out via the links below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 gap-y-12 lg:gap-16">
          <motion.form
            ref={formRef}
            onSubmit={sendMessage}
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-mute-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-surface-700 border border-white/5 text-white placeholder-mute-600 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-mute-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-surface-700 border border-white/5 text-white placeholder-mute-600 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-mute-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg bg-surface-700 border border-white/5 text-white placeholder-mute-600 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-600 disabled:opacity-60 transition-colors"
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Sent ✓" : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
          </motion.form>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Chandon Kumar</h3>
              <p className="text-mute-400">Web Developer</p>
            </div>
            <a
              href="tel:+8801794912083"
              className="flex items-center gap-4 p-4 rounded-xl bg-surface-700/50 border border-white/5 hover:border-accent/20 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <FaPhoneAlt className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-mute-500 uppercase tracking-wider">Phone</p>
                <p className="text-white font-medium">+88 01794912083</p>
              </div>
            </a>
            <a
              href="mailto:chandonkumar2023@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-surface-700/50 border border-white/5 hover:border-accent/20 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-mute-500 uppercase tracking-wider">Email</p>
                <p className="text-white font-medium break-all">chandonkumar2023@gmail.com</p>
              </div>
            </a>
            <div>
              <p className="text-sm font-medium text-mute-400 mb-3">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-surface-700/50 border border-white/5 text-mute-400 hover:text-accent hover:border-accent/20 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
