import { motion } from "framer-motion";
import { skillCategories } from "../../../data/skills";
import SectionHeading from "../../../components/SectionHeading";
import SpotlightCard from "../../../components/SpotlightCard";

const categoryIcons = {
  "AI & Automation": "◇",
  "Frontend": "◈",
  "Backend": "▷",
  "Database": "⬡",
  "Tools & DevOps": "⚙",
};

const ease = [0.22, 1, 0.36, 1];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-section overflow-hidden bg-surface-800/40">
      <div className="absolute inset-0 bg-dot bg-dot mask-fade-b opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container-narrow px-4 relative z-10">
        <SectionHeading
          num="03"
          label="Skills"
          title="The stack I"
          highlight="ship with."
          description="A structured overview of my toolkit across development, design, and delivery."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
            >
              <SpotlightCard className="h-full p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-accent text-base transition-colors group-hover:bg-accent/15">
                    {categoryIcons[category.title] ?? "•"}
                  </span>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="ml-auto font-mono text-xs text-mute-600">
                    {String(category.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-mute-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-white hover:bg-accent/[0.08]"
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 + i * 0.015 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
