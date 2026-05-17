## Remove masthead, navbar styling tweaks, sticky filters on Projects

### 1. Remove Masthead
- In `src/App.tsx`, remove the `Masthead` import and `<Masthead />` render.
- Leave the component file in place (no other usages).

### 2. Navbar text styling
In `src/components/StickyNavbar.tsx`:
- Desktop nav links (Journals / Projects / About): change classes so all link text is solid black (`text-foreground`) by default. On the active route, add `underline underline-offset-[6px] decoration-2 decoration-foreground` and `font-medium`. Inactive links keep `hover:text-muted-foreground`.
- "Contact Us" pill: keep current pill styling (it already reads as the active indicator on `/contact`); leave unchanged.

### 3. Projects page — keep filter bar visible while scrolling
In `src/components/ProjectFilters.tsx`:
- Desktop sticky bar: it already uses `sticky top-[var(--navbar-height,64px)]`, but the floating navbar's `offsetHeight` no longer accounts for its `top-3 sm:top-4` offset, so the filter bar slides under the navbar. Fix by stacking the filter directly under the navbar in a sticky parent — change the sticky offset to `top-0` and instead make the Studio page wrap the filter bar so it sticks to the viewport top with extra top padding equal to the navbar's effective height + top gap. Simpler approach: update `StickyNavbar`'s `--navbar-height` calc to include its top offset (`offsetHeight + offsetTop + 8px` buffer), so the filter sticks just below the floating navbar with a small gap.
- Mobile filters: currently `md:hidden ... py-4` (not sticky). Make this row sticky too: `sticky top-[var(--navbar-height,64px)] z-40 bg-background/95 backdrop-blur-sm` with the same padding.

### Files
- `src/App.tsx` — remove Masthead
- `src/components/StickyNavbar.tsx` — link active-state underline + black text; update `--navbar-height` to include top offset
- `src/components/ProjectFilters.tsx` — make mobile filter bar sticky

No data or routing changes.
