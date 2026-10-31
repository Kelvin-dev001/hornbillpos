import type { Metadata } from "next";
import { og } from "@/lib/site";
import { GraduationCap, LifeBuoy, ShieldCheck, Settings2, MessageCircle, Search, Wrench, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import Faq, { type QA } from "@/components/Faq";
import Photo, { photoSrc } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Support: Training, Help and Hardware Warranty",
  description: "Hornbill POS support: training for your team, help after handover, and warranty and replacement for hardware we supply. Reach us on WhatsApp or by phone.",
  alternates: { canonical: "/support" }, openGraph: og("/support"),
};

const FAQ: QA[] = [
  { q: "How do I get help?", a: "Send a WhatsApp message to 0759 293 030 or call. Tell us your pharmacy name and what's happening; a screenshot or photo helps." },
  { q: "Will you train new staff who join later?", a: "Yes. Ask us on WhatsApp and we'll arrange it." },
  { q: "A printer or scanner we bought from you stopped working. What now?", a: "Contact us. Warranty and replacement for hardware we supply are handled by Hornbill." },
  { q: "Can you add a feature we need?", a: "Tell us what you need. Changes and new features after handover are scoped and quoted first, so you know the cost before any work starts." },
];

export default function Support() {
  return (
    <>
      <PageHero eyebrow="Support" title={<>One team that <span className="g">stays with you.</span></>} lead="Training at setup, help after handover, and hardware warranty and replacement handled by us. Existing clients: WhatsApp or call us." code="WEB-SUPPORT-HERO" />
      <section>
        <div className="wrap">
          <div className="head" data-reveal><p className="eyebrow">What's included</p><h2>Support that doesn't end at handover</h2></div>
          <div className="grid g4">
            {[[GraduationCap, "Training", "We train your counter staff, stock staff and you, until everyone is comfortable."],
              [LifeBuoy, "Ongoing support", "Questions after handover? WhatsApp or call the team that set you up."],
              [ShieldCheck, "Hardware warranty", "Warranty and replacement for hardware we supply are handled by Hornbill."],
              [Settings2, "Changes & new features", "Need something new after handover? We scope it and quote it first."]].map(([Icon, t, d]) => {
              const I = Icon as typeof LifeBuoy;
              return <div className="card" key={t as string} data-reveal><span className="icon"><I size={24} aria-hidden /></span><h3>{t as string}</h3><p>{d as string}</p></div>;
            })}
          </div>
        </div>
      </section>
      <section className="band">
        <div className={`wrap ${photoSrc("setup") ? "split" : ""}`}>
          <div data-reveal>
            <p className="eyebrow">Getting help</p>
            <h2>Three steps when you need us</h2>
            <ul className="list-plain">
              <li><MessageCircle size={22} aria-hidden /><span><b>Message us.</b> WhatsApp 0759 293 030 with your pharmacy name and a short description, plus a screenshot or photo if you can.</span></li>
              <li><Search size={22} aria-hidden /><span><b>We look into it.</b> We'll ask what we need and tell you what's happening.</span></li>
              <li><Wrench size={22} aria-hidden /><span><b>We sort it out.</b> We fix the issue or walk your team through it; hardware we supplied is repaired or replaced under warranty.</span></li>
            </ul>
          </div>
          {photoSrc("setup") && <div data-reveal><Photo name="setup" className="photo photo-wide" /></div>}
        </div>
      </section>
      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div data-reveal><h2>Good to know</h2>
            <ul className="ticks">{["Training is part of your setup", "Your product list is loaded for you at the start", "Every list in Hornbill exports to Excel or PDF, so your records are always yours", "Support is from the same team that set you up"].map((x) => <li key={x}><Check size={20} aria-hidden /><span>{x}</span></li>)}</ul>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>
      <FinalCta code="WEB-SUPPORT-FINAL" title="Need help with Hornbill?" text="Existing clients and new enquiries: WhatsApp is the fastest way to reach us." />
    </>
  );
}
