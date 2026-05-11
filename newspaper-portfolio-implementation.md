# Newspaper Portfolio — Implementation Guide
*A complete, copy-paste-ready upgrade brief for antigravity (Next.js)*

---

## Overview

This guide implements the vintage newspaper aesthetic for the Mirza Mukarram portfolio. Apply changes in the priority order listed — each section is self-contained and can be shipped independently.

**Stack assumptions:** Next.js 15, Tailwind CSS, global CSS file (`app/globals.css` or `styles/globals.css`), images in `/public`.

---

## 1. Typography System
**Effort:** ~30 min · Highest ROI change

### Google Fonts — `app/layout.tsx`

```tsx
import { Playfair_Display, IM_Fell_English, Libre_Baskerville } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const imFell = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-label',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${imFell.variable} ${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

### CSS Variables & Typography Rules — `globals.css`

```css
:root {
  --font-display: var(--font-display, 'Playfair Display', Georgia, serif);
  --font-body:    var(--font-body, 'IM Fell English', 'Cormorant Garamond', serif);
  --font-label:   var(--font-label, 'Libre Baskerville', serif);

  /* Newspaper color palette */
  --paper-base:     #e8e0d0;
  --paper-dark:     #c8b89a;
  --ink-primary:    #1a1410;
  --ink-secondary:  #3d3228;
  --ink-muted:      #6b5d4f;
  --rule-color:     rgba(26, 20, 16, 0.25);
}

/* Base body text */
body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.72;
  color: var(--ink-primary);
  hyphens: auto;
  -webkit-hyphens: auto;
  font-feature-settings: "liga" 1, "kern" 1, "onum" 1;
}

/* Headline classes */
.headline-display {
  font-family: var(--font-display);
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 0.95;
}

