/**
 * Scroll to a section by id. Uses the active Lenis instance for smooth
 * momentum scrolling when available; falls back to native smooth scroll.
 * Offset accounts for the fixed navbar height.
 */
export function scrollToId(id, { offset = -72 } = {}) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = typeof window !== "undefined" ? window.__lenis : null;
  if (lenis) {
    lenis.scrollTo(el, { offset });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
