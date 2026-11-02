import { CtaPair } from "./CTA";
import HeroIcons from "./HeroIcons";
export default function PageHero({ eyebrow, title, lead, code }: { eyebrow: string; title: React.ReactNode; lead: string; code: string }) {
  return (
    <section className="page-hero hero-cream">
      <HeroIcons />
      <div className="wrap">
        <p className="eyebrow hero-in" style={{ ["--i" as string]: 0 }}>{eyebrow}</p>
        <h1 className="hero-in" style={{ ["--i" as string]: 1 }}>{title}</h1>
        <p className="lead hero-in" style={{ ["--i" as string]: 2 }}>{lead}</p>
        <div className="hero-in" style={{ ["--i" as string]: 3 }}><CtaPair code={code} /></div>
      </div>
    </section>
  );
}
