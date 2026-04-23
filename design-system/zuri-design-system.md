# Zuri Design System
### Version 1.0 · Human Interface Guidelines

> Zuri is a luxury South Africa travel brand. Every visual decision should make someone feel the pull of a destination — calm confidence that they're in expert hands, and the quiet excitement of an adventure they can already picture.

---

## Brand Brief

| Attribute | Value |
|---|---|
| Brand | Zuri Travel |
| Personality | Luxury · Adventurous · Trustworthy |
| Primary emotion | Aspirational calm — the feeling right before a great trip |
| Target audience | Affluent travelers 25–45, predominantly West African diaspora and global urban professionals |
| Core promise | We handle everything so you arrive, and all you do is experience |

---

# PART 1 — FOUNDATIONS

---

## 1.1 Color System

### Design principles for color
- **Economy of color.** The primary teal does one job. The brass accent does one job. Don't make every component colorful.
- **Dark sections are not "dark mode."** The hero, gallery, contact, and footer are always dark — that's brand, not theme. Dark mode flips the light sections.
- **Never use gradients as decoration.** A gradient on a card background is noise. If you need depth, use borders and shadows.

---

### Primary Palette

| Token | Name | Hex | RGB | HSL | WCAG on White | Role |
|---|---|---|---|---|---|---|
| `color.primary.default` | Ocean Teal | `#0B7A6E` | 11, 122, 110 | 174° 83% 26% | **4.72:1** AA ✓ | CTAs, links, active states |
| `color.primary.hover` | Deep Teal | `#096158` | 9, 97, 88 | 174° 83% 21% | **6.1:1** AA ✓ | Hover/pressed primary |
| `color.primary.muted` | Teal Tint | `#E6F4F2` | 230, 244, 242 | 174° 47% 93% | — | Badge backgrounds, tinted surfaces |
| `color.secondary.default` | Ocean Blue | `#1B5FA8` | 27, 95, 168 | 211° 72% 38% | **5.18:1** AA ✓ | Secondary actions, info |
| `color.accent.default` | Warm Brass | `#C49A3C` | 196, 154, 60 | 41° 53% 50% | 2.84:1 ✗* | Stars, premium badges, prices |
| `color.neutral.950` | Espresso | `#0C1B1A` | 12, 27, 26 | 177° 38% 8% | — | Dark section backgrounds |

*Brass fails WCAG on white for small text. Use it only at ≥24px OR on dark backgrounds where contrast exceeds 7:1.

---

### Neutral Scale

```
50  · #F7FAFA  — Page background (light)
100 · #EFF6F5  — Hover surface
200 · #D8E8E7  — Default borders, dividers
300 · #B0CFCD  — Strong borders, emphasized dividers
400 · #7AADAA  — Placeholder text, faint icons
500 · #4D8B88  — Muted icons
600 · #3A6B68  — Muted text (dark mode)
700 · #2D5250  — Secondary text (dark mode)
800 · #1E3534  — Raised surface (dark mode)
900 · #131F1F  — Deep surface (dark mode)
950 · #0C1B1A  — Page background (dark mode)
```

---

### Semantic Colors

| Role | Light | Dark | Usage |
|---|---|---|---|
| Success | `#16A34A` | `#4ADE80` | Booking confirmed, trip saved |
| Warning | `#D97706` | `#FCD34D` | "Only 3 spots left", limited time |
| Error | `#DC2626` | `#F87171` | Form errors, failed actions |
| Info | `#0369A1` | `#38BDF8` | Informational callouts |

---

### Dark Mode Equivalents

Dark mode flips light sections only. Dark-branded sections (hero, gallery, contact, footer) are unchanged in both modes.

| Light token | Dark equivalent | Note |
|---|---|---|
| `color.primary.default` `#0B7A6E` | `#12A192` | Brightened for 4.5:1 contrast on dark bg |
| `color.surface.bg` `#F7FAFA` | `#0C1B1A` | |
| `color.surface.base` `#FFFFFF` | `#142322` | |
| `color.surface.raised` `#EFF6F5` | `#1C2F2E` | |
| `color.border.default` `#D8E8E7` | `#243B39` | |
| `color.border.strong` `#B0CFCD` | `#3A5856` | |
| `color.text.primary` `#1A2B2B` | `#E4F0EF` | |
| `color.text.secondary` `#4D6968` | `#7AADAA` | |
| `color.text.tertiary` `#7AADAA` | `#3D6360` | |

**Contrast ratios (dark mode):**
- Primary `#12A192` on bg `#0C1B1A`: 4.68:1 AA ✓
- Text primary `#E4F0EF` on bg `#0C1B1A`: 14.2:1 AAA ✓
- Text secondary `#7AADAA` on bg `#0C1B1A`: 5.1:1 AA ✓

---

### Color Usage Rules

