import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Analytics from "@/components/Analytics";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const display = localFont({
  src: [
    { path: "../fonts/bricolage-grotesque-latin-700-normal.woff2", weight: "700" },
    { path: "../fonts/bricolage-grotesque-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-display", display: "swap",
});
const body = localFont({
  src: [
    { path: "../fonts/plus-jakarta-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/plus-jakarta-sans-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600" },
    { path: "../fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700" },
    { path: "../fonts/plus-jakarta-sans-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-body", display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Hornbill POS | Pharmacy POS & Management System in Kenya", template: "%s | Hornbill POS" },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE.name, locale: "en_KE", url: SITE.url },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#09090A", width: "device-width", initialScale: 1 };

const org = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}#org`, name: SITE.company, url: SITE.companyUrl, logo: `${SITE.url}/brand/mark-256.png`,
      contactPoint: [{ "@type": "ContactPoint", telephone: SITE.phoneTel, contactType: "sales", areaServed: "KE", availableLanguage: ["en", "sw"] }] },
    { "@type": "LocalBusiness", "@id": `${SITE.url}#business`, name: SITE.name, url: SITE.url, telephone: SITE.phoneTel, image: `${SITE.url}/brand/mark-256.png`,
      address: { "@type": "PostalAddress", addressCountry: "KE" }, areaServed: { "@type": "Country", name: "Kenya" }, parentOrganization: { "@id": `${SITE.url}#org` } },
    { "@type": "SoftwareApplication", name: SITE.name, applicationCategory: "BusinessApplication", operatingSystem: "Web browser",
      description: SITE.description, url: SITE.url, publisher: { "@id": `${SITE.url}#org` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${display.variable} ${body.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} /></head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <ScrollProgress />
        <main id="main">{children}</main>
        <Footer />
        <StickyWhatsApp />
        <Reveal />
        <Analytics />
        <JsonLd data={org} />
      </body>
    </html>
  );
}
