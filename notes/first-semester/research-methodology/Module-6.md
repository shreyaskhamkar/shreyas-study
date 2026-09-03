# Module 6: Data Processing and Analysis

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [Next: Module 7 →](<Module-7.md>)

## Learning outcomes

After this module, you should be able to:

- distinguish primary and secondary data, and plan data collection;
- clean, preprocess, and organise collected data;
- code, classify, and tabulate data;
- produce and read charts/plots;
- compute and interpret measures of central tendency and dispersion;
- run correlation and regression for prediction.


## Prerequisites

Complete [Module 5](Module-5.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Data collection: primary vs secondary | 10-15 minutes |
| 3 | Data cleaning and preprocessing | 10-15 minutes |
| 4 | Coding, classification, and tabulation | 10-15 minutes |
| 5 | Data visualization (charts and plots) | 10-15 minutes |
| 6 | Measures of central tendency and dispersion | 10-15 minutes |
| 7 | Correlation analysis | 10-15 minutes |
| 8 | Regression analysis and prediction models | 10-15 minutes |
| 9 | Primary and secondary data (recap) | 10-15 minutes |


## Start here: the simple idea

Raw data are messy (missing values, typos, inconsistent formats). **Processing**
cleans it into a structured dataset, and **analysis** turns it into evidence. A
clean, well-coded dataset is the foundation of a trustworthy conclusion.

### Analogy

Data processing is like sorting and washing a harvest before weighing it;
analysis is like the weigh-in that decides your market price. You can't get a
fair price on unwashed, mis-sorted fruit.

## Data collection: primary vs secondary

- **Primary data:** collected firsthand for this study (surveys, interviews,
  observations, experiments).
- **Secondary data:** reused from elsewhere (government stats, publications, web
  APIs).

### For our stress study

- **Primary:** pre/post PSS-10 scores, step counts, weekly diaries.
- **Secondary:** college enrolment demographics (to describe the sample).

## Data cleaning and preprocessing

Critical steps (often 60–80% of analyst time):

1. **Validate:** range/consistency checks (e.g., age 18–60; stress 0–40).
2. **Handle missing data:** drop rows/cases or impute (mean / k-NN / regression).
3. **Detect outliers:** z-score > 3, or IQR rule (1.5×IQR below/above quartiles).
4. **Standardise formats:** dates, labels, decimal points (typo "12." → 12.0).
5. **De-duplicate:** one row per subject.

**Worked example:** a stress-score column shows a value of 52 (impossible, max 40)
→ treat as a data-entry error, set to missing, then impute from the mean.

## Coding, classification, and tabulation

- **Coding:** assign numeric/symbol codes to categorical data (Male = 1, Female = 2)
  and enter consistently.
- **Classification:** group data (frequency distributions, bins).
- **Tabulation:** present counts and percentages in frequency tables.

```text
Stress level (PSS)   Frequency
0–13 (low)        12
14–26 (moderate)  28
27–40 (high)       6    |  Total = 46
```

## Data visualization (charts and plots)

| Chart | Best for | R/Python |
|---|---|---|
| Histogram | Distribution of a numeric variable | hist() / matplotlib |
| Box plot | Median, IQR, outliers | boxplot() / seaborn |
| Scatter plot | Relationship between two numerics | plot() / scatter |
| Bar / pie | Categorical frequencies | barplot / pie |
| Q–Q plot | Normality check | qqnorm / probplot |

**Rule:** pick the chart to match the question (distribution, comparison,
relationship, composition).

## Measures of central tendency and dispersion

| Measure | Definition | Best when |
|---|---|---|
| **Mean** | Σx / n | symmetric, no outliers |
| **Median** | middle value (ordered) | skewed or outliers |
| **Mode** | most frequent | categorical / discrete |
| **Range** | max − min | quick (sensitive to outliers) |
| **Variance** | Σ(x−x̄)² / (n−1) | spread |
| **Std dev (s)** | √variance | spread in same units |
| **IQR** | Q3 − Q1 | spread, robust to outliers |

### Worked example

PSS scores: 12, 14, 15, 16, 16, 18, 20, 22, 25, 40.
- Mean = 190/10 = 19; Median = (16+18)/2 = 17; Mode = 16.
- The 40 is an outlier; median better reflects the "typical" score.

## Correlation analysis

**Pearson's r** (−1 to +1): strength and direction of a **linear** relationship.

```text
r = Σ((x−x̄)(y−ȳ)) / sqrt(Σ(x−x̄)² · Σ(y−ȳ)²)
```

- |r| ≈ 0.1 small, 0.3 medium, 0.5 large (Cohen's rules of thumb).
- **Correlation ≠ causation** (a third variable may drive both).

**Worked example:** weekly exercise (hrs) vs stress change:
r = −0.45 → moderate negative linear relationship (more exercise ↔ less stress).

## Regression analysis and prediction models

**Simple linear regression** fits `y = a + b·x + ε` by least squares:

- `b = Σ((x−x̄)(y−ȳ)) / Σ(x−x̄)²` (slope)
- `a = ȳ − b·x̄` (intercept)

**Interpretation:**

- b = expected change in y per unit change in x.
- R² = proportion of variance explained (0–1; larger = better fit).

### Worked example (stress vs exercise)

Slope b = −0.5: each extra hour/week of exercise is associated with ~0.5 points
lower PSS. If R² = 0.20, exercise explains 20% of stress variance (the rest is
other factors).

**Multiple regression** adds more predictors (`y = a + b₁x₁ + b₂x₂ + …`).

## Primary and secondary data (recap)

Same as collection; just stress that **secondary data** requires assessing
relevance, currency, and consistency with your operationalisation before reuse.

## PDF-aligned additions

### Data-analysis workflow

```text
collect -> inspect -> clean -> code -> classify/tabulate -> visualize
        -> summarize -> analyze -> validate -> interpret/report
```

Document missing values, duplicates, outliers, transformations, and exclusion
rules. Cleaning must not silently change the meaning of the data.

### Correlation and regression cautions

Pearson correlation measures the strength and direction of a linear association
and ranges from `-1` to `+1`. Correlation does not establish causation and can be
distorted by outliers, restricted range, nonlinearity, or confounding variables.
Regression estimates an outcome from one or more predictors; interpret
coefficients together with uncertainty, assumptions, and model fit.

## Common mistakes

- Reporting mean with outliers (use median/IQR).
- Treating correlation as causation.
- Ignoring missing-data patterns (MNAR vs MCAR).
- Cherry-picking the chart that supports your claim (show the distribution).

## Memory rules

- Clean first: validate, impute, outliers, standardise, dedupe (in that order tends to work).
- Mean (symmetric) vs median (outliers); std dev in original units; IQR is robust.
- Pearson r ∈ [−1,1]; r≈0.3 medium; correlation ≠ causation.
- Linear regression y = a + bx; slope = rate of change; R² = variance explained.
- Chart to the question: histogram (distribution), scatter (relationship), box (outliers).

## Check your understanding

1. Name two ways to handle missing data.
2. Which measures of centre/spread are robust to outliers?
3. If r = 0.8 between two variables, what is the relationship? (linear? causal?)
4. In y = 10 + 2x, interpret the slope.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Delete the case or impute (mean / regression / k-NN).
2. Median and IQR (and mode for centre, robust to outliers).
3. Strong positive **linear** relationship; **not** necessarily causal.
4. Each 1-unit increase in x is associated with a 2-unit increase in y.

</details>

## Quick revision box

- Data: primary (collected) vs secondary (reused); clean before analyse.
- Cleaning: validate, handle missing, detect outliers (z/ IQR), standardise, dedupe.
- Coding → classification → tabulation; charts matched to the question.
- Central tendency (mean/median/mode) + dispersion (range/variance/SD/IQR).
- Pearson r (linear, ±1); correlation ≠ causation.
- Regression y=a+bx; slope=rate; R²=explained variance; multiple = several x's.

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

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [Next: Module 7 →](<Module-7.md>)
