"use client";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/wa";
import { trackContact, readUtm } from "@/lib/track";

/** Floating WhatsApp button, mobile only (hidden ≥ 900px via CSS). */
export default function StickyWhatsApp() {
  const [href, setHref] = useState(waLink("WEB-STICKY"));
  useEffect(() => { const u = readUtm(); if (u.utm_campaign) setHref(waLink("WEB-STICKY", undefined, u.utm_campaign)); }, []);
  return (
    <a className="sticky-wa" href={href} target="_blank" rel="noopener" aria-label="WhatsApp Hornbill POS" onClick={() => trackContact("whatsapp", "WEB-STICKY")}>
      <MessageCircle size={26} strokeWidth={2.2} aria-hidden /> <span>WhatsApp us</span>
    </a>
  );
}
