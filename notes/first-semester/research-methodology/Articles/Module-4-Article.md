# Module 4 Article: Turning Qualities into Numbers — Scaling and Validation

## The big idea

Research needs numbers, but the world is qualitative. **Measurement** is the art
and science of turning qualities into numbers that mean what you think they mean.
The trap: not every 1–5 scale is an interval scale, and a measure that is
notoriously reliable is still not valid.

This article explains the **NOIR ladder** of measurement, how to build a scale
that actually measures what you intend, and how to prove it does.

## The NOIR ladder of measurement

Each rung adds a property. Use **only the statistics allowed at each level**:

| Scale | What it gives | Allowed statistics | Example |
|---|---|---|---|
| **Nominal** | Names/labels | =, frequency, mode, χ² | Gender, major |
| **Ordinal** | Order/rank | +, −, median, percentile | Likert: agree…disagree |
| **Interval** | Equal gaps, no true zero | +, −, ×/... no; mean, SD, r | Temperature °C |
| **Ratio** | Equal gaps + true zero | All operations | Weight, time, Kelvin |

### Common error

Treating a 5-point Likert item as **interval** and then averaging it across many
items is common and usually fine **when the items are summed into a reliable
scale**, because summation (under the right theory) approaches interval
properties. Averaging a **single** ordinal item is more defensible statistically
but less defensible conceptually — examiners want to see you know the distinction.

## Building an attitude scale: the Likert method

Steps:

1. **Define the construct** ("academic stress, specifically workload-related").
2. **Write items** as statements, one idea each (10–15 draft items).
3. **Choose a response set:** 5-point or 7-point agree/disagree is standard.
4. **Direction:** make most items keyed the same way; reverse-score the rest.
5. **Pilot** on a small group; check item-total correlations.
6. **Drop items** with item-total r < 0.3 or that hurt α.

### For our stress study

We use the validated **PSS-10** (Perceived Stress Scale), a 10-item Likert scale:
"In the last month, how often have you been upset because of something that
happened unexpectedly?" 0 = Never … 4 = Very Often.

**Reverse-scored items** must be flipped (4 − score) before summing. Total 0–40;
higher = more stress. This is why using a **validated instrument** beats
inventing one.

## Other scaling techniques

- **Thurstone scaling:** experts rate candidate items by "favourability," then
  pick items spanning equal-interval steps. Laborious; rare now.
- **Semantic differential:** bipolar adjective anchors (e.g., CALM–STRESSED) on a
  7-point line; good for capturing a single evaluative dimension.
- **Guttman scaling (cumulative):** items ordered so "yes" to a harder item
  implies "yes" to easier ones.

## Structured vs unstructured instruments

- **Structured:** fixed response options → easy to quantify (Likert, multiple
  choice).
- **Unstructured:** open-ended (interviews, write-in) → rich, hard to quantify.

Most good studies **combine both**: a structured questionnaire for numbers and a
few open-ended questions for context.

## Questionnaire vs survey vs instrument

- **Instrument:** the actual tool (a questionnaire, an observation sheet, a
  behavioural task).
- **Questionnaire:** a written set of questions.
- **Survey:** the **process** of collecting data from a sample.

(Confusing these in an exam costs marks; pin each word to the right level.)

## Item pooling, pilot testing, and error reduction

### Item pooling

Collect a large pool of candidate items, then trim. For each item check:

- **Face validity** — does it look like it belongs?
- **Item-total correlation** — does it correlate with the overall score?
  (Keep if r > 0.3.)
- **Discrimination** — do high scorers score higher on it than low scorers?

### Pilot testing

Run on 10–30 people (not your main sample). Check: time to complete, wording
confusion, α, floor/ceiling effects. Revise; then test again.

### Reducing error

- **Random error** (noise): reduced by more good items (α rises with √k) and
  clear wording.
- **Systematic error (bias)**: reduced by balanced items, neutral wording, and
  randomising item order to avoid priming.

## Validating the measure: a checklist

| Validation type | What it checks | How |
|---|---|---|
| **Content** | Covers the domain | Expert panel |
| **Construct** | Matches the theory | Convergent + discriminant |
| **Criterion** (concurrent/predictive) | Matches an external outcome | Correlate with a gold standard |
| **Face** | Looks right to respondents | Read-through check |
| **Reliability** | Stable/consistent | α, test-retest, inter-rater |

**Convergent validity:** your scale correlates **high** with measures of the same
construct. **Discriminant validity:** it correlates **low** with unrelated
constructs. Both together make a strong construct-validity argument.

## Worked example: stress scale validation table

| Check | Result | Pass? |
|---|---|---|
| Cronbach's α | 0.88 (n = 300) | ✓ (>0.7) |
| Item-total r | all > 0.35 | ✓ |
| Test-retest (2 weeks) | r = 0.79 | ✓ |
| Convergent: correlate with WHO-5 (depression) | r = −0.61 | ✓ |
| Discriminant: correlate with shoe size | r = 0.04 | ✓ |

## Exam angle

For "types of scales and scale construction":

1. State NOIR and which statistic each allows (especially: **never take a mean of
   nominal data, never multiply ordinal data**).
2. Name two rating-scale types (Likert, semantic differential, Thurstone).
3. List the steps: define construct → write items → response set → pilot →
   item analysis (item-total r, α) → trim.
4. Distinguish **validity** (content/construct/criterion/face) and
   **reliability** (α/test-retest/inter-rater); stress that reliability is
   necessary but not sufficient for validity (the dartboard analogy).

## Common mistake

Claiming a scale is valid because it is reliable. A clock that is five minutes
fast is reliable but invalid. Always separate the two in your writing.

## See also

- Module 5 (sampling) — the pilot sample for scale validation.
- Module 8 (statistics) — Cronbach's α and reliability in the t-test context.
- `Glossary.md` (validity, reliability, Likert, NOIR).
