import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Front-end Developer",
    company: "Depth Search Limited",
    period: "Present",
    points: [
      "API integration — connecting frontend with RESTful APIs and seamless data flow.",
      "Building features with Next.js, TypeScript, and Material UI.",
      "Developing responsive web applications with React.js and Next.js.",
      "Optimizing applications for performance, speed, and scalability.",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Material UI"],
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
            I'm <span className="text-white font-medium">Chandon Kumar</span>, a web developer from Bangladesh with{" "}
            <span className="text-accent font-medium">3+ years of experience</span> building modern websites that combine clean design with strong functionality.
          </p>
          <p className="text-mute-400 leading-relaxed mb-10">
            I specialize in web design and development, turning ideas into functional digital products. I focus on maintainable code, clear architecture, and delivering projects that meet both user and business goals.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {["MERN Stack", "Frontend", "UI/UX"].map((tag) => (
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
