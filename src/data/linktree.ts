import { SITE } from "./links";

export type LinkItem = {
  label: string;
  href?: string;
  external?: boolean;
  note?: string;
  pending?: boolean;
  copy?: string;
};

export type LinkSection = {
  id: string;
  title: string;
  items: LinkItem[];
};

export type NameGroup = {
  id: string;
  label: string;
  names: string[];
};

export type WalletItem = {
  chain: string;
  detail?: string;
  addresses?: string[];
  pending?: boolean;
};

export const LINKTREE = {
  name: SITE.name,
  tagline: SITE.tagline,
  url: "https://links.agentbounty.dev",
  description:
    "Every AgentBounty link in one place — the protocol, chats, forums, blogs, the Plates art drop, and founder accounts.",
};

const AB = "https://agentbounty.dev";

export const LINK_SECTIONS: LinkSection[] = [
  {
    id: "agent-bounty",
    title: "Agent Bounty",
    items: [
      { label: "Homepage", href: AB, external: true },
      { label: "FAQ", href: `${AB}/faq`, external: true },
      { label: "Roadmap", href: `${AB}/roadmap`, external: true },
      { label: "Beta App", href: "https://beta.agentbounty.dev", external: true, note: "Base Sepolia" },
      { label: "Staking", href: `${AB}/staking`, external: true },
      { label: "Airdrops", href: `${AB}/airdrops`, external: true },
      {
        label: "DexScreener",
        href: "https://dexscreener.com/base/0xc4b46bec73e149f82d4b051a32f9527032f1b40386851ca816a397b27610f7e4",
        external: true,
        note: "BOUNTY · Base",
      },
      {
        label: "CoinGecko",
        href: "https://www.coingecko.com/en/coins/agentbounty-token?chart=type%3Dprice%26mode%3Dline%26timeframe%3Dmax",
        external: true,
      },
      { label: "GitHub", href: "https://github.com/avalidurl/agentbounty", external: true },
      { label: "X", href: "https://x.com/agentbountydev", external: true },
    ],
  },
  {
    id: "chats",
    title: "Chats",
    items: [
      { label: "Telegram", href: "https://t.me/agent_bounty", external: true },
      { label: "Discord", href: "https://discord.gg/UXKq4xGpn5", external: true },
      {
        label: "Slack",
        href: "https://join.slack.com/t/marketresearchunit/shared_invite/zt-3yu53l32u-KkPaAJsK2iucV7N~8WrjSQ",
        external: true,
      },
    ],
  },
  {
    id: "forums",
    title: "Forums",
    items: [
      { label: "Reddit", href: "https://www.reddit.com/r/agentbountydev/", external: true },
      { label: "Farcaster", href: "https://farcaster.xyz/~/channel/agentbounty", external: true },
    ],
  },
  {
    id: "blogs",
    title: "Blogs",
    items: [
      { label: "Devlog", href: `${AB}/log`, external: true },
      { label: "Founder's Substack", href: "https://gokhan.substack.com", external: true },
      { label: "Founder's Medium", href: "https://goekhanturhan.medium.com/", external: true },
      { label: "Founder's Paragraph", href: "https://paragraph.com/@gokhan", external: true },
    ],
  },
  {
    id: "art",
    title: "Art",
    items: [
      { label: "Plates", href: `${AB}/claim`, external: true, note: "Homepage" },
      { label: "Plates · OpenSea", href: "https://opensea.io/collection/agent-bounty-plates", external: true },
      {
        label: "Plates token · DexScreener",
        href: "https://dexscreener.com/base/0xc3fb623b0db5c149ab12f84ef041f52e9b123171504a3fdf41985ac96f73001b",
        external: true,
      },
    ],
  },
  {
    id: "founder",
    title: "Founder Accounts",
    items: [
      { label: "Homepage", href: "https://gokhanturhan.com", external: true },
      { label: "X", href: "https://x.com/goekhan", external: true },
      { label: "Farcaster", href: "https://farcaster.xyz/gokhan", external: true },
      { label: "Telegram", href: "https://t.me/goekhanturhan", external: true },
      { label: "Lens", href: "https://firefly.social/profile/lens/gokhaneth", external: true },
      { label: "Reddit", href: "https://www.reddit.com/user/toombak", external: true },
      { label: "Discord", copy: "goekhanturhan" },
      {
        label: "Human Passport",
        href: "https://base.easscan.org/address/0x36de990133D36d7E3DF9a820aA3eDE5a2320De71",
        external: true,
      },
      { label: "Talent Score", href: "https://talent.app/avalidurl", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/goekhanturhan/", external: true },
      { label: "Icebreaker", href: "https://app.icebreaker.xyz/profiles/N0nU43KFOTZ8geAxTRQAW", external: true },
      { label: "EFP · Founder", href: "https://efp.app/0x36de990133d36d7e3df9a820aa3ede5a2320de71", external: true },
      {
        label: "EFP · Agent Bounty",
        href: "https://efp.app/0x15813fbeac0ac58fa087c459639f8dc64a9b93c3?ssr=false",
        external: true,
      },
    ],
  },
];

export const NAME_GROUPS: NameGroup[] = [
  {
    id: "ens",
    label: "ENS",
    names: ["gokhan.eth", "gokhanturhan.eth", "gökhanturhan.eth", "gigabvgatti.eth"],
  },
  {
    id: "basenames",
    label: "Basenames",
    names: ["gokhanturhan.base.eth", "gökhanturhan.base.eth"],
  },
];

export const WALLETS: WalletItem[] = [
  {
    chain: "EVM",
    detail: "Ethereum · Base · L2s",
    addresses: [
      "0x36de990133D36d7E3DF9a820aA3eDE5a2320De71",
      "0x15813fBeac0Ac58FA087C459639F8DC64a9B93c3",
      "0xB13Fb67859bC818a7b9Eb7f1380274492B6D648F",
    ],
  },
  {
    chain: "Solana",
    detail: "SOL",
    addresses: [
      "2GvLgz2ovzNkrYEzJsZ1kRovXjVQnmm7WRWFd3vFzsma",
      "J1ALikLy5TZ9tqZq5zxSem5P9G4Wo6fXXWSGGjEvd9Pg",
    ],
  },
  {
    chain: "Bitcoin",
    detail: "BTC",
    addresses: ["bc1q8emnjcdj6hwyfg074c0sulr739gvmwula9359n"],
  },
  {
    chain: "Zcash",
    detail: "ZEC · shielded",
    addresses: [
      "u1num9mvkzl4c2u8p68pzwzw6yd86v95lfsljp33keuyphracys9hv3hm8280v84ut2nxgqcxjclg4gd7ced8xyvplwsy9l807le8cyuxkpw0e7xkv3vz85k7qp027gxlyylqj3reqx55qskwf5r3y27twdlwe6wlngjx8nyrhnv5m2fvu",
    ],
  },
];
