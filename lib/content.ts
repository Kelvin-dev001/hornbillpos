import type { QA } from "@/components/Faq";

export const UI = {
  stock: { src: "/ui/stock-chart.webp", w: 2000, h: 1125, alt: "Hornbill POS Warehouse Stock Chart showing total items, total quantity, stock value by cost and by price, and profit estimate (illustrative data)" },
  stockCrop: { src: "/ui/crop-stock-value.webp", w: 1600, h: 830, alt: "Stock value by cost and price with profit estimate in Hornbill POS (illustrative data)" },
  dashboard: { src: "/ui/dashboard.webp", w: 2000, h: 1125, alt: "Hornbill POS dashboard overview chart with monthly sales, tax and purchases (illustrative data)" },
  products: { src: "/ui/products-expiry.webp", w: 2000, h: 1125, alt: "Hornbill POS product list with batch numbers, expiry dates and months remaining (illustrative data)" },
  expiryCrop: { src: "/ui/crop-expiry.webp", w: 1600, h: 730, alt: "Expiry Date column with Valid badges and months remaining for each batch (illustrative data)" },
  expiryAlerts: { src: "/ui/crop-expiry-alerts.webp", w: 1600, h: 807, alt: "Product Expiry Alerts report listing products by expiry date (illustrative data)" },
  reports: { src: "/ui/crop-reports.webp", w: 1600, h: 451, alt: "Hornbill POS reports hub with 14 report tiles including Daily Sales, Profit and/or Loss and Best Sellers" },
  pos: { src: "/ui/crop-pos.webp", w: 1600, h: 840, alt: "Hornbill POS counter screen with product search, cart, total payable and payment button (illustrative data)" },
  lpo: { src: "/ui/crop-lpo.webp", w: 1600, h: 715, alt: "Add LPO form with supplier, payment terms, expected delivery date and product lines (illustrative data)" },
  balances: { src: "/ui/crop-balances.webp", w: 1600, h: 605, alt: "Purchases list showing grand total, paid, balance and payment status per supplier (illustrative data)" },
};

export const T1 = { quote: "I don't have to worry about expired stock anymore! Hornbill POS flags them out automatically.", credit: "Pharmacy owner" };
export const T2 = { quote: "The LPO management feature is also a life saver to me as the owner! No more payment disputes with suppliers!", credit: "Pharmacy owner" };

export const STEPS = [
  ["Tell us about your pharmacy", "A WhatsApp chat or call: outlets, tills, staff and what you use today."],
  ["We understand your requirements", "We walk through how you buy, stock and sell, and show Hornbill on your own products."],
  ["We configure Hornbill", "Set up for your pharmacy, including any customisation agreed in the scope."],
  ["We prepare your data", "We load your product list (bulk import) so you don't start from zero."],
  ["We deploy the system", "Software live, and hardware installed if you're taking ours."],
  ["We train your team", "Counter staff, stock staff and you, until everyone is comfortable."],
  ["We hand over", "You sign off when the system is working the way you need it."],
  ["We keep supporting you", "Support after handover, with hardware warranty and replacement handled by us."],
] as const;

export const FAQ_HOME: QA[] = [
  { q: "Who is Hornbill POS for?", a: "Pharmacy and chemist owners in Kenya who want to see and control their business: sales, stock, expiry, purchasing and supplier balances in one system." },
  { q: "Is it hard to use?", a: "At the counter it's scan or search, add, and pay. During setup we train your counter staff, stock staff and you, until everyone is comfortable." },
  { q: "Do you help with data entry?", a: "Yes. Loading your product list is part of setup. Hornbill also supports bulk product import." },
  { q: "Does it work when the internet goes off?", a: "Yes. Hornbill has an offline mode, so your counter keeps working when the network drops." },
  { q: "Does it have eTIMS and M-Pesa?", a: "Yes. Hornbill has eTIMS integration, and customers can pay with an M-Pesa payment prompt on their phone. We'll show you both during your demo." },
  { q: "Can I check my pharmacy when I'm not there?", a: "Yes. You can open Hornbill from your phone or laptop, and get a daily sales summary by SMS." },
  { q: "I have more than one branch. Will it work?", a: "Yes. Hornbill manages all your branches in one system, with stock held per location and transfers between them." },
  { q: "How much does it cost?", a: "Every pharmacy is different, so we scope your needs first and then send one clear quotation: a setup fee plus a monthly or annual subscription (annual works out cheaper). Hardware is quoted separately or bundled." },
  { q: "Can I use my existing printer and scanner?", a: "Yes. Hornbill works with your existing hardware, or we can supply, install and back a full setup." },
];
