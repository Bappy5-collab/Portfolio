import { useRef, useState } from "react";

/**
 * A glass card with a cursor-following radial spotlight and a subtle lift on hover.
 * Wraps arbitrary children. Spotlight is disabled on touch / coarse pointers.
 */
export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(59,130,246,0.14)" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface-800/70 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 ${className}`}
    >
      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />
      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
