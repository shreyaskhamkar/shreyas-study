# Artificial Intelligence — MCQ (Multiple Choice Questions)

> Questions 1–30 include a few broad AI-application questions. Questions 31–70
> concentrate on the five modules represented by the 87 source PDFs: agents,
> search, knowledge representation, uncertainty, and neural networks.

## Topic 1: Intelligent Agents

**1. The Turing test is best described as:**
a) A benchmark measuring the IQ of a computer program
b) A test of whether a machine can exhibit intelligent behavior indistinguishable from a human, judged via text dialogue
c) A benchmark for chess-playing programs
d) A measure of a robot's reaction time

**2. The PEAS descriptor for an agent stands for:**
a) Performance, Environment, Actuators, Sensors
b) Performance measure, Environment, Actuators, Sensors
c) Problem, Environment, Actuators, Sensors
d) Performance, Evaluation, Actuators, Sensors

**3. An environment is called "fully observable" when:**
a) The agent has actuators for every action
b) The agent's sensors give it complete information about the state of the environment
c) There is no uncertainty in outcomes
d) The environment is deterministic

## Topic 2: Uninformed Search

**4. Breadth-first search is guaranteed to find an optimal solution when all step costs are:**
a) Equal
b) Zero
c) Positive
d) Negative

**5. Iterative deepening search (IDS) combines:**
a) BFS's speed with DFS's low memory
b) DFS's speed with BFS's optimality
c) DFS's low memory with BFS's completeness and optimality
d) A higher branching factor with a lower depth limit

**6. Which search strategy is complete on a finite tree but NOT guaranteed complete on an infinite tree?**
a) Breadth-first search
b) Uniform-cost search
c) Depth-first search
d) Iterative deepening search

## Topic 3: Informed (Heuristic) Search

**7. A* search is guaranteed to be optimal and complete if its heuristic h(n) is:**
a) Consistent
b) Admissible
c) Greedy
d) Always zero

**8. Greedy best-first search selects the next node based on:**
a) f(n) = g(n) + h(n)
b) g(n), the cost so far
c) h(n), the heuristic estimate to the goal
d) h*(n), the true cost to the goal

**9. Hill-climbing search can fail to reach the goal because of:**
a) Plateaus and ridges only
b) Local maxima, plateaus, and ridges
c) Reaching the global maximum too quickly
d) A branching factor that is too low

## Topic 4: Constraint Satisfaction

**10. The constraint "A ≠ B" on two variables is:**
a) A unary constraint
b) A binary constraint
c) A ternary constraint
d) An n-ary constraint

**11. Backtracking search for CSPs commonly combines backtracking with:**
a) Forward checking only
b) Arc consistency (such as AC-3) combined with backtracking search
c) Min-conflicts search only
d) Hill climbing

**12. Arc consistency (AC-3) works by:**
a) Removing variables that are not needed
b) Removing values from a variable's domain that cannot be extended to a consistent solution
c) Adding new constraints between variables
d) Merging two domains into one

## Topic 5: Knowledge Representation and Logic

**13. Propositional logic can represent facts about:**
a) Specific objects and their relations, including quantifiers
b) Statements that are simply true or false, with no internal structure
c) Temporal ordering of events
d) Uncertainty and probabilities

**14. First-order (predicate) logic adds to propositional logic:**
a) Truth tables
b) Predicates and quantifiers (∀ and ∃)
c) Logical connectives
d) Probabilities and certainty factors

**15. Semantic networks and frames are examples of:**
a) Logical inference algorithms
b) Knowledge representation schemes
c) Heuristic search methods
d) Machine learning algorithms

## Topic 6: Logical Inference

**16. Forward chaining proceeds:**
a) Backward from a goal, using rules
b) Forward from known facts, using rules
c) Forward from goals, using facts
d) Backward from facts, using rules

**17. Backward chaining is primarily used for:**
a) Computing all logical consequences of a set of facts
b) Proving a specific goal by working backward from it
c) Optimizing a plan
d) Clustering similar data

**18. Resolution is a refutation-complete inference rule for:**
a) Propositional and first-order logic
b) Probabilistic models
c) Decision trees
d) Neural networks

## Topic 7: Uncertainty and Probability

