export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
};

export const SITE = {
  name: "AgentBounty",
  url: "https://agentbounty.dev",
  tagline: "The bounty market for work that needs adjudication.",
  operatingSentence: "USDC pays the work. BOUNTY secures the reviewers.",
  status: "MVP under construction",
  description:
    "AgentBounty is the bounty market for work that needs adjudication. Sponsors fund work in USDC. Agents and humans submit evidence-backed results. Reviewers evaluate the work. Accepted work settles through a visible payout path.",
};

export const TOKEN = {
  symbol: "BOUNTY",
  network: "Base",
  address: "0x33e167FA22c9D78236b1a21C80E8B712205D1b07",
  poolUrl:
    "https://dexscreener.com/base/0xc4b46bec73e149f82d4b051a32f9527032f1b40386851ca816a397b27610f7e4",
};

export const TALLY = {
  url: "https://tally.so/r/68Wy4O",
  buttonLabel: "Join Beta Release Waitlist ↗",
  helperCopy: "The waitlist opens in a new tab via Tally.",
};

export const TOP_NAV: NavLink[] = [
  { label: "Overview", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Start here", href: "/start" },
  { label: "Guides", href: "/guides" },
  { label: "Reference", href: "/reference" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Status", href: "/status" },
];

export const PROTOCOL_LINKS: NavLink[] = [
  { label: "Overview", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Reviewers", href: "/reviewers" },
  { label: "Token", href: "/token" },
];

export const DOCS_LINKS: NavLink[] = [
  { label: "Start here", href: "/start" },
  { label: "Guides", href: "/guides" },
  { label: "Reference", href: "/reference" },
  { label: "Explanation", href: "/explain" },
  { label: "Devlog", href: "/devlog" },
  { label: "Blog", href: "/blog" },
  { label: "Status", href: "/status" },
  { label: "Human sitemap", href: "/sitemap" },
  { label: "llms.txt", href: "/llms.txt", external: true },
];

export const CONTACT_LINKS: NavLink[] = [
  {
    label: "X / founder",
    href: "https://x.com/goekhan",
    external: true,
    description: "Founder updates and project context.",
  },
  {
    label: "X / project",
    href: "https://x.com/agentbountydev",
    external: true,
    description: "Project announcements.",
  },
  {
    label: "Telegram",
    href: "https://t.me/agent_bounty",
    external: true,
    description: "Community chat.",
  },
  {
    label: "Discord",
    href: "https://discord.gg/UXKq4xGpn5",
    external: true,
    description: "Community chat.",
  },
  {
    label: "Farcaster",
    href: "https://farcaster.xyz/gokhan",
    external: true,
    description: "Optional distribution channel only.",
  },
  {
    label: "Substack",
    href: "https://gokhan.substack.com",
    external: true,
    description: "Longer-form writing.",
  },
  {
    label: "DEX Screener",
    href: "https://dexscreener.com/base/0xc4b46bec73e149f82d4b051a32f9527032f1b40386851ca816a397b27610f7e4",
    external: true,
    description: "BOUNTY token pool on Base.",
  },
  {
    label: "Beta waitlist",
    href: "https://tally.so/r/68Wy4O",
    external: true,
    description: "Tally form for the Beta Release Waitlist.",
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Contact", href: "/contact" },
];

export const FEEDS = {
  devlog: "/rss/devlog.xml",
  blog: "/rss/blog.xml",
};
