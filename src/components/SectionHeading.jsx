import { motion } from "framer-motion";

/**
 * Consistent numbered section heading.
 * - `num`   → "01", "02" mono index
 * - `label` → eyebrow text ("About")
 * - `title` → main heading (string or node); part can be highlighted via `highlight`
 * - `align` → "left" | "center"
 */
export default function SectionHeading({
  num,
  label,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      className={`${isCenter ? "mx-auto text-center max-w-2xl" : "max-w-3xl"} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`section-num mb-4 ${isCenter ? "justify-center" : ""}`}>
        {num && <span className="text-accent">{num}</span>}
        <span>{label}</span>
      </div>
      <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-mute-400 text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
