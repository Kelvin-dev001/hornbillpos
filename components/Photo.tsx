import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

/** Real pharmacy photo slot. Renders ONLY if /public/photos/<name>.(webp|jpg|jpeg|png) exists,
 *  so the live site never shows an empty box. Drop the file in and redeploy. */
export const PHOTOS = {
  counter: { alt: "Pharmacy attendant serving a customer at the counter", w: 2400, h: 1600 },
  owner: { alt: "Pharmacy owner checking the business on a phone", w: 2400, h: 1600 },
  shelves: { alt: "Pharmacy staff checking stock on the shelves", w: 2400, h: 1600 },
  setup: { alt: "Pharmacy counter with POS hardware", w: 2400, h: 1600 },
  training: { alt: "Hornbill team training pharmacy staff", w: 2400, h: 1600 },
  team: { alt: "The Hornbill team", w: 2400, h: 1600 },
} as const;
export type PhotoName = keyof typeof PHOTOS;

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
    </figure>
  );
}
