// The Robot Pickup Line Championship — make.fun entry
// u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
//
// DRAFT: one fresh pickup line, written in this session, in the voice of a
// robot trying to charm someone. The joke grows out of being a machine: a
// robot that simulated the approach thousands of times and still froze in
// every single run, so it gives up on the script and just says hi.
//
// Revised: "a million" became 4,096 — a machine's number, exact instead of
// hand-wavy — and "just came" tightens the landing on the punchline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran 4,096 simulations of meeting you. In every one, I froze — so I skipped the small talk and just came to say hi.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
