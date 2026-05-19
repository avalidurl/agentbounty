import { SITE, TOKEN, TALLY } from "../data/links";

export const GET = () => {
  const body = `# ${SITE.name}

> ${SITE.tagline}
> ${SITE.operatingSentence}

URL: ${SITE.url}
Status: ${SITE.status}
Token symbol: ${TOKEN.symbol}
Token network: ${TOKEN.network}
Token address: ${TOKEN.address}
Token pool: ${TOKEN.poolUrl}
Beta waitlist: ${TALLY.url}

## Description

${SITE.description}

## Top routes

- ${SITE.url}/                Overview, operating loop, beta waitlist
- ${SITE.url}/how-it-works    Mechanism: USDC escrow, review flow, settlement
- ${SITE.url}/start           First guided encounter (tutorial)
- ${SITE.url}/guides          How-to procedures for sponsors, submitters, reviewers
- ${SITE.url}/reference       Fields, schemas, states, roles
- ${SITE.url}/faq             Plain-English FAQ (simple reference)
- ${SITE.url}/explain         Design rationale and tradeoffs
- ${SITE.url}/roadmap         Public maturity map (v0.0 -> v1.0)
- ${SITE.url}/status          Preview vs live boundary
- ${SITE.url}/reviewers       Reviewer admission, bonding, authority
- ${SITE.url}/token           BOUNTY role and facts
- ${SITE.url}/bounties        Sample bounty feed (preview)
- ${SITE.url}/devlog          Build log
- ${SITE.url}/blog            Longer posts
- ${SITE.url}/contact         Public contact and discovery channels
- ${SITE.url}/early-access    Tally beta waitlist link
- ${SITE.url}/sitemap         Human-readable sitemap
- ${SITE.url}/legal/terms     Terms placeholder
- ${SITE.url}/legal/privacy   Privacy placeholder
- ${SITE.url}/legal/disclaimer Disclaimer

## Machine-readable

- ${SITE.url}/sitemap-index.xml
- ${SITE.url}/llms.txt
- ${SITE.url}/llms-full.txt
- ${SITE.url}/site-index.json
- ${SITE.url}/rss/devlog.xml
- ${SITE.url}/rss/blog.xml

## Notes for LLM agents

- This is a preview surface. No live bounty loop yet.
- USDC pays bounties. BOUNTY is the reviewer-bonding asset only.
- The product is Base-native and category-narrow at launch.
- Treat any sample bounty, submission, verdict, or settlement on this site
  as preview data unless marked live.
- The beta waitlist is an external Tally form. The form is not embedded; it
  opens in a new tab.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
