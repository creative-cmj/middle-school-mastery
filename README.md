# My 8th Grade Workbook

A focused, original grade-8 workbook replacing the former grades-6–8 dashboard. The public URL stays the same. No mandatory diagnostic, calendar, XP, streaks, or mastery dashboard.

## Learning flow

Choose **Math**, **Science**, or **Language Arts**, then open a lesson:

1. **Learn** — several explanatory paragraphs about one skill.
2. **Examples** — two fully worked examples with the reasoning at each step.
3. **Together** — a scaffolded problem, hint, checking, and worked-solution support.
4. **Practice** — six different questions about the same skill, one at a time. Incorrect answers get a helpful hint; learners can retry or explicitly review the worked solution.
5. **Wrap up** — an original written explanation and a transparent self-check rubric.

First-try answers, corrected answers, and reviewed solutions are separate. Reviewing an answer never counts as independently correct. Written work is self-checked, not scored by keyword. Completing a lesson does not imply verified mastery.

## Scope

26 lessons: 10 Math, 8 Science, 8 Language Arts. This is a focused workbook collection, not a complete year's accredited curriculum or a copy of Spectrum. Science sequencing varies by school. All passages, examples, and lessons are original. Lessons live in `lessons/` and are explicit authored content, not randomized repeated prompts.

## Data preservation

`grade8-workbook.v1` stores the new workbook state locally: stage, current question, drafts, feedback history, notebook writing, checklist, and completion. The old `middle-school-mastery.v1` key is never overwritten or cleared. Download all saved work under **Saved work & backup** on the contents screen. There is no cross-device sync or automatic import feature.

Legacy `app.js`, `app-core.js`, and `styles.css` remain as historical source and are not loaded by the new entrypoint. `tests/core.test.mjs` exercises that legacy logic only; it is not evidence for the new workbook.

## Run

```bash
python3 -m http.server 9877 --bind 127.0.0.1
```

Open `http://127.0.0.1:9877/`.

## Verify

```bash
node tests/workbook-core.test.mjs
node tests/workbook-entry.test.mjs
node tests/workbook-content.test.mjs
node tests/workbook-browser.mjs
```

The browser test starts an isolated Chrome profile and a temporary local HTTP server, exercises all lesson flows, captures screenshots, checks desktop/mobile fit and browser errors, and shuts both down. It never uses the user's browser profile. Set `CHROME_PATH` if Chrome is not at the standard Windows location. Node 22+ is needed for the built-in WebSocket API.

For a deployed verification:

```bash
WORKBOOK_URL='https://creative-cmj.github.io/middle-school-mastery/?v=8-1' node tests/workbook-browser.mjs
```
