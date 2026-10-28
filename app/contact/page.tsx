import type { Metadata } from "next";
import { MessageCircle, Phone, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactBuilder from "@/components/ContactBuilder";
import { WhatsAppButton, CallButton } from "@/components/CTA";
import { SITE, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact: WhatsApp 0759 293 030",
  description: "Talk to Hornbill POS on WhatsApp or call 0759 293 030. Tell us about your pharmacy and we'll show you Hornbill working on your own product list.",
  alternates: { canonical: "/contact" }, openGraph: og("/contact"),
};

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's talk about <span className="g">your pharmacy.</span></>} lead="WhatsApp is the fastest way to reach us. Tell us about your pharmacy and we'll arrange a demo on your own product list." code="WEB-CONTACT-HERO" />
      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="grid" style={{ gap: 18 }}>
            <div className="card"><span className="icon"><MessageCircle size={24} aria-hidden /></span><h3>WhatsApp</h3><p>{SITE.phoneDisplay}</p><div className="cta-row" style={{ marginTop: 16 }}><WhatsAppButton code="WEB-CONTACT-WA" /></div></div>
            <div className="card"><span className="icon"><Phone size={24} aria-hidden /></span><h3>Call</h3><p>{SITE.phoneDisplay}</p><div className="cta-row" style={{ marginTop: 16 }}><CallButton code="WEB-CONTACT-CALL" /></div></div>
            <div className="card"><span className="icon"><Globe size={24} aria-hidden /></span><h3>{SITE.company}</h3><p><a href={SITE.companyUrl}>hornbilltech.co.ke</a></p></div>
          </div>
          <ContactBuilder />
        </div>
      </section>
    </>
  );
}
