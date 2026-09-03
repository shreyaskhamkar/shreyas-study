# Research Methodology — Cheat Sheet

## Research types & philosophy

- **Basic** = discover knowledge; **Applied** = solve a problem.
- **Quantitative** (numbers/stats) · **Qualitative** (meaning/context) · **Mixed** (both).
- **Positivism:** one objective reality, observable only.
- **Post-positivism:** reality exists, knowledge is fallible/approximate.
- **Constructivism:** reality is socially constructed; knowledge co-constructed.

## Research problem

- Problem = knowledge gap, phrased as a question.
- **Iterative refinement:** broad → context → population → variables → outcome → time.
- **Fishbone diagram:** problem (head) + cause categories (bones).
- **5-whys:** dig to root cause.
- **Aim** (broad goal) · **Objectives** (specific/measurable) · **Deliverables** (outputs).
- **Feasibility:** Time, Resources, Ethics, Data, Scope.

## Research design

```text
problem -> objectives/hypothesis -> design -> sample -> instrument
        -> collect -> clean -> analyze -> interpret -> report
```

Validity = measuring the intended construct. Reliability = consistency.
Triangulation = combining methods, investigators, theories, or data sources.

## Sampling and statistics

```text
P(A|B) = P(A intersection B) / P(B)
P(A intersection B) = P(A|B)P(B)
```

Power is the probability of detecting a real effect. Alpha is the tolerated
false-positive rate. A p-value is interpreted relative to the null hypothesis and
chosen decision rule; it is not the probability that the null hypothesis is true.

## Ethics and CS research

- Protect participants with consent, minimisation, confidentiality, secure
  storage, access control, retention limits, and honest reporting.
- Experiment = real system; simulation = model. Validate simulations and report
  assumptions.

- **H₀** (no effect) vs **H₁** (directional or non-directional).
- **Experimental** = manipulate + control + randomise.
- **Non-experimental** = observe as-is (association only).
- **Exploratory** (discover) → **Descriptive** (what) → **Causal** (why).
- **Randomisation:** simple, block, stratified.
- **Control group** = baseline (no/wait-list treatment).
- **Validity:** construct, internal, external, statistical.
- **Reliability:** test-retest, parallel-forms, internal consistency (α).
- **Triangulation:** multiple methods/data sources.

## Measurement & scaling (NOIR)

- **Nominal** (names) — mode, frequency, χ².
- **Ordinal** (order) — median, percentile, rank.
- **Interval** (equal gaps, no true 0) — mean, SD, r.
- **Ratio** (true 0) — geometric mean, CV, all statistics.
- **Rating scales:** Likert (agree), Thurstone (judged), semantic differential (bipolar).
- **α ≥ 0.7** acceptable; reliability is necessary but not sufficient for validity.

## Sampling

- **Population** (target) · **Sampling frame** (list) · **Sample** (studied).
- **Probability:** simple random, systematic, stratified, cluster, multi-stage.
- **Non-probability:** convenience, purposive, quota, snowball, judgment.
- **Sample size (means):** `n = z²·σ² / d²`.
- **Sample size (proportions):** `n = z²·p(1−p) / d²` (use p=0.5 for max n).
- **FPC** for small populations: `n_adj = n / (1 + (n−1)/N)`.
- **Sampling error** ∝ 1/√n (reduce); **sampling bias** (eliminate via design).
- **Quantitative → power + precision**; **Qualitative → saturation**.

## Data analysis

- **Descriptive:** mean/median/mode; SD/variance/IQR; histograms, box plots, scatter.
- **Pearson r:** `r = Σ((x−x̄)(y−ȳ)) / √(Σ(x−x̄)²·Σ(y−ȳ)²)`; correlation ≠ causation.
- **Linear regression:** `y = a + bx`; `b = Σ((x−x̄)(y−ȳ))/Σ(x−x̄)²`; `R²` = variance explained.
- **Cleaning:** validate, handle missing, outliers (z>3 or 1.5×IQR), standardise, dedupe.

## Statistics / hypothesis testing

