"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/wa";
import { trackContact, readUtm } from "@/lib/track";

/** Builds a WhatsApp message from a few fields. Nothing is stored or sent to a server. */
export default function ContactBuilder() {
  const [f, setF] = useState({ name: "", pharmacy: "", town: "", outlets: "1", system: "Paper / exercise books", note: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const msg = `Hi Hornbill POS, I'd like to see it working on my pharmacy.\nName: ${f.name || "-"}\nPharmacy: ${f.pharmacy || "-"}\nTown: ${f.town || "-"}\nOutlets: ${f.outlets}\nUsing now: ${f.system}${f.note ? `\nNote: ${f.note}` : ""}`;
  const go = (e: React.FormEvent) => {
    e.preventDefault();
    trackContact("whatsapp", "WEB-CONTACT-FORM");
    window.open(waLink("WEB-CONTACT-FORM", msg, readUtm().utm_campaign), "_blank", "noopener");
  };
  return (
    <form className="form card" onSubmit={go}>
      <h3>Send us your details on WhatsApp</h3>
      <p>Fill in what you like. This opens WhatsApp with your message ready to send.</p>
      <label>Your name<input value={f.name} onChange={set("name")} autoComplete="name" /></label>
      <label>Pharmacy name<input value={f.pharmacy} onChange={set("pharmacy")} /></label>
      <label>Town<input value={f.town} onChange={set("town")} autoComplete="address-level2" /></label>
      <label>Number of outlets
        <select value={f.outlets} onChange={set("outlets")}>{["1", "2", "3", "4+"].map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label>What do you use today?
        <select value={f.system} onChange={set("system")}>{["Paper / exercise books", "Excel", "Another POS system", "Nothing yet (new pharmacy)"].map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label>Anything else? (optional)<textarea rows={3} value={f.note} onChange={set("note")} /></label>
      <button className="btn btn-primary" type="submit"><MessageCircle size={20} aria-hidden /> Open WhatsApp</button>
    </form>
  );
}