| Color | Use for | Never use for |
|---|---|---|
| Teal (primary) | Primary buttons, active nav links, focus rings, badges | Decorative backgrounds, every heading |
| Ocean Blue (secondary) | Secondary CTAs, info badges, link variants | Competing with teal in the same element |
| Brass (accent) | Star ratings, "Premium" badges, price highlights | Body text, disabled states, borders |
| Espresso | Dark sections (hero, footer, gallery), dark mode bg | Light section backgrounds |
| Semantic green | Confirmed bookings, success toasts | General purpose green decoration |
| Semantic amber | Urgency: spots remaining, limited-time offers | General text color |

---

## 1.2 Typography

### Typefaces

| Family | Role | Why |
|---|---|---|
| **Playfair Display** | All headings (Display, Title sizes) | Elegant serif. Carries emotion and destination energy. Anchors luxury without being stiff. |
| **DM Sans** | Everything else — body, labels, UI, nav, buttons | Geometric, neutral, highly legible. Balances Playfair's expressiveness with functional clarity. |

**Import (index.css):**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
```

---

### Type Scale

#### Desktop

| Role | Size | Line Height | Letter Spacing | Weight | Font |
|---|---|---|---|---|---|
| Display XL | 88px | 1.05 | −2px | 700 | Playfair |
| Display LG | 64px | 1.08 | −1.5px | 700 | Playfair |
| Display MD | 48px | 1.10 | −1px | 700 | Playfair |
| Title LG | 36px | 1.15 | −0.5px | 600 | Playfair |
| Title MD | 28px | 1.20 | −0.25px | 600 | Playfair |
| Title SM | 22px | 1.25 | 0 | 600 | Playfair |
| Body LG | 18px | 1.70 | 0 | 400 | DM Sans |
| Body | 16px | 1.65 | 0 | 400 | DM Sans |
| Body SM | 14px | 1.60 | 0.1px | 400 | DM Sans |
| Callout | 15px | 1.50 | 0 | 500 | DM Sans |
| Subheadline | 13px | 1.40 | 0.1px | 500 | DM Sans |
| Footnote | 12px | 1.40 | 0.1px | 400 | DM Sans |
| Caption | 11px | 1.30 | 0.2px | 400 | DM Sans |
| Label | 11px | 1.00 | 1.5px | 600 | DM Sans (UPPERCASE always) |

#### Mobile Adjustments (375px breakpoint)

| Role | Mobile Size |
|---|---|
| Display XL | 48px |
| Display LG | 36px |
| Display MD | 30px |
| Title LG | 26px |
| Title MD | 22px |
| Body LG | 17px |

---

### Typography Rules

1. **Playfair is for headings only.** Never use it for body copy, labels, buttons, inputs, or navigation.
2. **Italic Playfair is an accent tool.** One italic word per heading, maximum. Use it to carry the emotional beat of a headline. Example: "Your Adventure *Starts Here*"
3. **Line length: 65ch maximum for body text.** Wider paragraphs break readability. Constrain with `max-w-[65ch]`.
4. **Tight heads, generous body.** Headings use 1.05–1.15 line height. Body uses 1.65–1.70. Never reverse this.
5. **Label style is non-negotiable.** `font-size: 11px · font-weight: 600 · letter-spacing: 1.5px · text-transform: uppercase`. Always paired with a section eyebrow marker: `✦  Section Name`.
6. **Minimum legible sizes.** Body text: 14px minimum. Labels and captions: 11px minimum, never smaller.

---

## 1.3 Layout Grid

### Desktop (1440px container, 1280px content)

```
|← 80px →|col|24px|col|24px|col|24px|col|24px|col|24px|col|24px|col|24px|col|24px|col|24px|col|24px|col|24px|col|← 80px →|
          12 columns · 24px gutter · 80px fluid margin
```

### Tablet (768px)
```
8 columns · 16px gutter · 32px margin
```

### Mobile (375px)
```
4 columns · 12px gutter · 20px margin
```

### Container classes (Tailwind)
```
max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-16
```

---

## 1.4 Spacing System

**Base unit: 8px**

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `space.0.5` | 4px | `p-1 / gap-1` | Micro: icon-label gap |
| `space.1` | 8px | `p-2 / gap-2` | Small: button padding-y, icon margin |
| `space.1.5` | 12px | `p-3 / gap-3` | Between related inline elements |
| `space.2` | 16px | `p-4 / gap-4` | Default: padding, gap between items |
| `space.3` | 24px | `p-6 / gap-6` | Between element groups |
| `space.4` | 32px | `p-8 / gap-8` | Card internal padding, section inner |
| `space.6` | 48px | `p-12` | Between sub-sections |
| `space.8` | 64px | `p-16` | Section padding (mobile) |
| `space.12` | 96px | `p-24` | Section vertical rhythm (desktop) |
| `space.16` | 128px | `p-32` | Hero vertical padding |

**Section rhythm rule:** All sections use `py-20 md:py-28`. Do not vary this without reason.

---

# PART 2 — COMPONENTS

---

## Component Design Principles

1. **Every state is designed.** Default, hover, active, focus, disabled, loading, error — all states must be explicitly handled.
2. **No surprise behavior.** Components do exactly what their visual state implies.
3. **Accessibility first.** WCAG 2.1 AA minimum. Focus rings are always visible. ARIA labels on all interactive elements without visible text.

---

## 2.1 Buttons

### Anatomy
```
[  Icon? ·  Label  ·  Icon?  ]
     ↑           ↑        ↑
  leading     content   trailing
  (optional)            (optional)