.headline-section {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

/* Label / dateline text */
.label-text {
  font-family: var(--font-label);
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

/* Body column text — justified with hyphenation */
.body-col {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.72;
  text-align: justify;
  hyphens: auto;
}

/* Old-style numerals & ligatures */
.serif-text {
  font-feature-settings: "onum" 1, "liga" 1, "kern" 1, "dlig" 1;
}

/* Ink bleeding effect — body text only */
.body-col, .serif-text, p {
  text-shadow: 0 0 0.4px rgba(26, 20, 16, 0.3);
}

/* Headlines stay sharp — they use thick ink */
h1, h2, h3, .headline-display, .headline-section {
  text-shadow: none;
}
```

### Drop Caps

```css
/* Newspaper drop cap */
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 4.8em;
  font-weight: 900;
  float: left;
  line-height: 0.78;
  margin: 0.05em 0.08em 0 0;
  color: var(--ink-primary);
  text-shadow: none;
}
```

Usage in JSX:
```tsx
<p className="body-col drop-cap">
  Designed a research-driven automated test repair system...
</p>
```

---

## 2. Paper Texture & Atmosphere
**Effort:** ~45 min

### Layer the texture — `globals.css`

```css
body {
  background-color: var(--paper-base);
  background-image:
    url('/textures/paper.png'),
    radial-gradient(ellipse 120% 80% at 50% -10%, transparent 55%, rgba(60, 40, 10, 0.18) 100%),
    radial-gradient(ellipse at 0% 100%, rgba(80, 50, 15, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 100% 100%, rgba(80, 50, 15, 0.10) 0%, transparent 50%),
    linear-gradient(to bottom, rgba(255, 248, 225, 0.15) 0%, rgba(160, 130, 80, 0.10) 100%);
  background-blend-mode: multiply, normal, normal, normal, normal;
  background-attachment: fixed;
  background-size: cover, cover, cover, cover, cover;
}
```

> **Note:** Move your uploaded paper texture PNG to `/public/textures/paper.png`.

### Page edge aging — add to `globals.css`

```css
/* Aged edge effect using a fixed overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background:
    linear-gradient(to right, rgba(40, 25, 8, 0.08) 0%, transparent 4%, transparent 96%, rgba(40, 25, 8, 0.08) 100%),
    linear-gradient(to bottom, rgba(40, 25, 8, 0.05) 0%, transparent 3%, transparent 97%, rgba(40, 25, 8, 0.10) 100%);
}
```

---

## 3. Photo Treatment
**Effort:** ~30 min

### CSS filter classes — `globals.css`

```css
/* Primary newspaper photo style */
.newspaper-photo {
  filter: grayscale(1) contrast(1.08) brightness(0.97) sepia(0.22);
  position: relative;
  display: block;
}

/* Halftone dot overlay — simulates newsprint printing */
.newspaper-photo-wrap {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.newspaper-photo-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
  background-size: 3px 3px;
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* Figure caption — newspaper style */
figcaption {
  font-family: var(--font-label);
  font-style: italic;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  border-top: 0.5px solid rgba(26, 20, 16, 0.3);
  padding-top: 4px;
  margin-top: 6px;
  color: var(--ink-muted);
  text-align: left;
}
```

### Usage in JSX

```tsx
<figure>
  <div className="newspaper-photo-wrap">
    <img
      src="/images/profile.jpg"
      alt="Mirza Mukarram"
      className="newspaper-photo w-full"
    />
  </div>
  <figcaption>Fig. 1 — Mirza Mukarram, Software Engineer, Islamabad</figcaption>
</figure>
```

---

## 4. Navigation / Masthead Bar
**Effort:** ~20 min

### Replace the nav — component or `globals.css`

```css
/* Masthead nav container */
.nav-masthead {
  border-top: 3px double var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  padding: 8px 0 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(0px); /* intentionally none — newsprint is not glass */
  background-color: var(--paper-base);
  background-image: url('/textures/paper.png');
  background-blend-mode: multiply;
}

/* Nav item */
.nav-item {
  font-family: var(--font-label);
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-secondary);
  text-decoration: none;
  padding: 2px 0;
  transition: none; /* newspapers don't animate */
}

/* Active nav item — inverted block */
.nav-item.active {
  background-color: var(--ink-primary);
  color: var(--paper-base);
  padding: 2px 6px;
}

.nav-item:hover:not(.active) {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Nav separator dots */
.nav-separator {
  color: var(--ink-muted);
  font-size: 0.5rem;
  padding: 0 6px;
  opacity: 0.6;
}
```

### Updated masthead text

Change "PORTFOLIO, 2026" to:

```tsx
<span className="label-text">Vol. V, No. 1 · Est. 2022</span>
```

And nav items should have `·` separators:

```tsx
<nav className="nav-masthead px-6">
  <span className="label-text">Vol. V, No. 1 · Est. 2022</span>

  <div className="flex items-center gap-0">
    {['Experience', 'Projects', 'Skills', 'Certifications'].map((item, i, arr) => (
      <>
        <a key={item} href={`#${item.toLowerCase()}`} className={`nav-item ${active === item ? 'active' : ''}`}>
          {item}
        </a>
        {i < arr.length - 1 && <span className="nav-separator">·</span>}
      </>
    ))}
  </div>

  <span className="label-text">Islamabad</span>
</nav>
```

---

## 5. Section Dividers & Ornaments
**Effort:** ~20 min

### CSS rules — `globals.css`

```css
/* Double-rule section divider */
.rule-double {
  border: none;
  border-top: 3px double var(--rule-color);
  margin: 28px 0 20px;
}

/* Single hairline rule */
.rule-single {
  border: none;
  border-top: 0.5px solid var(--rule-color);
  margin: 16px 0;
}

/* Section header — newspaper style */
.section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rule-color);
  margin-bottom: 20px;
}

.section-header-title {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

/* Ornamental separator */
.ornament {
  text-align: center;
  color: var(--ink-muted);
  font-family: var(--font-display);
  font-size: 1rem;
  opacity: 0.5;
  padding: 8px 0;
  letter-spacing: 0.4em;
}
```

Usage in JSX:

```tsx
<hr className="rule-double" />

<div className="section-header">
  <span className="section-header-title">Professional Experience</span>
</div>

{/* Between sections */}
<div className="ornament">— ✦ —</div>
```

### Remove ALL border-radius from experience cards

```css
/* Critical: newspapers are flat */
.experience-card,
.project-card,
.card {
  border-radius: 0 !important;
  border: 0.5px solid var(--rule-color);
  border-top: 2px solid var(--ink-secondary);
}
```

---

## 6. Six-Column Grid Layout
**Effort:** ~3–4 hrs · Most impactful layout change

### Grid system — `globals.css`

```css
/* 6-column newspaper grid */
.newspaper-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  max-width: 1400px;
  margin: 0 auto;
}

/* Column spans */
.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-5 { grid-column: span 5; }
.col-full { grid-column: 1 / -1; }

/* Column cell padding & rules */
.newspaper-col {
  padding: 0 20px;
  border-right: 0.5px solid rgba(26, 20, 16, 0.15);
}
.newspaper-col:first-child { padding-left: 0; }
.newspaper-col:last-child  { border-right: none; padding-right: 0; }

/* Responsive — stack on mobile */
@media (max-width: 768px) {
  .newspaper-grid {
    grid-template-columns: 1fr;
  }
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-full {
    grid-column: 1 / -1;
  }
  .newspaper-col {
    padding: 0;
    border-right: none;
    border-bottom: 0.5px solid rgba(26, 20, 16, 0.15);
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
}
```

### Education section — recommended layout

```tsx
<section id="education">
  <hr className="rule-double" />
  <div className="section-header">
    <span className="section-header-title">Education</span>
  </div>

  <div className="newspaper-grid">
    {/* Crest — spans 2 columns */}
    <div className="col-2 newspaper-col flex items-center justify-center py-8">
      <img
        src="/images/nuces-logo.png"
        alt="FAST-NUCES"
        className="newspaper-photo w-48 opacity-80"
      />
    </div>

    {/* Details — spans 4 columns */}
    <div className="col-4 newspaper-col py-4">
      <p className="label-text mb-1">2022 — 2026</p>
      <h3 className="headline-section mb-3">
        Bachelor of Science in Software Engineering
      </h3>
      <p className="label-text mb-2">FAST-NUCES, Islamabad</p>
      <p className="body-col">
        Pursuing a rigorous four-year degree at the National University of Computer and
        Emerging Sciences — one of Pakistan's premier institutions for computing and
        engineering education.
      </p>
      <p className="body-col mt-3">
        <strong>Relevant Coursework:</strong> Applied AI, Generative AI, Data Structures,
        Database Systems, Web Engineering, Software Quality Assurance, Cloud Computing, DevOps.
      </p>
    </div>
  </div>
</section>
```

### Experience cards — recommended layout

```tsx
<div className="experience-card border-t-2 border-ink p-0 mb-8">
  {/* Card header — full width */}
  <div className="col-full px-0 pb-2 border-b" style={{ borderColor: 'var(--rule-color)' }}>
    <p className="label-text">Jul 2025 – Sep 2025</p>
    <h3 className="headline-section">Machine Learning Intern — Elevvo Pathways</h3>
  </div>

  {/* Card body — 2-column split */}
  <div className="newspaper-grid mt-4">
    <div className="col-3 newspaper-col">
      <p className="body-col drop-cap">
        Engineered predictive ML models using Scikit-learn and Python to automate
        AI-driven question generation and student scoring pipelines, achieving 92% accuracy...
      </p>
    </div>
    <div className="col-3 newspaper-col">
      <p className="body-col">
        Reduced LLM output error rates by 15% through systematic prompt validation,
        input sanitization, and iterative testing cycles...
      </p>
    </div>
  </div>
</div>
```

---

## 7. Running Footer — "Continued on next page"
**Effort:** ~1 hr

### Component — `components/NewspaperFooter.tsx`

```tsx
'use client'
import { useEffect, useState } from 'react'

const sections = ['Experience', 'Projects', 'Skills', 'Certifications']

export default function NewspaperFooter() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const observers = sections.map((s, i) => {
      const el = document.getElementById(s.toLowerCase())
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(i + 1) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: '1px solid rgba(26,20,16,0.25)',
        backgroundColor: 'var(--paper-base)',
        backgroundImage: "url('/textures/paper.png')",
        backgroundBlendMode: 'multiply',
        padding: '5px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
      }}
    >
      <span className="label-text">Mirza Mukarram · Portfolio 2026</span>
      <span className="label-text">Page {activeSection} of {sections.length}</span>
      <span className="label-text">Islamabad, Pakistan</span>
    </footer>
  )
}
```

Add to `app/layout.tsx`:
```tsx
import NewspaperFooter from '@/components/NewspaperFooter'

