# M.C.A. (Online Mode) Semester I Examination

**Paper Code:** OCA-510 MJ  
**Title:** Artificial Intelligence  
**Time:** 3 Hours  
**Maximum Marks:** 70

## Q1) Multiple Choice Questions with reasoning — answer any 25 of 30 [25 × 2 = 50]

For every attempted question, select one option and give a brief reason.

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 1 | A rational agent selects an action expected to maximise its: | Sensor count | Performance measure | Program length | Knowledge-base size |
| 2 | PEAS stands for: | Performance measure, Environment, Actuators, Sensors | Program, Events, Actions, State | Performance, Evaluation, Agents, Search | Percepts, Environment, Actions, State |
| 3 | A fully observable environment provides: | Complete relevant state information | Deterministic outcomes | Only one agent | No state changes |
| 4 | A stochastic environment has: | Uncertain action outcomes | Complete observability | No dynamics | One possible action |
| 5 | A model-based reflex agent maintains: | Internal state | A complete plan only | No memory | Only neural weights |
| 6 | In PEAS, actuators allow the agent to: | Sense | Act on the environment | Define utility | Store beliefs |
| 7 | BFS expands the shallowest node using a: | LIFO stack | FIFO queue | Heuristic-only queue | Random set |
| 8 | UCS expands the node with smallest: | Depth | Path cost `g(n)` | Heuristic `h(n)` | Branching factor |
| 9 | A* evaluates nodes using: | `g(n)+h(n)` | `g(n)−h(n)` | `h(n)` only | Depth only |
| 10 | An admissible heuristic never: | Underestimates | Overestimates true remaining cost | Equals zero | Uses knowledge |
| 11 | Alpha–beta pruning changes: | Minimax's final value | Nodes evaluated, not the result | Player order | Utility values |
| 12 | A CSP consists of variables, domains, and: | Constraints | Rewards | Search depths | Probabilities |
| 13 | Propositional logic represents: | Truth-valued atomic statements | Quantified objects | Probability tables | Neural weights |
| 14 | First-order logic adds: | Only truth tables | Predicates and quantifiers | Probabilities | Search costs |
| 15 | Modus ponens derives Q from P and: | `Q→P` | `P→Q` | `¬P` | `P∨Q` |
| 16 | Propositional resolution operates on: | Clauses | Frames only | Probabilities | Weights |
| 17 | A semantic network mainly uses: | Nodes and labelled links | A numeric matrix | A queue | Source code |
| 18 | Backward chaining begins with: | All facts | A goal to prove | Random actions | A probability prior |
| 19 | Bayes' theorem computes a posterior from: | Likelihood and prior | Variance only | Search cost | Entropy only |
| 20 | Independent A and B satisfy: | `P(A∩B)=P(A)P(B)` | `P(A∩B)=P(A)+P(B)` | `P(A\|B)=0` | `P(A)=P(B)` |
| 21 | A Bayesian network is a: | Directed acyclic graph with conditional tables | Flat truth table | Search tree | Rule list only |
| 22 | Naive Bayes assumes features are: | Conditionally independent given the class | Always equally likely | Mutually exclusive | Unobserved |
| 23 | An HMM contains: | Hidden states and observable emissions | Only visible states | No transition probabilities | A search heuristic |
| 24 | Under uncertainty, a rational choice maximises: | Expected utility | Best possible outcome alone | Immediate reward only | Number of outcomes |
| 25 | A perceptron computes: | A weighted sum followed by activation | A database join | A shortest path | A truth table only |
| 26 | ReLU is commonly defined as: | `max(0,x)` | `1/(1+e^-x)` | `x²` | `sign(x)` |
| 27 | A single linear perceptron cannot represent: | AND | OR | XOR | NOT |
| 28 | Backpropagation uses the chain rule to compute: | Gradients | Search paths | Priors | Logical clauses |
| 29 | Gradient descent updates a weight generally in the direction: | Opposite the loss gradient | Along the loss gradient | Of maximum activation | Of random increase |
| 30 | Softmax converts output scores into: | A class-probability distribution | Binary inputs | Hidden states | Search costs |

## Q2) Answer any five in approximately two sentences [5 × 2 = 10]

1. Distinguish rationality from omniscience in an intelligent agent.
2. Define a search problem using its main components.
3. Distinguish greedy best-first search from A*.
4. What do MRV and forward checking do in a CSP?
5. Distinguish a semantic network from a frame.
6. Define conditional independence in a Bayesian network.
7. State the perceptron learning rule.

## Q3) Answer any two in approximately ten lines [2 × 5 = 10]

1. Compare BFS, DFS, UCS, greedy best-first search, and A* by selection rule, completeness, and optimality.
2. Explain propositional resolution by converting `P→Q`, `P`, and `¬Q` to clauses and deriving a contradiction.
3. A disease has prior probability 0.01. A test has sensitivity 0.90 and false-positive rate 0.05. Find `P(Disease | Positive)`.
4. For input `x=(1,0)`, target `t=1`, initial weights `(0.2,−0.1)`, bias `−0.3`, learning rate `0.1`, and step output `1` when net `≥0` otherwise `0`, perform one perceptron update.
