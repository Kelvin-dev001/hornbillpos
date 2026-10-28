import type { Metadata } from "next";
import { og } from "@/lib/site";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Device from "@/components/Device";
import FinalCta from "@/components/FinalCta";
import { UI } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features: Pharmacy POS, Stock, Expiry, LPO, Reports",
  description: "Hornbill POS features for pharmacies: fast counter sales, batch and expiry tracking, low-stock alerts, LPOs and supplier balances, 15 reports, eTIMS, M-Pesa, offline mode, multi-branch and SMS daily sales.",
  alternates: { canonical: "/features" }, openGraph: og("/features"),
};

const GROUPS: { title: string; intro: string; items: string[]; ui?: keyof typeof UI; ring?: { left: number; top: number; width: number; height: number } }[] = [
  { title: "At the counter", intro: "Fast, simple selling your staff pick up quickly.", ui: "pos",
    items: ["Scan a barcode or search by product name or code", "Browse by category, sub-category or brand", "Discounts and order tax at the till", "Suspend (hold) a sale and serve the next customer", "M-Pesa payment prompt on the customer's phone", "eTIMS integration", "Customer credit and balances", "Keeps working offline when the network drops", "Returns and quotations"] },
  { title: "Stock & expiry", intro: "Know what you have, what's low and what's about to expire.", ui: "expiryCrop", ring: { left: 54.5, top: 10, width: 17.5, height: 89 },
    items: ["Batch number and expiry date on every product", "Months remaining shown for each batch", "Product expiry alerts report, soonest first, across locations", "Reorder (alert) quantity per product and low-stock alerts", "Stock counts and quantity adjustments", "Stock held per location, with transfers between them", "Bulk product import", "Print barcode labels"] },
  { title: "Purchasing & suppliers", intro: "Order properly and know what you owe.", ui: "balances", ring: { left: 72.2, top: 15.3, width: 10.7, height: 72 },
    items: ["Local Purchase Orders (LPOs) with supplier, payment terms and expected delivery date", "Purchases with grand total, paid, balance and payment status", "Purchases by CSV", "Expenses", "Suppliers report"] },
  { title: "Reports & owner visibility", intro: "Answers without spreadsheets, wherever you are.", ui: "stockCrop",
    items: ["Dashboard overview: monthly sales, tax and purchases", "Stock value at cost and at price, with profit estimate", "Daily and monthly sales; sales detail; best sellers", "Profit and loss; payments; purchases; products", "Customers, suppliers and staff reports", "Every list downloads to Excel or PDF", "Daily sales summary by SMS", "Open Hornbill from your phone or laptop", "All your branches in one system", "The right access for each staff member"] },
];

export default function Features() {
  return (
    <>
      <PageHero eyebrow="Features" title={<>Everything a pharmacy owner needs <span className="g">to see and control.</span></>} lead="From the counter to the back office: sales, stock, expiry, purchasing, payments and reports in one system." code="WEB-FEATURES-HERO" />
      {GROUPS.map((g, i) => (
        <section key={g.title} style={i % 2 ? { background: "#fff" } : undefined}>
          <div className={`wrap split ${i % 2 ? "reverse" : ""}`}>
            <div data-reveal>
              <h2>{g.title}</h2>
              <p className="lead">{g.intro}</p>
              <ul className="ticks">{g.items.map((x) => <li key={x}><Check size={20} aria-hidden /><span>{x}</span></li>)}</ul>
            </div>
            {g.ui && <div data-reveal><Device {...UI[g.ui]} ring={g.ring} caption="Illustrative data" /></div>}
          </div>
        </section>
      ))}
      <FinalCta code="WEB-FEATURES-FINAL" />
    </>
  );
}
