## Restyle StickyNavbar to floating pill

Refactor `src/components/StickyNavbar.tsx` to match the reference: a centered, floating, pill-shaped navbar with a soft cream background, logo on the left, nav links centered, and an outlined pill "Contact" CTA on the right.

### Visual spec (from reference)
- Outer bar: transparent, with top padding (~16-20px), horizontally centered
- Inner pill: white background, fully rounded (`rounded-full`), subtle border `border-border/60`, soft shadow, max-width ~1200px, mx-auto, padding `pl-6 pr-2 py-2`
- Sticky behavior preserved (`sticky top-4 z-50`)
- Page background area behind nav stays current (no cream tint applied globally)

### Layout
- Left: logo image + "Zahin Syahiran" wordmark (unchanged content)
- Center (absolute-centered on desktop): Journals · Projects · About · Blog-equivalent links — keep current items (Journals, Projects, About). Active link: `text-foreground font-medium`; inactive: `text-muted-foreground hover:text-foreground`
- Right: "Contact" rendered as an outlined pill button (`rounded-full border border-foreground/80 px-5 py-2 text-sm`) instead of a plain link, linking to `/contact`

### Mobile
- Same floating pill container; hide center links, show hamburger on the right next to a compact "Contact" pill (or keep hamburger only — confirm via question below if needed; default: hamburger only on mobile, Contact pill hidden < md)
- Mobile menu overlay logic unchanged

### Files
- `src/components/StickyNavbar.tsx` — markup + class changes only
- No changes to routes, data, or other components

### Notes
- Keep `--navbar-height` CSS var updater (now measures the floating bar's effective height including top offset)
- Use semantic tokens (`bg-background`, `border-border`, `text-foreground`, `text-muted-foreground`) — no hardcoded hex
