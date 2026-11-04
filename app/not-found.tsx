import Link from "next/link";
import HeroIcons from "@/components/HeroIcons";
export default function NotFound() {
  return (
    <section className="page-hero hero-cream" style={{ minHeight: "60vh" }}>
      <HeroIcons />
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page isn't here.</h1>
        <p className="lead">Let's get you back to something useful.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/">Go to the homepage</Link><Link className="btn btn-ghost" href="/pharmacy-pos">Pharmacy POS guide</Link></div>
      </div>
    </section>
  );
}
