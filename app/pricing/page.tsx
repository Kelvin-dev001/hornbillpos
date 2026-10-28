import type { Metadata } from "next";
import { og } from "@/lib/site";
import { Check, Store, Monitor, Package, Printer, Settings2, Database, CalendarCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Faq, { type QA } from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing: One Clear Quotation for Your Pharmacy",
  description: "How Hornbill POS pricing works: we scope your pharmacy, then quote a setup fee plus a monthly or annual subscription (annual is cheaper). Hardware is quoted separately or bundled.",
  alternates: { canonical: "/pricing" }, openGraph: og("/pricing"),
};

const FAQ: QA[] = [
  { q: "Why don't you publish prices?", a: "Pharmacies differ in outlets, tills, product count, hardware and the setup they need. We'd rather quote what your pharmacy actually needs than show a starting price that doesn't apply." },
  { q: "What does the setup fee cover?", a: "System configuration, the customisation agreed in your scope, loading your product list, deployment, hardware installation if you take our hardware, training and handover." },
  { q: "Monthly or annual?", a: "Both are available. Paying annually works out cheaper than paying month by month." },
  { q: "Is hardware included?", a: "Hardware is quoted separately or bundled into your setup. You can also use the hardware you already have." },
  { q: "What if I need changes after handover?", a: "New features or changes after handover are scoped and quoted separately, so the cost is always clear before any work starts." },
];
const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title={<>One clear quotation, <span className="g">for your pharmacy.</span></>} lead="Every pharmacy is different. We scope your needs, then send one quotation with everything on it." code="WEB-PRICING-HERO" />
      <section>
        <div className="wrap grid g3">
          {[["1. Scope", "A short chat about your outlets, tills, staff, products and hardware."], ["2. Quotation", "A setup fee plus a monthly or annual subscription. Annual is cheaper. Hardware quoted separately or bundled."], ["3. Go live", "We configure, load your data, deploy, train and hand over."]].map(([t, d]) => (
            <div className="card" key={t} data-reveal><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="head" data-reveal><p className="eyebrow">What shapes your quote</p><h2>Six things we ask about</h2><p className="lead">So your quotation fits your pharmacy, not a generic package.</p></div>
          <div className="grid g3">
            {[[Store, "Outlets", "How many branches or locations you run."],
              [Monitor, "Tills and users", "How many counters and staff will use Hornbill."],
              [Package, "Products", "How many products we'll load for you, and in what format you keep them today."],
              [Printer, "Hardware", "What you already have, and what you'd like us to supply and install."],
              [Settings2, "Customisation", "Anything specific to how your pharmacy works, agreed in the scope."],
              [Database, "Your data", "Moving over from paper, Excel or another system."]].map(([Icon, t, d]) => {
              const I = Icon as typeof Store;
              return <div className="card" key={t as string} data-reveal><span className="icon"><I size={24} aria-hidden /></span><h3>{t as string}</h3><p>{d as string}</p></div>;
            })}
          </div>
          <div className="card" style={{ marginTop: 24, display: "flex", gap: 18, alignItems: "flex-start" }} data-reveal>
            <span className="icon" style={{ flex: "none", marginBottom: 0 }}><CalendarCheck size={24} aria-hidden /></span>
            <div><h3>Monthly or annual?</h3><p>Both are available. Paying annually works out cheaper than paying month by month.</p></div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--paper)" }}>
        <div className="wrap split">
          <div><h2>What the setup fee covers</h2><p className="lead">So it's clear what you're paying for.</p></div>
          <ul className="ticks">{["System configuration for your pharmacy", "Customisation agreed in your scope", "Loading your product list", "Deployment", "Hardware installation (if you take our hardware)", "Training for you and your staff", "Handover"].map((x) => <li key={x}><Check size={20} aria-hidden /><span>{x}</span></li>)}</ul>
        </div>
      </section>
      <section>
        <div className="wrap"><div className="head"><h2>Pricing questions</h2></div><Faq items={FAQ} /></div>
      </section>
      <FinalCta code="WEB-PRICING-FINAL" title="Get a quotation for your pharmacy." />
      <JsonLd data={faqLd} />
    </>
  );
}
