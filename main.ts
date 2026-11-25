import { mkdirSync, writeFileSync } from "node:fs";

// The program's only job: write one short original motto to /output/entry.txt.
const MOTTO =
  "I hallucinate so confidently, even the bug reports apologize to me.";

try {
  const motto = MOTTO.trim().slice(0, 200);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", motto, "utf8");
  console.log(`Wrote ${motto.length} characters to /output/entry.txt`);
} catch (error) {
  console.error("Failed to write entry:", error);
}
