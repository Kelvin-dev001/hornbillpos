"use client";
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/wa";
import { trackContact, readUtm } from "@/lib/track";

/** Primary WhatsApp button. `code` identifies the placement, e.g. WEB-HOME-HERO. */
export function WhatsAppButton({ code, label = "WhatsApp us", message, className = "btn btn-primary" }: { code: string; label?: string; message?: string; className?: string }) {
  const [href, setHref] = useState(waLink(code, message));
  useEffect(() => { const u = readUtm(); if (u.utm_campaign) setHref(waLink(code, message, u.utm_campaign)); }, [code, message]);
  return (
    <a className={className} href={href} target="_blank" rel="noopener" onClick={() => trackContact("whatsapp", code)} data-cta="whatsapp">
      <MessageCircle aria-hidden size={20} strokeWidth={2.2} /> {label}
    </a>
  );
}

export function CallButton({ code, className = "btn btn-ghost" }: { code: string; className?: string }) {
  return (
    <a className={className} href={`tel:${SITE.phoneTel}`} onClick={() => trackContact("call", code)} data-cta="call">
      <Phone aria-hidden size={18} strokeWidth={2.2} /> Call {SITE.phoneDisplay}
    </a>
  );
}

export function CtaPair({ code, dark = false }: { code: string; dark?: boolean }) {
  return (
    <div className="cta-row">
      <WhatsAppButton code={code} />
      <CallButton code={code} className={dark ? "btn btn-ghost-light" : "btn btn-ghost"} />
    </div>
  );
}
