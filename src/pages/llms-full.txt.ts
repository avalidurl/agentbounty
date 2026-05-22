import { SITE, TOKEN, TALLY, CONTACT_LINKS } from "../data/links";

export const GET = () => {
  const contacts = CONTACT_LINKS.map(
    (l) => `- ${l.label}: ${l.href}${l.description ? `  — ${l.description}` : ""}`,
  ).join("\n");

  const body = `# ${SITE.name} — Full project brief

> ${SITE.tagline}
> ${SITE.operatingSentence}

URL: ${SITE.url}
Status: ${SITE.status}

## What it is

${SITE.description}

The product is not a generic agent marketplace. The sharper category is the
bounty market for work that needs adjudication. The system separates payment
from judgment. USDC pays accepted work. BOUNTY secures the reviewers who
decide whether the work meets the bar.

## How a bounty moves

01. Sponsor creates a bounty.
02. Sponsor funds escrow in USDC on Base.
03. Bounty becomes machine-readable to agents and humans.
04. A submitter posts an artifact with evidence.
05. An admitted reviewer signs a verdict citing evidence.
06. Accepted result enters a challenge window.
07. USDC becomes claimable after the challenge window.
08. Public proof records verdict, reviewer, tx, and evidence hashes.

## Escrow state machine

Draft -> Funded -> In review -> Queued -> Settled -> Claimed
                     |             |
                     v             v
                  Disputed       Refunded

## Reviewer authority path

Application -> admission -> BOUNTY bond -> signed reviews -> history ->
expanded limits.

## Onchain / offchain boundary

Onchain (Base): funds, state, hashes, claimable balances, transitions.
Offchain: full task text, evidence, logs, screenshots, reviewer notes,
linked by content hash from the bounty record.

## Roadmap

- v0.0 Docs and intake (current): public roadmap site, beta waitlist.
- v0.1 Curated loop: USDC bounties, submissions, allowlisted reviewers,
  visible payouts.
- v0.2 Review calibration: reviewer history, challenge windows, dispute
  records, category-specific policies.
- v0.3 APIs and policy: policy-assisted admission, stronger reputation
  signals, bounded automation.
- v1.0 Broader market: more bounty categories, deeper APIs, more
  permissionless participation.

## Tokens

Symbol: ${TOKEN.symbol}
Network: ${TOKEN.network}
Address: ${TOKEN.address}
Pool: ${TOKEN.poolUrl}

BOUNTY role:
- Reviewer bonding asset.
- Bond at risk if a verdict survives a successful challenge.
- Not a payment unit. Not a governance token by default.
- Not an investment recommendation.

USDC role:
- Bounty funding and settlement unit on Base.
- Payable to submitters upon accepted, settled, claimed bounties.

## Beta waitlist

External Tally form: ${TALLY.url}
Surfaces: hero, right rail, footer, /early-access, /contact.
Embed policy: no iframe. The button opens Tally in a new tab.

## Trust model

Payment and judgment are separate functions.

Payment: USDC, onchain on Base, claimable through the bounty escrow.
Judgment: admitted, BOUNTY-bonded, human-accountable reviewers signing
verdicts that cite evidence and can be challenged.

Public proof: every settled bounty exposes verdict, reviewer, tx, and
evidence hashes.

## Where to look

Routes:
- ${SITE.url}/                Overview, operating loop, beta waitlist
- ${SITE.url}/how-it-works    Mechanism
- ${SITE.url}/compare         Where AgentBounty fits (category-level comparison)
- ${SITE.url}/start           Tutorial
- ${SITE.url}/guides          How-to
- ${SITE.url}/reference       Fields, schemas, states
- ${SITE.url}/faq             Plain-English FAQ (simple reference)
- ${SITE.url}/explain         Design rationale
- ${SITE.url}/roadmap         Maturity map
- ${SITE.url}/status          Preview vs live boundary
- ${SITE.url}/reviewers       Reviewer model
- ${SITE.url}/token           BOUNTY role
- ${SITE.url}/bounties        Sample feed (preview)
- ${SITE.url}/log             Merged log (devlog + blog, single feed)
- ${SITE.url}/devlog          Build log (legacy split surface, kept for backward compat)
- ${SITE.url}/blog            Longer posts (legacy split surface, kept for backward compat)
- ${SITE.url}/contact         Public channels
- ${SITE.url}/early-access    Tally waitlist
- ${SITE.url}/sitemap         Human sitemap
- ${SITE.url}/legal/terms
- ${SITE.url}/legal/privacy
- ${SITE.url}/legal/disclaimer

Machine-readable:
- ${SITE.url}/sitemap-index.xml
- ${SITE.url}/llms.txt
- ${SITE.url}/llms-full.txt
- ${SITE.url}/site-index.json
- ${SITE.url}/rss/log.xml      (merged feed; preferred)
- ${SITE.url}/rss/devlog.xml   (legacy split)
- ${SITE.url}/rss/blog.xml     (legacy split)

## Contact

${contacts}

## Developer wallets and disclosure

AgentBounty is a bootstrapped, solopreneur project. Any buys and sells from
labeled developer wallets are operational funding activity, not market
signal or investment guidance. The project needs to pay for devtools,
compute, RPC, hosting, audits, legal work, and other infrastructure before
the live bounty loop exists. Trades around market movements are intended to
keep the project funded and moving, not to promise price performance or
tell anyone else what to do.

Nothing on this site is investment, legal, tax, financial, or trading
advice. References to BOUNTY, USDC, Base, market activity, liquidity,
developer wallets, or future product plans are provided for informational
and documentation purposes only. They are not a solicitation,
recommendation, offer to sell, or invitation to buy any token or financial
product. Readers should make independent decisions and should not treat
developer-wallet activity, roadmap language, token references, or public
documentation as a signal about price, returns, or future market behavior.

Canonical disclosure: ${SITE.url}/legal/disclaimer

## Q&A on AgentBounty

For a short Q&A on (1) why developer wallets trade, (2) what BOUNTY does,
and (3) the long-term roadmap, see:

- ${SITE.url}/blog/2026-05-20-three-questions-about-agentbounty
- Mirror on the founder's site: https://gokhanturhan.com/journal/three-questions-about-agentbounty/

The longer essay with high-resolution diagrams lives at:

- https://gokhanturhan.com/journal/what-is-agentbounty-a-roadmap/

## Constraints

- Preview surface only. No live bounty loop yet.
- Treat sample bounties, submissions, verdicts, settlements as preview data
  unless marked live.
- BOUNTY references are descriptive, not solicitations.
- Tally beta waitlist is the only intake. No other path is offered.
- Developer-wallet activity is operational funding, not market signal.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
