# Module 8 Article: From t to χ² — Testing Claims with Statistics

## The big idea

Statistical inference answers a simple question in a principled way: **"Are these
data surprising enough under 'nothing is going on' that we should believe
something real happened?"** The machinery: set up a **null hypothesis**, compute a
**test statistic**, find the **p-value**, compare to **α**, and decide. The
common tests (Z, t, F, χ²) are just special cases of the same four-step logic
applied to different data/parameters.

## The four-step hypothesis test

1. **Hypotheses:** H₀ (no effect) vs H₁ (effect; directional or not).
2. **Significance level α** (usually 0.05) and the right **test** for your data.
3. **Compute the statistic** (z, t, F, χ²) and its **p-value**.
4. **Decide:** p < α ⇒ reject H₀ (significant); else ⇒ fail to reject H₀.

> Exam golden rule: you never **accept** H₀; you either **reject** it or **fail
> to reject** it.

## Type I, Type II errors, and power

- **Type I (false positive):** reject H₀ when it is true. P = α.
- **Type II (false negative):** keep H₀ when H₁ is true. P = β.
- **Power = 1 − β:** probability of detecting a real effect.

Lowering α cuts Type I errors but **raises** Type II errors (fewer detections).
Boost power with larger samples and larger effect sizes. This is why a study that
"finds nothing" may simply be **underpowered**.

## Choosing and checking a test

| Test | Use | Conditions |
|---|---|---|
| **Z-test** | One mean (σ known) or proportion | large n (≥30) or normal |
| **t-test** (1-sample) | One mean (σ unknown) | roughly normal, small n |
| **t-test** (paired) | Before/after same subjects | differences normal |
| **t-test** (2-sample) | Two independent means | ~normal, equal variances* |
| **F-test** | Two variances | normal samples |
| **χ²** (goodness-of-fit) | One categorical: fits expected proportions | expected ≥ 5 |
| **χ²** (independence) | Association in a contingency table | expected ≥ 5 |

*Welch's t drops the equal-variance assumption.

## The Z-test (worked example)

Known: exam scores are Normal(70, 121). After a new module (n = 64), mean = 73.
Is the gain significant?

```text
H₀: μ = 70 ;  H₁: μ > 70 ;  α = 0.05
z = (73 − 70) / (11/√64) = 3 / 1.375 = 2.18
p (right tail) ≈ 0.0145 < 0.05  ⇒  reject H₀
```

The new module significantly improved scores.

## The t-test (worked example)

Unknown σ. Stress-change scores (post − pre), n = 25, mean = 4.1, SD = 6.6.
Test whether stress changed.

```text
H₀: μ = 0 ;  H₁: μ ≠ 0 ;  α = 0.05 ;  df = 24
t = 4.1 / (6.6/√25) = 4.1 / 1.32 = 3.11
t_{0.025,24} = 2.064  ⇒  |3.11| > 2.064 ⇒ reject H₀ (significant change)
```

## F-test (compares two variances)

```text
F = s₁² / s₂²   (put the larger variance on top, df1 = n1−1, df2 = n2−1)
```

Used to check the **equal-variance** assumption before a pooled 2-sample t-test,
and as the variance part of **ANOVA**.

## Chi-square test

### Independence (2×2 example)

| Exercise? | Low stress | High stress | Total |
|---|---|---|---|
| Yes | 12 (E=9) | 18 (E=11) | 30 |
| No | 8 (E=11) | 12 (E=9) | 20 |
| Total | 20 | 30 | 50 |

```text
χ² = Σ(O−E)²/E = (12−9)²/9 + (18−11)²/11 + (8−11)²/11 + (12−9)²/9 ≈ 3.0
df = 1 ; χ²_{0.05,1} = 3.84 ⇒ 3.0 < 3.84 ⇒ fail to reject independence
```

No significant association between exercise and stress at 0.05.

## One-tailed vs two-tailed

- **Two-tailed (H₁: μ ≠ μ₀):** split α across both tails. Safer; detects either
  direction. Use unless you **a priori** predicted a direction.
- **One-tailed (H₁: μ > μ₀):** all α in one tail. More power in that direction,
  but **blind to the opposite** effect.

> Picking the tail **after** seeing the data is p-hacking — a major cause of the
> reproducibility crisis.

## Decision rules and critical values

Two equivalent ways:

- Compare **p-value** to α, OR
- Compare the **test statistic** to a **critical value** (z*, t*, χ²*) from the
  table, OR
- Look at whether the **confidence interval** excludes the null value.

All three should agree.

## Interpreting output (what to report)

A complete result: "t(58) = 3.11, p = 0.0014, mean difference = 4.1 (95% CI [1.2, 7.0]), Cohen's d = 0.62."

Reports should include: **test, df, statistic, p-value, effect size, CI** — and
the direction and practical meaning of the effect.

## Common mistakes

- Treating p = 0.051 as "no effect" and p = 0.049 as "real effect."
- Reporting only p-values (no effect size / CI).
- Running many tests without correction (multiple-comparisons error).
- Checking assumptions after the test (should be checked before).

## Memory rules

- p < α ⇒ reject H₀; else fail to reject. Never "accept."
- α = Type I; β = Type II; power = 1−β (rise with n and effect size).
- Z (large n / σ known), t (small n / σ unknown), F (variances), χ² (counts).
- Two-tailed = safer; one-tailed = more power in one direction.
- Report statistic + df + p + effect size + CI.

## Check your understanding

1. If you reject H₀ at α = 0.05, does it mean H₀ is false? True/False?
2. With n = 11, σ unknown, which t distribution do you use?
3. In a χ² test, if expected counts < 5, what do you do?
4. If the CI for a mean difference is [1.2, 7.0], what is the 0.05 conclusion?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. False — it means the data are surprising under H₀ (prob ≤ α); H₀ could still be true.
2. df = 10 (n−1) — use the t_{10} distribution.
3. Combine categories to raise expected counts, or use an exact test (Fisher's exact).
4. The interval excludes 0 ⇒ the difference is statistically significant at 0.05.

</details>

## See also

- Module 7 (probability) — these tests assume sampling distributions that the CLT makes approximately normal.
- `Glossary.md` (p-value, significance level, Type I/II error, power).
