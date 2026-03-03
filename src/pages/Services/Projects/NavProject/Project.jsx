import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects, allTechFilters } from "../../../../data/projects";
import goStoreImage from "../../../../assets/images/go.png";
import siteScoreImage from "../../../../assets/images/site.png";

// Resolve image src: use imported assets for local images, otherwise project.image (or absolute URL for / paths)
const getImageSrc = (project) => {
  if (project.title === "Go Store") return goStoreImage;
  if (project.title === "SiteScore AI") return siteScoreImage;
  const img = project.image;
  if (img.startsWith("http")) return img;
  if (typeof window !== "undefined" && img.startsWith("/")) return window.location.origin + img;
  return img;
};

export default function Project() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.techStack.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="py-section bg-surface-800/40">
      <div className="container-narrow px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label text-accent mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Selected work
          </h2>
          <p className="text-mute-400 mb-8">
            A selection of recent projects with live demos and source code.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setFilter("All")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "All"
                  ? "bg-accent text-white"
                  : "bg-surface-600 text-mute-400 hover:text-white border border-white/5"
              }`}
            >
              All
            </button>
            {allTechFilters.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === tech
                    ? "bg-accent text-white"
                    : "bg-surface-600 text-mute-400 hover:text-white border border-white/5"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
          {filtered.map((project, index) => (
            <motion.article
              key={project.id}
              className="group rounded-xl border border-white/5 bg-surface-800/60 overflow-hidden hover:border-accent/20 hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="aspect-video overflow-hidden bg-surface-700">
                <img
                  src={getImageSrc(project)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect fill='%23111318' width='800' height='450'/%3E%3Ctext fill='%2364748b' font-family='system-ui' font-size='22' x='400' y='225' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-mute-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-surface-600/80 text-mute-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-600 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-600 text-mute-400 text-sm font-medium border border-white/5 hover:text-white hover:border-accent/30 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