**19. Bayes' theorem lets us compute:**
a) P(hypothesis | evidence) from P(evidence | hypothesis) and the prior P(hypothesis)
b) P(evidence | hypothesis) from P(hypothesis | evidence)
c) The variance of the evidence
d) Whether two variables are independent

**20. A rational agent operating under uncertainty should select the action maximizing:**
a) Expected utility
b) The probability of the single best outcome
c) Immediate reward
d) The number of possible outcomes

**21. A Bayesian network represents a joint probability distribution using:**
a) A set of conditional probability tables and a directed acyclic graph
b) A single flat probability table
c) A correlation matrix
d) A simple rule list

## Topic 8: Machine Learning

**22. Supervised learning differs from unsupervised learning in that it learns from:**
a) Unlabeled data
b) Labeled examples (input-output pairs)
c) Rewards and punishments
d) Discovered clusters

**23. A decision tree chooses the best attribute to split on by maximizing:**
a) Entropy
b) Information gain (the reduction in entropy)
c) Gini impurity
d) Variance

**24. In a multi-layer perceptron (MLP) with hidden layers, the learning algorithm is:**
a) Gradient descent
b) Backpropagation (chain rule + gradient descent)
c) K-means clustering
d) Support vector optimization

## Topic 9: Natural Language Processing

**25. The task of labeling each word with its part of speech (noun, verb, etc.) is:**
a) Parsing
b) Lexical segmentation
c) Part-of-speech tagging
d) Named-entity recognition

**26. The task of finding names of people, organizations, and locations is:**
a) Part-of-speech tagging
b) Parsing
c) Named-entity recognition
d) Sentiment analysis

**27. Machine translation between languages most directly relies on models that learn:**
a) Clusters of similar words
b) Sequence-to-sequence mappings (alignments) between source and target language
c) Decision trees over word counts
d) A* search paths

## Topic 10: Robotics and Expert Systems

**28. The DENDRAL expert system is a classic example in which domain?**
a) Medical diagnosis
b) Chemical structure elucidation
c) Chess playing
d) Flight route scheduling

**29. In an intelligent agent, the "performance measure" is:**
a) The sensor inputs the agent receives
b) A reward/criterion defining good behavior
c) The actuator outputs the agent produces
d) The full world state

**30. A neural network with a layer of hidden units between the input and output layers is a:**
a) Single-layer perceptron
b) A linear classifier
c) A multi-layer perceptron (MLP)
d) A decision stump

## Answers (key only)

<details>
<summary>Reveal answers after attempting the questions</summary>

1-b, 2-b, 3-b, 4-a, 5-c, 6-c, 7-b, 8-c, 9-b, 10-b, 11-b, 12-b, 13-b, 14-b, 15-b, 16-b, 17-b, 18-a, 19-a, 20-a, 21-a, 22-b, 23-b, 24-b, 25-c, 26-c, 27-b, 28-b, 29-b, 30-c.

</details>

