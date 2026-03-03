import { motion } from "framer-motion";
import { skillCategories } from "../../../data/skills";

const categoryIcons = {
  "AI & Automation": "◇",
  "Frontend": "◈",
  "Backend": "▷",
  "Database": "⬡",
  "Tools & DevOps": "⚙",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-section relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-800/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-narrow px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label text-accent mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight">
            Technologies I work with
          </h2>
          <p className="text-mute-400 text-lg">
            A structured overview of my technical stack across development, tools, and practices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              {/* Card surface with gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full rounded-2xl border border-white/[0.06] bg-surface-800/80 backdrop-blur-sm p-6 transition-all duration-300 group-hover:border-white/[0.1] group-hover:bg-surface-800/90 group-hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)]">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-accent/90 text-sm font-medium transition-colors group-hover:bg-accent/15">
                    {categoryIcons[category.title] ?? "•"}
                  </span>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills as modern pills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="inline-flex items-center px-3.5 py-2 rounded-xl text-sm font-medium text-mute-400 bg-white/[0.04] border border-white/[0.06] transition-all duration-200 group-hover:border-white/[0.08] hover:text-white hover:bg-white/[0.06] hover:border-accent/20"
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.04 + i * 0.02 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
