---
title: "Staking page: snapshot countdown, tiered access, and a redacted token name"
description: "Shipped /staking as the public design surface for the risk-underwriting token. Snapshot in 7 days. Distribution, locks, fee split, and friendly communities are on the page; every number is explicitly subject to change. Name held back behind CSS censor bars."
pubDate: 2026-05-23
tags:
  - staking
  - snapshot
  - design
  - milestone
  - token
  - announcement
---

The risk-underwriting token finally has a public surface. The page is
live at [/staking](/staking) and linked from the top nav. It is a draft
design board, not a launch post — every number on it is provisional
and the token name is still held back behind CSS censor bars until launch.

## What landed

- **`/staking` route on the main site**, wired into the primary nav
  between `Token` and `Plates`. Built with `BaseLayout` so the site
  header, footer, theme toggle, and design tokens come for free.
- **Snapshot countdown** ticking down to **2026-05-31 · 00:00 UTC**.
  Renders in days / hours / minutes / seconds; collapses to a single
  column under 640px; switches to "Snapshot block has landed" once the
  target is reached.
- **Tiered yield access on the same snapshot block.** Bench (≥ 3B BOUNTY)
  opens at T+0. Gallery (1B – 2.999B BOUNTY) opens at T+3h. The airdrop
  itself is immediate at TGE for both tiers; only the underwriting-pool
  door opens at different hours.
- **Working distribution table.** 100M cap. ERC20 capped, immutable
  token contract, no mint after deploy. **No cliffs anywhere** —
  everything either unlocks at TGE or vests linearly from block one.
  Working split is 30/10/15/10/15/10/10 across airdrop, ecosystem
  airdrops, community emissions, protocol-owned liquidity, treasury,
  team (12-month linear, zero cliff), and reserve.
- **Self-selected lock mechanic.** Minimum 6 hours, maximum unbounded.
  Linear multiplier curve 1.0× at 6h → 4.0× at 365d; locks longer than
  a year do not yield additional multiplier. Stake accepted in either
  BOUNTY or USDC; same curve applies.
- **Team operating fee split.** 60% of protocol fees route to stakers,
  25% to the team multisig in the bounty's own currency (so cash flow
  is independent of token price), 15% to treasury. The team token
  allocation exists for governance alignment, not for paying rent.
- **Friendly communities, growing.** Aeon Framework (Bankr ecosystem),
  MiroShark, gitlawb, Surplus are on the page today. Holding any listed
  community token above threshold adds +0.25× to the airdrop multiplier,
  stackable up to a 2.0× cap. The list will grow before snapshot.
- **Architecture diagram** drawn in Mermaid, rendered client-side from
  CDN, theme-aware (neutral in light mode, dark in dark mode).
- **Hero illustration:** a 13th-century manuscript illumination of a
  cautio pledge ceremony — red-robed magistrate on a Gothic trefoil
  throne, green-robed kneeling pledgor, tonsured blue-robed scribe —
  with anachronistic reliquary-server-rack cabinets glowing with
  rose-window LED indicators behind the parties. Generated via the
  Black Forest Labs Flux API at 1440×960, after explicit reference to
  the Decretals of Gregory IX (ca. 1260).
- **Responsive image pipeline.** ImageMagick produced WebP and PNG
  variants at 480 / 720 / 1080 / 1440 widths. Served as a `<picture>`
  element with both formats and explicit `sizes`. Mobile transfer for
  the hero drops from ~3 MB (original PNG) to **~40 KB** (480w WebP).
  Cloudflare Pages serves the assets from edge with correct
  content-type per format.
- **A standing banner at the top of the page** reads
  *DRAFT · SNAPSHOT IN 7 DAYS · ALL NUMBERS SUBJECT TO CHANGE*. Every
  H2 with provisional numbers carries a `subject to change` chip.
- **A "Daily design updates" promise.** Numbers and friendly
  communities will be edited in place every working day until snapshot.
  No social-only updates; the page is the source of truth.

## What is deliberately undefined

- **Token name and ticker.** Held back behind CSS censor bars until
  launch. The name is in DOM for accessibility, sed-swap simplicity,
  and the eventual reveal, but visually it is a solid ink-coloured
  block everywhere it appears.
- **Slashing mechanics.** Trigger conditions, dispute window, and
  quorum are not on the page. They will publish in v0.2 of the
  underwriting design — not under launch pressure.
- **Audit firm and date.** Contracts will be audited before mainnet.
  No firm or window is being committed to.
- **TGE date.** Snapshot is in 7 days; launch may take longer. Updated
  timing will publish on `/staking`, not on social.

## What ships next

- Daily edits on `/staking` as the friendly-communities list grows and
  numbers are tuned through mechanism design.
- v0.2 of the slashing design once the verdict-failure modes are fully
  enumerated.
- A separate post when the token name is unredacted.

The page deliberately makes the design process auditable in public. If
a number on `/staking` changes between morning and evening, the morning
version is wrong by definition. Bookmark, refresh, watch the countdown.
