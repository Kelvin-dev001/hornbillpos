"use client";
import { useEffect, useRef } from "react";

/** Scroll parallax for the homepage hero icons: sets --py on the icon field; each icon moves by its own depth (--k).
 *  Off for visitors who prefer reduced motion, and only while the hero is on screen. */
export default function HeroParallax() {
  const probe = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const field = probe.current?.parentElement;
    if (!field || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, 900);
      field.style.setProperty("--py", `${-y}px`);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return <span ref={probe} style={{ display: "none" }} />;
}
