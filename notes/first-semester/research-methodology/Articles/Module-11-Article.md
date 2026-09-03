# Module 11 Article: Research in Computer Science

## The big idea

Computer-science research is unusual: it **builds and proves at the same time**.
A CS contribution lives at the intersection of three things:

1. A **correctness argument** (proof or empirical evidence it works).
2. A **complexity / cost analysis** (how fast, how much, how scalable).
3. An **empirical comparison** against the best existing method.

Missing any one undermines the claim. A fast algorithm that is wrong is useless;
a correct one that is slower than the state of the art is not a contribution.

## What is CS research?

CS research produces new **artefacts and knowledge**: algorithms, systems,
languages, interfaces, and theories. It spans:

- **Theory of computation & algorithms** (what is computable? how fast?).
- **Software & systems** (languages, OS, networks, databases, security).
- **Artificial intelligence & machine learning** (models, reasoning, data).
- **Human–computer interaction** (interfaces, usability, accessibility).
- **Architecture & distributed systems** (hardware/software co-design).
- **Security & privacy** (cryptographic protocols, attack/defence).
- **Data science / databases** (storage, query, mining).
- **Graphics / vision / robotics** (geometry, sensors, control).

## Research areas in CS (and a real 2020s example)

| Area | Hot topic | Representative problem |
|---|---|---|
| AI / ML | Foundation models | How to fine-tune without forgetting |
| Cybersecurity | Adversarial robustness | Defend models against evasion |
| Systems | Serverless / edge | Scheduling across edge devices |
| HCI | Accessibility | Voice UIs for low-literacy users |
| IoT | Energy harvesting | Sustain sensors from ambient power |
| Theory | Fine-grained complexity | Faster than O(n log n) sorting? |
| SE / Software | LLM-assisted coding | When does Copilot help/hurt? |

## Experimental vs simulation-based CS research

| Method | When to use | Strengths | Weaknesses |
|---|---|---|---|
| **Real experiment** | On users/hardware | Ground truth, realism | Expensive, hard to control |
| **Simulation** | Model-based, repeatable | Controllable, scalable | Only as good as the model |
| **Analytical** | Proofs, complexity bounds | Exact, general | Ignores real constants/humans |

Most strong CS work **combines** them: prove correctness (analytical), benchmark
runtime on real and synthetic data (experimental/simulation), and compare to
baselines.

## A CS research proposal: the anatomy

Following the four-part plan:

### Part 1 — Problem & motivation

> "Developers spend 23% of coding time on autocomplete distractions. A model that
> predicts the *next function* (not token) could cut this, but no existing
> approach predicts semantic, cross-file symbols."

### Part 2 — Prior work and gap

- State of the art: CodeBERT, TabNet-Code (token level).
- Your gap: no method predicts **semantic** cross-file symbols at **edit time**.

### Part 3 — Approach & evaluation plan

- **Model:** transformer over a file graph (AST nodes + cross-file links).
- **Dataset:** 10 open-source Java repos + held-out tests.
- **Baselines:** state-of-the-art token models + a last-month-frequency baseline.
- **Metrics:** top-1 / top-5 accuracy, latency (ms), and a developer A/B trial.
- **Analysis plan:** compare accuracy, runtime, and user satisfaction.

### Part 4 — Contribution, timeline, risks

- **Contribution:** a cross-file next-symbol predictor + open dataset/model.
- **Timeline:** data (1 mo) → model (2) → eval (1) → write-up (1).
- **Risks:** API-rate limits for data; mitigation = local mirror.

## Evaluation metrics that CS reviewers care about

- **Correctness:** theorem/property-based tests, unit tests.
- **Complexity:** time O(·), space O(·) proven or measured.
- **Performance:** latency, throughput, memory.
- **Accuracy:** precision/recall/F1, top-k accuracy.
- **Scalability:** behaviour as data size grows (n vs n log n).
- **User-centered:** task completion time, satisfaction (when relevant).

> Always report **all** metrics and **error bars**. A single headline number
> hides variance.

## Reproducibility in CS

- Share **code** (GitHub/GitLab), **models**, and **processed data** (or a script
  to reproduce it) under a permissive license.
- Use **containers** (Docker) or **virtual environments** to pin dependencies.
- Cite **compute and hardware** (GPU type, training time).
- Prefer **open datasets**; if proprietary, share statistics and a sample.

## Writing a CS paper

### Structure

- **Introduction:** the problem, the gap, your single-sentence contribution, and
  the paper's roadmap.
- **Related work:** position your work relative to the literature (what it does vs
  yours).
- **Approach:** describe the method precisely enough to reproduce.
- **Evaluation:** dataset, baselines, metrics, results, threats to validity.
- **Discussion / Conclusion:** limitations, future work.

### The "single contribution sentence" trick

Open reviewers should be able to state your contribution in one sentence. Example:
"we present the first cross-file next-symbol predictor that is 2× faster than
token-level baselines and 7% more accurate."

## Ethics in CS research (cross-cutting)

- **Data rights:** scraping public data ≠ ethical use; check terms and privacy.
- **Bias/fairness:** measure performance across subpopulations.
- **Security:** report the attack surface honestly (responsible disclosure).
- **Dual use:** weigh benefits vs harms if a method could be misused.
- **Human subjects:** an algorithmic study of student data still needs ethics
  approval if it can identify individuals.

## Common mistakes

- Solving a problem nobody has (no literature review / gap).
- Comparing against a strawman (weak baseline) rather than the state of the art.
- Reporting only accuracy and ignoring runtime, fairness, or privacy.
- Claiming generality without evidence ("works on 3 datasets, we claim all
  software").
- Not releasing code/data, so the result can't be checked.

## Memory rules

- CS = prove + analyse + evaluate (all three).
- Areas: theory, systems, AI/ML, HCI, security, networks, SE, DB, graphics, IoT.
- Experimental (real) vs simulation (model) vs analytical (proof); combine.
- Proposal: problem → gap → approach+evaluation → contribution + timeline + risks.
- Evaluation: metrics + baselines + error bars; release code/data.

## Check your understanding

1. Name the three things a CS contribution must demonstrate.
2. Which evaluation dimension is "how long your code takes"?
3. True or false: an algorithm that is 100× faster but wrong is a contribution.
4. What should a reproducibility package include?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Correctness/proof, complexity/cost analysis, and empirical comparison to baselines.
2. Runtime / latency / throughput.
3. False (correctness is necessary; speed without correctness is useless).
4. Code, the datasets/process used to build them, a way to reproduce the numbers
   (scripts/containers), and pinned dependencies.

</details>

## See also

- Module 8 (statistics) for the inference behind comparisons.
- Module 10 (ethics) for CS-specific concerns (data rights, fairness, dual use).
- `Glossary.md` (algorithm, reproducibility, dual use, baseline).
