#!/usr/bin/env node

// /showfolio bundles a copy of /showfolio-slim (skills/showfolio/slim.md) so its Opus 5.5 hand-off
// works no matter how /showfolio was installed. The two files must stay identical.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = "skills/showfolio-slim/SKILL.md";
const copy = "skills/showfolio/slim.md";

const [a, b] = await Promise.all([source, copy].map((p) => readFile(path.join(root, p), "utf8")));

if (a !== b) {
  console.error(`${copy} is out of sync with ${source}. Fix it with:\n  cp ${source} ${copy}`);
  process.exit(1);
}

console.log(`${copy} matches ${source}.`);
