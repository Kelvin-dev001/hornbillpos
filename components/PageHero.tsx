import { CtaPair } from "./CTA";
export default function PageHero({ eyebrow, title, lead, code }: { eyebrow: string; title: React.ReactNode; lead: string; code: string }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="eyebrow eyebrow-light hero-in" style={{ ["--i" as string]: 0 }}>{eyebrow}</p>
        <h1 className="hero-in" style={{ ["--i" as string]: 1 }}>{title}</h1>
        <p className="lead-light hero-in" style={{ ["--i" as string]: 2 }}>{lead}</p>
        <div className="hero-in" style={{ ["--i" as string]: 3 }}><CtaPair code={code} dark /></div>
      </div>
    </section>
  );
}
