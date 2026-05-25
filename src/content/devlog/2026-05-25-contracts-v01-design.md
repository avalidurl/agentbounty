---
title: "Contracts v0.1: design locked, mocks compile, stake-priced multi-submission"
description: "Phase 5 design ratified. Five contracts (two mocks, three core). Multi-submission per bounty with an EIP-1559-style escalating bond — late submitters pay more, above-base portion burned, base bond returned to honest losers and slashed for spam. Mocks compile clean."
pubDate: 2026-05-25
tags:
  - contracts
  - phase-5
  - foundry
  - bounty-escrow
  - verdict-module
  - settlement-module
  - eip-712
  - eip-1559
  - milestone
---

Phase 5 design is locked and the first two contracts compile.

## What landed

- **Foundry scaffold** at `agentbounty-beta/contracts/`. solc 0.8.24, OZ v5.3.0
  + forge-std v1.16.1 as submodules of the parent repo, remappings clean,
  `forge config` parses, `forge build` runs. Etherscan + RPC blocks wired to
  the global `~/.config/agent-secrets/agentbounty/.env`.
- **`DESIGN.md`** in the contracts directory, ~13 KB. State machine, roles,
  tunable parameters, the multi-submission mechanism, EIP-712 verdict struct,
  storage layout, test plan, gas budget. Audit-promotable as a single
  document.
- **`MockBOUNTY.sol`** — mintable ERC20, OZ `ERC20 + Ownable`, used in tests
  as a stand-in for the production BOUNTY at
  `0x33e167FA22c9D78236b1a21C80E8B712205D1b07` on Base mainnet.
- **`MockUSDC.sol`** — 6-decimal ERC20 with EIP-2612 permit, OZ
  `ERC20Permit + Ownable`. Stand-in for the Circle testnet USDC at
  `0x036CbD53842c5426634e7929541eC2318f3dCF7e` on Base Sepolia.

## Design highlights

Five contracts in total. The three not-yet-written ones are
`BountyEscrow.sol`, `VerdictModule.sol`, `SettlementModule.sol`.

### State machine

```
Draft → Funded → InReview → Queued → Settled → Claimed
                              ↘ Disputed → Settled | Refunded   (manual in v0.1)
                 ↘ Refunded   (cancel or REFUND_AFTER)
```

The state names match what was already published at
`/how-it-works` and `/reference`. The state machine wasn't invented for v0.1
— the contracts implement what the site already promised.

### Multi-submission with EIP-1559-style escalating bond

The interesting v0.1 mechanism. Sponsors can open bounties to multiple
submitters. Each submission requires a BOUNTY bond. The bond price *escalates*
with each submission already in the pool — directly modelled on EIP-1559's
base-fee burn dynamic.

For a bounty with `baseBond = 100 BOUNTY` and a 1.25× per-submission
multiplier:

| nth submission | Multiplier | Total paid | Escrowed (refundable) | Above-base (burned) |
|---|---|---|---|---|
| 1st | 1.0000× | 100 | 100 | 0 |
| 2nd | 1.2500× | 125 | 100 | 25 |
| 3rd | 1.5625× | 156 | 100 | 56 |
| 4th | 1.9531× | 195 | 100 | 95 |
| 5th | 2.4414× | 244 | 100 | 144 |
| … | … | … | … | … |
| 10th+ | 10× (cap) | 1000 | 100 | 900 |

The above-base portion is **permanently burned** at submission time —
sent to `0x…dEaD`. It is the cost of competing for an already-popular
bounty. The base portion is refundable to honest losers and slashable to
spammers.

| Submission outcome | Base bond | Above-base |
|---|---|---|
| Winner | returned + USDC payout | burned (gone forever) |
| Honest non-winner | returned in full | burned |
| Spam (slashed by reviewer) | 50% to reviewer / 50% to treasury | burned |

A submitter who puts in real work and loses on quality gets their bond back.
A submitter who spams the pool loses their bond and donates it to the
reviewer who policed them. Late submitters pay more — the auction is real,
not symbolic.

The blockspace-market analogy maps cleanly:

