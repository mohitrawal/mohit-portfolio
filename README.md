# Doodle Dev portfolio (React + Vite + TypeScript)

A playful, cartoon-style freelance portfolio built from the Doodle Dev design system.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
```

Deploy `dist/` to Vercel, Netlify, GitHub Pages or any static host.

## Where to change things

| What | File |
| --- | --- |
| All text, links, skills, services, projects, process steps, email | `src/data/content.ts` |
| Colours, shadows, spacing, radii, fonts (light + dark) | `src/styles/tokens.css` |
| Component look and animations | `src/styles/components.css` |
| Page layout and responsive rules | `src/styles/page.css` |
| Section order | `src/App.tsx` |
| Fonts loaded | `index.html` (Google Fonts link) |
| Browser tab title and description | `index.html` |

Project screenshots: drop images in `public/` and set `image: '/my-shot.png'` on a project in `content.ts`.

## Components (`src/components`)

`Button`, `Sticker`, `SpeechBubble`, `Mascot` (Pixel: `wave` / `think` / `party`), `NavBar` (with theme toggle and mobile menu),
`ProjectCard`, `ServiceCard`, `SkillKeyboard`, `Marquee` (optional, not on the page), `ContactCTA`.

All animation turns off automatically for visitors with "reduce motion" enabled.
