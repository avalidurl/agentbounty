---
title: "Site scaffold and documentation surface"
description: "Replaced the placeholder with an Astro documentation/roadmap site. First Diataxis surface, six engineering diagrams, sitemap, RSS, and LLM-readable files."
pubDate: 2026-05-19
tags: ["site", "scaffold", "milestone"]
---

The website moved from a single-page placeholder to a documentation and
roadmap site. The scope of this change matches the v0.0 phase: ship a public
surface that explains the system without overpromising on what is live.

## What landed

- Astro project with TypeScript and content collections.
- Three-zone documentation layout with a sticky right rail and a visible
  footer sitemap on every page.
- Six engineering diagrams: operating loop, escrow state machine, review
  decision flow, onchain/offchain boundary, reviewer authority path, and
  roadmap timeline.
- XML sitemap, robots.txt with sitemap discovery, devlog and blog RSS feeds.
- Machine-readable surfaces at `/llms.txt`, `/llms-full.txt`, and
  `/site-index.json`.
- External Tally waitlist button across hero, right rail, footer, and the
  `/early-access` page. No iframe embed.

## What did not change

- Operating sentence: USDC pays the work. BOUNTY secures the reviewers.
- Public token facts on Base.
- Public contact channels.

## Next

- Open the private alpha bounty loop with curated sponsors and reviewers on
  Base testnet first.
- Publish public proof of the first paid loops on `/status`.