// Inside <body>:
<NewspaperFooter />
```

---

## 8. Quick Wins — Copy-Paste These Now

These can each be shipped in under 5 minutes:

### A. Old-style numerals & ligatures

```css
/* Add to any element with serif text */
.serif-nums {
  font-feature-settings: "onum" 1, "liga" 1, "dlig" 1;
}
```

### B. Pull-quote component

```tsx
<blockquote
  style={{
    borderLeft: '3px solid var(--ink-primary)',
    paddingLeft: '16px',
    margin: '20px 0',
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontSize: '1.2rem',
    lineHeight: 1.5,
    color: 'var(--ink-primary)',
  }}
>
  "Passionate about digital innovation and applying AI-first thinking to real-world challenges."
</blockquote>
```

### C. Masthead Vol. line update

Change:
```tsx
<span>PORTFOLIO, 2026</span>
```
To:
```tsx
<span className="label-text">Vol. V, No. 1 · Est. 2022 · Islamabad</span>
```

### D. Section label refinement

Change experience section header from bold sans to:
```tsx
<h2
  style={{
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontSize: '0.78rem',
  }}
>
  Professional Experience
</h2>
```

### E. Card border-radius removal

In your Tailwind config or global CSS:
```css
/* If using Tailwind, add to your component */
.experience-card { @apply rounded-none border-t-2 border-neutral-800; }

