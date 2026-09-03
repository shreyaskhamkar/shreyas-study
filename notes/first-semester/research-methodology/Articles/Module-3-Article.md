# Module 3 Article: Blueprint for Truth — Design, Randomization, and Validity

## The big idea

A research **design** is the plan that determines how strong your conclusions are.
No amount of fancy statistics can fix a design that confounds the treatment with
something else. The three things that matter most:

1. **Randomization** — balance known and unknown confounders in expectation.
2. **Control group** — a baseline that isolates the effect of the treatment.
3. **Validity** — making sure your design can actually support the claim you make.

## Experimental vs non-experimental: the causal divide

| Dimension | Experimental | Non-experimental |
|---|---|---|
| Treatment assigned? | Yes (by the researcher) | No (observed as it happens) |
| Confounding control | Strong (randomization) | Weak (statistics only) |
| Causal claim | Strong | Weak (association only) |

### For our stress study

- **Experimental:** you randomise students to an 8-week exercise programme vs.
  a no-intervention control, then compare stress change. Causal.
- **Non-experimental:** you survey students' habitual exercise and stress at one
  time point. Association only — fit students might also have better time
  management (confounder).

## Randomization and control groups

### Why a control group?

Without it, you cannot tell the treatment from **history** (stress fell anyway
because exams ended) or **regression to the mean** (people who start high tend
to come down). The control group answers "compared with what?"

### Randomization techniques

- **Simple random allocation** — a coin flip / computer random number.
  ✓ Simple; ✗ small trials can get imbalanced.
- **Block randomization** — within small blocks, ensure equal allocation.
  ✓ Keeps groups balanced over time; good for small trials.
- **Stratified randomization** — randomize within a key stratum (e.g., sport vs.
  non-sport student). ✓ Balances a known prognostic factor.

### For our study

Randomise within **stratata** (sport vs non-sport, since fitness may matter). Use
block randomization by enrolment week so each group gets equal treatment over the
semester. Offer the control group a **wait-list** programme after the study to
keep motivation.

## Exploratory, descriptive, and causal designs

- **Exploratory:** discover the territory (qualitative interviews on what
  "stress" means to students).
- **Descriptive:** characterise (prevalence of high stress in the college).
- **Causal:** test a cause-effect (does exercise reduce stress? RCT).

A single project can contain all three: explore the construct, describe its
prevalence, then run the causal test.

## Validity, reliability, and triangulation

### Threats to internal validity (rival explanations)

| Threat | What it is | How to protect |
|---|---|---|
| History | outside events during the study | control group + short window |
| Maturation | natural change over time | control group |
| Testing | being measured changes behaviour | minimal/masked assessment |
| Instrumentation | measure changes over time | stable, standardised instrument |
| Selection | groups differ at baseline | randomization |
| Attrition | dropouts bias results | intention-to-treat |
| Regression to the mean | extreme values drift toward average | control group |
| Experimenter bias | researcher expectations | blinding, pre-registration |

### Reliability (consistency) and how to show it

- **Internal consistency:** Cronbach's α ≥ 0.7 for multi-item scales.
- **Test-retest:** same score on re-measurement (stability).
- **Inter-rater:** different raters agree (κ for categories).

### Triangulation

Use **multiple methods/data sources** on the same question. For our study:
PSS-10 (validated scale) + weekly mood diaries + step counts + a short interview.
If all point the same way, the finding is hard to dismiss.

## Choosing a design for a proposal

A decision tree:

```
Is the question about "does X cause Y"?
  Yes → can you ethically/randomize?
        Yes → true experiment (RCT)
        No  → quasi-experiment (non-equivalent groups)
  No → is it exploratory (discover)?
        Yes → qualitative (interviews, grounded theory)
        No  → descriptive/observational (survey, cohort)
```

## Exam angle

For "experimental vs non-experimental design":

1. Define each by whether the researcher **assigns** the treatment.
2. State the internal-validity threats randomization addresses (selection) and
   those it does not (maturation — which needs a control group).
3. Name one randomization scheme (block/stratified) and when to use it.
4. Define **validity** (construct, internal, external) and **reliability** (α,
   test-retest, inter-rater); mention **triangulation** as a strengthener.

## Common mistake

Reporting a correlation from a survey as if it were a causal effect. Emphasize:
**causal language requires a design that controls confounding** (ideally
randomization + control group).

## See also

- Module 2 (sharp problem → which design can answer it).
- Module 4 (measurement must match the construct the design tests).
- `Glossary.md` (internal validity, randomization, control group).
