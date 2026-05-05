# Pech'tacom Design System — Skill Guide

> Internal guide for designers (human or AI) creating new artifacts in the Pech'tacom universe.

## When to use this system

Anything that carries the Pech'tacom name to the public — websites, landing pages, decks, social posts, internal tools, print collateral, emails. Treat it as the canonical source of truth; the original *Identité Visuelle Guide* (`assets/charte-graphique.jpg`) is the parent document.

## Where to start

1. **Always include `tokens.css`** in any new HTML file:
   ```html
   <link rel="icon" href="assets/favicon.ico">
   <link rel="stylesheet" href="tokens.css">
   ```
2. **Reuse, don't reinvent.** Check `components.html` first — if a button / card / nav exists, copy its markup.
3. **Read `voice.html` before writing copy.** Tone is half the brand.

## The five rules

### 1 · The gradient is the signature — use it sparingly
The yellow→orange→rose gradient (`var(--pt-gradient)`) is reserved for moments of emphasis: hero blocks, primary CTAs in special contexts, featured cards, the brand pastille. **One gradient surface per page max** — past that, it tires the eye. For everything else, use solid rose, beige, or noir.

### 2 · Rose is the single primary action
`#FF003D` only goes on the most important action of any view. If a page has 5 « primary » buttons, pick one. Secondaries are ghost (border + noir) or soft (`--pt-accent-soft` + rose text).

### 3 · Beige is the warm canvas, not white
Default page background is white (`--pt-bg`). Sections that should feel calm, editorial, or « ouvert » use `--pt-bg-warm` (`#FFECD9`). Alternate the two for rhythm. Pure neutral grey is forbidden — Pech'tacom is warm, never institutional.

### 4 · Headings are tight, body is breathable
Titles use Mazzard / Manrope at `letter-spacing: -0.025em` to -0.035em, line-height 1.0–1.1, weight 800. Body uses All Round Gothic / Nunito at `letter-spacing: 0`, line-height 1.5–1.6, weight 400–500. Never bold body for emphasis — use color (rose) or a different weight class.

### 5 · One peach pun per page, max
The peach lexicon (récolter, cueillir, mûrir, en saison, le noyau) is delicious in moderation and indigestible at scale. One fruity moment per page — usually in the title or a CTA — and the rest stays sober French.

## Composition recipes

### Hero with gradient
```html
<section class="hero">
  <div class="ey">★ STUDIO · TOULOUSE · 2019</div>
  <h1>Une com' qui a du <em>jus</em>.</h1>
  <p class="lede">…</p>
  <a class="btn-primary">Démarrer un projet →</a>
</section>
```
Gradient text on `<em>` inside `<h1>` is the brand's signature flourish. Use it in **one** word per hero — never on a whole heading.

### Section rhythm
A typical landing page alternates: `white → beige → white → noir → beige → white`. The noir section is for « best-of » content (testimonials, featured work). Never put two noir sections back-to-back.

### Cards
Three card temperaments:
- **Default** (white + border) — listing cards, neutral
- **Feature** (`--pt-bg-warm`, no border) — soft emphasis
- **Featured-feature** (noir, jaune eyebrow) — recommended option, hero card
- **Showcase** (`--pt-gradient`, white text) — the « hero card », max 1 per section

### Pill nav
Sticky, pill-shaped, `backdrop-filter: blur(20px)` on a 92% white background. Logo left, links center (rounded pill hover), primary CTA right. Always rose CTA.

## Things that break the brand

- ❌ Sans-serif geometric fonts that aren't Manrope (Inter, Helvetica, Roboto are forbidden — they make the brand feel cold)
- ❌ Hard drop shadows. Shadows are always soft, warm-tinted, and offset down (not centered)
- ❌ Pure black (`#000`) — always `var(--pt-noir)` (`#262426`)
- ❌ Cool greys for muted text — use `--pt-text-muted` (`#6B6669`, warm)
- ❌ Right-angle photos. Photography always sits in `border-radius: var(--pt-r-lg)` or larger
- ❌ More than two fonts per page
- ❌ Emoji in body copy. Star (★), check (✓), arrow (→) glyphs OK
- ❌ Stretching, rotating or recoloring the logo

## Adding to the system

When a new pattern emerges and is reused 3+ times:
1. Add it to `components.html` with a label.
2. If it introduces new tokens, add them to `tokens.css` under the right section (color / type / radius / shadow).
3. Update `README.md`'s file table.
4. Document any new copy convention in `voice.html`.

Keep new tokens prefixed `--pt-*`. Keep new components self-contained: a single class root + scoped descendant selectors.

## Quick sanity check before shipping

- [ ] tokens.css imported, no inline color hex codes outside it
- [ ] Logo respects clear-space (= height of « p »)
- [ ] One primary rose CTA per view
- [ ] Body copy uses vouvoiement (in French) or precise English
- [ ] No more than one peach metaphor on the page
- [ ] All cards have radius ≥ 18px
- [ ] No pure black, no cool greys
- [ ] Page works at 320px width

---

*Le fruit de vos idées, soigneusement cultivé.*
