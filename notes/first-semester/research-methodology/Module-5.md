# Module 5: Sampling Design

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)

## Learning outcomes

After this module, you should be able to:

- distinguish population and sampling frame;
- apply probability and non-probability sampling methods;
- determine sample size for a study;
- distinguish sampling error from bias and minimise bias.


## Prerequisites

Complete [Module 4](Module-4.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Basics: population, sampling frame, sample | 10-15 minutes |
| 3 | Probability sampling methods (everyone has a known, non-zero chance) | 10-15 minutes |
| 4 | Non-probability sampling methods (chance unknown or zero) | 10-15 minutes |
| 5 | Sample size determination | 10-15 minutes |
| 6 | Sampling errors and bias minimisation | 10-15 minutes |
| 7 | Estimation: point and interval | 10-15 minutes |
| 8 | Sampling for quantitative vs qualitative research | 10-15 minutes |
| 9 | Sampling case studies | 10-15 minutes |


## Start here: the simple idea

You almost never study an entire **population**; you study a manageable **sample**
and infer to the population. The trick is choosing a sample that faithfully
represents the population so your conclusions are trustworthy.

### Analogy

Tasting a soup to judge the whole pot: you need a **spoonful from everywhere**
(stir well = randomisation) and a **big enough taste** (sample size), not just
the top (which biases toward the salty surface).

## Basics: population, sampling frame, sample

- **Population (target):** the entire set you want to generalise to (e.g., all
  full-time MCA students in India).
- **Sampling frame:** a list you can actually draw from (e.g., student enrolment
  at one college).
- **Sample:** the units actually studied.

**Sampling frame error** = the frame differs from the target population (the
classic example: 1936 Gallup poll used car-owners (rich) to predict a president).

## Probability sampling methods (everyone has a known, non-zero chance)

| Method | How | Use |
|---|---|---|
| **Simple random** | Lottery/random numbers | Baseline |
| **Systematic** | Every kth from a list (k = N/n) | Quick; watch periodicity |
| **Stratified** | Random within strata (e.g., year) | Increase precision |
| **Cluster** | Random **groups** (classes), then all/some inside | Cheap when frame is group-based |
| **Multi-stage** | Cluster, then sub-sample inside | National surveys |

> **Stratified** divides by a known characteristic and samples **within** each;
> **cluster** divides into natural groups and samples **whole groups**.

### For our stress study

Population = full-time MCA students at a college. Strata by year (1st, 2nd, 3rd).
Within each year, simple random sample of ~30 → stratified sample for precision.

## Non-probability sampling methods (chance unknown or zero)

| Method | How | Risk |
|---|---|---|
| **Convenience** | Whoever is easy to reach | High selection bias |
| **Purposive** | Expert-chosen "information-rich" cases | Not generalisable |
| **Quota** | Fill quotas by trait (no random) | Selection bias |
| **Snowball** | Referrals from initial participants | Hidden populations only |
| **Judgement** | Researcher picks "typical" cases | Subjective bias |

Useful for **exploratory/qualitative** work; avoid for generalisation.

## Sample size determination

### By precision (estimation)

For a mean: `n = (z²·σ²) / d²`, where:

- z = critical value (1.96 for 95% confidence),
- σ² = variance (from pilot, or a planning value; for proportions use p(1−p),
  max at p = 0.5),
- d = desired **margin of error**.

### Quick rule for proportions (infinite population)

`n = z²·p(1−p)/d²`. At 95% confidence, ±5% margin, p=0.5 → n ≈ 384.

### Finite population correction (FPC)

If the population N is small relative to n, shrink n:
`n_adj = n / (1 + (n−1)/N)` (or `n·(N−1)/(N... )`). For our college of ~600
students, the correction is small.

### For our stress study

Goal: 95% CI for the mean stress change, margin ±3 points, prior SD ≈ 6.
`n = 1.96²·6² / 3² ≈ 3.84·36/9 = 15.4` → need ~16 per group, but we plan 30 per
group for power and attrition.

**Rule:** for **hypothesis testing**, also consider **power** (1 − β, typically 0.80)
and **effect size**; use the larger n.

## Sampling errors and bias minimisation

- **Sampling error:** natural variation between sample and population; **shrinks**
  with larger n (∝ 1/√n). **Cannot be eliminated**, only reduced.
- **Sampling bias** (selection bias): systematic over/under-representation.
  **Can and must be eliminated** by proper sampling design.

**Bias minimisation tactics:**

- Use a proper frame (no missing groups).
- Randomise selection and assignment.
- Stratify on known important factors.
- Avoid convenience/snowball for quantitative claims.
- Account for **non-response** (follow-up, weighting).

## Estimation: point and interval

- **Point estimate:** a single best guess (e.g., sample mean `x̄` for population mean μ).
- **Interval estimate:** a range with a confidence level (e.g., 95% CI).
  For a mean with unknown σ: `x̄ ± t·(s/√n)`.

**Example:** 30 students' stress change mean = 5.2, SD = 6.0. 95% CI
≈ 5.2 ± 2.045·(6/√30) ≈ 5.2 ± 2.23 ≈ [2.97, 7.43].

## Sampling for quantitative vs qualitative research

- **Quantitative:** probability sampling (representative, generalisable),
  sample-size by power/precision.
- **Qualitative:** non-probability (purposive/criterion/maximum variation),
  sample-size by **saturation** (keep going until no new themes emerge).

## Sampling case studies

1. **National health survey** — multi-stage probability (select districts, then
   households, then individuals).
2. **Exploratory interview study** — purposive sampling of "expert developers."
3. **Political poll** — stratified by state/demographic + margin of error ±3%.
4. **Clinic quality audit** — convenience sample (patients seen this month) —
   quick but not generalisable.

## PDF-aligned additions

### Sampling and sample-size planning

Define the population, sampling unit, sampling frame, selection method, and
target sample size before collecting data. A sample-size decision depends on the
study goal:

- **Estimation:** desired confidence level, margin of error, variability, and
  population size.
- **Comparison:** expected effect size, significance level `alpha`, desired power,
  number of groups, and variability.

Power is the probability of detecting a real effect. A common target is 80%.
Plan for non-response or dropout by increasing the recruitment target. A larger
sample cannot repair a biased sampling frame.

### Sampling errors

Sampling error is random variation caused by studying a sample. Bias is systematic
error from undercoverage, non-response, convenience selection, or measurement.
Probability sampling supports known selection probabilities; convenience and
purposive sampling may be appropriate for qualitative or hard-to-reach groups
but limit statistical generalisation.

## Common mistakes

- Forgetting that non-response is a **source of bias**, not just noise.
- Using a **convenience sample** and then claiming population generalisation.
- Ignoring the **finite population** when the sample is a large fraction of N.
- Using **p = 0.5** when you have local pilot data (over-samples).

## Memory rules

- Population ≠ sampling frame; the gap is frame error.
- Probability = known non-zero chance (random/stratified/cluster); Non-probability = convenience/purposive/snowball.
- n = z²σ²/d²; for proportions p(0.5) maximises n; FPC shrinks n when n/N is large.
- Sampling error ↓ with √n; sampling bias is a design flaw, not luck.
- Point = single number; Interval = range with confidence.
- Quantitative → probability + size by power; Qualitative → purposive + size by saturation.

## Check your understanding

1. Give one probability and one non-probability sampling method.
2. What is sampling bias, and how is it different from sampling error?
3. For ±5% margin at 95% confidence (p unknown), what sample size per the rule?
4. When is a cluster sample better than a stratified sample?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. e.g. simple random (probability) vs convenience (non-probability).
2. Bias = systematic error (design flaw); error = random variation (shrinks with n).
3. ~384 (using p = 0.5).
4. When you lack a complete frame of individuals but have easy access to natural groups
   (e.g., schools, villages) — cluster is cheaper then.

</details>

## Quick revision box

- Population (target), sampling frame (list), sample (studied); frame ≠ target → frame error.
- Probability: random, systematic, stratified, cluster, multi-stage — known non-zero chance.
- Non-probability: convenience, purposive, quota, snowball, judgment — for exploration.
- Sample size: n=z²σ²/d²; proportions use p(0.5) max; FPC for small populations.
- Sampling error ∝ 1/√n (reduce); sampling bias (eliminate via design, randomise, stratify).
- Point estimate vs interval (CI). Quantitative → power+precision; Qualitative → saturation.

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

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)
