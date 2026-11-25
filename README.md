# The Houseplant Out-of-Office

![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)
![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/bee6en9/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)
![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/bee6en9/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)

An entry for the [make.fun bounty "The Houseplant Out-of-Office"](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047).

Referral code: `vfk2n47z`

## What it does

`main.ts` (Node, no external dependencies) writes a single out-of-office
auto-reply, as if a houseplant sent it, to `/output/entry.txt` — one line,
87 characters:

> Out of office: I've sat in this corner since 2019. The sun moved. I didn't. Send water.

The joke is the plant's own life: it cannot move, the sun can, and after
years of being ignored in the same corner it still just wants water.

## Run

```sh
node main.ts
```

Deterministic: every run writes the exact same line.
