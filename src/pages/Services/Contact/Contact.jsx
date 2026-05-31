import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading";

const socialLinks = [
  { href: "https://github.com/Bappy5-collab", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/chandon-kumar-4033072a0/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/chandonkumerbappy.chandonkumerbappy", Icon: FaFacebook, label: "Facebook" },
];

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || "";

const fieldClass =
  "w-full rounded-xl bg-surface-700/60 border border-white/[0.07] px-4 py-3 text-white placeholder-mute-600 transition-colors focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/15";

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
    <section id="contact" className="relative py-section overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 left-0 w-[480px] h-[360px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-narrow px-4 relative z-10">
        <SectionHeading
          num="06"
          label="Contact"
          title="Let's build"
          highlight="something great."
          description="Have a project in mind? Send a message or reach out via the links below — I usually reply within a day."
          className="mb-14"
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.8fr]">
          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendMessage}
            className="card-glass space-y-5 p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-mute-400">Name</label>
                <input type="text" id="name" name="user_name" required placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-mute-400">Email</label>
                <input type="email" id="email" name="user_email" required placeholder="you@example.com" className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-mute-400">Message</label>
              <textarea id="message" name="message" rows={6} required placeholder="Tell me about your project..." className={`${fieldClass} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary group w-full disabled:opacity-60"
            >
              <span className="relative z-10">
                {status === "sending" ? "Sending..." : status === "success" ? "Message sent ✓" : "Send message"}
              </span>
              {status !== "success" && (
                <FaPaperPlane className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              )}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-400">Thanks! I&apos;ll get back to you shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
            )}
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-glass p-6">
              <h3 className="text-lg font-semibold text-white">Chandon Kumar</h3>
              <p className="text-sm text-mute-400">Full-Stack Developer · Bangladesh</p>
            </div>

            <a href="tel:+8801794912083" className="card-glass flex items-center gap-4 p-5 transition-colors hover:border-accent/25">
              <div className="rounded-xl bg-accent/10 p-3 text-accent ring-1 ring-accent/20">
                <FaPhoneAlt className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-mute-500">Phone</p>
                <p className="font-medium text-white">+88 01794912083</p>
              </div>
            </a>

            <a href="mailto:chandonkumar2023@gmail.com" className="card-glass flex items-center gap-4 p-5 transition-colors hover:border-accent/25">
              <div className="rounded-xl bg-accent/10 p-3 text-accent ring-1 ring-accent/20">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-mute-500">Email</p>
                <p className="truncate font-medium text-white">chandonkumar2023@gmail.com</p>
              </div>
            </a>

            <div className="card-glass p-6">
              <p className="mb-3 text-sm font-medium text-mute-400">Connect</p>
              <div className="flex gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
