import Image from "next/image";

type Ring = { left: number; top: number; width: number; height: number };
/** Product UI in a dark device frame. `ring` (percent of the image) draws one highlight. */
export default function Device({ src, alt, w, h, ring, priority = false, sizes = "(max-width: 900px) 100vw, 640px", caption }: {
  src: string; alt: string; w: number; h: number; ring?: Ring; priority?: boolean; sizes?: string; caption?: string;
}) {
  return (
    <figure className="device">
      <div className="device-screen">
        <Image src={src} alt={alt} width={w} height={h} sizes={sizes} priority={priority} />
        {ring && <span className="ring" style={{ left: `${ring.left}%`, top: `${ring.top}%`, width: `${ring.width}%`, height: `${ring.height}%` }} aria-hidden />}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
