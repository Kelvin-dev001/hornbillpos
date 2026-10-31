import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

/** Real pharmacy photo slot. Renders ONLY if /public/photos/<name>.(webp|jpg|jpeg|png) exists,
 *  so the live site never shows an empty box. Drop the file in and redeploy. */
export const PHOTOS: Record<string, { alt: string; w: number; h: number; illustration?: boolean }> = {
  counter: { alt: "Illustration: pharmacy attendant serving a customer, with the Hornbill POS counter screen", w: 1536, h: 1024, illustration: true },
  owner: { alt: "Illustration: pharmacy owner checking the Hornbill dashboard on a laptop", w: 1536, h: 1024, illustration: true },
  shelves: { alt: "Pharmacy staff checking stock on the shelves with a scanner and tablet", w: 2048, h: 1366 },
  setup: { alt: "Illustration: pharmacy counter with POS hardware running Hornbill POS", w: 1536, h: 1024, illustration: true },
  training: { alt: "Illustration: a trainer showing pharmacy staff the system", w: 1536, h: 1024, illustration: true },
  team: { alt: "The Hornbill team", w: 2400, h: 1600 },
};
export type PhotoName = "counter" | "owner" | "shelves" | "setup" | "training" | "team";

export function photoSrc(name: PhotoName): string | null {
  for (const ext of ["webp", "jpg", "jpeg", "png"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "photos", `${name}.${ext}`))) return `/photos/${name}.${ext}`;
  }
  return null;
}

export default function Photo({ name, className = "photo", sizes = "(max-width: 900px) 100vw, 600px", priority = false }: { name: PhotoName; className?: string; sizes?: string; priority?: boolean }) {
  const src = photoSrc(name);
  if (!src) return null;
  const p = PHOTOS[name];
  return (
    <figure className={className}>
      <Image src={src} alt={p.alt} width={p.w} height={p.h} sizes={sizes} priority={priority} />
      {p.illustration && <figcaption className="photo-tag">Illustration</figcaption>}
    </figure>
  );
}
