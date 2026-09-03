# Module 7: Fundamentals of Probability

[← Previous: Module 6](<Module-6.md>) · [Subject index](README.md) · [Next: Module 8 →](<Module-8.md>)

## Learning outcomes

After this module, you should be able to:

- define experiments, sample spaces, and events;
- apply the basic rules of probability;
- compute conditional probability and apply Bayes' theorem;
- work with random variables and common distributions;
- explain the role of probability in research.


## Prerequisites

Complete [Module 6](Module-6.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Experiments, sample space, events | 10-15 minutes |
| 3 | Probability rules | 10-15 minutes |
| 4 | Bayes' theorem | 10-15 minutes |
| 5 | Random variables | 10-15 minutes |
| 6 | Probability distributions | 10-15 minutes |
| 7 | Significance in research | 10-15 minutes |
| 8 | Solved problem | 10-15 minutes |
| 9 | Case study: probability in data analytics | 10-15 minutes |


## Start here: the simple idea

**Probability** quantifies uncertainty on a 0–1 scale. In research, it is the
language of **inference**: "How likely is this result if nothing real is going on?"
A p-value < 0.05 means "less than a 5% chance under the null" — that is pure
probability logic.

### Analogy

Probability is like weather forecasting: "70% chance of rain" tells you it is
likely but not certain. In research, "p = 0.03" is the forecaster saying the data
would be surprising if H₀ were true.

## Experiments, sample space, events

- **Experiment:** a process with observable outcomes (rolling a die).
- **Sample space S:** all possible outcomes (e.g., S = {1,2,3,4,5,6}).
- **Event:** a subset of S (e.g., A = "even" = {2,4,6}).

### For our stress study

Experiment = "pick a random student from the college." S = {all enrolled
students}. Event A = "student is in year 2."

## Probability rules

### Basic rules

- `0 ≤ P(A) ≤ 1`; `P(S) = 1`.
- `P(A) = Σ P(outcome)` for simple events in A.
- `P(Aᶜ) = 1 − P(A)`.
- **Addition:** `P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`; if mutually exclusive,
  `P(A ∪ B) = P(A) + P(B)`.

### Multiplication / conditional probability

- **Conditional:** `P(A|B) = P(A ∩ B)/P(B)`, P(B)>0.
- **Multiplication rule:** `P(A ∩ B) = P(A)·P(B|A)`.
- A, B **independent** ⇔ `P(A|B) = P(A)` ⇔ `P(A ∩ B) = P(A)P(B)`.

### Worked example

In our college: P(year 2) = 0.3; of year-2 students, 60% are female.
P(year 2 AND female) = P(year2)·P(female | year2) = 0.3 × 0.6 = **0.18**.

## Bayes' theorem

From `P(A|B) = P(A∩B)/P(B)` and the law of total probability:

```text
P(A|B) = P(B|A)·P(A) / P(B)
where P(B) = Σ_i P(B|A_i)·P(A_i)   (partition)
```

### Worked example (medical screening)

- Disease prevalence P(D) = 0.01.
- Test sensitivity P(+|D) = 0.95; false positive P(+|¬D) = 0.05.
- P(D|+) = P(+|D)·P(D) / [P(+|D)P(D) + P(+|¬D)P(¬D)]
  = 0.95·0.01 / (0.95·0.01 + 0.05·0.99)
  = 0.0095 / (0.0095 + 0.0495) = 0.0095/0.0590 ≈ **0.161**.

Even with a 95% sensitive test, a positive result means only ~16% chance of
disease when the disease is rare — the base-rate fallacy.

## Random variables

- A **random variable (RV)** X assigns a number to each outcome.
- **Discrete RV:** countable values (number of stressed students).
- **Continuous RV:** uncountable (stress score on a scale, time spent exercising).

### Expected value and variance

- E[X] = Σ x·P(x) (discrete), or ∫ x·f(x)dx (continuous).
- Var(X) = E[(X−μ)²] = E[X²] − μ².
- Linear properties: E[aX+bY] = aE[X]+bE[Y]; Var(aX) = a²Var(X).

## Probability distributions

### Discrete

| Distribution | When | Mean / Var |
|---|---|---|
| **Bernoulli(p)** | 0/1 trial | p / p(1−p) |
| **Binomial(n,p)** | n independent yes/no | np / np(1−p) |
| **Poisson(λ)** | counts in fixed interval | λ / λ |

### Continuous

| Distribution | When | Mean / Var |
|---|---|---|
| **Uniform(a,b)** | all values equally likely | (a+b)/2 / (b−a)²/12 |
| **Normal (μ,σ²)** | bell curve | μ / σ² |
| **t (df)** | small sample, σ unknown | 0 / df/(df−2) |

## Significance in research

- **Binomial** models "success/failure" outcomes (e.g., improved vs not).
- **Normal** is the default for means (via the Central Limit Theorem).
- **t** is used for means from **small** samples (σ unknown).

**Central Limit Theorem (CLT):** for large n, the sampling distribution of the
sample mean is **approximately normal**, regardless of the population distribution.
This is why the **Z-test and t-test** work even when individual data aren't normal.

## Solved problem

**A fair coin is flipped 100 times. Approximate P(45 ≤ heads ≤ 55).**

Let X ~ Bin(100, 0.5). By CLT, X ≈ Normal(μ=np=50, σ²=np(1−p)=25, so σ=5).

Standardise: P(45 ≤ X ≤ 55) ≈ P((45−50)/5 ≤ Z ≤ (55−50)/5) = P(−1 ≤ Z ≤ 1).

From the normal table, P(−1 ≤ Z ≤ 1) ≈ **0.683** (the 68% rule).

## Case study: probability in data analytics

In quality monitoring of a call centre: if each agent has a 2% error rate and
handles 200 calls/day, the number of errors per day per agent ~ Binomial. We can
flag agents whose error count is in the top 2.5% of the Binomial distribution as
needing coaching.

## PDF-aligned additions

### Core probability formulas

```text
P(A complement) = 1 - P(A)
P(A union B) = P(A) + P(B) - P(A intersection B)
P(A | B) = P(A intersection B) / P(B)
P(A intersection B) = P(A | B) P(B)
```

For a discrete random variable, the probabilities across all possible values
sum to 1. Its expected value is `E[X] = sum x P(X=x)` and its variance is
`E[(X - mean)^2]`. Bayes' theorem reverses conditional probability and requires
careful identification of the prior, likelihood, and evidence.

## Common mistakes

- Adding non-mutually-exclusive events (forgetting to subtract intersection).
- Confusing P(A|B) with P(A∩B).
- Applying the normal approximation to a small binomial without np ≥ 5, n(1−p) ≥ 5.
- The **prosecutor's fallacy**: confusing P(evidence | innocent) with P(innocent | evidence)
  (the Bayes lesson).

## Memory rules

- 0 ≤ P ≤ 1; P(S)=1; P(A∪B)=P(A)+P(B)−P(A∩B).
- Conditional: P(A|B)=P(A∩B)/P(B); multiplication: P(A∩B)=P(A)P(B|A).
- Bayes: posterior ∝ likelihood × prior; watch the base rate.
- CLT: sample means → Normal for large n, regardless of population.
- Discrete distributions count; continuous use densities.

## Check your understanding

1. If P(A)=0.4, P(B)=0.5, and A, B are independent, find P(A∩B).
2. State Bayes' theorem in words.
3. What is the mean and variance of Binomial(n, p)?
4. Why does the CLT matter for the Z-test?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. P(A∩B) = P(A)P(B) = 0.4·0.5 = 0.20.
2. P(A|B) = P(B|A)·P(A) / P(B) — posterior equals likelihood times prior, normalised.
3. Mean = np; Variance = np(1−p).
4. It makes the sample mean approximately normal, so the Z-test (which assumes
   normality) is valid even when the raw data are not normal.

</details>

## Quick revision box

- Experiment, sample space S (all outcomes), event (subset).
- Rules: 0≤P≤1, P(S)=1; addition rule with intersection; P(Aᶜ)=1−P(A).
- Conditional P(A|B)=P(A∩B)/P(B); independent if P(A|B)=P(A).
- Bayes' theorem: P(A|B) = P(B|A)P(A)/P(B); beware the base-rate fallacy.
- RV discrete (count) vs continuous (density); E[X], Var[X].
- Distributions: Bernoulli/Binomial/Poisson (discrete); Uniform/Normal/t (continuous).
- CLT: sample means → Normal as n grows ⇒ Z/t-tests justified.

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

[← Previous: Module 6](<Module-6.md>) · [Subject index](README.md) · [Next: Module 8 →](<Module-8.md>)
