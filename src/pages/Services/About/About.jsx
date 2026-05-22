import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Frontend Developer",
    company: "ZesXai, Rajshahi, Bangladesh",
    period: "Jan 2025 – Present",
    points: [
      "Built and integrated RESTful APIs for smooth frontend-backend communication.",
      "Developed full-stack applications using Next.js, React.js, Node.js, and MongoDB.",
      "Created responsive and user-friendly UI with React.js and Material UI.",
      "Optimized application performance for speed, scalability, and efficiency.",
    ],
    tags: ["Next.js", "React.js", "Node.js", "MongoDB", "Material UI"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-section bg-surface-800/40">
      <div className="container-narrow px-4 space-y-12">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label text-accent mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Professional summary
          </h2>
          <p className="text-mute-400 text-lg leading-relaxed mb-6">
            I'm <span className="text-white font-medium">Chandon Kumar</span>, a Frontend Developer (React / Next.js) from Bangladesh with{" "}
            <span className="text-accent font-medium">2–3 years of experience</span> building scalable SaaS applications using JavaScript and TypeScript.
          </p>
          <p className="text-mute-400 leading-relaxed mb-10">
            I'm strong in frontend architecture, performance optimization, and API integration (REST &amp; GraphQL). I have experience working in Agile teams and CI/CD workflows, and I focus on building clean, reusable UI components.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {["React / Next.js", "TypeScript", "SaaS", "UI/UX"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg bg-surface-600 border border-white/5 text-mute-400 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="section-label text-accent mb-4">Experience</p>
          <div className="relative pl-8 border-l border-white/10 space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-0 w-3 h-3 rounded-full bg-accent border-4 border-surface-800" />
                <div className="bg-surface-700/50 rounded-xl border border-white/5 p-6 sm:p-8 hover:border-accent/20 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <FaBriefcase className="text-accent w-5 h-5 shrink-0" />
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <span className="text-mute-500 text-sm">· {job.company}</span>
                  </div>
                  <p className="text-mute-500 text-sm mb-4">{job.period}</p>
                  <ul className="space-y-2 mb-4">
                    {job.points.map((point, j) => (
                      <li key={j} className="text-mute-400 text-sm sm:text-base leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
