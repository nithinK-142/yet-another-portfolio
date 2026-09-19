# nithin.me

Single-page portfolio. Server-rendered, no client JavaScript, no animation.

## Stack

Next.js 16 · React 19 · TypeScript 6 · Tailwind CSS 4 · pnpm

Fonts are self-hosted in `app/fonts` (Archivo for headings, Source Serif 4 for text; both OFL).

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
| `app/page.tsx` | All page copy and structure |
| `content/site.ts` | Email, links, work index, tools list |
| `components/Diagrams.tsx` | The two diagrams (plain HTML and CSS, so they reflow on phones) |
| `app/globals.css` | Design tokens and all custom styles |
| `app/opengraph-image.tsx` | Link-preview PNG, generated at build time |
| `public/nithin-public-resume.pdf` | Resume linked from the page |

## Design rules

- One palette, no accent colour. Emphasis comes from weight, size and inversion.
- Text is never smaller than 15px. Body text is 17px on phones and 19px on larger screens.
- Wide screenshots scroll sideways on phones instead of shrinking.
- Every claim on the page comes from the resume. Do not add numbers that are not in it.
