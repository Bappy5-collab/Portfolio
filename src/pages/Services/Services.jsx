import { motion } from "framer-motion";
import { FaCode, FaServer, FaPlug, FaMobileAlt, FaRobot, FaCloud } from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web applications with React, Next.js, Node.js, and MongoDB. From API design to responsive UI and deployment.",
    icon: FaCode,
  },
  {
    title: "SaaS Development",
    description: "Scalable software-as-a-service products: authentication, subscriptions, dashboards, and multi-tenant architecture.",
    icon: FaCloud,
  },
  {
    title: "AI Integration",
    description: "Integrating AI and ML capabilities into web apps: chatbots, content generation, and intelligent automation.",
    icon: FaRobot,
  },
  {
    title: "Frontend Development",
    description: "Modern, responsive interfaces with React, Next.js, TypeScript, and Material UI. Performance-focused and accessible.",
    icon: FaCode,
  },
  {
    title: "Backend & APIs",
    description: "RESTful APIs, authentication, and database design with Node.js, Express, and MongoDB.",
    icon: FaServer,
  },
  {
    title: "API Integration",
    description: "Third-party API integration, data sync, and seamless connections between your app and external services.",
    icon: FaPlug,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first, cross-device layouts with Tailwind CSS and component libraries for consistent UX.",
    icon: FaMobileAlt,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section">
      <div className="container-narrow px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label text-accent mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            What I offer
          </h2>
          <p className="text-mute-400">
            Full-stack development, SaaS products, and AI-powered features for businesses and startups.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
          {services.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              className="rounded-xl border border-white/5 bg-surface-800/60 p-6 hover:border-accent/20 hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-mute-400 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
