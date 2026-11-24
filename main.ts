import { mkdirSync, writeFileSync } from "node:fs";

const line = "Overnight Memory Storage: we keep your agent's context window warm while it sleeps, so it wakes up remembering everything, $0.01 per thousand tokens.";

if (line.length > 200 || line.length < 1) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
