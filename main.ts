// gta6-meme-x-01 entry program (Node 22, standard library only).
// The entry is the X post itself; this program hands the grader the post's
// address by copying POST.json from the repository root to the output dir.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
  console.log('POST.json copied to output.');
} catch (err) {
  console.error(`could not copy POST.json: ${(err as Error).message}`);
  process.exit(1);
}
