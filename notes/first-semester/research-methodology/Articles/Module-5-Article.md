# Module 5 Article: Who Do You Ask? — Sampling and Sample Size

## The big idea

You almost never study everyone; you study a **sample** and infer to the
**population**. The whole chain of trust — from a sample mean to a population
claim — rests on **who** you picked and **how many**. Pick wrong, and even a
perfectly analysed dataset is useless.

## Population, frame, and sample

| Term | Meaning | Trap |
|---|---|---|
| **Population (target)** | Everyone you want to generalise to | Too broad (e.g., "students") |
| **Sampling frame** | The list you actually sample from | Frame ≠ target (1936 Gallup used car-owners) |
| **Sample** | The units actually studied | Selection bias |

### For our stress study

- Population: full-time MCA students in India.
- Frame: the enrolment list of **three** colleges you can access.
- So you must **state the limits** of your frame — your conclusions apply to
  Indian full-time MCA students at comparable institutions, not all students.

## Probability vs non-probability sampling

### Probability (everyone has a known, non-zero chance)

- **Simple random:** lottery / random numbers.
- **Systematic:** every kth person from a list (k = N/n).
- **Stratified:** split the frame into strata, sample within each (e.g., by year
  of study). More precise if strata differ.
- **Cluster:** sample **whole groups** (e.g., randomly pick colleges, then test
  all their students). Cheaper when individuals are clustered.
- **Multi-stage:** cluster, then sub-sample within clusters (national surveys).

### Non-probability (chance is unknown or zero)

- **Convenience:** whoever is easy to reach (students in your class).
- **Purposive:** "information-rich" cases chosen on purpose.
- **Quota:** fill quotas by trait (no random selection).
- **Snowball:** referrals from initial participants (hidden populations).

**Rule of thumb:** probability sampling for **quantitative generalisation**;
non-probability for **qualitative exploration**.

## Sample-size determination

### For estimating a mean

```text
n = z² · σ² / d²
```

- z = 1.96 for 95% confidence
- σ = planning value (from pilot or prior studies)
- d = desired **margin of error**

### For estimating a proportion

```text
n = z² · p(1−p) / d²
```

- Use p = 0.5 if you have **no idea** (it maximises n, a conservative choice).

### Example

Goal: estimate the proportion of stressed MCA students, 95% confidence, ±5%.
`n = 1.96² · 0.5·0.5 / 0.05² = 3.84·0.25/0.0025 = 384`.

### Finite population correction (FPC)

If your sample is a **large fraction** of the population (n/N > 5%):

```text
n_adj = n / (1 + (n−1)/N)
```

### For our study: power, not just precision

For hypothesis testing, you also want **power** (1 − β, usually 0.80) to detect a
**meaningful effect size** (from the pilot SD and the minimum effect you care
about). Power analysis usually gives a **larger** n than the precision formula —
use the larger.

## Sampling errors and bias

- **Sampling error:** natural variation between a sample statistic and the
  population parameter. It **shrinks** with √n (halve the error → 4× the sample).
  It is **random** and shown by the confidence interval.
- **Sampling bias:** systematic over/under-representation (e.g., only surveying
  students in the gym). It is a **design flaw** and does not shrink with n.

### Minimising bias

- Use a proper, complete frame.
- Randomise selection.
- **Follow up** non-responders (non-response is a bias, not just noise).
- **Weight** post-stratification if your sample is off on known margins.

## Quantitative vs qualitative sampling

| Aspect | Quantitative | Qualitative |
|---|---|---|
| Method | Probability sampling | Purposive/snowball |
| Size driver | Power + precision | Saturation (no new themes) |
| Goal | Generalise with CI | Understand meaning in depth |

## Worked example: stress-study sample plan

- Power analysis (two-sample t, d = 0.5, power 0.8, α 0.05) → ~64 per group = 128.
- With 20% expected loss → ~160 total.
- Stratify by year (1st/2nd/3rd) and sex to keep groups balanced.
- Offer a small incentive (₹200) to reduce non-response.

## Exam angle

For "sampling design":

1. Define population, frame, sample; explain the frame ≠ target problem.
2. Compare **two probability** and **two non-probability** methods and when to use each.
3. Show `n = z²σ²/d²` (means) or `n = z²p(1−p)/d²` (proportions); state the
   conservative p = 0.5 choice.
4. Distinguish **sampling error** (random, ↓ with √n) from **sampling bias**
   (systematic, ↓ with design).

## Common mistake

Reporting a sample mean and saying "this is the population mean." A sample mean
**estimates** the population mean with a confidence interval and sampling error;
it is almost certainly not exactly equal.

## See also

- Module 6 (analysis) and Module 7/8 (probability/statistics underpin inference).
- `Glossary.md` (sampling bias, sampling error, frame, power).
