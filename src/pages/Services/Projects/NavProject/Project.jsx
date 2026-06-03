import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects, allTechFilters } from "../../../../data/projects";
import SectionHeading from "../../../../components/SectionHeading";
import goStoreImage from "../../../../assets/images/go.png";
import siteScoreImage from "../../../../assets/images/site_score.png";
import ecoAiImage from "../../../../assets/images/eco-ai.png";
import riseAtSevenImage from "../../../../assets/images/rise-at-seven.png";

// Resolve image src: use imported assets for local images, otherwise project.image (or absolute URL for / paths)
const getImageSrc = (project) => {
  if (project.title === "Go Store") return goStoreImage;
  if (project.title === "SiteScore AI") return siteScoreImage;
  if (project.title === "Eco AI") return ecoAiImage;
  if (project.title === "Rise at Seven") return riseAtSevenImage;
  const img = project.image;
  if (img.startsWith("http")) return img;
  if (typeof window !== "undefined" && img.startsWith("/")) return window.location.origin + img;
  return img;
};

// Some screenshots are wider than the 16:9 card; show them fully instead of cropping the sides
const getImageFit = (project) =>
  project.title === "SiteScore AI" ? "object-contain" : "object-cover";

const ease = [0.22, 1, 0.36, 1];

export default function Project() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.techStack.includes(filter));
  }, [filter]);

  const filters = ["All", ...allTechFilters];

  return (
    <section id="projects" className="relative py-section overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-narrow px-4 relative z-10">
        <SectionHeading
          num="04"
          label="Projects"
          title="Selected"
          highlight="work."
          description="A selection of recent projects with live demos and source code."
          className="mb-10"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((tech) => {
            const isActive = filter === tech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => setFilter(tech)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-mute-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-accent shadow-[0_4px_20px_-4px_rgba(59,130,246,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tech}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-surface-800/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-card-hover"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-surface-700">
                  <img
                    src={getImageSrc(project)}
                    alt={project.title}
                    className={`h-full w-full ${getImageFit(project)} transition-transform duration-700 group-hover:scale-105`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect fill='%23111318' width='800' height='450'/%3E%3Ctext fill='%2364748b' font-family='system-ui' font-size='22' x='400' y='225' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  {/* gradient veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/10 to-transparent opacity-80" />
                  {/* hover quick-links */}
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-600"
                      >
                        <FaExternalLinkAlt className="h-3 w-3" /> Live
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-surface-900/80 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm border border-white/10 transition-colors hover:border-accent/40"
                      >
                        <FaGithub className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-mute-400">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-nowrap items-center gap-2 overflow-hidden">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="whitespace-nowrap rounded-md bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-mute-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="whitespace-nowrap rounded-md bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-mute-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
