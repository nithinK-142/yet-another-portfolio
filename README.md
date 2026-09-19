# nithin.me

Single-page portfolio. Server-rendered, no client JavaScript, no images.
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
| `components/Diagrams.tsx` | The two small text diagrams |
| `app/globals.css` | Colours and all custom styles |
| `app/opengraph-image.tsx` | Link-preview PNG, generated at build time |
| `public/nithin-public-resume.pdf` | Resume linked from the page |

## Rules for edits

- Every claim on the page comes from the resume. Do not add numbers that are not in it.
- Project descriptions stay short: one line in the index, a few terse facts below.
- No screenshots, no education section, email stays normal size.
