# agentbounty

Website for the AgentBounty project. Astro static site deployed to
Cloudflare Pages at https://agentbounty.dev.

Operating sentence:

> USDC pays the work. BOUNTY secures the reviewers.

## Stack

- Astro 5 (static output)
- TypeScript (strict)
- `@astrojs/mdx` for content collections
- `@astrojs/sitemap` for XML sitemap
- `@astrojs/rss` for devlog and blog feeds

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build
npm run check    # astro check (TypeScript + Astro)
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Custom domain: `agentbounty.dev`

Cloudflare security and header policy is handled outside this repo.

## Structure

```
src/
  content/          # devlog and blog markdown (content collections)
  components/       # layout, diagrams, footer, right rail
  layouts/          # BaseLayout, DocsLayout
  pages/            # routes (.astro), endpoints (.ts), RSS, llms.txt, site-index.json
  styles/           # base.css, docs.css, diagrams.css
  data/links.ts     # single source for nav, footer, contact, token, waitlist
public/
  robots.txt
  favicon.svg
```

## Required surfaces

- Three-zone documentation layout with sticky right rail.
- Visible footer sitemap on every page.
- Diataxis sections at `/start`, `/guides`, `/reference`, `/explain`.
- `/how-it-works`, `/roadmap`, `/status`, `/reviewers`, `/token`, `/bounties`.
- Devlog at `/devlog`, blog at `/blog`, RSS at `/rss/devlog.xml`, `/rss/blog.xml`.
- Machine-readable surfaces: `/llms.txt`, `/llms-full.txt`,
  `/site-index.json`, `/sitemap-index.xml`.
- External Tally waitlist button (no iframe embed) at hero, right rail,
  footer, `/early-access`, `/contact`.
- Legal placeholders at `/legal/terms`, `/legal/privacy`, `/legal/disclaimer`.

## License

Code under MIT. Project copy, diagrams, names, and visual assets are not
covered by MIT unless explicitly stated; see `NOTICE.md`.
