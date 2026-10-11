# Credit India NextGen website

Loan and credit-card (Bank DSA) website. React 18 + Vite + Tailwind CSS 3 + React Router.
Fully responsive, keyboard accessible, reduced-motion aware. Structure follows relicwealth.in:
Home, About, Services, Process, Contact, three team pages, Privacy, Terms, 404.

## Quick start (no tools needed)
Open **`website/index.html`** by double-clicking it. To publish, upload that one file to any host
(Netlify Drop, cPanel/Hostinger `public_html`, GitHub Pages). It uses `#` links so no server settings are needed.

## Run locally (for developers)
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## Edit content (one file)
Everything customers read lives in **`src/data/site.js`**:
contact details, WhatsApp and Instagram, services, process steps, document checklists, FAQs, team, lenders.
Leave `phone`, `address`, `registration` empty to hide them.

### Must-do before launch
- Replace the placeholder **team names/bios** (`team` in `site.js`).
- Set real **email, phone, WhatsApp, address** and your **DSA / company registration** text.
- Add **lender names** to `lenders` only where you are authorised to show them.
- Have **Privacy policy / Terms** (`src/pages/Legal.jsx`) reviewed by a legal professional.
- Check all copy against your actual practices (fees, timelines, cities served).

## Enquiries (no backend, no database)
There is no server, database or form service. Visitors reach you through their own email app
("Enquiry now"), WhatsApp or Instagram. Set these in `src/data/site.js`:
- `email`: where enquiry emails go
- `whatsapp`: digits with country code, e.g. `919876543210`
- `instagram`: username without `@`

## EMI calculator
`src/components/EmiCalculator.jsx`. Default rates per loan type are illustrative; adjust the `TYPES` array.

## Deploy (pick one)
| Host | Steps |
|---|---|
| **Vercel** | Import the repo at vercel.com/new. `vercel.json` is ready. |
| **Netlify** | Import from Git. `netlify.toml` is ready. Or `npx netlify deploy --prod --dir=dist`. |
| **GitHub Pages** | Push to `main`; Settings → Pages → Source: *GitHub Actions* (`.github/workflows/deploy.yml`). Set `VITE_BASE: /` for a custom domain. |
| **Any static host** | Upload `dist/`; route all paths to `index.html`. |

Add your domain in the host's dashboard, then point DNS (A record for the apex, CNAME for `www`) to the values it shows.

## Single-file build
`npm run build:single` makes one self-contained `dist-single/index.html` (hash routing) for quick sharing.
