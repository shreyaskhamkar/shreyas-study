# Module 11: Research in Computer Science

[← Previous: Module 10](<Module-10.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)

## Learning outcomes

After this module, you should be able to:

- characterise what distinguishes computer-science research;
- survey the main research areas (AI/ML, systems, theory, HCI, cybersecurity, etc.);
- compare experimental, simulation-based, and analytical methods;
- structure a convincing CS research proposal.


## Prerequisites

Complete [Module 10](Module-10.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Introduction to computer-science research | 10-15 minutes |
| 3 | Research areas in computer science | 10-15 minutes |
| 4 | Experimental vs simulation-based CS research | 10-15 minutes |
| 5 | Writing a CS research proposal | 10-15 minutes |


## Start here: the simple idea

Computer-science research creates new **artefacts, methods, and knowledge** —
algorithms, systems, interfaces, proofs. Its experiments run on computers, so it
borrows statistics (for evaluation) and engineering (for building) but needs an
intellectual core of its own: **computational thinking** about correctness,
complexity, and empirical validation.

### Analogy

CS research = inventing a new kind of brick, then testing that the wall built
with it is taller, cheaper, or safer than walls made of old bricks. The brick is
the artefact (algorithm/system); the test compares against baselines.

## Introduction to computer-science research

What makes CS research "CS"?

1. **Construction:** you build an artefact (an algorithm, protocol, or system).
2. **Analysis:** you prove or reason about its properties (correctness, complexity).
3. **Evaluation:** you empirically compare it against baselines on real or
   synthetic data.

A strong CS paper argues all three: **it works (proof), it scales (analysis),
and it beats the alternatives (measurement)**.

## Research areas in computer science

| Area | Core question | Typical artefacts |
|---|---|---|
| **AI / ML** | How can machines learn/reason? | Models, datasets, algorithms |
| **Systems** | How do we build reliable/fast computers? | OS, networks, distributed systems |
| **Theory** | What is computable and at what cost? | Algorithms, complexity results, proofs |
| **Human-Computer Interaction (HCI)** | How do people interact with tech? | Interfaces, user studies, tools |
| **Cybersecurity** | How do we protect computation and data? | Protocols, attacks, detection methods |
| **Networking / Distributed systems** | How do distributed components coordinate? | Protocols, consensus algorithms |
| **Software Engineering** | How do we build/maintain software well? | Methods, tools, empirical studies |
| **Data Science / Databases** | How do we store/analyse big data? | Query languages, indexing, pipelines |
| **Graphics / Visualization** | How do we render/represent images? | Rendering algorithms, viz techniques |
| **IoT / Edge / Mobile** | How do we compute everywhere? | Sensor systems, low-power protocols |

## Experimental vs simulation-based CS research

### Experimental (empirical) CS research

Write code; measure on real or realistic workloads; compare to baselines.

**Strengths:** ground truth, real-world behaviour.
**Weaknesses:** hard to control all variables; expensive hardware/time.

### Simulation-based research

Model the system in software; vary parameters that are hard to set in reality.

**Strengths:** controllable, reproducible, scalable.
**Weaknesses:** only as realistic as the model; can "overfit the simulator."

### Analytical / theoretical research

Proofs and mathematical analysis (correctness, complexity bounds) without
running code.

**Strengths:** general, exact guarantees.
**Weaknesses:** may ignore constants/human factors; harder to publish alone.

### For our running example from earlier modules

The stress-study's evaluation could be **experimental** (run the programme,
measure stress), with an **analytical** component (a power analysis to size the
sample, a complexity analysis of the analysis script).

## Writing a CS research proposal

A standard CS research proposal structure (matching the Module-9 "4-part plan"):

1. **Problem & motivation:** one paragraph — what is broken/missing?
2. **Prior work / gap:** the literature gap you fill; why existing work is
   insufficient (cite 3–5 key papers).
