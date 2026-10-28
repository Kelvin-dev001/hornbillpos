import { CtaPair } from "./CTA";
export default function FinalCta({ code, title = "See Hornbill working on your own product list.", text = "Send us a WhatsApp message. We'll understand your pharmacy, show you Hornbill with your products, and give you one clear quotation." }: { code: string; title?: string; text?: string }) {
  return (
    <section className="final-cta">
      <div className="wrap final-inner">
        <h2>{title}</h2>
        <p className="lead-light">{text}</p>
        <CtaPair code={code} dark />
      </div>
    </section>
  );
}
