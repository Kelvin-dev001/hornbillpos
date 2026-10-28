import type { Metadata } from "next";
import { SITE, og } from "@/lib/site";
import { Eye, Scale, HeartHandshake, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import Photo, { photoSrc } from "@/components/Photo";
import { T1 } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Hornbill POS",
  description: "Hornbill POS is built and supported in Kenya by Hornbill Tech. A pharmacy system designed around the owner: see and control the whole business at a glance.",
  alternates: { canonical: "/about" }, openGraph: og("/about"),
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title={<>Built around the <span className="g">pharmacy owner.</span></>} lead={`Hornbill POS is built and supported in Kenya by ${SITE.company}.`} code="WEB-ABOUT-HERO" />
      <section>
        <div className={`wrap ${photoSrc("team") ? "split" : ""}`}>
          <div className="prose" data-reveal>
            <p className="eyebrow">Why Hornbill</p>
            <h2 style={{ marginTop: 0 }}>Most systems speed up the till. We built one for the owner.</h2>
            <p>A pharmacy owner needs to know what sold, what's expiring, what's running low, what's owed to distributors and what the stock is worth, often without standing at the counter. That's the idea behind our promise: <b>know your business at a glance</b>.</p>
            <p>Hornbill POS is already in use in Kenyan pharmacies. We do the setup ourselves: configuring the system, loading your products, training your team and supporting you after handover.</p>
            <p>Hornbill POS is a product of {SITE.company} (<a href={SITE.companyUrl}>hornbilltech.co.ke</a>).</p>
          </div>
          {photoSrc("team") && <div data-reveal><Photo name="team" className="photo photo-wide" /></div>}
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="head" data-reveal><p className="eyebrow">What we stand for</p><h2>Three things we won't compromise on</h2></div>
          <div className="grid g3">
            {[[Eye, "Owner first", "Every screen should help an owner see and control the business, not just ring up a sale."],
              [Scale, "Honest numbers", "We don't invent statistics or promise results. Product screens on this site show illustrative data, and we'll show you the real thing on your own products."],
              [HeartHandshake, "We stay", "Setup, training and support come from the same team. We don't sell and disappear."]].map(([Icon, t, d]) => {
              const I = Icon as typeof Eye;
              return <div className="card" key={t as string} data-reveal><span className="icon"><I size={24} aria-hidden /></span><h3>{t as string}</h3><p>{d as string}</p></div>;
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Why pharmacies first</p>
            <h2>Pharmacies need more than a shop till.</h2>
            <ul className="ticks">{["Medicines come in batches with expiry dates", "Distributors work on LPOs and credit terms", "Owners are often away from the counter", "Margins depend on catching expiring stock and supplier errors early"].map((x) => <li key={x}><Check size={20} aria-hidden /><span>{x}</span></li>)}</ul>
          </div>
          <figure className="quote" style={{ margin: 0 }} data-reveal>
            <blockquote>{T1.quote.split("!")[0]}!</blockquote>
            <cite>{T1.credit}</cite>
          </figure>
        </div>
      </section>
      <FinalCta code="WEB-ABOUT-FINAL" />
    </>
  );
}
