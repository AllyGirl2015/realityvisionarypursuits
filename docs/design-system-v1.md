# Design System V1 - Dark Luxury / Editorial

## Color Palette
- **Background Dark:** `#050505` (Rich Black)
- **Background Light:** `#Eaeaea` (Off-White / Platinum)
- **Text Light:** `#Eaeaea`
- **Text Dark:** `#000000` or `#18181b` (Zinc 900)
- **Accent/Gold:** `#D4C69C` (Muted Gold)
- **Borders:** White/10 (`rgba(255, 255, 255, 0.1)`) or Zinc-200

## Typography
- **Serif (Headings):** Cormorant Garamond (`--font-cormorant`)
- **Sans (Body):** Inter (`--font-inter`)
- **Mono (Meta/Labels):** Geist Mono (`--font-geist-mono`)

## UI Elements
- **Cards:** Minimalist, often transparent backgrounds (`bg-zinc-900/20`) or solid light (`bg-zinc-50`).
- **Buttons/Tags:** Uppercase, tracking-widest, small font size (text-xs).
- **Effects:** `GrainOverlay` used globally for texture.
- **Selection:** `bg-[#D4C69C] text-black`.

## Layout Structure
- **Navbar:** Fixed, mix-blend-difference (white text that inverts).
- **Sections:** Alternating Dark and Light backgrounds.
- **Spacing:** Generous padding (`py-32`, `gap-12`).

## Component Specifics
- **Hero:** Large serif typography, centered or split.
- **Works:** Grid layout, dark theme default.
- **Authors:** Grid layout, light theme default.
- **Quotes:** Large serif quotes, dark theme.
