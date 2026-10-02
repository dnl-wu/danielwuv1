# dnlwu.com

Personal site built with Astro 7, MDX, and Tailwind v4. Fully static.

```sh
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Where things live

| What | File |
|---|---|
| Home page letter (Markdown/MDX, links inline) | `src/data/letter.mdx` |
| Logos for the intro box | `public/logos/` |
| Name, email, social links (icons in the home intro box) | `src/data/site.ts` |
| Projects (one file each) | `src/content/projects/*.mdx` |
| Writing (one file each) | `src/content/writing/*.mdx` |
| Colors (including the neon `--highlight`) | `src/styles/global.css` (`:root` tokens) |

**Highlight a phrase:** wrap it in `<mark>…</mark>` in `letter.mdx`. Use it once; it's the page's focal point.

**Add a project:** create `src/content/projects/<slug>.mdx`. Set `featured: true` to give it its own write-up page at `/projects/<slug>`; otherwise it links to `links.demo` or `links.repo`.

**Add a post:** create `src/content/writing/<slug>.mdx` with `title`, `summary`, and `date`. Set `draft: true` to keep it out of production and RSS. To list a project case study on the Writing page instead, give the entry `project: <project-slug>` and no body; it links to that project.

## Keeping it on one screen

The home page, `/projects`, and `/writing` fit on a laptop screen (1280×720 and up) without scrolling. Keep the letter to about five short paragraphs and the project list to about five entries. On phones, the letter scrolls a little.

## Content to replace (placeholder unless noted)

- [ ] `src/content/projects/plue.mdx`: the Plue write-up (the Writing page links to it); also its `role`
- [ ] `src/data/site.ts` and `src/data/letter.mdx`: your LinkedIn URL
- [ ] `astro.config.mjs`: set `site` to your real domain

## Deploy

Push to GitHub, then import the repo on Vercel (or Netlify or Cloudflare Pages). It's detected as Astro with no extra config.
