import { CtaPair } from "./CTA";
export default function PageHero({ eyebrow, title, lead, code }: { eyebrow: string; title: React.ReactNode; lead: string; code: string }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead-light">{lead}</p>
        <CtaPair code={code} dark />
      </div>
    </section>
  );
}
