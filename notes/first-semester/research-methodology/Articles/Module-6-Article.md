# Module 6 Article: From Raw Responses to Evidence

## The big idea

Data arrive messy and leave clean. **Processing** converts raw responses into an
analysis-ready dataset; **analysis** turns that dataset into evidence for your
research question. Spend time on processing — it is usually 60–80% of the real
work, and analysts who skip it "discover" patterns that are just data-entry errors.

## Data collection: primary vs secondary

- **Primary data:** collected by you for this study (surveys, interviews,
  experiments, observations).
- **Secondary data:** reused from elsewhere (government statistics, open
  datasets, papers' supplementary files).

### For our stress study

- **Primary:** PSS-10 scores, step counts, weekly diaries.
- **Secondary:** college enrolment demographics to describe the sample.

> Rule: if you reuse secondary data, **trace it to its source**, check its
> methods, and decide whether those methods match your operationalisation.

## Data cleaning and preprocessing

| Step | What | Typical check |
|---|---|---|
| 1. Validate | structure + range | age 18–60; stress 0–40 |
| 2. Missing | find & decide | <5% → mean; >5% → investigate |
| 3. Outliers | detect | z > 3 or 1.5×IQR beyond quartiles |
| 4. Standardise | format & labels | "male"/"M"/"m" → "Male" |
| 5. De-duplicate | one row per person | remove duplicate email |

### Worked example

A PSS column has one entry of `52` (score only goes 0–40) → data-entry error →
set to missing → impute with the within-group mean. That single row would have
inflated the group's mean by ~1.5 points.

## Coding, classification, and tabulation

- **Coding:** assign numeric/symbol codes to categories (Male = 1, Female = 2)
  to fit the analysis software.
- **Classification:** group data (frequency distributions, bins).
- **Tabulation:** present as frequency tables and cross-tabs.

```text
Group        N   Mean PSS   SD
Exercise    80    18.2     5.1
Control     80    24.5     6.3
```

## Data visualization

Match the chart to the question:

| Chart | Use for |
|---|---|
| Histogram | Distribution shape of one numeric variable |
| Box plot | Median, IQR, outliers; compare groups |
| Scatter plot | Relationship between two numerics |
| Bar / pie | Categorical counts/proportions |
| Line plot | Trends over time |

**Rule:** always label axes and give a clear caption.

## Descriptive statistics: center and spread

- **Mean** (Σx/n) — for symmetric data; **median** for skewed/outliers; **mode**
  for categorical (the only valid center).
- **Range, IQR (Q3 − Q1), standard deviation, variance** — spread.
- IQR and median are **robust**; mean and SD are **sensitive** to outliers.

## Correlation and regression

### Pearson r (linear association, −1 to +1)

```text
r = Σ((x−x̄)(y−ȳ)) / sqrt(Σ(x−x̄)² · Σ(y−ȳ)²)
```

Correlation ≠ causation — a third variable may drive both.

### Simple linear regression

Fits `y = a + b x + ε` by least squares.

- `b = Σ((x−x̄)(y−ȳ)) / Σ(x−x̄)²` (slope = rate of change)
- `a = ȳ − b x̄`
- **R²** = proportion of variance in y explained by x.

### Worked example

Fit PSS_score = a + b·(avg_daily_steps). Suppose b = −0.30, R² = 0.18:

- Each extra 1,000 steps/day is associated with 0.30 fewer PSS points (association,
  not proof of causation).
- Step count explains 18% of stress-score variance — other factors matter too.

## Primary and secondary data (recap)

Primary data gives exactly the variable you need but costs time/effort. Secondary
data is cheap but may **not map** onto your operational definition (a government
"anxiety index" ≠ "perceived stress").

## Common mistakes

- Leaving impossible values (e.g., stress = 52) in the raw data.
- Deleting **all** outliers without thinking (some are real, not errors).
- Reporting a correlation as a causal effect.
- Drawing trend lines on a bar chart.

## Memory rules

- Clean in order: validate → missing → outliers → standardise → de-duplicate.
- Mean + SD for symmetric; median + IQR for skewed/outliers; mode for nominal.
- r ∈ [−1, 1]: sign = direction, |r| = strength; R² = variance explained.
- Match the chart to the question; label axes.

## Check your understanding

1. Why impute a missing stress score with the group mean rather than listwise delete?
2. Which chart would you use for "distribution of ages"?
3. If r = −0.60, how much variance is shared?
4. True or false: primary data is always better than secondary data.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Listwise deletion loses a whole case (and breaks pairing); mean imputation keeps
   the case and is simple, though it shrinks variance (state this trade-off).
2. Histogram.
3. R² = 0.36 → 36% of variance is shared.
4. False — secondary data is fine when it matches your operationalisation and source is trustworthy.

</details>

## Exam angle

For "data processing and analysis":

1. Order the cleaning steps: validate → missing → outliers → standardise → de-dupe.
2. Pick center/spread correctly (mean+SD vs median+IQR).
3. Interpret r (direction/strength) and R² (variance explained) in words.
4. Distinguish **primary** (collected) from **secondary** (reused) data and warn about the fit-to-purpose risk.

## See also

- Module 5 (sampling) for how data reach you; Module 8 (stats) for the tests.
- `Glossary.md` (outlier, standard deviation, correlation, regression).
