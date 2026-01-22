# Design System Master File - Millaz Towing

> **LOGIC:** This is the single source of truth for the Millaz Towing UI/UX Overhaul. Strictly follow these tokens to ensure an upmarket, professional "Glassmorphism" aesthetic.

---

**Project:** Millaz Towing
**Aesthetic:** Glassmorphism + Pro-Service Hub
**Category:** Luxury Professional Services

---

## Global Rules

### Color Palette (Teal & Obsidian)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#00C9C8` | `--color-primary` (Teal) |
| Secondary | `#0A0A0A` | `--color-secondary` (Obsidian) |
| CTA/Accent | `#00E5E4` | `--color-cta` (Bright Teal) |
| Background | `#050505` | `--color-background` (Deep Black) |
| Text | `#F8FAFC` | `--color-text` (Off-white) |
| Glass Base | `rgba(255, 255, 255, 0.05)` | `--glass-bg` |

**Color Notes:** Use high-contrast teal accents against deep obsidian backgrounds. Glass elements should use backdrop-filter for depth.

### Typography (Geometric Modern)

- **Heading Font:** Outfit
- **Body Font:** Work Sans
- **Mood:** Geometric, modern, clean, balanced, contemporary, versatile
- **Google Fonts:** [Outfit + Work Sans](https://fonts.google.com/share?selection.family=Outfit:wght@300;400;500;600;700|Work+Sans:wght@300;400;500;600;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap');
```

---

## Glassmorphism Specs

### Core Card
```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
}
```

### Hover State
```css
.glass-panel:hover {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 201, 200, 0.3); /* Teal Glow */
  transform: translateY(-5px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Layout Pattern

**Pattern Name:** Infinite Scroll Narrative
- **Primary CTA:** Emergency Dispatch (Sticky/Floated)
- **Section Order:** 
  1. Hero (Massive Impact)
  2. Immediate Help (Quick Form)
  3. Services Grid (Interactive)
  4. Authority (Blog/Trust)
  5. Social Proof (Gallery)
  6. Direct Contact (Footer)

---

## Anti-Patterns (Do NOT Use)

- ❌ **Solid White Backgrounds** — Ruins the premium dark mode feel.
- ❌ **Standard Box Shadows** — Use translucent border glows or deep depth shadows.
- ❌ **Default Transitions** — Use `cubic-bezier` for that "upmarket" feel.
- ❌ **Low Contrast Text on Glass** — Ensure teal or white text maintains 4.5:1 ratio.
- ❌ **Abrupt Scrolling** — Sections must merge using opacity/scale transitions.

---

## Pre-Delivery Checklist

- [ ] Backdrop blur is performant (limit layers).
- [ ] Emergency button is always accessible.
- [ ] ScrollTrigger animations are smooth and not dizzying.
- [ ] Mobile navigation is clean and glass-based.
