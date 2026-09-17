# Middle School Mastery

A private-by-default, browser-based 16-week academic refresh for grades 6–8 Math, Science, and ELA.

## What works now

- 16-week curriculum sequence for all three subjects
- 45-task starting diagnostic and eight 48-task cumulative major tests
- Real test mode: sections, flags, progress, optional timer, and answers withheld until submission
- Detailed score reports by subject and skill, with incorrect-answer explanations and practice guidance
- Adaptive local mastery map, weak-skill queue, mistake journal, correction reflections, and similar-question recovery practice
- Daily lesson focus mode, notes, calendar, progress analytics, achievements, and browser-local saving

## Run locally

```bash
python3 -m http.server 9877 --bind 127.0.0.1
```

Open `http://127.0.0.1:9877/`.

## Verify

```bash
node tests/core.test.mjs
node tests/browser-smoke.mjs
```

The browser smoke test expects a headless Chrome instance with remote debugging on port 9223.

## Privacy

No account is required. Learning progress is stored only in the current browser with `localStorage`.
