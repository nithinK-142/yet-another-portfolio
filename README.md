# nithin.me

Single-page portfolio. Server-rendered, no images. A few small client components add the details: command palette, cursor light, active nav, local time, copy email, and the theme and motion toggles.
Follows the OS light or dark setting; the footer toggle overrides it and remembers the choice.

## Stack

Next.js 16, React 19, TypeScript 6, Tailwind CSS 4, pnpm.
Font: Schibsted Grotesk, self-hosted in `app/fonts` (OFL).

## Run

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm lint
```

## Where things live

| Path | What |
| --- | --- |
| `content/site.ts` | Email, links, project text, tools list. Edit copy here. |
| `app/page.tsx` | Page structure |
| `components/CommandPalette.tsx` | Ctrl/Cmd+K (or `/`) palette: links, copy email, jump to projects |
| `components/Icon.tsx` | Inline SVG icons (Lucide style, ISC licence). Decorative, always next to a text label |
| `components/NavLinks.tsx` | Top links; the section you are reading gets `aria-current` |
| `components/CopyEmail.tsx`, `lib/copy.ts` | Email with a one-click copy button that confirms |
| `components/LocalTime.tsx` | Time in Bangalore, shown in the hero |
| `components/ThemeToggle.tsx` | Light or dark, stored in `localStorage` (`nithin-theme`), applied before paint in `layout.tsx` |
| `app/globals.css` | Colours and all custom styles |
| `app/opengraph-image.tsx` | Link-preview PNG, generated at build time |
| `public/nithin-public-resume.pdf` | Resume linked from the page |

## Rules for edits

- Every claim on the page comes from the resume. Do not add numbers that are not in it.
- The name appears once, in the top bar. Do not put it in the hero, footer, or elsewhere.
- Order of screens: hero, experience and stack, work, contact. Each fits the viewport below the sticky bar.
- One fixed cursor light sits behind every screen.
- Icons come from `<Icon>` and never replace a text label.
- The amber accent is for fills, underlines and large text. Do not use it for small text on white (it fails contrast).
- Every project has exactly three short points, and no diagrams or images.
- No screenshots, no education section, email stays normal size.
