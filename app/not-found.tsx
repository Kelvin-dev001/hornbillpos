import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh" }}>
      <div className="wrap">
        <p className="eyebrow eyebrow-light">404</p>
        <h1>This page isn't here.</h1>
        <p className="lead-light">Let's get you back to something useful.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/">Go to the homepage</Link><Link className="btn btn-ghost-light" href="/pharmacy-pos">Pharmacy POS guide</Link></div>
      </div>
    </section>
  );
}
