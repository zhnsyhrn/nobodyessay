## Goal

Add a slim, one-line announcement banner at the top of the homepage that surfaces the most recent post in the "Announcement" category, with a small arrow CTA that links to that post's detail page.

## Where it goes

- File: `src/pages/Index.tsx`
- Position: Inside the homepage, placed directly above the Hero `<section>` (so it sits just under `<StickyNavbar />`). Centered, full-width row.
- Only renders if at least one Announcement essay exists.

## Data source

- `src/data/essays.ts` already exports `essays`. Add a tiny helper (or inline filter in `Index.tsx`) that returns the first essay where `category === "Announcement"` (essays are already ordered newest first based on current usage).
- Use that essay's `title` as the banner text and link to `/journals/${slug}`.

## Visual design (minimal, one line)

- Container: centered pill, max-width fit-content, mx-auto, top margin ~24px, sits above hero.
- Style: `rounded-full border border-border/60 bg-background px-3.5 py-1.5 inline-flex items-center gap-2 hover:border-foreground/30 transition-colors`
- Content (single line, truncated on small screens):
  - Small uppercase label pill: `NEW` (font-typewriter, 10px, `#919191`, `border border-border/60 rounded-full px-2 py-0.5`)
  - Title text: `font-jakarta text-[13px] text-foreground truncate max-w-[260px] sm:max-w-none`
  - Arrow CTA: `ArrowRight` icon (lucide-react, 14px, `#606060`) inside a small circular hover target; the whole pill is a single `<Link>` so the arrow is the visual CTA, not a separate button.
- Mobile: keep one line; allow the title to truncate with ellipsis so the pill never wraps.

## Behavior

- Entire banner is a `react-router-dom` `<Link to={\`/journals/${slug}\`}>`.
- No dismiss, no storage, no animation beyond hover (keeps it simple per request).
- Does not replace or modify `InfoBanner` (the existing yellow "in progress" strip is a separate component and isn't currently mounted in `Index.tsx`).

## Out of scope

- No changes to essay data, Post page, or Journals list.
- No new dependencies.
