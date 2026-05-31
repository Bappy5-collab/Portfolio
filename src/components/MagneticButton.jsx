import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Button/anchor that gently pulls toward the cursor (magnetic effect).
 * Renders as `as` ("a" | "button"). Falls back gracefully — no effect on touch.
 */
export default function MagneticButton({
  as = "button",
  children,
  className = "",
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[as] ?? motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
