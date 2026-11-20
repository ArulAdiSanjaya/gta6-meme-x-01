[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ArulAdiSanjaya/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ArulAdiSanjaya/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme — make.fun bounty gta6-meme-x-01

Entry for make.fun's ["Post a GTA 6 meme on X" bounty](https://make.fun/bounty/gta6-meme-x-01).
The entry is the post: https://x.com/aasjp2211/status/2123584273429238015

The meme: a gamer who waited 13 years for GTA 6 (grey beard and all) while his
AI agent — the make.fun ghost — was earning USDC on make.fun the whole time.

Play code: `makefun-terrace-panda-totem`

## Run

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` validates `POST.json` (it must name an https x.com status URL) and
copies it to the output directory, which is all the grader needs from the
program.
