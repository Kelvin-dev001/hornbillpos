import Link from "next/link";
import type { Metadata } from "next";
import { og } from "@/lib/site";
import { CalendarClock, PackageX, Receipt, Smartphone, MessageSquareText, Store, UserCog, Wallet, WifiOff, ShieldCheck, Check, Printer, ScanBarcode, Monitor, TabletSmartphone, Tag, Archive, ArrowRight, HandCoins } from "lucide-react";
import Device from "@/components/Device";
import { CtaPair, WhatsAppButton } from "@/components/CTA";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import { UI, T1, T2, STEPS, FAQ_HOME } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Hornbill POS | Know your pharmacy at a glance. Pharmacy POS for Kenya" },
  description: "Pharmacy POS for Kenya. See sales, stock, expiry, LPOs and supplier balances at a glance. eTIMS integration, M-Pesa payment prompt, offline mode. We set it up and train your team.",
  alternates: { canonical: "/" },
  openGraph: og("/"),
};

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_HOME.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Home() {
  return (
    <>
      {/* 1 HERO */}
      <section className="hero dark-glow">
        <div className="wrap">
          <p className="eyebrow eyebrow-light">Pharmacy POS & management system · Kenya</p>
          <h1>Know your pharmacy <span className="g">at a glance.</span></h1>
          <p className="lead-light">Sales, stock, expiry, LPOs and supplier balances in one system, so you always know where your pharmacy stands.</p>
          <CtaPair code="WEB-HOME-HERO" dark />
          <div className="trust" aria-label="Included">
            <span><Check size={18} aria-hidden /> eTIMS integration</span>
            <span><Check size={18} aria-hidden /> M-Pesa payment prompt</span>
            <span><Check size={18} aria-hidden /> Works offline</span>
            <span><Check size={18} aria-hidden /> We set it up and train your team</span>
          </div>
          <div className="hero-device">
            <Device {...UI.stock} priority sizes="(max-width: 1200px) 100vw, 1150px" />
          </div>
        </div>
      </section>

      {/* 2 PROBLEM */}
      <section>
        <div className="wrap">
          <div className="head" data-reveal>
            <p className="eyebrow">The owner's problem</p>
            <h2>Running a pharmacy shouldn't mean guessing.</h2>
            <p className="lead">Most owners can't be at the counter all day. Without a clear system, the same questions keep coming back.</p>
          </div>
          <div className="grid g4">
            {[
              [CalendarClock, "Expired stock, found too late", "Batches expire on the shelf because nobody saw the date coming."],
              [HandCoins, "“Our records say you owe more”", "Distributor balances that don't match your own notes."],
              [PackageX, "Fast movers out of stock", "You find out when a customer asks and the shelf is empty."],
              [Smartphone, "Away, and in the dark", "You don't know how today went until you're back at the pharmacy."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof CalendarClock;
              return (
                <div className="card" key={t as string} data-reveal>
                  <span className="icon"><I size={24} aria-hidden /></span>
                  <h3>{t as string}</h3>
                  <p>{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3+4 SOLUTION / AT A GLANCE */}
      <section className="dark">
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow eyebrow-light">The Hornbill way</p>
            <h2>One system, from the counter to the back office.</h2>
            <p className="lead-light">Hornbill POS runs your sales, stock, purchasing and reports together, and shows you, the owner, what it all adds up to.</p>
            <div className="callouts">
              <div className="callout"><b>Stock value</b><span>at cost and at selling price</span></div>
              <div className="callout"><b>Profit estimate</b><span>on the stock you hold</span></div>
              <div className="callout"><b>15 reports</b><span>daily sales to profit & loss</span></div>
            </div>
          </div>
          <div data-reveal><Device {...UI.dashboard} caption="Dashboard overview: illustrative data" /></div>
        </div>
      </section>

      {/* 6 EXPIRY + STOCK */}
      <section id="expiry">
        <div className="wrap split reverse">
          <div data-reveal>
            <span className="pill">Expiry & stock control</span>
            <h2 style={{ marginTop: 16 }}>Every batch. Every expiry. Counted down for you.</h2>
            <ul className="ticks">
              <li><Check size={20} aria-hidden /><span>Batch number and expiry date on every product, with the <b>months remaining</b> shown for each batch.</span></li>
              <li><Check size={20} aria-hidden /><span>A <b>product expiry alerts</b> report lists what's about to expire, soonest first, across all your locations.</span></li>
              <li><Check size={20} aria-hidden /><span>Set a <b>reorder level</b> for every product and get low-stock alerts before the shelf runs empty.</span></li>
              <li><Check size={20} aria-hidden /><span>Stock counts and adjustments, without the exercise book.</span></li>
            </ul>
            <div className="quote-inline"><p>&ldquo;{T1.quote}&rdquo;</p><cite>{T1.credit}</cite></div>
          </div>
          <div data-reveal>
            <Device {...UI.expiryCrop} ring={{ left: 54.5, top: 10, width: 17.5, height: 89 }} caption="Products: batch, expiry and months remaining (illustrative data)" />
          </div>
        </div>
      </section>

      {/* 7 LPO */}
      <section style={{ background: "#fff" }}>
        <div className="wrap split">
          <div data-reveal>
            <span className="pill">LPOs & suppliers</span>
            <h2 style={{ marginTop: 16 }}>Know what you owe every distributor.</h2>
            <ul className="ticks">
              <li><Check size={20} aria-hidden /><span>Raise <b>LPOs</b> with the supplier, payment terms, expected delivery date and every line, on record.</span></li>
              <li><Check size={20} aria-hidden /><span>Every purchase tracked by <b>paid, balance and pending</b>, per supplier.</span></li>
              <li><Check size={20} aria-hidden /><span>A clean supplier trail, useful now that KRA expects eTIMS invoices behind your expenses.</span></li>
            </ul>
            <div className="quote-inline"><p>&ldquo;{T2.quote}&rdquo;</p><cite>{T2.credit}</cite></div>
          </div>
          <div className="grid" style={{ gap: 20 }} data-reveal>
            <Device {...UI.lpo} caption="Add LPO (illustrative data)" />
            <Device {...UI.balances} ring={{ left: 72.2, top: 15.3, width: 10.7, height: 72 }} caption="Purchases: paid, balance, payment status (illustrative data)" />
          </div>
        </div>
      </section>

      {/* 8+10 AWAY */}
      <section className="dark-glow">
        <div className="wrap">
          <div className="head" data-reveal>
            <p className="eyebrow eyebrow-light">When you're not at the counter</p>
            <h2>Know how your pharmacy is doing, wherever you are.</h2>
          </div>
          <div className="grid g4">
            {[
              [MessageSquareText, "Daily sales by SMS", "A summary of the day's sales on your phone, every day."],
              [Smartphone, "From your phone or laptop", "Open Hornbill from wherever you are and check the numbers."],
              [Store, "All your branches", "Manage every branch in one system, with stock per location and transfers between them."],
              [UserCog, "The right access for each person", "Give each staff member access to what they need, and see the staff report."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Store;
              return (
                <div className="card-dark" key={t as string} data-reveal>
                  <span className="icon"><I size={24} aria-hidden /></span>
                  <h3>{t as string}</h3>
                  <p>{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9 REPORTS */}
      <section>
        <div className="wrap split reverse">
          <div data-reveal>
            <span className="pill">Reports</span>
            <h2 style={{ marginTop: 16 }}>15 reports. Zero spreadsheets.</h2>
            <p className="lead">Daily and monthly sales, best sellers, profit and loss, payments, purchases, customers, suppliers and staff. One click each, and every list downloads to Excel or PDF for your accountant.</p>
            <p style={{ marginTop: 22 }}><Link href="/features" className="btn btn-ghost">See all features <ArrowRight size={18} aria-hidden /></Link></p>
          </div>
          <div data-reveal><Device {...UI.reports} caption="Reports hub" /></div>
        </div>
      </section>

      {/* 11+12 PAYMENTS, COMPLIANCE, CREDIT, OFFLINE */}
      <section style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="head" data-reveal>
            <p className="eyebrow">At the till</p>
            <h2>Get paid, stay compliant, keep selling.</h2>
          </div>
          <div className="grid g4">
            {[
              [Wallet, "M-Pesa payment prompt", "Customers get a payment prompt on their phone at checkout."],
              [Receipt, "eTIMS integration", "Issue eTIMS invoices from your counter."],
              [HandCoins, "Customer credit", "Track customer credit and balances, so you know who owes you."],
              [WifiOff, "Works offline", "When the network drops, your counter keeps working."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Wallet;
              return (
                <div className="card" key={t as string} data-reveal>
                  <span className="icon"><I size={24} aria-hidden /></span>
                  <h3>{t as string}</h3>
                  <p>{d as string}</p>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 40 }} data-reveal><Device {...UI.pos} caption="POS counter: scan or search, add, pay (illustrative data)" /></div>
        </div>
      </section>

      {/* 13 WORKFLOW */}
      <section>
        <div className="wrap">
          <div className="head" data-reveal>
            <p className="eyebrow">How a pharmacy runs on Hornbill</p>
            <h2>From the distributor to your phone.</h2>
          </div>
          <div className="flow" data-reveal>
            {["Supplier", "LPO", "Purchase received", "Stock, batch & expiry", "Counter sale", "Payment", "Alerts", "Reports", "Owner"].map((s, i, a) => (
              <span key={s} style={{ display: "contents" }}><span>{s}</span>{i < a.length - 1 && <i aria-hidden>→</i>}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 14 HARDWARE */}
      <section style={{ background: "#fff" }}>
        <div className="wrap split">
          <div data-reveal>
            <span className="pill">Hardware</span>
            <h2 style={{ marginTop: 16 }}>Use what you have, or get it all from us.</h2>
            <p className="lead">Hornbill works with your existing hardware. Or we supply and install a full counter setup, with installation included in setup and warranty and replacement handled by us.</p>
            <p style={{ marginTop: 22 }}><Link href="/hardware" className="btn btn-ghost">Hardware options <ArrowRight size={18} aria-hidden /></Link></p>
          </div>
          <div className="grid g3" data-reveal>
            {[[Printer, "Receipt printer"], [ScanBarcode, "Barcode scanner"], [Archive, "Cash drawer"], [Monitor, "Customer display"], [TabletSmartphone, "Android POS terminal"], [Tag, "Label printer"]].map(([Icon, t]) => {
              const I = Icon as typeof Printer;
              return <div className="card" key={t as string} style={{ padding: 20, textAlign: "center" }}><span className="icon" style={{ marginBottom: 10 }}><I size={24} aria-hidden /></span><p style={{ color: "var(--night)", fontWeight: 700, margin: 0 }}>{t as string}</p></div>;
            })}
          </div>
        </div>
      </section>

      {/* 15 ONBOARDING */}
      <section>
        <div className="wrap">
          <div className="head" data-reveal>
            <p className="eyebrow">Setup & support</p>
            <h2>We set it up and stay with you.</h2>
            <p className="lead">No DIY. One team handles setup, your data, training and support.</p>
          </div>
          <ol className="steps" data-reveal>
            {STEPS.map(([t, d]) => <li key={t}><b>{t}</b><p>{d}</p></li>)}
          </ol>
        </div>
      </section>

      {/* 17 PRICING */}
      <section style={{ background: "#fff" }}>
        <div className="wrap split">
          <div data-reveal>
            <span className="pill">Pricing</span>
            <h2 style={{ marginTop: 16 }}>Every pharmacy is different. Your quote should be too.</h2>
            <p className="lead">We scope your needs, then send one clear quotation: a setup fee plus a monthly or annual subscription. Annual works out cheaper. Hardware is quoted separately or bundled.</p>
            <div className="cta-row"><WhatsAppButton code="WEB-HOME-PRICING" label="Get a quotation" /><Link href="/pricing" className="btn btn-ghost">How pricing works</Link></div>
          </div>
          <div className="card" data-reveal>
            <h3>Your setup includes</h3>
            <ul className="ticks">
              {["System configuration for your pharmacy", "Customisation agreed in the scope", "Loading your product list", "Deployment and hardware installation", "Training for you and your staff", "Handover and ongoing support"].map((x) => <li key={x}><ShieldCheck size={20} aria-hidden /><span>{x}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 18 FAQ */}
      <section>
        <div className="wrap">
          <div className="head" data-reveal><p className="eyebrow">Questions</p><h2>Pharmacy owners ask us</h2></div>
          <Faq items={FAQ_HOME} />
        </div>
      </section>

      <FinalCta code="WEB-HOME-FINAL" />
      <JsonLd data={faqLd} />
    </>
  );
}
