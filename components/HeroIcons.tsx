import { Pill, Tablets, PillBottle, Syringe, Cross, Stethoscope, Thermometer, BriefcaseMedical, FlaskConical, Bandage, Receipt, ScanBarcode, Package, Smartphone } from "lucide-react";

/**
 * Decorative pharmacy icon field behind the hero copy.
 * `motion`: icons drift slowly (homepage). Without it they sit still (other pages).
 * Mostly pharmacy icons, with some business ones so it reads "pharmacy software", not "we sell medicine".
 * Positions are % of the hero, kept mostly to the edges so the headline stays clear.
 */
const ICONS = [
  // [Icon, left%, top%, size px, rotate deg, drift seconds, delay seconds]
  [Pill, 4, 10, 46, -20, 13, 0],
  [PillBottle, 88, 8, 52, 12, 15, -3],
  [Receipt, 70, 20, 38, -8, 12, -6],
  [Tablets, 94, 34, 40, 18, 14, -2],
  [Syringe, 2, 42, 44, 35, 16, -8],
  [Cross, 46, 5, 30, 0, 11, -4],
  [Stethoscope, 82, 52, 46, -10, 17, -5],
  [ScanBarcode, 12, 68, 38, 6, 13, -9],
  [FlaskConical, 60, 40, 34, -14, 15, -1],
  [Thermometer, 97, 66, 36, 30, 12, -7],
  [Package, 30, 86, 40, -6, 16, -3],
  [BriefcaseMedical, 74, 78, 42, 8, 14, -10],
  [Bandage, 22, 28, 34, -30, 12, -2],
  [Smartphone, 56, 70, 34, 10, 15, -6],
  [Pill, 90, 90, 34, 40, 13, -4],
  [Cross, 6, 92, 26, 0, 11, -8],
  [Tablets, 38, 52, 30, -12, 14, -5],
] as const;

export default function HeroIcons({ motion = false }: { motion?: boolean }) {
  return (
    <div className={motion ? "hero-icons is-moving" : "hero-icons"} aria-hidden="true">
      {ICONS.map(([Icon, x, y, s, r, d, dl], i) => (
        <span
          key={i}
          style={{
            left: `${x}%`, top: `${y}%`,
            ["--r" as string]: `${r}deg`, ["--d" as string]: `${d}s`, ["--dl" as string]: `${dl}s`,
          }}
        >
          <Icon size={s} strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}
