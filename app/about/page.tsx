import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { SITE, og } from "@/lib/site";

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
        <div className="wrap prose">
          <p>Most point-of-sale systems are built to speed up the till. Hornbill POS is built for the person who owns the business: the one who needs to know what sold, what's expiring, what's running low, what's owed to distributors and what the stock is worth, often without being at the counter.</p>
          <p>That's the idea behind our promise: <b>know your business at a glance</b>.</p>
          <p>Hornbill POS is already in use in Kenyan pharmacies. We focus on pharmacies first, and we do the setup ourselves: configuration, loading your products, training your team and supporting you after handover.</p>
          <p>Hornbill POS is a product of {SITE.company} (<a href={SITE.companyUrl}>hornbilltech.co.ke</a>).</p>
        </div>
      </section>
      <FinalCta code="WEB-ABOUT-FINAL" />
    </>
  );
}