```
Step 1  H₀ (no effect)  vs  H₁ (effect; directional or not)
Step 2  Choose α (usually 0.05) and the test
Step 3  Compute statistic  z / t / F / χ²  and p-value
Step 4  If p < α  ⇒  REJECT H₀  (significant)
         else        ⇒  FAIL TO REJECT H₀
```

| Test | When | Statistic | df |
|---|---|---|---|
| Z-test (one mean) | large n or σ known | z=(x̄−μ₀)/(σ/√n) | ∞ |
| t-test (one mean) | small n, σ unknown | t=(x̄−μ₀)/(s/√n) | n−1 |
| Paired t-test | before/after same subjects | t = d̄/(s_d/√n) | n−1 |
| Two-sample t | two independent means | t=(x̄₁−x̄₂)/√(s_p²(1/n₁+1/n₂)) | n₁+n₂−2 |
| F-test | compare two variances | F = s₁²/s₂² | n₁−1, n₂−1 |
| χ² independence/fit | categorical counts | χ²=Σ(O−E)²/E | (r−1)(c−1) |

- **One-tailed:** directional H₁ (more power, blind to opposite).
- **Two-tailed:** non-directional (safer).
- **p** = P(data | H₀), NOT P(H₀ | data).
- Report **effect size** + **CI** (significance ≠ importance).

## Probability

- `0 ≤ P(A) ≤ 1`; `P(S)=1`.
- `P(A∪B) = P(A)+P(B) − P(A∩B)` (subtract if not mutually exclusive).
- `P(Aᶜ) = 1 − P(A)`.
- `P(A|B) = P(A∩B)/P(B)`; **independent** iff `P(A|B) = P(A)`.
- **Bayes:** `P(A|B) = P(B|A)·P(A) / P(B)`.
- `E[X] = Σx·P(x)`; `Var(X) = E[X²] − μ²`.
- **CLT:** for large n, sample-mean ~ Normal ⇒ Z/t-tests justified.

## Writing & IPR

- **IMRaD:** Introduction, Methods, Results, And, Discussion (+ Conclusions).
- Cite: **APA** (author-date), **IEEE/ACM** (numbered).
- **LaTeX:** separate content/formatting; `BibTeX` for refs; `$$...$$` for maths.
- **IPR:** Patent (invention, ~20y) · Copyright (writing, long) · Trademark (brand) · Trade secret.
- **Proposal structure:** problem → gap → approach → contribution + timeline + risks.
- **Evaluation plan (CS):** dataset, baselines, metrics, statistics.

## CS research

- CS = artefact + analysis + evaluation.
- Areas: AI/ML, Systems, Theory, HCI, Security, Networks, SE, Data, Graphics, IoT.
- Methods: experimental (real), simulation (model), analytical (proof).
- Proposal: problem → gap → approach (with evaluation plan) → contribution.

## Ethics

- **Belmont:** Respect for persons · Beneficence · Justice.
- **IRB/REC:** protocol + consent + risk review; continuing review; vulnerable groups.
- **Privacy:** minimise, anonymise/pseudonymise, secure, comply (GDPR/HIPAA), retain then delete.
- **Misconduct:** Fabrication · Falsification · Plagiarism (FFP); HARKing; gift/ghost authorship.

## Distributions (parameters)

| Distribution | Mean | Variance |
|---|---|---|
| Bernoulli(p) | p | p(1−p) |
| Binomial(n,p) | np | np(1−p) |
| Poisson(λ) | λ | λ |
| Uniform(a,b) | (a+b)/2 | (b−a)²/12 |
| Normal(μ,σ²) | μ | σ² |
| t(df) | 0 | df/(df−2) |

## Key thresholds

- α = 0.05 (standard), 0.01 (stringent).
- α ≥ 0.7 (Cronbach's).
- n ≥ 30 (CLT/large-sample rule of thumb).
- Expected counts ≥ 5 per cell (χ² assumption).
- |r| 0.1 (small), 0.3 (medium), 0.5 (large).
- Cohen's d 0.2 (small), 0.5 (medium), 0.8 (large).
