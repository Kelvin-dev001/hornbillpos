export const SITE = {
  name: "Hornbill POS",
  company: "Hornbill Tech",
  companyUrl: "https://hornbilltech.co.ke",
  url: "https://pos.hornbilltech.co.ke",
  phoneDisplay: "0759 293 030",
  phoneTel: "+254759293030",
  waNumber: "254759293030",
  promise: "Know your business at a glance.",
  headline: "Know your pharmacy at a glance.",
  description:
    "Hornbill POS is a pharmacy point-of-sale and business management system for Kenya: sales, stock, expiry, LPOs and supplier balances in one system, with eTIMS integration and M-Pesa payment prompt.",
};

export const NAV = [
  { href: "/pharmacy-pos", label: "Pharmacy POS" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/hardware", label: "Hardware" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export const FOOTER_NAV = [
  ...NAV,
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Per-page Open Graph that keeps the shared preview image. */
export const og = (path: string) => ({ url: path, images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Hornbill POS: Know your pharmacy at a glance" }] });
