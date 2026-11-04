"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Pinned product tour: the device stays in place while its screen changes as the visitor scrolls.
 * Progressive enhancement: without JS it shows the first screen with every step listed;
 * with prefers-reduced-motion it becomes a plain stacked list (no pinning, no transitions).
 */
const STEPS = [
  { src: "/ui/pos-counter.webp", alt: "Hornbill POS counter screen with product search, cart and payment (illustrative data)", title: "At the counter", text: "Scan or search, add, take payment. M-Pesa prompt and eTIMS built in." },
  { src: "/ui/dashboard.webp", alt: "Hornbill POS dashboard with monthly sales, tax and purchases (illustrative data)", title: "The owner's dashboard", text: "Monthly sales, tax and purchases on one chart." },
  { src: "/ui/products-expiry.webp", alt: "Product list with batch numbers, expiry dates and months remaining (illustrative data)", title: "Every batch, counted down", text: "Expiry date and months remaining on every batch." },
  { src: "/ui/purchases.webp", alt: "Purchases list with paid, balance and payment status per supplier (illustrative data)", title: "What you owe each distributor", text: "Paid, balance and status on every purchase." },
  { src: "/ui/reports-hub.webp", alt: "Hornbill POS reports hub with report tiles (illustrative data)", title: "Reports, one click each", text: "Daily sales to profit and loss, out to Excel or PDF." },
];
const N = STEPS.length;

export default function ScrollTour() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (still) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      setProgress(p);
      setActive(Math.min(N - 1, Math.floor(p * N * 0.999)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [still]);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + total * ((i + 0.5) / N);
    window.scrollTo({ top, behavior: "smooth" });
  };

  const head = (
    <>
      <p className="eyebrow eyebrow-light">The Hornbill way</p>
      <h2>One system, from the counter to the back office.</h2>
    </>
  );

  if (still) {
    return (
      <section className="dark tour-still" aria-label="Hornbill POS, screen by screen">
        <div className="wrap">
          <div className="head">{head}</div>
          <ol className="tour-list">
            {STEPS.map((s, i) => (
              <li key={s.src}>
                <div><span className="tour-n">{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></div>
                <figure className="device"><div className="device-screen"><Image src={s.src} alt={s.alt} width={2000} height={1125} sizes="(max-width: 900px) 100vw, 700px" /></div></figure>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="dark tour" style={{ ["--n" as string]: N }} aria-label="Hornbill POS, screen by screen">
      <div className="tour-sticky">
        <div className="wrap tour-grid">
          <div className="tour-copy">
            {head}
            <ol className="tour-steps">
              {STEPS.map((s, i) => (
                <li key={s.src} className={i === active ? "on" : undefined}>
                  <button type="button" onClick={() => goTo(i)} aria-current={i === active ? "step" : undefined}>
                    <span className="tour-n">{i + 1}</span>
                    <span className="tour-t"><b>{s.title}</b><span>{s.text}</span></span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="tour-now" aria-hidden="true"><b>{STEPS[active].title}</b><span>{STEPS[active].text}</span></div>
          </div>
          <div className="tour-stage">
            <figure className="device">
              <div className="device-screen tour-screen">
                {STEPS.map((s, i) => (
                  <Image key={s.src} src={s.src} alt={i === active ? s.alt : ""} aria-hidden={i === active ? undefined : true}
                    width={2000} height={1125} sizes="(max-width: 900px) 100vw, 700px" className={i === active ? "on" : undefined} priority={i === 0} />
                ))}
              </div>
              <figcaption>{STEPS[active].title} · illustrative data</figcaption>
            </figure>
            <div className="tour-bar" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
