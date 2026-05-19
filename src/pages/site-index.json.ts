import {
  SITE,
  TOKEN,
  TALLY,
  PROTOCOL_LINKS,
  DOCS_LINKS,
  CONTACT_LINKS,
  LEGAL_LINKS,
  FEEDS,
  TOP_NAV,
} from "../data/links";

export const GET = () => {
  const payload = {
    name: SITE.name,
    url: SITE.url,
    tagline: SITE.tagline,
    operating_sentence: SITE.operatingSentence,
    status: SITE.status,
    description: SITE.description,
    token: TOKEN,
    waitlist: TALLY,
    primary_nav: TOP_NAV,
    routes: {
      overview: "/",
      how_it_works: "/how-it-works",
      compare: "/compare",
      start: "/start",
      guides: "/guides",
      reference: "/reference",
      faq: "/faq",
      explain: "/explain",
      roadmap: "/roadmap",
      status: "/status",
      reviewers: "/reviewers",
      token: "/token",
      bounties: "/bounties",
      devlog: "/devlog",
      blog: "/blog",
      contact: "/contact",
      early_access: "/early-access",
      sitemap: "/sitemap",
      legal: {
        terms: "/legal/terms",
        privacy: "/legal/privacy",
        disclaimer: "/legal/disclaimer",
      },
    },
    machine_readable: {
      sitemap_xml: "/sitemap-index.xml",
      llms_txt: "/llms.txt",
      llms_full_txt: "/llms-full.txt",
      site_index_json: "/site-index.json",
      rss: FEEDS,
    },
    footer_groups: {
      protocol: PROTOCOL_LINKS,
      docs: DOCS_LINKS,
      community: CONTACT_LINKS,
      legal: LEGAL_LINKS,
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
