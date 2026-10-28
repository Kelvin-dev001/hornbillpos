import type { Metadata } from "next";
import { og } from "@/lib/site";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Device from "@/components/Device";
import Photo from "@/components/Photo";
import Faq, { type QA } from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import { WhatsAppButton, CallButton } from "@/components/CTA";
import { UI, T1, T2 } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pharmacy POS in Kenya: Stock, Expiry, LPO, eTIMS & M-Pesa",
  description: "A practical guide to pharmacy POS and pharmacy software in Kenya: stock management, expiry, LPOs and suppliers, sales reports, eTIMS and M-Pesa, and what to ask any vendor. Plus how Hornbill POS handles each.",
  alternates: { canonical: "/pharmacy-pos" },
  openGraph: og("/pharmacy-pos"),
};

const FAQ: QA[] = [
  { q: "What is a pharmacy POS system?", a: "A pharmacy POS (point of sale) records every sale at the counter and keeps your stock, purchases and reports in step. A good pharmacy system also tracks batch numbers and expiry dates, which a general shop POS often doesn't." },
  { q: "What should pharmacy software in Kenya include?", a: "At minimum: fast counter sales, stock with batch and expiry tracking, low-stock alerts, LPOs and supplier records, sales and profit reports, M-Pesa payments and eTIMS invoicing. Setup help and local support matter as much as features." },
  { q: "Does Hornbill POS support eTIMS?", a: "Yes. Hornbill has eTIMS integration. We'll show you how it works for your pharmacy during your demo." },
  { q: "Can Hornbill POS take M-Pesa payments?", a: "Yes. Customers get an M-Pesa payment prompt on their phone at checkout." },
  { q: "Can I manage pharmacy expiry with Hornbill POS?", a: "Yes. Every product carries its batch number and expiry date, the product list shows the months remaining, and a product expiry alerts report lists what's about to expire across all locations." },
  { q: "Does it handle LPOs to distributors?", a: "Yes. You can raise LPOs with the supplier, payment terms and expected delivery date, and track every purchase by paid, balance and payment status." },
];
const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function PharmacyPos() {
  return (
    <>
      <PageHero eyebrow="Pharmacy POS · Kenya" title={<>Pharmacy POS and management software for <span className="g">Kenyan pharmacies.</span></>}
        lead="What a pharmacy system should do for you in Kenya, what to ask any vendor, and how Hornbill POS handles stock, expiry, LPOs, reports, eTIMS and M-Pesa." code="WEB-PHPOS-HERO" />
      <section>
        <div className="wrap layout-aside">
          <article className="prose">
            <nav className="toc" aria-label="On this page">
              <b>On this page</b>
              <ol>
                <li><a href="#what">What a pharmacy POS does</a></li>
                <li><a href="#stock">Pharmacy stock and inventory management</a></li>
                <li><a href="#expiry">Pharmacy expiry management</a></li>
                <li><a href="#lpo">LPOs, distributors and purchasing</a></li>
                <li><a href="#sales">Sales reports and business management</a></li>
                <li><a href="#etims">eTIMS for pharmacies</a></li>
                <li><a href="#mpesa">M-Pesa at the pharmacy counter</a></li>
                <li><a href="#checklist">10 questions to ask any pharmacy POS vendor</a></li>
              </ol>
            </nav>

            <h2 id="what">What a pharmacy POS does</h2>
            <p>A pharmacy POS records every sale at the counter and keeps everything behind it in step: stock levels, purchases from distributors, payments and reports. For an owner, the point isn't the till. It's knowing what's happening in the business without standing at the counter all day.</p>
            <p>Pharmacies need more than a general shop system. Medicines come in batches with expiry dates, distributors work on LPOs and credit terms, and margins depend on catching expiring stock and supplier errors early.</p>

            <h2 id="stock">Pharmacy stock and inventory management</h2>
            <Photo name="shelves" className="photo photo-wide" sizes="(max-width: 980px) 100vw, 780px" />
            <p>Good pharmacy inventory software should tell you three things at any moment: what you have, what's running low, and what it's worth. In Hornbill POS:</p>
            <ul>
              <li>Each product has a <b>reorder (alert) quantity</b>. When stock falls below it, Hornbill flags it in the low-stock report and the alert counter.</li>
              <li>Stock is held <b>per location</b>, with transfers between locations and stock counts and adjustments for stock takes.</li>
              <li>The <b>stock value chart</b> shows what your stock cost, what it sells for, and the profit estimate in between.</li>
            </ul>
            <Device {...UI.stockCrop} caption="Stock value at cost and price, with profit estimate (illustrative data)" />

            <h2 id="expiry">Pharmacy expiry management</h2>
            <p>Expired stock is money you've already spent. The fix is visibility: knowing months ahead which batches are close, so you can sell, return or stop reordering in time.</p>
            <ul>
              <li>Hornbill records the <b>batch number and expiry date</b> for every product and shows the <b>months remaining</b> next to each one.</li>
              <li>The <b>product expiry alerts</b> report lists what's about to expire, soonest first, across all locations.</li>
            </ul>
            <Device {...UI.expiryCrop} ring={{ left: 54.5, top: 10, width: 17.5, height: 89 }} caption="Expiry dates with months remaining (illustrative data)" />
            <blockquote className="quote-inline"><p>&ldquo;{T1.quote}&rdquo;</p><cite>{T1.credit}</cite></blockquote>

            <h2 id="lpo">LPOs, distributors and purchasing</h2>
            <p>Most pharmacies buy from several distributors on agreed terms. Orders placed by phone or voice note leave no record, and that's where payment disputes start. A pharmacy LPO (Local Purchase Order) puts the items, quantities, prices and terms in writing before delivery.</p>
            <ul>
              <li>In Hornbill you raise an <b>LPO</b> with the supplier, payment terms, expected delivery date and each product line.</li>
              <li>Every <b>purchase</b> is tracked by grand total, paid, balance and payment status, so you know what you owe each distributor.</li>
            </ul>
            <Device {...UI.balances} ring={{ left: 72.2, top: 15.3, width: 10.7, height: 72 }} caption="Supplier balances per purchase (illustrative data)" />
            <blockquote className="quote-inline"><p>&ldquo;{T2.quote}&rdquo;</p><cite>{T2.credit}</cite></blockquote>

            <h2 id="sales">Sales reports and pharmacy business management</h2>
            <p>Pharmacy sales software should answer the owner's daily questions without a spreadsheet. Hornbill includes 15 ready reports: daily and monthly sales, sales detail, best sellers, profit and loss, payments, purchases, products, quantity and expiry alerts, customers, suppliers, staff, warehouse stock and the register report. Every list downloads to Excel or PDF.</p>
            <p>If you're not always at the pharmacy, Hornbill sends a <b>daily sales summary by SMS</b>, and you can open the system from your phone or laptop. Multi-branch owners manage all branches in one system.</p>

            <h2 id="etims">eTIMS for pharmacies</h2>
            <p>eTIMS is KRA's electronic Tax Invoice Management System. Reporting in 2026 notes that, from the 2026 year of income, KRA expects declared income and expenses to be supported by valid electronic tax invoices. Check KRA's current guidance for your own situation. Hornbill POS has <b>eTIMS integration</b>, and keeping your supplier purchases recorded in one place makes it easier to match your expenses to their invoices.</p>

            <h2 id="mpesa">M-Pesa at the pharmacy counter</h2>
            <p>Most customers pay by M-Pesa. With Hornbill, customers get an <b>M-Pesa payment prompt</b> on their phone at checkout, so the counter isn't held up typing numbers, and payments sit alongside your sales records. The payments report shows how you were paid.</p>

            <h2 id="checklist">10 questions to ask any pharmacy POS vendor</h2>
            <ol>
              <li>Does it record batch numbers and expiry dates, and show me what's about to expire?</li>
              <li>Can I set reorder levels and get low-stock alerts?</li>
              <li>Can I raise LPOs and see what I owe each distributor?</li>
              <li>Does it issue eTIMS invoices?</li>
              <li>Does it take M-Pesa at the counter?</li>
              <li>What happens when the internet goes off?</li>
              <li>Can I see the business from my phone when I'm away?</li>
              <li>Will you load my product list, or do I enter it myself?</li>
              <li>Who trains my staff, and who do I call after you've sold it?</li>
              <li>Does it work with my existing printer and scanner, and who handles hardware warranty?</li>
            </ol>
            <p>Hornbill POS answers yes to all ten. The best way to judge is to see it working on your own product list. <Link href="/how-it-works">Here's how that works</Link>.</p>
          </article>
          <aside className="aside">
            <div className="card">
              <h3>See it on your own products</h3>
              <p>Send us a WhatsApp message and we'll show you Hornbill working with your pharmacy's product list.</p>
              <div className="cta-row" style={{ flexDirection: "column", marginTop: 20 }}>
                <WhatsAppButton code="WEB-PHPOS-ASIDE" />
                <CallButton code="WEB-PHPOS-ASIDE" />
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap"><div className="head"><h2>Pharmacy POS questions</h2></div><Faq items={FAQ} /></div>
      </section>
      <FinalCta code="WEB-PHPOS-FINAL" />
      <JsonLd data={faqLd} />
    </>
  );
}
