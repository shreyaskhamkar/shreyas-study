# Artificial Intelligence - Cheat Sheet

## Intelligent agents

```text
Environment -> Sensors -> Agent -> Actuators -> Environment
```

PEAS = Performance measure, Environment, Actuators, Sensors.

| Agent | Main idea |
|---|---|
| Simple reflex | Current percept -> rule -> action |
| Model-based | Maintains internal state |
| Goal-based | Searches for a goal state |
| Utility-based | Maximizes expected preference |
| Learning | Improves from feedback and experience |

## Search

| Method | Chooses | Key property |
|---|---|---|
| BFS | Shallowest node | Optimal for equal step costs |
| UCS | Lowest `g(n)` | Optimal for positive costs |
| DFS | Deepest node | Low memory; not generally optimal |
| Greedy | Lowest `h(n)` | Ignores cost already paid |
| A* | Lowest `g(n) + h(n)` | Optimal under heuristic conditions |

```text
f(n) = g(n) + h(n)
```

An admissible heuristic never overestimates the true remaining cost.
Minimax alternates MAX and MIN. Alpha-beta prunes when `alpha >= beta`.

```text
CSP = (variables, domains, constraints)
AC-3 = remove unsupported domain values until every arc is consistent
Beam search = retain only k frontier nodes at each level
```

## Knowledge representation

- Logic: precise facts and inference.
- Semantic network: nodes and labelled relations.
- Frame: object or situation with slots and values.
- Script: expected event sequence.
- Ontology: shared classes, properties, and constraints.
- Knowledge graph: entity-relation-entity triples.

```text
Modus ponens: P, P -> Q, therefore Q
```

## Probability and uncertainty

```text
P(A | B) = P(A and B) / P(B)
P(H | E) = P(E | H) P(H) / P(E)
Expected utility = sum P(outcome | action) * utility(outcome)
```

Naive Bayes score:

```text
score(C) = P(C) * product(P(feature_i | C))
```

HMM = initial probabilities + transition probabilities + emission probabilities.

| HMM task | Method |
|---|---|
| Filtering | Forward update |
| Prediction | Transition update |
| Smoothing | Forward-backward |
| Most likely sequence | Viterbi |

Probability measures event uncertainty; fuzzy logic measures membership in a
vague concept.

## Neural networks

```text
z = weighted sum + bias
output = activation(z)
weight_new = weight_old - learning_rate * gradient
```

- Perceptron: linear threshold classifier.
- ReLU: `max(0, z)`.
- Sigmoid: output between 0 and 1.
- Backpropagation: chain-rule calculation of gradients from output to input.
- A single perceptron cannot solve XOR.

| Learning type | Signal | Example |
|---|---|---|
| Supervised | Labelled examples | Classification |
| Unsupervised | No target labels | Clustering |
| Reinforcement | Reward/penalty | Game or robot control |

Perceptron update:

```text
error = target - prediction
w_new = w_old + eta * error * x
b_new = b_old + eta * error
```

## Exam routine

1. Define the method and notation.
2. Draw or state its model.
3. Trace a small example in a table.
4. State guarantees, assumptions, and limitations.
