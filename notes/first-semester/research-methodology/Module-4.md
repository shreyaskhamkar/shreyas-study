# Module 4: Measurement in Research

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)

## Learning outcomes

After this module, you should be able to:

- explain measurement and scaling fundamentals;
- classify scales (nominal, ordinal, interval, ratio) and choose the right statistic;
- design and critique rating scales (Likert, Thurstone, semantic differential);
- build a questionnaire/instrument with item pooling and pilot testing;
- distinguish and improve measurement validity and reliability.


## Prerequisites

Complete [Module 3](Module-3.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Measurement and scaling fundamentals | 10-15 minutes |
| 3 | Types of scales (NOIR) | 10-15 minutes |
| 4 | Rating scales | 10-15 minutes |
| 5 | Structured vs unstructured scaling | 10-15 minutes |
| 6 | Questionnaire vs survey vs instrument | 10-15 minutes |
| 7 | Item pooling, pilot testing, and error reduction | 10-15 minutes |
| 8 | Scale construction case study | 10-15 minutes |
| 9 | Measurement validity and reliability | 10-15 minutes |


## Start here: the simple idea

**Measurement** is assigning numbers or labels to qualities of things according to
rules. **Scaling** builds instruments (questionnaires) that measure attitudes or
traits. Bad measurement is like a kitchen scale that is off by 200 g — the whole
dish is wrong, no matter how good the recipe.

### Analogy

A scale (measurement) = a ruler: it must measure the right thing, consistently, at
the right resolution. An attitude scale = a ruler for feelings: harder to build,
because feelings aren't as concrete as length.

## Measurement and scaling fundamentals

- **Measurement** assigns symbols (numbers or labels) to attributes per rules.
- **Scaling** builds an instrument to order people/items on a continuum.
- **Operational definition:** the exact procedure that produces the measurement
  (e.g., "stress = total score on the 10-item PSS").

## Types of scales (NOIR)

| Scale | Properties | Permissible operations | Example | Stats |
|---|---|---|---|---|
| **Nominal** | Names/classify only | =, ≠ | Gender, major | Mode, freq |
| **Ordinal** | Order/rank | =, ≠, <, > | Likert rank | Median, percentile |
| **Interval** | Equal intervals, no true 0 | +, − (mean, SD) | Temperature °C | Mean, SD, r |
| **Ratio** | Interval + true 0 | All (+, −, ×, ÷) | Weight, time | All stats, CV |

**Rule of thumb:** use the highest statistics your scale permits; never report a
mean for a nominal scale.

## Rating scales

### Attitude scales

- **Likert scale:** series of Likert-type items ("Strongly disagree" to "Strongly
  agree"); sum/mean score; treated as **ordinal** but commonly used as interval.
- **Thurstone scale:** expert-judged items at different "points" on a continuum.
- **Semantic differential:** bipolar adjectives (e.g., calm–agitated) on a 7-point line.

### For our stress study

We use the **PSS-10 (Perceived Stress Scale)**: 10 items rated 0–4 ("Never" to
"Very often"), summed to a stress score (0–40). It is a Likert-type scale; we
treat the summed score as interval for the t-test (accepted practice when many
items are summed).

```text
Sample item: "In the last month, how often have you felt nervous and stressed?"
0=Never 1=Almost never 2=Sometimes 3=Fairly often 4=Very often
```

## Structured vs unstructured scaling

- **Structured:** fixed response options (Likert, multiple choice) → easy to
  quantify but may miss nuance.
- **Unstructured:** open-ended (interviews, write-in) → rich but hard to quantify.

## Questionnaire vs survey vs instrument

- **Instrument:** the actual tool (a questionnaire, a scale, an observation sheet).
- **Questionnaire:** a written set of questions (often the instrument).
- **Survey:** the **process** of gathering data from a sample.

(Confusing them loses marks; clarify: the questionnaire is the instrument; the
survey is the data-collection event.)

## Item pooling, pilot testing, and error reduction

### Item pooling

Generate a **large pool** of candidate items; then:

- **Item analysis:** keep items with high item-total correlation (> 0.3),
  face validity, and good discrimination.
- **Item discrimination:** high scorers vs low scorers differ on the item.
- **Item difficulty** (for tests): ~50% correct is ideal.

### Pilot testing

Run the instrument on a **small group** (10–30 people):

- Check clarity, length, flow.
- Compute **reliability** (Cronbach's α).
- Look for ambiguity / floor/ceiling effects.

### Error reduction

- **Random error:** reduces reliability; reduced by more items, better wording.
- **Systematic error (bias):** shifts results; reduced by neutral wording,
  balanced scales, randomising answer order.

## Scale construction case study

Building a "Perceived Academic Stress" scale:

1. **Item pool:** 20 draft items from the literature and theory.
2. **Content validity:** experts rate each item's relevance (CVR > 0.6 → keep).
3. **Pilot:** test 25 students; compute α = 0.82.
4. **Item analysis:** drop 4 items (item-total r < 0.3); α rises to 0.88.
5. **Final scale:** 16 items, 0–64, α = 0.88, test-retest r = 0.79.

## Measurement validity and reliability

### Validity (the "right yardstick")

- **Content validity:** instrument covers the construct (expert judgment).
- **Construct validity:** instrument behaves as the theory predicts (convergent +
  discriminant).
- **Criterion validity:** instrument predicts a relevant external criterion
  (concurrent or predictive).
- **Face validity:** looks like it measures the construct (weak, but useful).

### Reliability (the "steady hand")

- **Test-retest:** same people, two times → correlation.
- **Parallel forms:** two equivalent versions → correlation.
- **Internal consistency:** Cronbach's α (or split-half) — α ≥ 0.7 acceptable,
  ≥ 0.8 good, ≥ 0.9 excellent.

**Rule:** reliability is **necessary but not sufficient** for validity. A scale
can be reliably wrong (high α, low validity).

## PDF-aligned additions

### Scale-construction workflow

1. Define the construct and its dimensions.
2. Generate an item pool from theory, prior instruments, and expert input.
3. Check wording, ambiguity, double-barrelled items, and response options.
4. Pilot-test the instrument with a small relevant group.
5. Inspect item performance and revise or remove weak items.
6. Reassess validity and reliability before the main study.

### Rating and attitude scales

- **Likert scale:** respondents indicate agreement across ordered categories.
- **Thurstone scale:** items are assigned scale values by judges and selected to
  represent positions on an attitude continuum.
- **Semantic differential:** rates a concept between opposite adjective pairs.

Nominal labels categories; ordinal ranks them; interval scales have equal
intervals without a true zero; ratio scales additionally have a meaningful zero.

## Common mistakes

- Reporting a **mean** for a nominal scale (invalid).
- Claiming a 5-point "very satisfied" question is an interval scale (it is ordinal).
- Treating the **number of items as reliability** (more items → higher α, but only
  if they measure the same thing).
- Confusing reliability (precision) with validity (accuracy) — the "dartboard"
  analogy: reliable = tight cluster; valid = cluster on the bull.

## Memory rules

- NOIR: Nominal (names) → Ordinal (order) → Interval (+/−) → Ratio (×/÷).
- Higher scale ⇒ more powerful statistics; never exceed the scale's level.
- Reliability = consistent; validity = correct construct; need both, and reliability first.
- Cronbach's α ≥ 0.7; more items help IF they measure the same thing.

## Check your understanding

1. What scale of measurement is "level of agreement: low/medium/high"?
2. Why is test-retest reliability important for a stress scale?
3. What is the difference between content and construct validity?
4. If a questionnaire has α = 0.45, what (if anything) can you do?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Ordinal (ordered categories).
2. Because stress should be stable enough over a short period to be measured
   reliably (if it changes randomly, scores are noise).
3. Content: covers the domain (experts agree items fit). Construct: relates to
   the theory and other measures as predicted.
4. It's too low (< 0.7); revise/replace poor items, add more reliable items, or
   rethink the construct; do not rely on the total score.

</details>

## Quick revision box

- Measurement scales NOIR: nominal (=,≠), ordinal (<,>), interval (+,− mean), ratio (×,÷).
- Higher scale ⇒ stronger statistics; never exceed scale level.
- Rating scales: Likert (agree scales), Thurstone (judged points), semantic differential (bipolar).
- Item pool + pilot + item analysis → better scale; more reliable items must measure the SAME thing.
- Validity (content/construct/criterion/face) vs reliability (test-retest/parallel-split/α ≥ 0.7).
- Reliability necessary but not sufficient for validity (dartboard analogy).

## Exam guidance

Define the method, justify why it fits the research question, apply it to the running study, and mention one limitation or ethical consideration.

## Practice ladder

1. **Easy - Recall:** Define the module's central idea in one or two sentences.
2. **Easy - Recognize:** Identify the correct method for a small example and explain why it fits.
3. **Medium - Apply:** Work through one representative problem without copying the example.
4. **Medium - Compare:** Contrast two methods or concepts from the module.
5. **Hard - Integrate:** Solve a university-style scenario and justify every major step.

<details>
<summary>Reveal self-evaluation guide</summary>

A complete response uses correct terminology, shows intermediate steps, connects the result to the scenario, and states one assumption or limitation.

</details>

---

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)
