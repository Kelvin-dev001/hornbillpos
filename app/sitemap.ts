import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
const PAGES = ["", "/pharmacy-pos", "/features", "/how-it-works", "/hardware", "/pricing", "/support", "/about", "/contact"];
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date("2026-10-28"), changeFrequency: "monthly", priority: p === "" ? 1 : p === "/pharmacy-pos" ? 0.9 : 0.7 }));
}
