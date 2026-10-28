import type { Metadata } from "next";
import { og } from "@/lib/site";
import { Printer, ScanBarcode, Archive, Monitor, TabletSmartphone, Tag, Wrench, ShieldCheck, Check, Store, Users, Smartphone } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import Photo, { photoSrc } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Pharmacy POS Hardware: Printers, Scanners, Cash Drawers",
  description: "Hornbill POS works with your existing hardware, or we supply and install a full pharmacy counter setup: receipt printer, barcode scanner, cash drawer, customer display, Android POS terminal and label printer.",
  alternates: { canonical: "/hardware" }, openGraph: og("/hardware"),
};

const DEVICES = [
  [Printer, "Receipt printer", "Print a receipt for every sale."],
  [ScanBarcode, "Barcode scanner", "Scan products at the counter instead of typing names."],
  [Archive, "Cash drawer", "Keep cash secure at the till."],
  [Monitor, "Customer display", "Let customers see items and totals as you sell."],
  [TabletSmartphone, "Android POS terminal", "A compact all-in-one counter device."],
  [Tag, "Label printer", "Print your own barcode labels for shelf items."],
] as const;

const SETUPS = [
  [Store, "Single-till counter", "For a one-counter pharmacy: a computer or terminal, receipt printer, barcode scanner and cash drawer.", ["Receipt printer", "Barcode scanner", "Cash drawer"]],
  [Users, "Busy counter", "For pharmacies with queues: the single-till setup plus a customer display, and a label printer so every shelf item scans.", ["Everything in single-till", "Customer display", "Label printer"]],
  [Smartphone, "Compact counter", "For small spaces or a second point of sale: an Android POS terminal.", ["Android POS terminal", "Optional cash drawer"]],
] as const;

export default function Hardware() {
  return (
    <>
      <PageHero eyebrow="Hardware" title={<>Use what you have, <span className="g">or get it all from us.</span></>} lead="Hornbill POS runs on your existing hardware. Or we supply and install a full counter setup, quoted separately or bundled into your setup." code="WEB-HW-HERO" />
      <section>
        <div className="wrap">
          <div className="head" data-reveal><p className="eyebrow">Supported devices</p><h2>Everything a pharmacy counter needs</h2></div>
          <div className="grid g3">
            {DEVICES.map(([I, t, d]) => <div className="card" key={t} data-reveal><span className="icon"><I size={24} aria-hidden /></span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="head" data-reveal><p className="eyebrow">Typical setups</p><h2>Three ways pharmacies set up their counter</h2><p className="lead">We'll recommend the right one after a quick look at your counter. Bring what you already own; we fill the gaps.</p></div>
          <div className="grid g3">
            {SETUPS.map(([I, t, d, items]) => (
              <div className="card" key={t} data-reveal>
                <span className="icon"><I size={24} aria-hidden /></span><h3>{t}</h3><p>{d}</p>
                <ul className="ticks">{items.map((x) => <li key={x}><Check size={18} aria-hidden /><span>{x}</span></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={`wrap ${photoSrc("setup") ? "split" : ""}`}>
          {photoSrc("setup") && <div data-reveal><Photo name="setup" className="photo photo-wide" /></div>}
          <div className="stack">
            <div className="card" data-reveal><span className="icon"><Wrench size={24} aria-hidden /></span><h3>Installation included</h3><p>If you take hardware from us, installation is part of your setup.</p></div>
            <div className="card" data-reveal><span className="icon"><ShieldCheck size={24} aria-hidden /></span><h3>Warranty handled by us</h3><p>Warranty and replacement for hardware we supply are handled by Hornbill. One team for software and hardware.</p></div>
            <div className="card" data-reveal><h3>How hardware is quoted</h3>
              <ul className="ticks">{["Tell us what you already have; we'll tell you what works with Hornbill", "Hardware is quoted separately, or bundled into your setup", "Everything is on one quotation, so there are no surprise extras"].map((x) => <li key={x}><Check size={20} aria-hidden /><span>{x}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <FinalCta code="WEB-HW-FINAL" title="Not sure what hardware you need?" text="Send us a photo of your counter on WhatsApp and tell us what you have. We'll recommend what fits." />
    </>
  );
}
