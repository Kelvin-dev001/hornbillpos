# Hornbill POS website

Marketing site for **pos.hornbilltech.co.ke**. Next.js 15 (App Router), static pages, deployed on Vercel.

## Pages
`/` · `/pharmacy-pos` · `/features` · `/how-it-works` · `/hardware` · `/pricing` · `/support` · `/about` · `/contact`
No retail or restaurant pages yet (master prompt §29, §57).

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Deploy (runbook A5)
1. Create an empty GitHub repo `hornbill-pos-website`, then from this folder:
   ```bash
   git init && git add . && git commit -m "Hornbill POS website v1"
   git branch -M main && git remote add origin https://github.com/<you>/hornbill-pos-website.git && git push -u origin main
   ```
2. In Vercel: **Add New → Project → Import** the repo. Framework is detected as Next.js; no settings to change.
3. Optional tracking, under Vercel → Settings → Environment Variables (see `.env.example`):
   `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`. Nothing loads until these are set.
4. Check the Vercel preview URL. When approved, add the domain **pos.hornbilltech.co.ke** under Settings → Domains and create the DNS record Vercel shows (a CNAME for `pos`) at your DNS host.

## Editing
- Phone, URLs, nav: `lib/site.ts`
- Testimonials, setup steps, homepage FAQ, product screens: `lib/content.ts`
- Styles and brand tokens: `app/globals.css` (mirrors `02-brand/tokens/tokens.css`)
- Product screens are recreations with dummy data, in `public/ui/`

## Tracking built in
- Every WhatsApp button carries a placement code in the prefilled message, e.g. `[WEB-HOME-HERO]`. If a visitor arrived with `?utm_campaign=PH-EXP-01`, it's appended: `[WEB-HOME-HERO | PH-EXP-01]`. Log these in `10-social-media/leads.csv`.
- WhatsApp and call clicks fire `whatsapp_click` / `call_click` (GA4) and `Contact` (Meta, TikTok).

## Social media files
Approved weekly assets go in `public/media/YYYY-Www/`, served at `https://pos.hornbilltech.co.ke/media/...` for Metricool (master prompt §54).

## Photos
Real pharmacy photos go in `public/photos/` with these exact names (`.jpg`, `.webp` or `.png`). Each slot appears on the site only once its file exists:

| File | Where it shows |
|---|---|
| `counter` | Homepage, "Made for busy Kenyan pharmacy counters" |
| `owner` | Homepage, "When you're not at the counter" |
| `shelves` | Pharmacy POS guide, stock section |
| `setup` | Hardware page |
| `training` | Homepage setup steps, Support, How it works |
| `team` | About page |

Landscape 3:2, at least 2400 × 1600 px, under 2 MB each. Next.js resizes and compresses them automatically.
