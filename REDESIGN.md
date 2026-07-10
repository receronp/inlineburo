# Inline Buró Creativo — Site Audit & Redesign Proposal

Exploration date: 2026-07-10 · Explored live site https://inlineburo.com with Playwright
(desktop 1440×900 and mobile 390×844).

---

## 1. What the site is

Inline Buró Creativo is a Monterrey, MX creative studio **with its own print production
workshop** ("taller de impresión gráfica"). Their pitch: they create, produce **and
install**, fast ("en tiempo récord"). Services: Branding, Marketing, Producción Gráfica,
Fotografía. Primary CTA is WhatsApp (+52 81 2407 3834). Voice is warm, informal Mexican
Spanish ("¡Hagamos contacto y que salgan chispas!").

That combination — a design brain attached to a physical print floor — is the most
differentiating thing about the business, and the current site never shows it.

## 2. Audit findings (current site)

### Content / UX
- **No navigation.** Header is a lone logo; no menu, no anchor links, no way to jump to
  services or contact.
- **The portfolio is dead.** All 6 "Proyectos" cards (Mater, Hilda Carranza, Frubotanas,
  Top Garden, Crepé de Paris, Grupo Racil) link back to the homepage. The "Portfolio"
  button has an **empty href**. The cards show client *logos*, not work.
- **22 client-logo links point to `#`.**
- **Journal has one post — "¡Bienvenidos!" from December 31, 2018.** It dates the whole
  site by eight years.
- **No contact form, address, phone, or email** in the contact section — just the
  headline. Contact Form 7 is installed but no form is rendered.
- Hero is a stock "particle sphere" Slider Revolution template — generic tech imagery
  that says nothing about a print workshop.

### Bugs (verified in browser)
- **Mobile: hero headline overflows and is clipped** at the right edge ("…con calid",
  "…impresión grá").
- **Contact headline renders with collapsed word spacing**: "Hagamoscontacto" /
  "yquesalganchispas!!!" (desktop and mobile).
- **Console 404** from a malformed script tag: the theme outputs a broken `src`
  (`ai-uncode.js'%20id='uncodeAI'…`) — a quote-escaping bug in the Uncode theme markup.
- Footer copyright auto-stamps "© 2026" while the newest content is from 2018.

### Tech / performance
- WordPress 6.9.4 + Uncode theme + child theme.
- **Both LayerSlider *and* Slider Revolution** are loaded (two full slider frameworks).
- **WooCommerce is installed and loading CSS/JS** with no shop anywhere.
- jQuery + jquery-migrate, 31 external scripts, ~40 images on one page.
- Typography stack is a mishmash: **SF Pro Display** (Apple's font, not licensed for
  web use), Poppins, and Droid Serif.

**Verdict:** the site is a 2018 theme-demo assembly whose plugins have been updated but
whose content and design were never finished. A redesign should be a rebuild, not a
restyle.

## 2b. Instagram findings (@inlineburo, explored 2026-07-10)

Profile: "Inline Print", 32 posts, 200 followers. Explored anonymously with
Playwright; all post captions extracted.

- **Founded 1995.** Anniversary posts: "En 1995 nació Inline Buró…" and "25 años
  saltando chispas ✨". Three decades of history the website never mentions — a major
  trust signal for a local production shop.
- **"Chispas" is a real brand motif**, not one-off site copy: `#siguensaltandochispas`,
  "25 años saltando chispas". Keep it.
- **Brand naming is inconsistent** and needs a decision before the rebuild: the site
  says *Inline Buró Creativo*, the IG display name is *Inline Print*, the logo and
  captions say *Inline Marketing*.
- **The real service catalog is far richer than the site's four icons.** From actual
  posted work: rotulación vehicular (vans, buses, motos), vinil de recorte y esmerilado
  sobre pared/vidrio, lonas y microperforado (including installation at height from a
  lift), coroplast impreso, señalética en acrílico, cajas de luz, stands y banners para
  eventos (araña, demo stands, escenarios), tarjetas de presentación, personalización
  de objetos (cascos, ruletas de MDF, un ring de box), rebranding y fotografía.
- **Case-study candidates with photos that already exist**: Cenacolo van wrap,
  Vidadesalud bus wrap, **Pepsi Blue Zone** demo stand, INTERSAC 2023 stage backdrop,
  Grupo Simsa rebrand (multi-post series), Europiel interior vinyl, Everest interior
  sign, high-rise microperforado installation.
