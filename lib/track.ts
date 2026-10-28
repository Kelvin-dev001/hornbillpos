"use client";
type W = Window & { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void; ttq?: { track: (e: string, p?: object) => void } };

/** Fire a conversion event to every analytics tool that is loaded. Safe when none are configured. */
export function trackContact(kind: "whatsapp" | "call", location: string) {
  if (typeof window === "undefined") return;
  const w = window as W;
  try { w.gtag?.("event", kind === "whatsapp" ? "whatsapp_click" : "call_click", { location }); } catch {}
  try { w.fbq?.("track", "Contact", { method: kind, location }); } catch {}
  try { w.ttq?.track("Contact", { method: kind, location }); } catch {}
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

/** Remember UTM tags from the landing URL for this visit. */
export function captureUtm() {
  if (typeof window === "undefined") return;
  try {
    const p = new URLSearchParams(window.location.search);
    const found = UTM_KEYS.filter((k) => p.get(k));
    if (found.length) sessionStorage.setItem("hb_utm", JSON.stringify(Object.fromEntries(found.map((k) => [k, p.get(k)]))));
  } catch {}
}

export function readUtm(): Record<string, string> {
  try { return JSON.parse(sessionStorage.getItem("hb_utm") || "{}"); } catch { return {}; }
}
