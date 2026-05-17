## Masthead as a "double chip"

Restyle `src/components/Masthead.tsx` collapsed state so the strip reads as a single connected pill split into two segments — left chip = flag + "A Malaysian Designer Website", right chip = "How to identify" toggle — visually joined by a divider, floating on the existing light gray strip.

### Visual spec
- Outer strip: keep `bg-[#F4F4F5]` background and bottom border, center contents (`justify-center`) instead of left-aligned, vertical padding `py-2`
- Pill container: `inline-flex items-stretch rounded-full bg-background border border-border/70 shadow-sm overflow-hidden`
- Left segment: `flex items-center gap-2 pl-3 pr-3 py-1` — flag (unchanged size) + label `text-xs sm:text-[13px] text-[#3F3F46] font-medium whitespace-nowrap`
- Vertical divider: `w-px self-stretch bg-border/70`
- Right segment (button): `flex items-center gap-1 pl-3 pr-3 py-1 text-xs sm:text-[13px] text-[#2563EB] font-medium hover:bg-blue-50 transition-colors` + chevron
- Mobile: keep both segments visible (drop the `ml-auto` trick); shorten label to "Identify" under `sm`
- Expanded panel: unchanged content; render below the pill, centered, `max-w-xl mx-auto` so it stays tidy

### Files
- `src/components/Masthead.tsx` only — markup + classes
- No new dependencies, no token changes
