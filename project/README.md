# Pech'tacom — Design System

> **Le fruit de vos idées.**
> Studio créatif & com' digitale, basé à Toulouse depuis 2019.

A complete, documented design system extracted from Pech'tacom's *Identité Visuelle Guide*. Built to keep every touchpoint — site, deck, social, print — visually and verbally consistent.

---

## What's in this kit

### 🎨 Foundations
| File | What it covers |
|---|---|
| **`tokens.css`** | All design tokens (colors, fonts, gradient, spacing, radii, shadows, easings). Import this in any new HTML file. |
| [`colors.html`](colors.html) | The full palette (jaune, orange, rose, beige, noir), the signature gradient, rose tint scale, usage rules and pairings. |
| [`typography.html`](typography.html) | Mazzard (titles) + All Round Gothic (body), with Manrope/Nunito as free substitutes. Type scale and specimens. |
| [`logo.html`](logo.html) | All five lockups, clear-space rules, do's and don'ts. |
| [`iconography.html`](iconography.html) | Brand mark, UI icon set (Lucide-style 24px), motifs, photography direction. |
| [`components.html`](components.html) | Buttons, inputs, badges, cards, navigation, stats, callouts. |
| [`voice.html`](voice.html) | Tone, mantras, do/don't copy, peach lexicon, naming patterns, CTA library. |

### 🌐 UI Kit demo (the system in use)
| File | What it covers |
|---|---|
| [`website.html`](website.html) | Full agency landing page — nav, hero, services, process, work showcase, testimonial, CTA, footer. |
| [`404.html`](404.html) | The « cette pêche est tombée de l'arbre » error page. |

### 📦 Assets
- `assets/logo-color.png` · main color lockup
- `assets/logo-mono.png` · black & white version
- `assets/logo-baseline.png` · logo with « Le fruit de vos idées »
- `assets/logo-circle-gradient.png` · gradient pastille
- `assets/logo-circle-red.png` · solid rose pastille
- `assets/favicon.ico`
- `assets/charte-graphique.jpg` · original style guide reference

### 🤖 [`SKILL.md`](SKILL.md)
Instructions for any future designer (human or AI) working in this system.

---

## Brand snapshot

| | |
|---|---|
| **Name** | Pech'tacom *(jeu de mot : « pêche » + « com' »)* |
| **Tagline** | Le fruit de vos idées. |
| **Voice** | Chaleureuse, précise, ludique sans surenchère. Vouvoiement par défaut. |
| **Hero gradient** | `#FFDA00 → #FF5408 → #FF003D` à 135° |
| **Primary action** | Rose `#FF003D` |
| **Title font** | Mazzard *(fallback : Manrope)* |
| **Body font** | All Round Gothic *(fallback : Nunito)* |

---

## Quick start

Add this to any new HTML page in the project to inherit the full system:

```html
<link rel="icon" href="assets/favicon.ico">
<link rel="stylesheet" href="tokens.css">
```

Then use tokens directly:

```css
.cta {
  background: var(--pt-rose);
  color: white;
  font-family: var(--pt-font-body);
  border-radius: var(--pt-radius-full);
  padding: var(--pt-space-md) var(--pt-space-lg);
  box-shadow: var(--pt-shadow-md);
}
```

For canonical examples of any pattern, copy from `components.html`.

---

© 2026 Pech'tacom. Charte graphique cuisinée maison.
