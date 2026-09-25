# My 8th Grade Learning Program

A browser-local Grade 8 learning program for **every Monday through Friday from September 24, 2026 through June 11, 2027**. It contains a daily plan for Math, Science, Language Arts, and U.S. History/Civics/Geography. It uses original material and is not affiliated with or copied from Spectrum.

## Full school-year plan

- **187 scheduled weekdays**; Saturdays and Sundays are voluntary catch-up/review time.
- **676 regular lessons**: 169 in each subject.
- **18 biweekly assessments**, each with four subject sections.
- **13,520 regular lesson questions**: 20 per lesson, in a Foundation → Normal → Intermediate → Application → Challenge progression.
- **1,152 assessment questions**: 16 new questions in each subject section, separate from regular practice prompts.
- **14,672 total automatically checkable questions** across lesson practice and assessments.

Every regular lesson includes objectives, a prerequisite review, three teaching paragraphs, vocabulary, two worked examples, common mistakes, 20 questions, immediate answer explanations, and a self-check writing wrap-up. Assessment answers remain hidden until submission.

## How daily learning works

1. Open **Today** for the four subject cards and the `0/20`-style question counts.
2. Open a card. Teaching, vocabulary, worked examples, and common mistakes appear **before** practice.
3. Complete the 20-question practice. Feedback and explanations appear after each answer.
4. A biweekly assessment replaces regular lessons after every ten school weekdays. It has Math, Science, ELA, and History sections; answers are graded only when submitted.
5. Use **Calendar** to view any planned weekday and **Progress** to see saved question evidence and skills needing review.

Missed sessions enter a separate catch-up list. The normal next weekday stays at four sessions rather than turning into an overloaded make-up day.

## Curriculum progression

- **Math:** focused 6th/7th prerequisite repair, rational numbers and exponents, algebraic expressions and equations, functions and systems, geometry/transformations, data/probability, and an Algebra I bridge.
- **Science:** evidence and measurement foundations, matter/life/Earth prerequisite repair, physical science, Earth and space systems, and controlled-experiment reasoning.
- **ELA:** targeted sentence/reading repair, close reading, language, analytical and argument writing, research, media literacy, and a Grade 9 bridge.
- **History:** Michigan-style Grade 8 U.S. history and civics: source/map foundations, Indigenous North America and colonization as context, Revolution/founding, early republic and expansion, sectionalism/reform, Civil War, Reconstruction, and U.S.-history-to-1877 civic/economic/geographic synthesis. District history scope varies, so every History lesson shows its alignment label.

## Local data and preservation

Current program data is stored only in this browser under `middle-school-year.v2`. It saves answers, lesson stages/completion, catch-up work, skill evidence, and assessment results. Earlier records under `grade8-workbook.v1` and `middle-school-mastery.v1` are **never modified or erased**.

There is no account or cross-device sync yet; use the same browser and device for continuity.

## Run locally

```bash
python3 -m http.server 9877 --bind 127.0.0.1
```

Open `http://127.0.0.1:9877/`.

## Verify

```bash
node tests/year-core.test.mjs
node tests/year-program.test.mjs
node tests/year-content-audit.test.mjs
node tests/year-browser.mjs
node tests/workbook-core.test.mjs
node tests/exponent-answer.test.mjs
```

The year-content audit verifies every regular lesson count, 20-question difficulty distribution, unique question prompts, one valid answer option, new assessment prompts, and teaching text. The browser test verifies the live teach-first flow at desktop/mobile-safe dimensions using an isolated Chrome profile.
