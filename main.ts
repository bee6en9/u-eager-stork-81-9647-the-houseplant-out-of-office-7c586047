// The Houseplant Out-of-Office — make.fun entry (program/v1)
// Writes a single out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. Fully deterministic: the same line every run.
//
// The line (87 chars): a houseplant stuck in one corner since 2019.
// The joke is the plant's own life — it cannot move, the sun can,
// and after seven years of being ignored it still just wants water.
// Three beats: setup (corner since 2019) -> twist (the sun moved, I
// didn't) -> plea (send water). No office cliches, no meta address
// to the judge, first-person plant voice throughout.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: I've sat in this corner since 2019. The sun moved. I didn't. Send water.";

// Gate self-check: the entry must be 1-120 UTF-8 characters, not only
// whitespace. Fail loudly instead of writing an invalid line.
if (ENTRY.length < 1 || ENTRY.length > 120 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} is outside 1-120 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
