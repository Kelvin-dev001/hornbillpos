import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/site";
import { Logo } from "./Header";
import { WhatsAppButton, CallButton } from "./CTA";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="muted-light" style={{ marginTop: 14, maxWidth: 340 }}>{SITE.promise} Pharmacy point of sale and business management, built and supported in Kenya by {SITE.company}.</p>
        </div>
        <nav aria-label="Footer" className="footer-links">
          {FOOTER_NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        </nav>
        <div className="footer-cta">
          <WhatsAppButton code="WEB-FOOTER" />
          <CallButton code="WEB-FOOTER" className="btn btn-ghost-light" />
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {SITE.company}. Product screens show illustrative data.</span>
        <a href={SITE.companyUrl}>hornbilltech.co.ke</a>
      </div>
    </footer>
  );
}
