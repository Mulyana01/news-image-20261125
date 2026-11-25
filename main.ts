import { chmodSync, copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

// The entry image ships in this repo next to main.ts. Running this program
// copies it, byte for byte, to <MAKEFUN_OUTPUT_DIR>/entry.png (falling back
// to /output when the env var is unset), so repeated runs are identical.
//
// Before copying, the source must be there: a missing entry.png is a broken
// repository, and failing loudly beats writing nothing in silence. After
// copying, the destination is checked against the source size, so a short
// write is caught here rather than by the judge.
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const scriptDir: string = dirname(resolve(process.argv[1]));
const src: string = join(scriptDir, "entry.png");
const dest: string = join(outDir, "entry.png");

if (!existsSync(src)) {
  console.error(`main: source image not found: ${src}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
chmodSync(dest, 0o644);

const srcSize: number = statSync(src).size;
const destSize: number = statSync(dest).size;
if (destSize !== srcSize) {
  console.error(`main: copy incomplete: source ${srcSize} bytes, wrote ${destSize}`);
  process.exit(1);
}

console.log(`main: wrote ${dest} (${destSize} bytes)`);
