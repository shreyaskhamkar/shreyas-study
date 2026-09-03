# Module 8: Statistical Methods in Research

[← Previous: Module 7](<Module-7.md>) · [Subject index](README.md) · [Next: Module 9 →](<Module-9.md>)

## Learning outcomes

After this module, you should be able to:

- state the logic of hypothesis testing and the types of errors;
- apply the four-step hypothesis-testing process;
- choose and carry out Z-test, t-test, F-test, and chi-square;
- distinguish one-tailed and two-tailed tests;
- interpret statistical output correctly.


## Prerequisites

Complete [Module 7](Module-7.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | The logic of hypothesis testing | 10-15 minutes |
| 3 | Hypothesis: errors and levels of significance | 10-15 minutes |
| 4 | Decision rules and test selection | 10-15 minutes |
| 5 | One-tailed vs two-tailed tests | 10-15 minutes |
| 6 | Z-test | 10-15 minutes |
| 7 | t-test and F-test | 10-15 minutes |
| 8 | Chi-square test | 10-15 minutes |
| 9 | Inference from statistical output | 10-15 minutes |


## Start here: the simple idea

Hypothesis testing answers: "Is this pattern strong enough that it is probably
real, or could it plausibly be luck?" It translates a research question into a
**decision rule** based on probability, then either **rejects** the null (the
effect is real enough) or **fails to reject** it (not enough evidence).

### Analogy

It is a courtroom for data: the null hypothesis is "innocent until proven guilty";
the p-value is the strength of the evidence; α = 0.05 is the "beyond reasonable
doubt" threshold set before the trial.

## The logic of hypothesis testing

### The four-step process

1. **Set up hypotheses:** H₀ (no effect/difference) vs H₁ (the effect you seek).
2. **Choose significance level α** (usually 0.05) and the test.
3. **Compute the test statistic** and its p-value (or compare to a critical value).
4. **Decide:** p < α ⇒ reject H₀; otherwise ⇒ fail to reject H₀.

### Worked example (our stress study)

- H₀: mean stress change = 0 (exercise has no effect).
- H₁: mean stress change < 0 (stress decreases). [directional → one-tailed]
- α = 0.05.
- Compute a t-statistic, get p = 0.012.
- p < 0.05 ⇒ **reject H₀** — exercise significantly reduced stress.

## Hypothesis: errors and levels of significance

- **Type I error:** reject H₀ when it is true (a "false positive"); probability = α.
- **Type II error:** fail to reject H₀ when H₁ is true (a "false negative");
  probability = β; **power = 1 − β**.
- **Significance level α** = the Type-I error rate you are willing to accept
  (0.05, 0.01, etc.).

### Trade-off

Lowering α reduces Type I errors but **increases** Type II errors (lower power).
Increase power by: larger n, larger effect, or higher α.

## Decision rules and test selection

| You want to know… | Data | Parameter | → Test |
|---|---|---|---|
| Mean of one sample (σ known) | numeric | mean | Z-test |
| Mean of one sample (σ unknown) | numeric | mean | t-test |
| Compare two means | numeric | mean | two-sample t-test |
| Compare two variances | numeric | variance | F-test |
| Association, independence (counts) | categorical | counts | Chi-square (χ²) |
| Goodness of fit | counts | distribution | Chi-square |

## One-tailed vs two-tailed tests

- **Two-tailed:** H₁: μ ≠ μ₀ (effect in either direction). Critical region in both tails.
- **One-tailed:** H₁: μ > μ₀ or μ < μ₀ (direction specified). Critical region in one tail.
  - One-tailed has **more power** for the specified direction but **cannot detect**
    the opposite direction — choose a priori, not from the data.

## Z-test

Use when the sample size is large (n ≥ 30) **or** the population standard
deviation σ is known:

```text
z = (x̄ − μ₀) / (σ / √n)
```

### Worked example

A test of stress management has μ₀ = 25, σ = 5. After training, n = 100 students
average x̄ = 23.5. Is stress significantly below 25?

```text
z = (23.5 − 25) / (5/√100) = −1.5 / 0.5 = −3.00
p (left tail) ≈ 0.0013 < 0.05  ⇒ reject H₀.
```

## t-test and F-test

### One-sample t-test (σ unknown, small n)

```text
t = (x̄ − μ₀) / (s / √n),   df = n − 1
```

### Two-sample (independent) t-test

```text
t = (x̄₁ − x̄₂) / sqrt(s_p²(1/n₁ + 1/n₂)),  s_p² = pooled variance,  df = n₁+n₂−2
```

### Paired t-test

Apply the one-sample t-test to the **differences** (before vs after the same
subjects): `t = d̄ / (s_d/√n)`.

### F-test (compare two variances)

```text
F = s₁² / s₂²  (larger variance on top),  df1 = n₁−1, df2 = n₂−1
```

**Worked example (two-sample t):**
Group A (exercise): n=30, mean change = −6.2, SD = 5. Group B (control): n=30,
mean change = 0.1, SD = 4. Pooled variance `s_p² = ((29)(25)+(29)(16))/58 ≈ 20.5`.

```text
t = (−6.2 − 0.1)/sqrt(20.5·(1/30+1/30)) = −6.3/sqrt(20.5·0.0667)
  = −6.3/sqrt(1.367) = −6.3/1.169 ≈ −5.39,  df=58
p ≈ 0.000005 < 0.05 ⇒ reject H₀; exercise significantly reduced stress.
```

## Chi-square test

### χ² = Σ (O−E)² / E,  df = (rows−1)(cols−1)

- Large χ² ⇒ observed differs from expected ⇒ association or poor fit.
- Requires expected counts ≥ 5 in each cell (rule of thumb).

### Worked example (test of independence)

Is "completes daily exercise" independent of "low stress"? From a 2×2 table:

| | Low stress | High stress | |
|---|---|---|---|
| Exercises | 18 (E=15) | 12 (E=15) | 30 |
| No exercise | 7 (E=10) | 13 (E=10) | 20 |
| | 25 | 25 | 50 |

`χ² = (18−15)²/15 + (12−15)²/15 + (7−10)²/10 + (13−10)²/10 = 0.6+0.6+0.9+0.9 = 3.0`.
df = 1; critical χ²_{0.05,1} = 3.84. Since 3.0 < 3.84 ⇒ **fail to reject**
independence (no strong evidence of association).

## Inference from statistical output

A reported result `t(58) = −5.39, p < 0.001, mean diff = −6.3` means:

- test statistic = −5.39, df = 58,
- p-value below 0.001 (highly significant),
- observed mean difference = −6.3.

**Report effect size too** (e.g., Cohen's d = (x̄₁−x̄₂)/s_p; here ≈ −6.3/4.53 ≈
−1.39, a **large** effect).

## PDF-aligned additions

### Hypothesis-testing procedure

1. State `H0` and `H1`.
2. Select a significance level `alpha` and one- or two-tailed design.
3. Choose a test using outcome type, design, sample size, and assumptions.
4. Calculate the test statistic and p-value, or compare with a critical value.
5. Reject `H0` when the result meets the decision rule; otherwise fail to reject
   it. Do not write “prove `H0`.”
6. Report the result in context, including effect size or confidence interval
   where available.

### Test selection reminder

- **Z-test:** commonly for a mean or proportion with large-sample/known-variance
  assumptions.
- **t-test:** compares means when population variance is estimated from the
  sample; variants include one-sample, independent, and paired tests.
- **F-test/ANOVA:** compares variances or several means through an F statistic.
- **Chi-square:** tests categorical frequency patterns, independence, or goodness
  of fit.

Statistical significance does not automatically mean practical importance.

## Common mistakes

- Believing "fail to reject H₀" means "accept H₀" (it means "not enough evidence").
- Thinking p = probability H₀ is true (it is P(data | H₀)).
- Using a t-test on tiny, non-normal, dependent samples.
- Picking one-tailed vs two-tailed after seeing the data.
- Reporting significance but not **effect size** (statistical ≠ practical significance).

## Memory rules

- H₀ = no effect; H₁ = effect you seek; α = Type-I risk (usually 0.05); power = 1−β.
- p < α ⇒ reject H₀; p ≥ α ⇒ fail to reject. Never "accept" H₀.
- Z for large n / σ known; t for small n / σ unknown; F for two variances; χ² for counts.
- One-tailed = directional (more power, opposite direction invisible); two-tailed = both.
- Effect size matters: significance ≠ importance.

## Check your understanding

1. If p = 0.06 and α = 0.05, what is the decision?
2. Which test compares two independent group means with small samples?
3. True or false: failing to reject H₀ proves H₀ is true.
4. What is the df for a 3×4 chi-square test of independence?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Fail to reject H₀ (0.06 ≥ 0.05).
2. Two-sample (independent) t-test.
3. False (it means insufficient evidence against H₀).
4. (3−1)(4−1) = 6.

</details>

## Quick revision box

- Hypotheses: H₀ (status quo) vs H₁; α = Type I rate; β = Type II rate; power = 1−β.
- Process: state H₀/H₁ → α & test → statistic & p → decide (reject iff p<α).
- Z (large n, σ known), t (small n, σ unknown; paired uses differences), F (2 variances), χ² (counts, independence/fit).
- One-tailed (directional, more power) vs two-tailed (both directions, safer).
- Report effect size + CI, not just p; p is not P(H₀ true); "fail to reject" ≠ "accept".

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

[← Previous: Module 7](<Module-7.md>) · [Subject index](README.md) · [Next: Module 9 →](<Module-9.md>)
