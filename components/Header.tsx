"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { WhatsAppButton } from "./CTA";
import { captureUtm } from "@/lib/track";

export function Logo() {
  return (
    <span className="logo">
      <Image src="/brand/mark-256.png" alt="" width={36} height={36} priority />
      <span className="logo-word">Hornbill <span>POS</span></span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => { captureUtm(); }, []);
  useEffect(() => { setOpen(false); }, [path]);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" aria-label="Hornbill POS home"><Logo /></Link>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}>{n.label}</Link>
          ))}
          <WhatsAppButton code="WEB-NAV" className="btn btn-primary btn-sm nav-cta" />
        </nav>
        <button className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