3. **Proposed approach / methodology:** your idea, in enough detail to be judged
   feasible — design, implementation plan, and **evaluation plan**.
4. **Expected contribution & impact:** concrete, specific outcomes (e.g., "a
   prototype that is 2× faster with 95% accuracy"), plus a short **timeline**
   (Gantt) and **risks + mitigations**.

### The CS proposal's special ingredient: the evaluation plan

Unlike other fields, CS proposals must promise **how you will prove** the idea
works:

- **Dataset:** real data, a benchmark, or a realistic synthetic generator.
- **Baselines:** state-of-the-art methods you will compare against.
- **Metrics:** the numbers that matter (accuracy, throughput, latency, F1, time).
- **Statistical rigour:** significance tests, error bars, repeated runs.

### Worked sketch

Proposal: "A lightweight stress-detection model from wearables for students."

1. Problem: current models are too heavy for a phone/edge device.
2. Gap: prior work ignores on-device latency; no public wearable student dataset.
3. Approach: a quantised 1-D CNN; deploy on a smartwatch; compare to full-CNN and
   SVM baselines on accuracy/latency/power.
4. Contribution: 10× lower latency at <1% accuracy drop; open-weight model +
   dataset; 6-month timeline (data→model→deploy→evaluate).

## PDF-aligned additions

### Experimental versus simulation-based CS research

Experimental research tests a real program, system, tool, or user group under
controlled conditions and measures outcomes. Simulation-based research tests a
model of a system to explore scenarios that may be expensive, unsafe, or
impossible to run directly.

| Aspect | Experiment | Simulation |
|---|---|---|
| Object studied | Real system or participants | Model of the system |
| Strength | Direct practical evidence | Safe, repeatable, scalable scenarios |
| Main risk | Cost, confounding, limited scale | Model assumptions may not match reality |
| Good practice | Control variables and repeat trials | Validate the model and disclose assumptions |

When possible, combine simulation for exploration with real experiments for
validation. A performance claim should identify the environment, baseline,
metrics, repetitions, and uncertainty.

## Common mistakes

- Proposing a **solution without a clear problem**.
- Evaluating only against a weak baseline (or only in simulation).
- Promising an evaluation with no real dataset/benchmark.
- Over-claiming ("100× faster," "human-level") without caveats.
- Ignoring reproducibility (no code/data release planned).

## Memory rules

- CS research = artefact + analysis + evaluation; all three matter.
- Areas: AI/ML, Systems, Theory, HCI, Security, Networks, SE, Data, Graphics, IoT.
- Experimental (real measurement) vs simulation (model) vs analytical (proofs); combine.
- Proposal: problem → gap → approach → contribution; always include an evaluation plan.
- Evaluation: dataset, baselines, metrics, statistics.

## Check your understanding

1. Name three pillars of a strong CS paper.
2. Which CS area studies "how do we protect computation and data"?
3. What is the difference between an experimental and a simulation study?
4. What four elements must a CS proposal's evaluation plan specify?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Correctness/analysis (proof), scalability (analysis), empirical comparison (measurement).
2. Cybersecurity (and/or Networking).
3. Experimental = measure a real artefact on real data; simulation = measure a model.
4. (i) dataset/benchmark, (ii) baselines, (iii) metrics, (iv) statistical rigour.

</details>

## Quick revision box

- CS research builds artefacts, proves properties, and empirically evaluates against baselines.
- Areas: AI/ML, Systems, Theory, HCI, Security, Networks, SE, Data, Graphics, IoT.
- Methods: experimental (real measurement), simulation (model), analytical (theory/proof).
- Proposal: problem → gap → approach (with evaluation plan) → contribution + timeline + risks.
- Evaluation plan: dataset, baselines, metrics, statistics — the CS-specific promise.

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

[← Previous: Module 10](<Module-10.md>) · [Subject index](README.md) · [MCQ practice →](MCQ.md)
