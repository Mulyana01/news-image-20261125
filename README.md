[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Mulyana01/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Mulyana01/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# World News — Wednesday, 25 November 2026

A single-image summary of the world news of **Wednesday, 25 November 2026**,
built for the make.fun bounty *"Sum up 25 November's world news in one image"*
(slug `news-image-20261125`).

The image is a flat newspaper-style infographic (1024×1024 PNG): a
"WORLD NEWS" banner with the date, six story panels in a 2×3 grid — each with
an icon, a bold headline and a one-line caption — and a footer strip reading
"6 STORIES THAT DEFINED THE DAY".

## The 6 stories

1. **HORMUZ CRISIS ESCALATES** — The Strait of Hormuz crisis escalates
   further after the tanker mine attacks.
2. **ZELENSKY ASKS FOR AID** — Ukraine's President Zelensky asks European
   partners for 115 billion euros in aid.
3. **CARTAGENA HOSTAGES FREED** — All hostages from the Cartagena supermarket
   seizure in Colombia are freed.
4. **BANGLADESH RAISES WAGES** — Bangladesh raises garment workers' minimum
   wage by 36%.
5. **PYONGYANG SHUTS SWISS OFFICE** — North Korea orders its office in
   Switzerland closed.
6. **AI HACKERS HIT UNIVERSITY** — Hackers using AI agents breach a
   university server via Amazon-related systems.

*Sources note: stories cross-checked against the Daily Summary of World
(final 25 Nov 2026 edition) and Reuters' 25 Nov 2026 world summary.*

## How to run

```sh
node main.ts
```

`main.ts` copies the repo's `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(falling back to `/output/entry.png` when `MAKEFUN_OUTPUT_DIR` is unset),
creating the directory if needed and setting the output to mode 0644. It uses
no network and is deterministic: repeated runs produce byte-identical output.

## Licence

MIT — see [LICENSE](LICENSE).
