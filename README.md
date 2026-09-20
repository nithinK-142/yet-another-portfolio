# nithin.me

Single-page portfolio. Server-rendered, no images. One small client component: the Ctrl/Cmd+K command palette.
Light by default, dark with the OS setting.

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
| `app/globals.css` | Colours and all custom styles |
| `app/opengraph-image.tsx` | Link-preview PNG, generated at build time |
| `public/nithin-public-resume.pdf` | Resume linked from the page |

## Rules for edits

- Every claim on the page comes from the resume. Do not add numbers that are not in it.
- The name appears once, in the top bar. Do not put it in the hero, footer, or elsewhere.
- Order of screens: hero, experience and stack, work, contact. Each fits the viewport below the sticky bar.
- One fixed grid background sits behind every screen.
- Every project has exactly three short points, and no diagrams or images.
- No screenshots, no education section, email stays normal size.
