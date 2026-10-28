import { SITE } from "./site";

/** Build a wa.me link with a prefilled message carrying a campaign code, e.g. [WEB-HOME-HERO]. */
export function waLink(code: string, message = "Hi Hornbill POS, I'd like to see it working on my pharmacy.", utmCampaign?: string) {
  const tag = utmCampaign ? `[${code} | ${utmCampaign}]` : `[${code}]`;
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(`${message} ${tag}`)}`;
}