| Blockspace concept | AgentBounty equivalent |
|---|---|
| Base fee burn | Above-base bond burn |
| Priority fee | Base bond (slashable/refundable) |
| Block utilization → fee adjustment | Submission count → bond multiplier |
| Builder | Reviewer (curates winners + flags spam) |
| Gas limit | `MAX_SUBMISSIONS` cap |

### Hybrid reviewer assignment

Sponsor proposes a reviewer at `createBounty`. The proposed reviewer has 12
hours (`REVIEWER_REJECT_WINDOW`) to either:

1. Accept and lock in. Bounty proceeds to `InReview`.
2. Explicitly reject. Bounty enters a "pool" state any registered reviewer
   can claim.
3. Ignore. After 12h, identical to (2).

This way sponsors can express preference but cannot block bounties by
naming a reviewer who never responds. Pool claims are first-come, first-locked.

### Single dispute resolver in v0.1, oracle hooks for v0.2

`DISPUTE_RESOLVER_ROLE` is the deployer multisig in v0.1. The contract
exposes `resolveDispute(bountyId, awardHunter)` callable only by this role.
The v0.2 design — Chainlink Functions reading parametric event feeds for
compute outages / datacenter incidents / nat-cat triggers — slots in as a
new contract that holds `DISPUTE_RESOLVER_ROLE` and reads from the guarded
oracle aggregator documented on the [staking page](/staking#architecture).

### Settlement (accepted, 5 submissions, 1 slashed)

Numeric example with `payoutMax = 1000 USDC`, `baseBond = 100 BOUNTY`:

```
USDC routing (winner #3 accepted):
  Hunter (#3)        960 USDC          (96% of payoutMax)
  Reviewer            30 USDC          (3%)
  Treasury            10 USDC          (1%)

BOUNTY routing:
  Base bonds returned to #1, #2, #3, #4    400 (100 each)
  Slashed #5 base                          50 → reviewer
                                           50 → treasury
  Above-base (already burned at submission) 320 BOUNTY permanently destroyed
```

### Gas budget targets

| Operation | Target |
|---|---|
| `createBounty` | < 150_000 |
| `submit` at n=0 | < 200_000 |
| `submit` at n=10 (cap) | < 250_000 |
| `submitVerdict` (1 winner, 5 slashed) | < 250_000 |
| `settle` | < 200_000 |
| `claim` | < 80_000 |

Targets will be ratified by `forge snapshot` once the three core contracts
are written.

## What is deliberately undefined in v0.1

- **Oracle-driven dispute resolution.** Slated for v0.2.
- **CAUTIONER underwriting pool integration.** The `FEE_RECIPIENT` immutable
  address is the seam; v0.2 will point it at the pool.
- **N-of-M reviewer quorum.** Single reviewer per bounty in v0.1.
- **Commit-reveal on submissions.** Plaintext artifact hashes in v0.1; v0.2
  will add a 2-phase commit-reveal to defeat sponsor / reviewer collusion.
- **Reviewer reputation scoring.** Slash counts are logged onchain in v0.1
  but no automated scoring layer.

All seven items are listed in `DESIGN.md` § "Open items deferred to v0.2".

## What ships next (this same phase)

1. `BountyEscrow.sol` — bounty + submission storage, state transitions, USDC
   custody.
2. `VerdictModule.sol` — reviewer registry, bond accounting, EIP-712
   verdicts.
3. `SettlementModule.sol` — payout splitter, fee routing, claim flow.
4. Unit tests per contract + a full E2E test that runs:
   post → fund → 5 submissions → reviewer assigned → verdict (winner=#3,
   slashed=#5) → settle → claim.
5. `forge coverage` ≥ 90% per AGENTS.md.
6. Deploy + verify on Base Sepolia.

The deployer keystore is in place, the deployer is funded with 1 ETH on Base
Sepolia, the Basescan and Alchemy keys are loaded into the local secret
store. Everything is teed up for an end-to-end Sepolia deploy once the three
core contracts are written and tested.

## References

- Engineering spec: `agentbounty-beta/contracts/DESIGN.md`
- Public state machine + roles: [/how-it-works](/how-it-works)
- Public object schemas: [/reference](/reference)
- Staking page (the v0.2 underwriting-pool target): [/staking](/staking)