```

### Variants

#### Primary Button
```
Background:  color.primary.default (#0B7A6E)
Text:        color.text.on-color (#FFFFFF)
Border:      none
Radius:      rounded-lg (8px)
Padding:     px-5 py-2.5 (default) · px-7 py-3.5 (large) · px-4 py-2 (small)
Font:        15px / 500 / DM Sans
Transition:  background-color 150ms ease-out

States:
  hover   → bg #096158 · shadow-colored
  active  → bg #074D47 · scale(0.98)
  focus   → ring-2 ring-primary ring-offset-2
  disabled → bg neutral-200 · text neutral-400 · cursor-not-allowed · opacity-60
  loading  → spinner replaces leading icon · text dims to 60%
```

**Usage:** Primary action only. One per view. "Book a Trip", "Join This Trip", "Send Message".

**Never use for:** Secondary actions, links to external pages, destructive actions.

---

#### Secondary Button
```
Background:  transparent
Text:        color.text.primary
Border:      1px solid color.border.default
Radius:      rounded-lg (8px)
Padding:     same as primary

States:
  hover   → bg color.surface.raised · border color.border.strong
  active  → bg color.surface.raised (darker) · scale(0.98)
  focus   → ring-2 ring-primary ring-offset-2
  disabled → border neutral-200 · text neutral-400 · opacity-60
```

**Usage:** Secondary actions that accompany a primary. "View Details", "Save Trip", "Learn More".

---

#### Ghost Button
```
Background:  transparent
Text:        color.primary.default
Border:      none
Padding:     same as primary

States:
  hover   → bg color.primary.muted
  active  → bg color.primary.muted (slightly darker)
  focus   → ring-2 ring-primary ring-offset-2
```

**Usage:** In-context actions that don't compete with primary. Nav links in dark mode, tertiary actions.

---

#### Danger Button
```
Background:  #DC2626 (color.semantic.error)
Text:        white
Usage:       Destructive-only. "Cancel Booking", "Delete". Always paired with confirmation modal.
```

---

#### Icon Button
```
Shape:       rounded-lg (default) or rounded-full (circular)
Size:        36px × 36px (default) · 32px (small) · 44px (large, touch targets)
Padding:     p-2
Must have:   aria-label="[action]"
Focus ring:  Always visible
```

---

#### Pill CTA (Hero/Marketing)
```
Radius:      rounded-full (9999px)
Padding:     px-7 py-3.5 (large) · px-6 py-3 (default)
Usage:       Hero CTAs, section-level calls to action only.
```

---

### Button Size Matrix

| Size | Font | Padding X | Padding Y | Min Height |
|---|---|---|---|---|
| Small | 13px | 14px | 7px | 32px |
| Default | 15px | 20px | 10px | 40px |
| Large | 16px | 28px | 14px | 52px |

---

### Button Do's and Don'ts

| Do | Don't |
|---|---|
| One primary CTA per section | Multiple primary buttons competing |
| Clear action verbs: "Book", "Join", "Explore" | Vague labels: "Click Here", "Go", "Submit" |
| Icon + label for ambiguous actions | Icon-only buttons without `aria-label` |
| Disabled state for unavailable actions | Hiding unavailable buttons entirely |

---

## 2.2 Text Fields

### Anatomy
```
Label (required/optional marker)
↓
[ Icon? │ Placeholder/Value        │ Clear? ]  ← Input
         ↑
      border: color.border.default → focus: color.primary
↓
Helper text / Error message
```

### States

| State | Border | Background | Shadow |
|---|---|---|---|
| Default | `color.border.default` | `color.surface.base` | none |
| Hover | `color.border.strong` | `color.surface.base` | none |
| Focus | `color.primary` (2px) | `color.surface.base` | `shadow-colored` subtle |
| Filled | `color.border.strong` | `color.surface.base` | none |
| Error | `#DC2626` | `#FEE2E2` tint | none |
| Disabled | `color.border.default` (0.5 opacity) | `color.surface.raised` | none |

### Specifications
```
Height:       44px (default) · 52px (large)
Radius:       rounded-lg (8px)
Padding:      px-4 py-3
Font:         16px / 400 / DM Sans (prevents zoom on iOS)
Label:        13px / 500 / 0.1px tracking — above input, gap-1.5
Helper text:  12px / 400 / neutral-500 — below input, gap-1
Error text:   12px / 500 / semantic-error — below input, gap-1, with error icon
```

### Accessibility
- All inputs have an associated `<label>` (not placeholder as label)
- Required fields: mark with `aria-required="true"` and visible asterisk
- Error fields: `aria-invalid="true"` + `aria-describedby` pointing to error element
- Focus ring: never removed, always 2px primary ring

---

## 2.3 Cards

### Base Card
```
Background:  color.surface.base
Border:      1px solid color.border.default
Radius:      rounded-2xl (16px)
Padding:     p-6 (24px)
Shadow:      shadow-sm (resting) → shadow-md (hover)

Hover:
  transform: translateY(-2px)
  border: color.border.strong
  shadow: shadow-md
  transition: all 200ms ease-out
```

### Trip Card (Primary data display for Zuri)

```
Structure:
┌─────────────────────────────┐
│  [Visual block — solid bg]  │  h-52, contains: badge, destination name, dates
│  [Badge top-left]           │
│  [Name + dates bottom-left] │
├─────────────────────────────┤
│  Meta row (duration · spots)│  13px / neutral-500
│  Highlight list (4 bullets) │  14px / text-secondary
│  ─────────────────────────  │
│  Price · · · · · · [CTA]    │  Price: 24px Playfair bold · CTA: secondary btn
└─────────────────────────────┘

Visual block colors (solid, not gradient):
  Cape Town:    #0B3D35 (deep teal)
  Durban:       #0D2A4A (deep navy)
  Garden Route: #1A3D0A (deep forest)
  Johannesburg: #2A1005 (deep mahogany)
  Stellenbosch: #2A0810 (deep wine)
```

### Experience Card
```
Structure:
┌─────────────────────────────┐
│  [Icon block — solid color] │  h-14 w-14, rounded-xl, solid bg
│  Category badge (top-right) │
├─────────────────────────────┤
│  Title (Title SM)           │
│  Body (Body SM, 3 lines max)│
└─────────────────────────────┘

Icon block backgrounds (solid, not gradient):
  Aquarium:   bg-[#0A2A4A] · icon: 🐠
  Nightlife:  bg-[#12082A] · icon: 🌙
  Hotels:     bg-[#2A1005] · icon: 🏨
  Safari:     bg-[#3D1F08] · icon: 🦁
  Wine:       bg-[#2A0810] · icon: 🍷
  Coastal:    bg-[#08304A] · icon: 🏖️
```

### Testimonial Card
```
Structure:
┌─────────────────────────────┐
│  "   (decorative 72px)      │  Playfair, color.primary.muted, opacity-60
│  ★★★★★                      │  color.accent, 14px
│  "Quote text — 3 lines max" │  Body SM, italic, text-secondary
│  ─────────────────────────  │
│  [Avatar] Name · Trip       │  Avatar: 40px circle, initials, bg primary-muted
└─────────────────────────────┘
```

---

## 2.4 Navigation — Navbar

### Structure
```
[ZURI]          [Experiences · Trips · Gallery · Contact]    [☀/🌙] [Book a Trip]
 ↑ Logo                ↑ Nav links                            ↑ Theme  ↑ Primary CTA
 Playfair 28px/bold    DM Sans 11px/600/uppercase             toggle   Pill button
 color.primary          color.text.secondary
```

### Behavior
- **Resting:** `bg-surface/90 backdrop-blur-md border-b border-border` — visible from pixel 0. Not transparent.
- **Scrolled:** `bg-surface/95 backdrop-blur-lg shadow-sm` — very subtle shadow appears.
- **Why not transparent:** Transparent navbars break on light sections mid-page. Zuri has both dark and light sections.
- **Height:** 64px (desktop) · 56px (mobile)
- **Sticky:** `position: fixed; top: 0; z-index: 200`

### Mobile Drawer
```
Trigger: hamburger icon button (aria-label="Open navigation")
Animation: max-height 0 → auto, 300ms ease-out
Content: full-width links, stacked, border-b between each
CTA: full-width pill button at bottom of drawer
Close: overlay tap, same icon press, or link tap
```

### Dark Mode Navbar
```
bg: color.surface.base-dark / 90 backdrop-blur
border-b: color.border.default-dark
text: color.text.primary-dark
```

---

## 2.5 Alerts

### Variants

| Variant | Icon | Background | Text | Border-left |
|---|---|---|---|---|
| Info | ℹ | `#E0F2FE` | `#0369A1` | 3px `#0369A1` |
| Success | ✓ | `#DCFCE7` | `#16A34A` | 3px `#16A34A` |
| Warning | ⚠ | `#FEF3C7` | `#D97706` | 3px `#D97706` |
| Error | ✕ | `#FEE2E2` | `#DC2626` | 3px `#DC2626` |

### Structure
```
┌─[border-left 3px]──────────────────────────[✕ dismiss]─┐
│  [Icon 16px]  Title (14px / 600)                        │
│               Description (14px / 400 / text-secondary) │
│               [Action link — optional]                   │
└─────────────────────────────────────────────────────────┘
Radius: rounded-lg (8px)
Padding: p-4
```

---

## 2.6 Toast / Notification

```
Position:  bottom-right, 16px from edge
Width:     360px (desktop) · full width minus 20px margin (mobile)
Radius:    rounded-xl (12px)
Shadow:    shadow-lg
Padding:   p-4
Duration:  Auto-dismiss 4 seconds (success), 6 seconds (error), persistent (action required)
Animation: slide up + fade in (300ms out easing), fade out (200ms in easing)

Structure:
[Icon 20px] [Title / Message]           [✕]
            [Action button — optional]
```

---

## 2.7 Modal / Dialog

```
Overlay:  bg-black/50 backdrop-blur-sm · z-index: 400
Panel:    bg-surface · rounded-2xl · shadow-xl · max-w-lg w-full · mx-4
Header:   Title (Title SM) + close button (Icon Button)
Body:     p-6 · max-h-[70vh] overflow-y-auto
Footer:   border-t border-border · p-4 · flex justify-end gap-3

Animation:
  Enter: scale 0.95 → 1 + opacity 0 → 1, 200ms ease-out
  Exit:  scale 1 → 0.95 + opacity 1 → 0, 150ms ease-in

Accessibility:
  role="dialog" aria-modal="true" aria-labelledby="modal-title"
  Focus trap within modal
  ESC key closes
  Return focus to trigger on close
```

---

## 2.8 Progress Indicators

### Progress Bar
```
Track:    h-2 · rounded-full · bg-neutral-200 (bg-neutral-800 dark)
Fill:     h-full · rounded-full · bg-primary · transition-width 400ms ease-out
Label:    caption above right: "67%" in text-secondary
```

### Spinner
```
Size:       20px (inline) · 32px (section) · 48px (page)
Color:      border-primary (3/4 arc) + border-transparent (1/4)
Animation:  spin 600ms linear infinite
```

### Skeleton Screen
```
Background:   neutral-200 (neutral-800 dark)
Animation:    shimmer — linear-gradient sliding left to right, 1.5s infinite
Radius:       match the element being loaded
Rule:         Skeleton shape must match real content shape. No generic gray boxes.
```

---

## 2.9 Badges and Tags

```
Base:       inline-flex items-center rounded-md px-2.5 py-1
Font:       11px / 600 / DM Sans / uppercase / letter-spacing 0.5px

Variants:
  Primary:  bg-primary-muted · text-primary
  Accent:   bg-accent-muted · text-[#7A5A0A] (dark: text-accent)
  Success:  bg-[#DCFCE7] · text-[#16A34A]
  Warning:  bg-[#FEF3C7] · text-[#92400E]
  Error:    bg-[#FEE2E2] · text-[#DC2626]
  Neutral:  bg-neutral-100 · text-neutral-600

Usage:
  "Most Popular" → Primary
  "Premium"      → Accent  
  "Only 3 left"  → Warning
  "Sold Out"     → Error
  "New"          → Secondary (bg-secondary-muted)
```

---

## 2.10 Toggle / Switch

```
Track:    w-11 h-6 · rounded-full · bg-neutral-300 (off) → bg-primary (on)
Thumb:    w-5 h-5 · rounded-full · bg-white · shadow-sm
          translateX(2px) (off) → translateX(22px) (on)
Animation: 150ms ease-in-out (spring feel)
Focus:    ring-2 ring-primary ring-offset-2

Accessibility:
  role="switch"
  aria-checked="true|false"
  Keyboard: Space to toggle
```

---

## 2.11 Checkbox

```
Size:     18px × 18px
Radius:   rounded (4px)
Unchecked: border-2 border-neutral-300 · bg-transparent
Checked:   bg-primary · border-primary · checkmark (white SVG 10px)
Focus:    ring-2 ring-primary ring-offset-2
Indeterminate: bg-primary · minus icon

Label alignment: items-start (for multi-line) · gap-3
```

---

## 2.12 Dropdown / Select

```
Trigger:  same as Text Field (height 44px, radius 8px)
          trailing: chevron-down 16px, rotates 180° when open
Panel:    bg-surface · border border-border · rounded-lg · shadow-md
          min-w-[trigger width] · max-h-[280px] · overflow-y-auto
          z-index: 100

Option:   px-4 py-2.5 · text 15px · cursor-pointer
  Hover:  bg-surface-raised
  Active: bg-primary-muted · text-primary
  Selected: bg-primary-muted · text-primary · checkmark right

Animation: opacity 0 → 1 + translateY(-4px) → 0, 150ms ease-out
```

---

## 2.13 Avatar

```
Sizes:
  xs:  24px — tight lists
  sm:  32px — nav, compact rows
  md:  40px — cards, comments (default)
  lg:  56px — profile headers
  xl:  80px — page-level profile

Shape: rounded-full always

States:
  Image: object-cover, object-center
  Initials: bg-primary-muted · text-primary · font 500 · auto-sized (40% of avatar height)
  Placeholder: bg-neutral-200 · neutral person icon

Group (overlapping avatars):
  Each avatar: ring-2 ring-surface · -ml-2 (except first)
  Max show: 4, then "+N" counter avatar
```

---

## 2.14 Gallery Item

```
Aspect ratios available: 16/9 (landscape) · 1/1 (square) · 4/5 (portrait)
Overflow: hidden · radius: rounded-2xl

Overlay: absolute inset-0
  Default: 0% opacity
  Hover:   bg-black/40, 300ms ease-out
  Always visible: subtle gradient from transparent → black/60 at bottom (for labels)

Label (always visible):
  Position: absolute bottom-4 left-4
  Font: 12px / 600 / text-parchment/70

Label (hover reveal):
  Position: absolute bottom-4 left-4
  Translates from +4px → 0, opacity 0 → 1
  Font: 14px bold / subtext 12px / text-parchment

Play button (video items):
  Centered, 56px × 56px
  border-2 border-white/50 · bg-white/15 · backdrop-blur-sm
  Icon: filled play triangle 22px, white
  Hover: border-white/90 · bg-white/25 · scale(1.08), 200ms
```

---

## 2.15 Stat / Metric

```
Structure:
  Value: Display MD / Playfair / color-primary (or text-primary)
  Label: Label style / text-tertiary

Layout options:
  Vertical (default): value on top, label below, centered
  Horizontal: value left, label right, items-baseline

In dark strip:
  Value: color.accent (brass)
  Label: text-parchment/40

Dividers between stats:
  1px solid color.border.default (light) or color.border.default-dark (dark)
```

---

## 2.16 Slider / Range

```
Track:  h-1.5 · rounded-full · bg-neutral-200 (unfilled) + bg-primary (filled)
Thumb:  20px × 20px · rounded-full · bg-white · ring-2 ring-primary · shadow-md
Focus:  thumb grows to 24px, ring strengthens
```

---

## 2.17 Breadcrumbs

```
Font:     13px / 400 / text-tertiary
Separator: / or › in text-tertiary · mx-2
Current:  font-500 · text-primary · not a link
Hover:    text-secondary

Accessibility:
  nav aria-label="Breadcrumb"
  ol > li structure
  aria-current="page" on last item
```

---

## 2.18 Pagination

```
Container: flex items-center gap-1
Item:      36px × 36px · rounded-lg · text-sm · text-secondary
  Hover:   bg-surface-raised · text-primary
  Active:  bg-primary · text-white
  Ellipsis:text-tertiary, not interactive

Prev/Next: chevron icon buttons (Icon Button spec)
```

---

## 2.19 Table

```
Container: overflow-hidden · rounded-xl · border border-border

Header row:
  bg-surface-raised · border-b border-border
  Cell: px-4 py-3 · text-left · Label style · text-tertiary

Body row:
  bg-surface · border-b border-border (last-child: no border)
  Hover: bg-surface-raised (desktop only, no hover on touch)
  Cell: px-4 py-4 · body-sm

Alignment:
  Text data: left
  Numeric data: right (font-mono)
  Status badges: left
```

---

## 2.20 Empty State

```
Structure (centered):
  Illustration or icon (48px, text-tertiary)
  Title (Title SM, text-primary)
  Description (Body SM, text-secondary, max-w-[40ch], centered)
  CTA button (Primary or Ghost)

Gap between elements: gap-3 (icon→title) · gap-2 (title→desc) · gap-6 (desc→CTA)
Container: py-16 px-6, centered

Examples:
  No trips booked: "Your Next Adventure Awaits" + "Explore Upcoming Trips" CTA
  Gallery loading failed: "Photos unavailable" + "Refresh" ghost button
  Form submitted: "We Got Your Message" + confirmation icon
```

---

# PART 3 — PATTERNS

---

## 3.1 Page Templates

### Landing Page (Zuri Home)

```
Navbar (fixed, 64px)
├── Hero Section (100vh)
│     Dark section. Headline + body + 2 CTAs. No full-bleed image (placeholder phase).
│     Dot-grid texture: radial-gradient(circle, var(--border) 1px, transparent 1px) / 60px 60px
├── Stats Strip (auto height)
│     Dark. 4 stats in a row. bg-espresso.
├── Experiences Section (py-20 md:py-28)
│     Light. 6 cards, 3-col grid. Card spec from 2.3.
├── Upcoming Trips (py-20 md:py-28)
│     Light (slightly warm bg). 3 trip cards, 3-col grid.
├── Gallery (py-20 md:py-28)
│     Dark section always. CSS Grid masonry. 6 items.
├── Testimonials (py-20 md:py-28)
│     Light. 3 cards, 3-col grid.
├── Contact (py-20 md:py-28)
│     Dark section. 4 social cards + WhatsApp CTA.
└── Footer (auto height)
      Darkest section. 4-col grid.
```

**Section alternation rule:**
Dark → Dark → Light → Light → Dark → Light → Dark → Dark

Alternating dark/light creates visual rhythm and prevents monotony.

---

## 3.2 User Flows

### Booking Inquiry Flow
```
1. Land on page → Hero CTA "Explore Trips"
2. Scroll to Trips → Click "Join Trip"
3. Anchor scroll to Contact → WhatsApp or social DM
4. (Future) Modal with inquiry form → Success empty state
```

### Mobile Navigation Flow
```
1. Hamburger tap → drawer slides down
2. Link tap → drawer closes + smooth scroll
3. Section in view → (future) active nav state
```

---

## 3.3 Feedback Patterns

### Booking confirmed
```
Toast: Success variant · "Trip reserved! We'll contact you within 24h." · 5s
(Future modal): Success empty state with confirmation number
```

### Form error
```
Field-level: Error text below each invalid field
Form-level: Error alert above form ("Please fix the errors below")
Focus management: Move focus to first error field
```

### Limited availability (≤3 spots)
```
Badge: Warning variant · "Only 3 spots left"
Color: semantic-warning bg on badge
Do NOT: Use red/error for urgency that isn't a failure state
```

---

# PART 4 — TOKENS FOR DEVELOPER HANDOFF

See `tokens.json` in this directory for the complete token set.

### CSS custom properties (from tokens)

```css
/* index.css — paste these into @layer base or directly after @import */

:root,
[data-theme="light"] {
  /* Primary */
  --color-primary:         #0B7A6E;
  --color-primary-hover:   #096158;
  --color-primary-muted:   #E6F4F2;

  /* Secondary */
  --color-secondary:       #1B5FA8;
  --color-secondary-muted: #E8EEF8;

  /* Accent */
  --color-accent:          #C49A3C;
  --color-accent-muted:    #FBF3E0;

  /* Surfaces */
  --color-bg:              #F7FAFA;
  --color-surface:         #FFFFFF;
  --color-surface-2:       #EFF6F5;

  /* Borders */
  --color-border:          #D8E8E7;
  --color-border-strong:   #B0CFCD;

  /* Text */
  --color-text:            #1A2B2B;
  --color-text-muted:      #4D6968;
  --color-text-faint:      #7AADAA;

  /* Dark brand sections (same in both modes) */
  --color-dark-bg:         #0C1B1A;
  --color-dark-surface:    #142322;
}

[data-theme="dark"] {
  --color-primary:         #12A192;
  --color-primary-hover:   #0F8578;
  --color-primary-muted:   #0E2E2B;

  --color-secondary:       #4A8FD4;
  --color-secondary-muted: #0E1E38;

  --color-accent:          #D4AA55;
  --color-accent-muted:    #2A1F08;

  --color-bg:              #0C1B1A;
  --color-surface:         #142322;
  --color-surface-2:       #1C2F2E;

  --color-border:          #243B39;
  --color-border-strong:   #3A5856;

  --color-text:            #E4F0EF;
  --color-text-muted:      #7AADAA;
  --color-text-faint:      #3D6360;
}
```

### Tailwind @theme block

```css
@theme {
  --color-primary:       #0B7A6E;
  --color-primary-hover: #096158;
  --color-primary-muted: #E6F4F2;
  --color-secondary:     #1B5FA8;
  --color-accent:        #C49A3C;
  --color-espresso:      #0C1B1A;
  --color-parchment:     #F7FAFA;
  --color-bark:          #1A2B2B;
  --color-muted:         #4D6968;
  --font-display:        'Playfair Display', Georgia, serif;
  --font-body:           'DM Sans', system-ui, sans-serif;
}
```

---

# PART 5 — DOCUMENTATION

---

## 5.1 Three Core Design Principles

### 1. Restraint Creates Luxury
**What it means:** Luxury is felt through what is absent, not what is present. Empty space, limited color, quiet hierarchy — these signal quality. When everything shouts, nothing matters.

**Examples:**
- ✓ One primary CTA per page section
- ✓ Two typefaces maximum, ever
- ✓ Solid color blocks, not gradient explosions
- ✗ Five different button colors on one page
- ✗ Cards with gradient backgrounds, glow effects, AND animated borders

**Why it matters for Zuri:** A client booking a $3,000 trip needs to feel they're in capable, discerning hands. Visual noise signals the opposite.

---

### 2. Context is Content
**What it means:** The same element can feel entirely different based on what surrounds it. A testimonial card on a white background is a feature. The same card on a dark background with a quote in serif italics is a story. Design with the full composition in mind, not isolated components.

**Examples:**
- ✓ Stats rendered in brass on espresso — the combination signals prestige
- ✓ Trip card visual headers are dark solid colors — consistent with the brand's dark tone
- ✗ Using white cards on a white background (invisible separation)
- ✗ Using the primary teal as a background for large sections

---

### 3. Functionality Earns Trust
**What it means:** For a travel business, trust is the product. Every interaction that works smoothly — links that scroll, cards with clear states, information that's exactly where expected — builds confidence that this company handles real logistics with the same care.

**Examples:**
- ✓ Hover states on every interactive element
- ✓ "Only 4 spots left" triggers a warning badge, not a red alarm
- ✓ WhatsApp CTA is prominent — it's the real conversion point
- ✗ Disabled buttons without explanation
- ✗ Links that don't visually signal they're links

---

## 5.2 Do's and Don'ts

| # | Do | Don't |
|---|---|---|
| 1 | Use `color.primary` for one action per view | Use teal on card backgrounds, decorative borders, AND the CTA all at once |
| 2 | Write section eyebrows as `✦  Label Text` in 11px uppercase | Skip the eyebrow — headings without hierarchy feel like shouting |
| 3 | Constrain body text to 65 characters max-width | Let paragraphs span the full grid — unreadable |
| 4 | Design disabled states explicitly (opacity 0.5, no cursor pointer) | Remove disabled elements entirely — users need to know why |
| 5 | Use `shadow-sm` on resting cards, `shadow-md` on hover | Use `shadow-xl` on everything — depth loses meaning |
| 6 | Use the Warning semantic color for "3 spots left" | Use Error/red for urgency — error means failure, not scarcity |
| 7 | Use `transition-all duration-200 ease-out` consistently | Mix 100ms, 300ms, 500ms durations with no system |
| 8 | Keep footer always dark (brand anchor) | Change footer background with theme — it should always be espresso |
| 9 | Use initials avatars in testimonials (name initial in a circle) | Use emoji avatars — feels unpolished, inconsistent |
| 10 | Brass accent (`#C49A3C`) only for luxury signals (stars, premium) | Use brass for regular text, borders, or background fills |

---

## 5.3 Implementation Guide for Developers

### Setup checklist

```
1. Google Fonts loaded (Playfair Display + DM Sans) — index.css
2. CSS custom properties set for light AND dark mode — :root and [data-theme="dark"]
3. Tailwind @theme block configured — index.css
4. ThemeToggle component reads localStorage → sets data-theme on <html>
5. Tailwind darkMode strategy: use Tailwind `dark:` alongside CSS vars
```

### Theme toggle implementation

```ts
// hooks/useTheme.ts
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('zuri-theme') as Theme | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('zuri-theme', theme)
  }, [theme])

  return { theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }
}
```

### Applying themed values in components

```tsx
// Always use CSS variable names, not hardcoded hex
// ✓ Correct
<div className="bg-[var(--color-surface)] border border-[var(--color-border)]">
  <p className="text-[var(--color-text)]">Content</p>
</div>

// ✓ Also correct (via @theme tokens)
<div className="bg-parchment border border-[var(--color-border)]">

// ✗ Wrong — not theme-aware
<div style={{ backgroundColor: '#FFFFFF' }}>
```

### Focus rings (accessibility)

```
All interactive elements must have a visible focus ring.
Standard: focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
Never use: outline: none without a visible replacement
```

### Section structure pattern

```tsx
<section id="section-id" className="bg-[var(--color-bg)] py-20 md:py-28">
  <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-16">

    {/* Header */}
    <div className="mb-12 max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3">
        ✦  Section Label
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text)] leading-[1.08]">
        Heading
      </h2>
    </div>

    {/* Content */}
    ...
  </div>
</section>
```

### Responsive image containers

```tsx
<div className="relative overflow-hidden rounded-2xl aspect-video">
  <img
    src={src}
    alt={alt}                    // Never empty for content images
    className="w-full h-full object-cover object-center"
    loading="lazy"
    decoding="async"
  />
</div>
```

---

## Appendix — Accessibility WCAG 2.1 AA Checklist

| Requirement | Implementation |
|---|---|
| Color contrast 4.5:1 (normal text) | All text colors verified against backgrounds |
| Color contrast 3:1 (large text ≥24px) | Brass accent cleared for headings only |
| Focus visible | `focus-visible:ring-2` on all interactive elements |
| Keyboard navigable | Tab order follows visual order, no focus traps except modals |
| ARIA labels | All icon-only buttons have `aria-label` |
| Images | All `<img>` tags have `alt` text; decorative: `alt=""` |
| Form inputs | All inputs have associated `<label>` elements |
| Error identification | Errors identified in text, not color alone |
| Language | `<html lang="en">` set |
| Motion | `prefers-reduced-motion` respected for animations |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