- **Photo treatment**: IG photos are raw phone shots inside a blue-swoosh template
  with baked-in labels ("ROTULACIÓN CON VINIL DE RECORTE"). The press-sheet direction
  absorbs these perfectly: uniform crops with mono job-ticket captions replace the
  swoosh, and existing photos become usable case-study material immediately.

### Logged-in findings (full access, 2026-07-10)

- **The account is a dormant archive, not a channel.** 23 of the 32 posts were
  batch-uploaded on **March 19, 2025** (the whole vinyl/rotulación portfolio) and
  nothing has been posted since. Earlier clusters: May 2020 ("refresh de logotipo",
  25-años posts), Sept 2020, May 2021 (Simsa). Engagement is 1–3 likes per post,
  200 followers, one tagged post ever. **Implication:** the website must carry the
  marketing load alone — do not build an IG-feed embed into the redesign, and treat
  IG purely as a photo source.
- **"Refresh de logotipo" post (May 8, 2020)**: Top Garden logo before/after carousel
  with a stated philosophy — *"cambios que conservan la esencia, el alma del
  logotipo."* That line is case-study copy, and logo refresh joins the branding
  service list. Hashtags confirm heritage positioning: #25AñosdeExperiencia.
- **Simsa rebrand post (May 19, 2021)**: professional mockup photography (gold-foil
  business cards for SIMSA + EASA). They can produce polished identity mockups —
  case studies aren't limited to phone shots of installs.
- **"Envía tu archivo" story highlight** is an existing client workflow: repeat
  customers send print-ready files directly. The redesign should keep this as a
  named secondary CTA ("Envía tu archivo" → WhatsApp/upload) alongside the primary
  quote CTA — it serves the production-only customer who already knows what they want.
- Bio links only to inlineburo.com — the site is their sole web presence beyond IG.

## 3. Redesign proposal

### Concept — "El taller a la vista" (the workshop, visible)

Every generic agency site shows abstractions. Inline's edge is physical: ink, vinyl,
large-format rolls, installation crews. The redesign borrows its visual language from
the **press sheet** — the proof a client signs before a run: crop marks, registration
marks, a CMYK calibration bar, job-ticket annotations. The page itself is laid out like
an imposition proof of the studio's work.

This is grounded, not decorative: each device means something a printer recognizes, and
it makes "we own the workshop" legible without saying it.

### Tokens

**Color** — a printer's palette: paper, ink, and the brand's existing blue as the spot
color, with the four process colors used *functionally* as service tags.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FAFAF7` | Background — unbleached press-sheet white |
| `ink` | `#101418` | Text, footer — rich black |
| `spot-blue` | `#0A5CFF` | Brand spot color: CTAs, links, signature moments |
| `proc-cyan` | `#00A3D9` | Service tag: Branding |
| `proc-magenta` | `#E5127D` | Service tag: Marketing |
| `proc-yellow` | `#F5C400` | Service tag: Fotografía |
| `proc-black` | `#1A1A1A` | Service tag: Producción Gráfica |

Process colors appear only as small chips/tags and in the calibration-bar motif — the
page stays paper + ink + blue everywhere else.

**Type** (all Google Fonts, replacing the unlicensed SF Pro):
- Display: **Archivo Expanded Black** — signage-scale grotesque, designed in Latin
  America, built for headlines; set tight, uppercase for section markers.
- Body: **Archivo** 400/500 — same family, quiet and legible.
- Utility: **IBM Plex Mono** — job-ticket annotations, crop-mark labels, dates, specs
  (`TRABAJO Nº / CLIENTE / SUSTRATO / TIRAJE`).

**Layout** — single page still fits the business, but finished this time, plus real
case-study pages:

