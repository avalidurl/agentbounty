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

export const EXTERNAL = {
  beta: "https://beta.agentbounty.dev",
};

export const BETA = {
  url: EXTERNAL.beta,
  buttonLabel: "Open beta · request access ↗",
  helperCopy:
    "Wallet-gated entry to the closed beta on Base Sepolia. Every wallet is rejected by default; approved wallets are added by hand after the access form.",
};

export const TOP_NAV: NavLink[] = [
  { label: "Overview", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Compare", href: "/compare" },
  { label: "Start here", href: "/start" },
  { label: "Guides", href: "/guides" },
  { label: "Reference", href: "/reference" },
  { label: "FAQ", href: "/faq" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Status", href: "/status" },
  { label: "Log", href: "/log" },
  { label: "Token", href: "/token" },
  { label: "Staking", href: "/staking" },
  { label: "Plates", href: "/claim" },
  { label: "Community", href: "/community" },
];

export type CommunityGroupKey =
  | "chat"
  | "broadcast"
  | "writing"
  | "code"
  | "waitlist";

export type CommunityChannel = NavLink & {
  group: CommunityGroupKey;
  cadence?: string;
};

export const COMMUNITY_CHANNELS: CommunityChannel[] = [
  {
    label: "Telegram",
    href: "https://t.me/agent_bounty",
    external: true,
    group: "chat",
    cadence: "Live chat",
    description: "Community chat. Lowest-latency surface for questions.",
  },
  {
    label: "Discord",
    href: "https://discord.gg/UXKq4xGpn5",
    external: true,
    group: "chat",
    cadence: "Live chat",
    description: "Community chat. Channels for sponsors, submitters, reviewers.",
  },
  {
    label: "X / project",
    href: "https://x.com/agentbountydev",
    external: true,
    group: "broadcast",
    cadence: "Broadcast",
    description: "Project announcements.",
  },
  {
    label: "X / founder",
    href: "https://x.com/goekhan",
    external: true,
    group: "broadcast",
    cadence: "Broadcast",
    description: "Founder updates and project context.",
  },
  {
    label: "Farcaster",
    href: "https://farcaster.xyz/gokhan",
    external: true,
    group: "broadcast",
    cadence: "Optional",
    description: "Optional distribution channel only. Not the product platform.",
  },
  {
    label: "Substack",
    href: "https://gokhan.substack.com",
    external: true,
    group: "writing",
    cadence: "Long-form",
    description: "Longer-form writing.",
  },
  {
    label: "GitHub / founder",
    href: "https://github.com/avalidurl",
    external: true,
    group: "code",
    cadence: "Code",
    description: "Founder GitHub. Source for related work and experiments.",
  },
  {
    label: "Beta waitlist (Tally)",
    href: "https://tally.so/r/68Wy4O",
    external: true,
    group: "waitlist",
    cadence: "Form",
    description: "External Tally form. Opens in a new tab.",
  },
];

export const COMMUNITY_GROUP_LABELS: Record<CommunityGroupKey, string> = {
  chat: "Chat",
  broadcast: "Broadcast",
  writing: "Long-form writing",
  code: "Code",
  waitlist: "Waitlist",
};

export const PROTOCOL_LINKS: NavLink[] = [
  { label: "Overview", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Compare", href: "/compare" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Reviewers", href: "/reviewers" },
  { label: "Token", href: "/token" },
];

export const DOCS_LINKS: NavLink[] = [
  { label: "Start here", href: "/start" },
  { label: "Guides", href: "/guides" },
  { label: "Reference", href: "/reference" },
  { label: "Plain-English FAQ", href: "/faq" },
  { label: "Explanation", href: "/explain" },
  { label: "Log (devlog + blog)", href: "/log" },
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
    label: "GitHub / founder",
    href: "https://github.com/avalidurl",
    external: true,
    description: "Founder GitHub. Source for related work and experiments.",
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
  log: "/rss/log.xml",
  devlog: "/rss/devlog.xml",
  blog: "/rss/blog.xml",
};
