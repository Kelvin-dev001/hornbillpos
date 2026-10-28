import type { Metadata } from "next";
import { og } from "@/lib/site";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works: From First Chat to Handover",
  description: "How Hornbill POS gets your pharmacy running: we understand your requirements, configure Hornbill, load your products, deploy, train your team, hand over and keep supporting you.",
  alternates: { canonical: "/how-it-works" }, openGraph: og("/how-it-works"),
};

export default function HowItWorks() {
  return (
    <>
      <PageHero eyebrow="How it works" title={<>From your first message <span className="g">to a running pharmacy.</span></>} lead="No DIY setup. We scope your pharmacy, configure Hornbill, load your products, train your team and stay with you after handover." code="WEB-HIW-HERO" />
      <section>
        <div className="wrap">
          <ol className="steps">{STEPS.map(([t, d]) => <li key={t} data-reveal><b>{t}</b><p>{d}</p></li>)}</ol>
        </div>
      </section>
      <section style={{ background: "#fff" }}>
        <div className="wrap grid g3">
          <div className="card"><h3>What we need from you</h3><p>Your product list (any format), your suppliers, and some time with the people who'll use the system.</p></div>
          <div className="card"><h3>What's in the setup</h3><p>Configuration, the customisation agreed in your scope, data loading, deployment, hardware installation if needed, training and handover.</p></div>
          <div className="card"><h3>After handover</h3><p>Ongoing support. New features you'd like after handover are scoped and quoted separately, so you always know what you're paying for.</p></div>
        </div>
      </section>
      <FinalCta code="WEB-HIW-FINAL" title="Step one is a WhatsApp message." />
    </>
  );
}
