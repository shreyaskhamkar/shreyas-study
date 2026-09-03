# Module 7 Article: Quantifying Uncertainty — Bayes, Distributions, and the CLT

## The big idea

**Probability** is the mathematics of uncertainty. In research it does two jobs:

1. It **models the data-generating process** (what outcomes are likely?).
2. It **supports inference** (how surprising is my result if nothing is going on?).

The two pillars you must internalise: **Bayes' theorem** (updating beliefs with
evidence) and the **Central Limit Theorem** (sample means are normal). Everything
else builds on these.

## The probability calculus: from sets to numbers

### Events, sample space, basic rules

- **Sample space S:** all possible outcomes.
- **Event A ⊆ S:** a subset of outcomes; P(A) = Σ P(outcome).
- **Rules:** 0 ≤ P(A) ≤ 1; P(S)=1; P(Aᶜ)=1−P(A).
- **Addition:** P(A∪B) = P(A)+P(B)−P(A∩B); mutually exclusive ⇒ no subtraction.

### Worked example

Roll two dice. S = 36 outcomes.

- P(sum = 7) = 6/36 = 1/6.
- P(at least one 6) = 1 − P(no sixes) = 1 − (5/6)² = 11/36.

For our stress study: if 60% of students exercise, P(random student exercises) = 0.60.

## Conditional probability and independence

- **Conditional:** `P(A|B) = P(A∩B) / P(B)`.
- **Independent:** P(A|B) = P(A) ⇔ P(A∩B) = P(A)P(B).

### Worked example

P(stressed) = 0.4; P(exercises | stressed) = 0.5; P(exercises | not stressed) = 0.7.
P(stressed AND exercises) = 0.4 × 0.5 = 0.20.

## Bayes' theorem

```text
P(A|B) = P(B|A) · P(A) / P(B)
where P(B) = Σ_i P(B|A_i)·P(A_i)
```

"Posterior = likelihood × prior, normalised."

### Worked example: medical screening

A stress-screening app has:

- prevalence P(D) = 0.01 (1% truly high-stress),
- sensitivity P(+|D) = 0.95,
- false positive P(+|¬D) = 0.10.

If a student screens positive, P(D|+) =

```text
0.95 × 0.01 / (0.95×0.01 + 0.10×0.99)
= 0.0095 / (0.0095 + 0.099) = 0.0095/0.1085 ≈ 0.087
```

So a positive screen means only ~9% chance the student is truly high-stress — a
dramatic illustration of the **base-rate (prior) fallacy**. Researchers must
always ask: "How common is the condition in my population?"

## Random variables

- **Discrete RV:** countable values (number of stressed students).
- **Continuous RV:** uncountable (stress score, time).
- **Expected value:** E[X] = Σ x·P(x); **Variance:** Var(X) = E[(X−μ)²].
- **Linear properties:** E[aX+bY] = aE[X]+bE[Y]; Var(aX) = a²Var(X).

## Probability distributions

### Discrete

| Distribution | Models | Mean | Variance |
|---|---|---|---|
| Bernoulli(p) | one yes/no trial | p | p(1−p) |
| Binomial(n,p) | n independent yes/no | np | np(1−p) |
| Poisson(λ) | rare events in an interval | λ | λ |

### Continuous

| Distribution | When | Mean | Variance |
|---|---|---|---|
| Uniform(a,b) | all values equally likely | (a+b)/2 | (b−a)²/12 |
| Normal(μ,σ²) | measurement noise, means | μ | σ² |
| t(df) | small-sample inference | 0 | df/(df−2) |

### Worked example: binomial stress count

If stress prevalence is 40%, in a sample of n = 50 the number stressed ~
Binomial(50, 0.4). Expected = 20, SD = √(50×0.4×0.6) ≈ 3.46.

P(exactly 20) = C(50,20)·0.4²⁰·0.6³⁰ ≈ 0.11. Use the normal approx
(with continuity correction) for ranges like P(15 ≤ X ≤ 25).

## The Central Limit Theorem (CLT)

> **CLT:** For large n (typically n ≥ 30), the sampling distribution of the
> sample mean `x̄` is **approximately normal**, regardless of the population's
> shape:  `x̄ ~ N(μ, σ²/n)`.

**Why this drives the Z-test and t-test:** even if individual stress scores are
skewed, the **mean** of a sample of 30+ is approximately normal, so we can use
normal-theory inference on the mean.

### Demonstration (intuition)

Sample many groups of size n from a skewed population; plot the sample means. The
histogram of means will look **bell-shaped** even though each individual value is
skewed. That is the CLT in action.

## Laws of large numbers and convergence

- **Weak LLN:** as n grows, `x̄` converges in probability to μ.
- **Strong LLN:** `x̄` converges almost surely to μ.
- Intuition: averages of repeated experiments settle on the true expectation.

## Applications in research

| Area | Probability tool |
|---|---|
| Diagnostic screening | Bayes (base-rate awareness) |
| Quality control | Binomial/Poisson counts |
| Significance testing | Sampling distribution of the mean (CLT) → Z/t |
| Sample-size/power | Binomial (power) and Normal (sample size) |
| Risk scoring | Conditional probability |

## Case study: probability in data analytics

A university's mental-health chatbot flags students whose weekly mood score drops
below a threshold. The developers use the **binomial** distribution to set the
threshold so each healthy student has <1% chance of being flagged (low false-
positive rate), and **Bayes' theorem** to report, per flag, the posterior
probability the student is truly at risk — combining the flag rate with the
known prevalence of distress in the student body.

## Common mistakes

- Confusing P(A|B) and P(B|A) (the prosecutor's / prosecutor's fallacy).
- Applying the normal approximation to a binomial with np < 5.
- Thinking "p = 0.03" means a 3% chance H₀ is true (it does not — see Module 8).
- Ignoring the prior (base rate) when interpreting a positive test.

## Memory rules

- P(A∪B) = P(A)+P(B)−P(A∩B).
- Conditional P(A|B) = P(A∩B)/P(B).
- Bayes: posterior ∝ likelihood × prior; always mind the base rate.
- CLT: means are ~Normal for large n ⇒ Z/t inference on means.
- Binomial: np and n(1−p) should be ≥ 5 for the normal approximation.

## Check your understanding

1. If P(A)=0.5 and P(B)=0.4 and A, B are independent, find P(A∩B).
2. What does the CLT guarantee about `x̄`?
3. Why should screening tests worry about the base rate?
4. For Binomial(n,p), when is the normal approximation safe?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. P(A∩B) = P(A)P(B) = 0.5×0.4 = 0.20.
2. It is approximately normally distributed (regardless of the population shape), with mean μ and variance σ²/n.
3. Even a very sensitive/specific test can yield more false than true positives when the condition is rare.
4. When np ≥ 5 and n(1−p) ≥ 5.

</details>

## See also

- Module 5 (sampling distribution of `p̂`/`x̄`).
- Module 8 (Z-test, t-test, p-values built on this).
- `Glossary.md` (probability, normal distribution, central limit theorem, Bayes' theorem).
