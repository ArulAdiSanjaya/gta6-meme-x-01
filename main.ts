// gta6-meme-x-01 entry program (Node 22, standard library only).
// The entry is the X post itself; this program hands the grader the post's
// address by copying POST.json from the repository root to the output dir.
// Before copying, it validates POST.json: it must parse and carry an
// https x.com status URL, so a malformed entry fails loudly here instead
// of silently handing the grader a bad address.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function readPostUrl(dir: string): string {
  const raw = readFileSync(join(dir, 'POST.json'), 'utf8');
  const post = JSON.parse(raw) as { url?: unknown };
  if (typeof post.url !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(post.url)) {
    throw new Error(`POST.json does not name an X post: ${raw.trim()}`);
  }
  return post.url;
}

try {
  const url = readPostUrl(botDir);
  mkdirSync(outDir, { recursive: true });
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
  console.log(`POST.json copied to output; entry post: ${url}`);
} catch (err) {
  console.error(`entry program failed: ${(err as Error).message}`);
  process.exit(1);
}
