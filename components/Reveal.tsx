"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Fades [data-reveal] blocks in as they enter the viewport.
 *  Re-runs on every route change (the layout persists across client navigation),
 *  and reveals anything already on screen immediately so no section is ever left blank. */
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"));
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 }
    );
    els.forEach((e) => io.observe(e));
    // Safety net: never leave content hidden for long (e.g. print, unusual browsers).
    const t = window.setTimeout(() => els.forEach((e) => e.classList.add("in")), 2500);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, [path]);
  return null;
}
