// The One-Line Cat Joke That Lands — a single joke about cats, one line
// under 200 characters, setup and turn. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "My cat knocked my laptop off the table, watched me pick it up, and knocked it off again — she's not clumsy, she's running QA and I keep failing.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
