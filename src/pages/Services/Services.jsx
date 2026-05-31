import { motion } from "framer-motion";
import { FaCode, FaServer, FaPlug, FaRobot, FaCloud, FaArrowRight } from "react-icons/fa";
import SectionHeading from "../../components/SectionHeading";
import SpotlightCard from "../../components/SpotlightCard";
import { scrollToId } from "../../lib/scroll";

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web apps with React, Next.js, Node.js, and MongoDB — from API design to responsive UI and deployment.",
    icon: FaCode,
  },
  {
    title: "SaaS Development",
    description: "Scalable software-as-a-service products: authentication, subscriptions, dashboards, and multi-tenant architecture.",
    icon: FaCloud,
  },
  {
    title: "AI Integration",
    description: "Bringing AI & ML into web apps: chatbots, content generation, and intelligent automation that adds real value.",
    icon: FaRobot,
  },
  {
    title: "Frontend Engineering",
    description: "Modern, accessible interfaces with React, Next.js, TypeScript, and Tailwind — performance-focused to the pixel.",
    icon: FaCode,
  },
  {
    title: "Backend & APIs",
    description: "RESTful APIs, authentication, and database design with Node.js, Express, and MongoDB built to scale.",
    icon: FaServer,
  },
  {
    title: "API Integration",
    description: "Third-party integrations, data sync, and seamless connections between your app and external services.",
    icon: FaPlug,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Services() {
  const scrollTo = (id) => scrollToId(id);

  return (
    <section id="services" className="relative py-section overflow-hidden bg-surface-800/40">
      <div className="absolute inset-0 bg-dot bg-dot mask-fade-b opacity-30 pointer-events-none" />

      <div className="container-narrow px-4 relative z-10">
        <SectionHeading
          num="05"
          label="Services"
          title="What I"
          highlight="offer."
          description="Full-stack development, SaaS products, and AI-powered features for businesses and startups."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease }}
            >
              <SpotlightCard className="h-full p-6">
                <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-mute-400">{description}</p>
              </SpotlightCard>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease }}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-6"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative">
              <h3 className="mb-2 text-lg font-semibold text-white">Have a project in mind?</h3>
              <p className="text-sm leading-relaxed text-mute-400">
                Let&apos;s turn your idea into a fast, polished product. I&apos;m available for
                freelance and full-time work.
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(59,130,246,0.5)]"
            >
              Start a conversation
              <FaArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