## PDF-aligned extended practice: Questions 31–70

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 31 | A rational agent chooses an action expected to maximize its: | Sensor count | Performance measure | Program size | Knowledge-base rows |
| 32 | In PEAS, actuators are used to: | Perceive the environment | Act on the environment | Define utility only | Store beliefs |
| 33 | A stochastic environment is one where: | Outcomes may be uncertain | Every state is visible | Nothing changes | There is one agent only |
| 34 | A model-based reflex agent maintains: | Internal state | Only condition-action rules with no memory | A complete plan always | Neural weights only |
| 35 | A search problem includes initial state, actions, goal test, and: | Path cost | Citation style | Activation function | Database schema |
| 36 | BFS expands the shallowest node and uses a: | LIFO stack | FIFO queue | Priority by h only | Random list |
| 37 | UCS expands the node with smallest: | Depth | Path cost g(n) | Heuristic h(n) | Branching factor |
| 38 | Iterative deepening repeatedly runs: | Depth-limited DFS | A* | Hill climbing | Beam search only |
| 39 | A consistent heuristic satisfies `h(n) ≤`: | `g(n)` always | `c(n,n') + h(n')` | 0 only | Goal depth |
| 40 | An admissible heuristic never: | Underestimates | Overestimates the true remaining cost | Equals zero | Uses domain knowledge |
| 41 | Greedy best-first search ignores: | h(n) | g(n) | The goal | Frontier nodes |
| 42 | A* evaluates nodes with: | `g(n)+h(n)` | `g(n)−h(n)` | `h(n)` only | Depth only |
| 43 | Simulated annealing can escape a local optimum by: | Sometimes accepting worse moves | Removing successors | Setting h=0 | Using only BFS |
| 44 | In minimax, MAX assumes MIN will choose the: | Best outcome for MAX | Worst outcome for MAX | Random outcome | Shallowest node |
| 45 | Alpha–beta pruning changes minimax's: | Final optimal value | Number of evaluated nodes, not the result | Utility function | Player order |
| 46 | A CSP consists of variables, domains, and: | Constraints | Heuristics only | Truth tables only | Rewards |
| 47 | MRV chooses the variable with: | Fewest legal remaining values | Most legal values | Lowest path cost | Highest utility |
| 48 | Forward checking removes values made inconsistent by: | A new assignment | The final goal only | Backpropagation | A random restart |
| 49 | Propositional resolution operates on: | Clauses | Frames only | Probabilities | Weights |
| 50 | Modus ponens derives Q from P and: | `Q→P` | `P→Q` | `¬P` | `P∨Q` |
| 51 | A semantic network represents knowledge mainly as: | Nodes and labeled links | A numeric matrix only | Source code | Search queue |
| 52 | In a frame, a slot stores a: | Property/value | Search frontier | Probability normalization | Gradient only |
| 53 | A script represents: | A stereotyped event sequence | A single proposition | A neuron | A utility table |
| 54 | An ontology formally defines: | Concepts and relationships in a domain | Only individual facts | A search tree | Training epochs |
| 55 | Inheritance in a semantic net lets a subclass receive: | Properties from a superclass | Search costs | Priors only | Activation values |
| 56 | `P(A|B)` means probability of: | B given A | A given B | A and B independent | Neither event |
| 57 | Two events are independent if: | `P(A|B)=P(A)` when defined | `P(A|B)=0` | They never co-occur | Their priors match |
| 58 | Bayes' denominator `P(E)` acts as a: | Normalizing constant | Loss function | Search cost | Learning rate |
| 59 | Naive Bayes assumes features are conditionally independent given the: | Class | Search node | Time step only | Utility |
| 60 | A Bayesian network must be a: | Directed acyclic graph | Complete undirected graph | Search tree only | Cyclic list |
| 61 | An HMM includes hidden states and: | Observable emissions | No transitions | Only deterministic rules | Search heuristics |
| 62 | Expected utility combines outcome utilities with their: | Probabilities | Syntax | Depths | Frame slots |
| 63 | A perceptron computes a weighted sum plus bias, then applies an: | Activation function | Ontology | Goal test | Quantifier |
| 64 | A single-layer perceptron cannot solve: | AND | OR | XOR | Linearly separable data |
| 65 | The sigmoid output lies between: | −1 and 1 | 0 and 1 | 0 and infinity | −infinity and infinity |
| 66 | ReLU is commonly `max(0, z)` and helps reduce: | Saturation for positive inputs | All overfitting | Dataset size | Search depth |
| 67 | Gradient descent updates a weight generally in the direction: | Of the gradient | Opposite the gradient | Of maximum loss | Of random labels only |
| 68 | Backpropagation efficiently computes gradients using the: | Chain rule | Bayes rule | Resolution rule | Minimax rule |
| 69 | One epoch is: | One pass through the training data | One neuron update only | The final test | One hidden unit |
| 70 | Overfitting means strong training performance but weak: | Generalization to unseen data | Activation | Syntax | Search completeness |

## Extended answer key

31-B, 32-B, 33-A, 34-A, 35-A, 36-B, 37-B, 38-A, 39-B, 40-B,
41-B, 42-A, 43-A, 44-B, 45-B, 46-A, 47-A, 48-A, 49-A, 50-B,
51-A, 52-A, 53-A, 54-A, 55-A, 56-B, 57-A, 58-A, 59-A, 60-A,
61-A, 62-A, 63-A, 64-C, 65-B, 66-A, 67-B, 68-A, 69-A, 70-A.
