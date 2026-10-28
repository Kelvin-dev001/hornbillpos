import type { Metadata } from "next";
import { og } from "@/lib/site";
import { GraduationCap, LifeBuoy, ShieldCheck, Settings2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Support: Training, Help and Hardware Warranty",
  description: "Hornbill POS support: training for your team, help after handover, and warranty and replacement for hardware we supply. Reach us on WhatsApp or by phone.",
  alternates: { canonical: "/support" }, openGraph: og("/support"),
};

export default function Support() {
  return (
    <>
      <PageHero eyebrow="Support" title={<>One team that <span className="g">stays with you.</span></>} lead="Training at setup, help after handover, and hardware warranty and replacement handled by us. Existing clients: message us on WhatsApp or call." code="WEB-SUPPORT-HERO" />
      <section>
        <div className="wrap grid g4">
          {[[GraduationCap, "Training", "We train your counter staff, stock staff and you, until everyone is comfortable."],
            [LifeBuoy, "Ongoing support", "Questions after handover? WhatsApp or call the team that set you up."],
            [ShieldCheck, "Hardware warranty", "Warranty and replacement for hardware we supply are handled by Hornbill."],
            [Settings2, "Changes & new features", "Need something new after handover? We scope it and quote it first."]].map(([Icon, t, d]) => {
            const I = Icon as typeof LifeBuoy;
            return <div className="card" key={t as string} data-reveal><span className="icon"><I size={24} aria-hidden /></span><h3>{t as string}</h3><p>{d as string}</p></div>;
          })}
        </div>
      </section>
      <FinalCta code="WEB-SUPPORT-FINAL" title="Need help with Hornbill?" text="Existing clients and new enquiries: WhatsApp is the fastest way to reach us." />
    </>
  );
}
