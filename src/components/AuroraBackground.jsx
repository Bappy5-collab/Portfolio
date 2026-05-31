/**
 * Decorative animated gradient-mesh background with a faded grid.
 * Purely presentational; sits behind content (place inside a `relative` parent).
 */
export default function AuroraBackground({ grid = true }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base vertical wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900 via-surface-800/40 to-surface-900" />

      {/* Faded grid */}
      {grid && (
        <div className="absolute inset-0 bg-grid bg-grid mask-fade opacity-60" />
      )}

      {/* Aurora blobs */}
      <div className="absolute -top-32 left-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora" />
      <div className="absolute top-1/3 right-0 h-[28rem] w-[28rem] translate-x-1/4 rounded-full bg-cyan-glow/10 blur-[120px] animate-aurora-slow" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[120px] animate-aurora" style={{ animationDelay: "-6s" }} />
    </div>
  );
}
