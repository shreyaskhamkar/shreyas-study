# Semester I 70-MCQ Exam Guide

## What was checked

The current notes were compared module by module with text extracted from every
available file in `PdfMaterial`: 401 PDFs and 7,014 pages, with zero extraction
failures. See [PDF Coverage Audit](PDF-Coverage-Audit.md) for the detailed result
and source limitations.

| Paper | PDF coverage | Notes coverage |
|---|---:|---:|
| Programming from First Principles | No matching PDF folder | 14 modules |
| Processor Architecture and Design | 93 PDFs | 10 modules |
| Computational Mathematics - I | 49 PDFs | 6 modules; PDFs directly cover Modules 1–4 |
| Persistent Data Management | 80 PDFs | 10 theory modules + Module 11 practical guide |
| Artificial Intelligence | 87 PDFs | 5 modules |
| Research Methodology | 92 PDFs | 11 modules |

The existing module notes are already the main learning source. Use the PDFs
when a diagram, worked calculation, classroom example, or exact slide wording is
unclear. Reading all 401 PDFs from the beginning would be inefficient.

## The four-pass method

Use the same cycle for every module:

1. **Understand:** read the module's “simple idea,” definitions, and worked example.
2. **Recall:** close the file and write the key terms, formulae, or process from memory.
3. **Discriminate:** study the “A versus B” differences and common mistakes; MCQs often test these.
4. **Test:** attempt questions without notes, review every wrong option, and retry after 24 hours.

Do not memorise only the answer letter. Say why the correct option is true and
why the closest distractor is false.

## Score rule

| Practice score | Meaning | Next action |
|---:|---|---|
| Below 49/70 | Foundations are incomplete | Re-read weak modules and rebuild recall notes |
| 49–55/70 | Pass-level recall | Drill definitions and common confusions |
| 56–62/70 | Good | Review mistakes and practise numerical/tracing items |
| 63–70/70 | Exam-ready | Retest after 2–3 days to confirm retention |

Target **at least 56/70 twice**, on different days, before calling a subject ready.

## High-yield checklist by paper

### OCA-501 — Programming from First Principles

- Mutable vs immutable collections; ordered vs unordered; duplicates and keys.
- Higher-order and first-class functions; `map`, `filter`, lambda, and closures.
- `for` vs `while`; eager lists vs lazy generators; `return` vs `yield`.
- Dynamic typing, strong typing, hints, inference, `Any`, `TypeVar`, and generics.
- Classes, data classes, enums, concrete types, protocols, ABCs, and duck typing.
- Recursion: base case, recursive case, call stack, and tracing.
- Syntax vs operational semantics; polymorphism types and dispatch.

### OCA-502 — Processor Architecture and Design

- Stored-program idea, fetch–decode–execute, PC, IR, control unit, and datapath.
- Gates, Boolean logic, combinational vs sequential logic, flip-flops, and FSMs.
- Address/data/control buses; CPU, chipset, I/O, clock, and registers.
- SRAM vs DRAM; locality; cache mapping; hit/miss; write policies.
- Pipeline stages and structural/data/control hazards; forwarding and prediction.
- RISC vs CISC; ISA vs microarchitecture; ARM basics and addressing modes.
- Process/VM abstractions, virtual memory, paging, MMU, TLB, and page faults.
- Interrupt vs exception vs trap; user/kernel mode; API vs ABI; boot sequence.

### OCA-503 — Computational Mathematics - I

- Proposition, WFF, truth tables, implication, equivalence, quantifier negation.
- Natural-deduction rules; free vs bound variables; soundness and decidability.
- Degree, handshaking lemma, walks/trails/paths/cycles, Euler criteria, trees.
- Spanning trees, Prim vs Kruskal, adjacency/incidence matrices.
- Matrix dimensions, multiplication order, determinant, inverse, rank, transpose.
- Vector spaces, subspaces, span, dependence, basis, dimension, orthogonality.
- Characteristic equation, eigenvalues/eigenvectors, trace, determinant, similarity.

### OCA-504 — Persistent Data Management

- Three-schema architecture, data independence, ER cardinality, and all key types.
- Functional dependencies, closures, candidate keys, 1NF–BCNF, lossless decomposition.
- Relational algebra operators vs tuple/domain relational calculus and query safety.
- SQL joins, grouping, `WHERE` vs `HAVING`, nulls, subqueries, views, and triggers.
- Dense/sparse and clustered/non-clustered indexes; B+ trees vs hashing.
- Query cost, selectivity, join algorithms, pipelining, and materialisation.
- ACID, transaction states, anomalies, serializability, recoverability, WAL.
- S/X locks, 2PL variants, deadlock, timestamp ordering, and MVCC.
- XML, distributed/parallel databases, 2PC, CAP, NoSQL, Hadoop, and MapReduce.

### OCA-510 — Artificial Intelligence

- AI foundations; rational agents; PEAS; environment and agent types.
- Problem formulation; BFS, DFS, UCS, IDS, bidirectional, greedy, and A*.
- Completeness, optimality, time/space cost, admissibility, and consistency.
- Hill climbing, simulated annealing, genetic algorithms, minimax, alpha–beta, CSP.
- Propositional logic, inference, resolution, semantic nets, frames, scripts, ontologies.
- Conditional probability, Bayes' rule, independence, Bayesian networks, Naive Bayes, HMMs.
- Neuron model, activation functions, perceptron rule, loss, gradient descent, backpropagation.

### OCA-531 — Research Methodology

- Research types, characteristics, approaches, philosophies, aims, and objectives.
- Problem definition, feasibility, scope, fishbone, 5-Why, and deliverables.
- Hypotheses, experimental/non-experimental designs, validity, reliability, triangulation.
- NOIR measurement scales; Likert/Thurstone; questionnaire, survey, and instrument.
- Probability/non-probability sampling, sample size, sampling error, and bias.
- Data cleaning, charts, central tendency, dispersion, correlation, and regression.
- Probability rules, random variables, distributions, expectation, and Bayes' theorem.
- Type I/II errors, alpha, p-value, power, tails, z/t/F/chi-square test selection.
- Literature review, proposal structure, citation, plagiarism, IPR, and LaTeX basics.
- Belmont principles, consent, privacy, misconduct, CS experiments, and simulation validity.

## Calendar strategy

The timetable has no gap after 26 September, so finish first learning of all six
subjects before 24 September. During the exam run, revise only the next paper:

- **Before 24 Sep:** complete all modules, first MCQ attempt, and error log.
- **24 Sep evening:** Processor Architecture quick revision and wrong answers.
- **26 Sep evening:** Computational Mathematics formulae and worked problems.
- **27 Sep evening:** Persistent Data Management comparisons and SQL/transactions.
- **28 Sep evening:** AI search tables, probability, and neural-network rules.
- **29 Sep evening:** Research Methodology definitions, test selection, and ethics.

## A useful error log

For every wrong answer, record only four fields:

| Question/topic | My wrong idea | Correct rule | Retest date |
|---|---|---|---|
| Example: p-value | `p` is P(H0 true) | Probability of data this extreme or more under H0 | Tomorrow |

Ten carefully reviewed mistakes teach more than repeatedly answering familiar questions.