/* Or in globals.css */
[class*="card"], [class*="Card"] {
  border-radius: 0 !important;
}
```

### F. Nav separator dots

Between nav items, insert:
```tsx
<span style={{ color: 'var(--ink-muted)', fontSize: '0.5rem', padding: '0 8px', opacity: 0.5 }}>·</span>
```

---

## 9. Print Stylesheet — The Ultimate Flex
**Effort:** ~1 hr

```css
@media print {
  @page {
    size: A2 landscape;
    margin: 12mm;
  }

  body::before { display: none; } /* remove fixed overlay */

  .nav-masthead { position: static; }
  footer { display: none; }

  .newspaper-grid {
    grid-template-columns: repeat(6, 1fr);
  }

  body {
    background-image: none;
    background-color: white;
    color: black;
    font-size: 9pt;
    line-height: 1.5;
  }

  h1 { font-size: 48pt; }
  h2 { font-size: 18pt; }
  h3 { font-size: 12pt; }

  .newspaper-photo {
    filter: grayscale(1) contrast(1.1);
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  /* Page break rules */
  section { break-inside: avoid-page; }
  .experience-card { break-inside: avoid; }
}
```

---

## Implementation Checklist

```
□  Step 1: Add Google Fonts to app/layout.tsx (Playfair Display, IM Fell English, Libre Baskerville)
□  Step 2: Add CSS variables and typography rules to globals.css
□  Step 3: Move paper texture to /public/textures/paper.png
□  Step 4: Add layered background CSS to globals.css
□  Step 5: Wrap all photos in .newspaper-photo-wrap, add figcaption
□  Step 6: Update nav with triple-rule border + active block style
□  Step 7: Replace section dividers with .rule-double
□  Step 8: Remove all border-radius from cards (rounded-none)
□  Step 9: Add .ornament separators between major sections
□  Step 10: Apply 6-column grid to Education and Experience sections
□  Step 11: Add NewspaperFooter component
□  Step 12: Add @media print stylesheet
```

---

## Font Import Reference — `app/layout.tsx` head link fallback

If not using `next/font`, add to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
```

---

*Document prepared May 2026 · Islamabad · Vol. V, No. 1*
