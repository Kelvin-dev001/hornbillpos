"use client";
import { useEffect, useRef } from "react";
/** Thin orange reading-progress bar under the header, and a "scrolled" state for the header shadow. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      document.body.classList.toggle("is-scrolled", h.scrollTop > 8);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return <div className="scroll-progress" aria-hidden><div ref={bar} /></div>;
}
