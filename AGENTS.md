# AGENTS.md — agentbounty repo conventions

Repo-local conventions for the AgentBounty project. These override personal preferences in `~/AGENTS.md` when they conflict.

## Secrets policy

All sensitive material in this project follows a strict local-first policy.

| Tier | Examples | Where it may live |
|---|---|---|
| **Strict-local-only** | Private keys, BIP-39 mnemonics, production API keys with write scope | `.env` files in the repo working tree only. `.env` is gitignored. Never copied to any cloud secret manager. Never pasted into chat. |
| **CI-acceptable** | Same items above, when CI must act on the user's behalf | **GitHub Actions encrypted secrets only.** Set via repo Settings → Secrets and variables → Actions. Never any third-party syncer. |
| **Edge-runtime-acceptable** | Public RPC URLs (semi-secret), contract addresses, telemetry endpoints, public IPFS gateway URLs | Cloudflare env vars on the Pages/Containers project, or the same `.env` file. |
| **Public** | Verified contract addresses, ABIs, public RPC fallbacks, IPFS CIDs | Committed to the repo. |

**Forbidden everywhere in this project:**

- 1Password, Doppler, Vault, AWS Secrets Manager, GCP Secret Manager, Azure Key Vault
- Any service that "syncs" secrets across machines
- Any chat tool, gist, paste site, or screenshot
- Hard-coding secrets in committed files (including `.env.example` — placeholders only)

**Every `.env` must have an `.env.example` sibling** with the same keys and placeholder values, committed to the repo. The example file is how new contributors discover what they need to obtain.

## Project structure

| Repo | Purpose | Host |
|---|---|---|
| `avalidurl/agentbounty` | Main public site at `agentbounty.dev` | Cloudflare Pages (free tier) |
| `avalidurl/agentbounty-beta` | Closed-beta gate + Sepolia test app at `beta.agentbounty.dev` | Cloudflare Pages + Cloudflare Containers (Workers Paid) |

The two repos are independent — no shared CI, no shared node_modules, no monorepo tooling. They cross-link via a single hardcoded URL in `src/data/links.ts` of the main repo.

## Networks

| Env | Chain | Chain ID | RPC |
|---|---|---|---|
| Production | Base mainnet | 8453 | Public + Alchemy backup |
| Testnet trial | Base Sepolia | 84532 | Alchemy free tier |
| Local | Anvil fork of Base Sepolia | 31337 | `http://127.0.0.1:8545` |

## Stack baseline

- **Frontend:** Astro + minimal React islands for wallet interaction. No Next.js, no SvelteKit, no Remix.
- **Wallet (gate):** viem direct (`eth_requestAccounts`). No RainbowKit at the gate.
- **Wallet (gated app):** RainbowKit + wagmi + viem.
- **Contracts:** Foundry. OpenZeppelin for AccessControl / SafeERC20 / ReentrancyGuard. Solidity ^0.8.24.
- **Indexer:** Ponder on Cloudflare Containers (`lite` instance, always-on).
- **Forms:** Tally embed. No native form intake until v0.2.
- **LLM gateway:** LiteLLM (self-host or use as library) over {OpenAI, Anthropic, Gemini, Grok, DeepSeek, Kimi, Qwen, GLM, MiniMax}. No single-provider lock-in.

## Coding rules

- TypeScript strict, no `any` without an inline justification comment.
- No comments explaining what the code does — only comments for non-obvious constraints, invariants, or workarounds.
- Solidity: explicit visibility everywhere, CEI pattern on every state-mutating function, no inline assembly without a security note.
- Tests are required for every contract function that mutates state. `forge coverage` target: ≥90% lines.
- Every Astro page that does wallet interaction must guard the network before sending a tx.

## What gets pushed where

- Devlog + blog posts: `avalidurl/agentbounty` only (the main public surface).
- Contracts: `avalidurl/agentbounty-beta/contracts/`, audit-promotable to its own repo later.
- Persona droids and the swarm workflow: `avalidurl/agentbounty-beta/.factory/` and `.github/workflows/bounty-swarm.yml`.
- Memex/personal commentary: separate `gokhan-memex` repo (not this project).
