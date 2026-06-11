import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading";
import Reveal from "../../../components/Reveal";

const experience = [
  {
    role: "Full Stack Engineer",
    company: "ZesXai",
    location: "Rajshahi, Bangladesh",
    period: "Dec 2023 – Present",
    points: [
      "Built and integrated RESTful APIs for smooth frontend–backend communication.",
      "Developed full-stack applications using Next.js, React.js, Node.js, and MongoDB.",
      "Created responsive, user-friendly UI with React.js and Material UI.",
      "Optimized application performance for speed, scalability, and efficiency.",
    ],
    tags: ["Next.js", "React.js", "Node.js", "MongoDB", "Material UI"],
  },
];

const highlights = [
  "Frontend architecture & reusable component systems",
  "Performance optimization & Core Web Vitals",
  "REST & GraphQL API integration",
  "Agile workflows and CI/CD pipelines",
];

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="relative py-section overflow-hidden">
      {/* subtle glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-narrow px-4 relative z-10">
        <SectionHeading
          num="01"
          label="About"
          title="Building with"
          highlight="intent & craft."
          align="left"
          className="mb-14"
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          {/* Left: narrative */}
          <Reveal>
            <p className="section-num mb-6">
              <span className="text-accent">01</span>
              <span>Profile</span>
            </p>
            <p className="text-mute-400 text-lg leading-relaxed mb-6">
              I&apos;m <span className="text-white font-medium">Chandon Kumar</span>, a Full Stack
              Engineer (React / Next.js) from Bangladesh with{" "}
              <span className="text-accent font-medium">3+ years of experience</span> building
              scalable SaaS applications in JavaScript and TypeScript.
            </p>
            <p className="text-mute-400 leading-relaxed mb-8">
              I care about the details others skip — accessible, reusable component systems,
              measurable performance, and interfaces that feel effortless. I&apos;ve shipped
              production apps in Agile teams with CI/CD workflows from first commit to deploy.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h, i) => (
                <motion.li
                  key={h}
                  className="flex items-start gap-3 text-sm text-mute-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                >
                  <FaCheckCircle className="text-accent/80 w-4 h-4 mt-0.5 shrink-0" />
                  {h}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2.5">
              {["React / Next.js", "TypeScript", "SaaS", "UI/UX"].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </Reveal>

          {/* Right: experience timeline */}
          <Reveal delay={0.1}>
            <p className="section-num mb-6">
              <span className="text-accent">02</span>
              <span>Experience</span>
            </p>
            <div className="relative pl-8 border-l border-white/10 space-y-8">
              {experience.map((job, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[2.15rem] top-1.5 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-accent/20 animate-ping" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface-900" />
                  </span>
                  <div className="card-glass p-6 sm:p-7 transition-colors hover:border-accent/20">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <FaBriefcase className="text-accent w-4 h-4 shrink-0" />
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                    </div>
                    <p className="text-sm text-mute-400 mb-1">
                      {job.company} · <span className="text-mute-500">{job.location}</span>
                    </p>
                    <p className="font-mono text-xs text-mute-500 mb-4">{job.period}</p>
                    <ul className="space-y-2.5 mb-5">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-mute-400">
                          <span className="text-accent mt-1 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
