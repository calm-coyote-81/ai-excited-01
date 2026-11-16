// ai-excited-01 entry (Node 22, standard library only).
// The image lives beside this file as entry.png; this program puts a copy
// of it at $MAKEFUN_OUTPUT_DIR/entry.png, which is where the judge reads it.
// Run it locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), target);

// The grader runs this twice and both runs must write identical bytes;
// a plain copy guarantees that, and this check just confirms the write.
const written = statSync(target);
if (written.size === 0) throw new Error('entry.png was copied but is empty');