```
┌──────────────────────────────────────────────────┐
│ ┌ logo    nav: servicios · proyectos · contacto  │  sticky, paper bg,
│           [Envía tu archivo]  [WhatsApp]         │  hairline bottom rule
├──────────────────────────────────────────────────┤
│  ┐                                            ┌  │  crop marks in corners
│                                                  │
│   CREAMOS, PRODUCIMOS                            │  Archivo Expanded,
│   E INSTALAMOS.                                  │  huge, ink on paper
│   mono: taller de impresión gráfica ·            │
│         MTY, MX · desde 1995                     │
│   [Cotiza por WhatsApp]  [Ver proyectos]         │
│                                                  │
│  ■■■■■■■■  ← CMYK calibration bar (signature)    │
│  ┘                                            └  │
├──────────────────────────────────────────────────┤
│  SERVICIOS — 4 cards, each with process-color    │
│  chip + plain-language list of deliverables      │
│  drawn from the real IG catalog:                 │
│   · Rotulación e instalación (vehículos, muros,  │
│     vidrio, alturas)                             │
│   · Impresión gráfica (lonas, microperforado,    │
│     coroplast, cajas de luz, señalética)         │
│   · Branding y diseño (identidad, rebranding,    │
│     tarjetas, stands de evento)                  │
│   · Fotografía                                   │
├──────────────────────────────────────────────────┤
│  PROYECTOS — 4–6 real case cards: photo of the   │
│  *installed* work, mono job-ticket caption       │
│  (cliente / servicio / año) → detail page        │
│  candidates: Pepsi Blue Zone · Vidadesalud bus   │
│  · Cenacolo van · INTERSAC escenario · Simsa     │
│  rebrand · microperforado en alturas             │
├──────────────────────────────────────────────────┤
│  CLIENTES — one quiet logo row (no links)        │
├──────────────────────────────────────────────────┤
│  CONTACTO — ink bg. form (nombre/mensaje) +      │
│  WhatsApp, tel, email, dirección, horario        │
│  + "Envía tu archivo" fast lane for repeat       │
│    production clients                            │
├──────────────────────────────────────────────────┤
│  footer: © · aviso de privacidad · social        │
└──────────────────────────────────────────────────┘
```

**Signature element:** the **CMYK calibration bar**. It sits under the hero headline
and doubles as the scroll-progress indicator — as you scroll, the bar "prints,"
filling swatch by swatch. On the contact section it's complete: the job is ready for
press. One idea, one place, meaningful to the subject. (Static under
`prefers-reduced-motion`.)

**What gets cut:** the particle-sphere slider, the logo-card "carousel," the Journal
(until there's a second post — a section is not a plan), both slider plugins,
WooCommerce, and every `href="#"`.

**Copy direction:** keep their voice ("que salgan chispas" belongs in the contact
section) but make claims concrete: replace "conectando marcas con emociones" as the
functional pitch with what they actually do — *diseñamos tu marca, la imprimimos en
nuestro taller y la instalamos donde se ve* — speed and ownership of production as
the proof points.

### Tech recommendation

Rebuild as a **static Astro site + Tailwind** in this repo:
- Content is 1 page + a handful of case studies — no CMS runtime needed. Case studies
  as Markdown/content collections so they're easy to add.
- Goes from 31 scripts / 2 slider frameworks / WooCommerce to effectively zero JS
  (only the scroll-progress bar and mobile nav toggle).
- Free hosting (Netlify/Vercel/Cloudflare Pages), no plugin security treadmill —
  the current stack already ships a broken script tag and an unlicensed font.
- SEO basics the current site lacks: proper meta description, Open Graph, sitemap,
  `lang="es-MX"`, local-business structured data (they're a Monterrey shop —
  local search is where their clients are).

### Quality floor
Responsive to 360px (the current hero clips at 390px), visible keyboard focus,
`prefers-reduced-motion` respected, WCAG AA contrast (spot blue on paper passes for
text ≥18px / bold; body text is ink on paper), alt text on all project photos.

### Content: post inventory & project stories

A full per-post inventory (dates, verbatim captions, what each photo shows) lives in
`docs/content/post-inventory.md`, and grounded draft case-study copy in Spanish in
`docs/content/project-stories.md` — 7 featured stories (Simsa, B Catering, Cenacolo,
INTERSAC, Sacred Heart, ModusLink, Top Garden), a job-ticket gallery list, and the
"desde el 3 de mayo de 1995" heritage story for the About section. No invented
metrics; unverified client names are marked [por confirmar].

### What I need from the client to build it
1. **One brand name.** Inline Buró Creativo (site) vs Inline Print (IG name) vs Inline
   Marketing (logo). The redesign needs a single lockup; recommendation: *Inline Buró*
   as the name, "taller de impresión y marketing · desde 1995" as the descriptor.
2. Original (unframed) photos of the IG work for the case studies — higher-res versions
   of the Pepsi, Vidadesalud, Cenacolo, INTERSAC, and Simsa shots if they exist.
3. Contact details to publish: address, hours, email, phone.
4. Confirmation the service list is current (does WooCommerce hint at a planned shop?).
