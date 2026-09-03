# Research Methodology — Quick Revision

## Module 1: Introduction & Philosophy

- Research: systematic, controlled, empirical, logical, replicable, ethical.
- Types: basic (knowledge) vs applied (solve); quantitative (numbers) vs qualitative (meaning) vs mixed.
- Positivism (one truth, observable); Post-positivism (approximate truth, fallible); Constructivism (co-constructed reality).
- History: Bacon (experiment) → Newton (math laws) → 20th c (statistics/Fisher) → data science.
- Interdisciplinary (share a problem) vs transdisciplinary (merge into new frameworks).

## Module 2: Research Problem

- Problem = knowledge gap stated as a question; sources: gaps, practice, inconsistency, new tech.
- Iterative refinement: broad → context → population → variables → outcome → time.
- Fishbone maps cause categories; 5-whys finds the root cause.
- Aim (broad goal) vs Objectives (specific, measurable) vs Deliverables (outputs).
- Feasibility: time, resources, ethics, data, scope.

## Module 3: Research Design

- Design = blueprint linking question to answer.
- H₀ (no effect) vs H₁ (directional or non-directional).
- Experimental = manipulate + control + randomise (causal); non-experimental = observe (association).
- Exploratory (discover) → Descriptive (what?) → Causal (why?).
- Validity (right thing) vs reliability (stable); triangulation = multiple methods.
- Randomisation (simple/block/stratified); control group = no treatment baseline.

## Module 4: Measurement

- Scales NOIR: nominal (names), ordinal (order), interval (+,− mean), ratio (×,÷).
- Higher scale ⇒ stronger statistics; never exceed the scale level.
- Likert / Thurstone / semantic differential rating scales.
- Reliability: test-retest, parallel forms, Cronbach's α ≥ 0.7.
- Validity: content, construct, criterion (concurrent/predictive), face.
- Item pool → pilot → item analysis (item-total r > 0.3); reliability is necessary, not sufficient, for validity.

## Module 5: Sampling

- Population (target), sampling frame (list), sample (studied); frame ≠ target → frame error.
- Probability: random, systematic, stratified, cluster, multi-stage.
- Non-probability: convenience, purposive, quota, snowball, judgment.
- Sample size: n = z²σ²/d²; proportions use p=0.5 max; FPC for small populations; power for tests.
- Sampling error ∝ 1/√n (reduce only); sampling bias (eliminate via design).
- Point estimate vs interval (CI); quantitative → power+precision; qualitative → saturation.

## Module 6: Data Processing & Analysis

- Primary (collected) vs secondary (reused) data.
- Clean: validate, handle missing, detect outliers (z/IQR), standardise, dedupe.
- Code → classify → tabulate; charts to match the question.
- Central tendency: mean (symmetric) vs median (outliers) vs mode.
- Dispersion: range, variance, SD (same units), IQR (robust).
- Pearson r (−1..+1; correlation ≠ causation); regression y = a + bx; R² = variance explained.

## Module 7: Probability

- 0 ≤ P ≤ 1, P(S)=1; addition rule P(A∪B)=P(A)+P(B)−P(A∩B); P(Aᶜ)=1−P(A).
- Conditional P(A|B)=P(A∩B)/P(B); independent iff P(A|B)=P(A).
- Bayes: P(A|B)=P(B|A)P(A)/P(B); watch base-rate fallacy.
- RV discrete (count) vs continuous (density); E[X], Var[X].
- Distributions: Bernoulli/Binomial/Poisson; Uniform/Normal/t.
- CLT: sample means → Normal for large n ⇒ Z/t-tests.

## Module 8: Statistical Methods

- H₀/H₁; α = Type-I risk (usually 0.05); power = 1−β; p < α ⇒ reject H₀.
- Four steps: state H₀/H₁ → α & test → statistic & p → decide.
- Z (large n, σ known); t (small n, σ unknown; paired = differences); F (2 variances); χ² (counts).
- One-tailed (directional) vs two-tailed (both); effect size + CI matter.
- "Fail to reject" ≠ "accept"; p ≠ P(H₀ true).

## Module 9: Creativity, Writing, IPR

- Creativity: Prep → Incubate → Illume → Verify; SCAMPER, brainstorming, analogies.
- Literature review: search (keywords/DBs/criteria) → synthesise → gap → question.
- IMRaD (Introduction/Methods/Results/Discussion) for papers; numbered cites (IEEE/ACM) vs author-date (APA).
- LaTeX for maths/refs/templates; cite all third-party work.
- IPR: patent (invention ~20y), copyright (writing, long), trademark (brand), trade secret.

## Module 10: Ethics

- Belmont: Respect for persons, Beneficence, Justice.
- Informed consent, confidentiality/anonymity, minimise harm, COI disclosure.
- IRB/REC: independent review of protocol + consent + risk; continuing review.
- Privacy: minimise, anonymise, secure, comply (GDPR/HIPAA), manage retention.
- Misconduct: fabrication, falsification, plagiarism (FFP); HARKing; gift/ghost authorship.

## Module 11: Research in CS

- Experimental research tests a real system; simulation tests a model and must
  disclose assumptions and validation evidence.

## PDF-derived high-yield additions

- Positivism emphasizes measurement; post-positivism accepts imperfect evidence;
  constructivism emphasizes contextual meaning.
- A strong problem statement identifies context, gap, consequence, and proposed
  contribution. Use 5-Why or a fishbone diagram to investigate root causes.
- Validity asks whether a measure is correct; reliability asks whether it is
  consistent; triangulation combines evidence sources or methods.
- Likert, Thurstone, and semantic-differential scales are common attitude scales.
- Sample size depends on confidence, margin of error, variability, effect size,
  alpha, power, and expected dropout.
- Correlation is not causation; outliers, restricted range, and confounders matter.
- Testing order: state hypotheses -> choose alpha/test -> compute statistic/p-value
  -> decide -> interpret in context.
- Statistical significance is not the same as practical importance.
- Privacy requires minimisation, purpose limitation, access control, retention,
  consent, and responsible disclosure.
- Plagiarism includes unattributed copying or paraphrasing; patents, copyright,
  and trademarks protect different forms of intellectual property.

- CS research = artefact + analysis + evaluation (all three matter).
- Areas: AI/ML, Systems, Theory, HCI, Security, Networks, SE, Data, Graphics, IoT.
- Experimental (real measurement) vs simulation (model) vs analytical (proof).
- Proposal: problem → gap → approach (with evaluation plan) → contribution + timeline.
- Evaluation plan: dataset, baselines, metrics, statistics.

## Ten memory lines

1. Research = systematic + controlled + empirical + logical.
2. NOIR scales; never apply a stronger statistic than the scale allows.
3. H₀ = no effect; p < α ⇒ reject; "fail to reject" ≠ accept.
4. Randomisation balances confounders in expectation.
5. n = z²σ²/d²; for proportions, p=0.5 maximises required n.
6. Correlation ≠ causation; check confounding.
7. CLT makes sample means normal ⇒ justifies Z/t-tests.
8. Validity (right thing) and reliability (stable), both needed.
9. Cite everything; LaTeX for maths; respect the four IPR types.
10. CS research: prove, analyse, and measure against baselines.
