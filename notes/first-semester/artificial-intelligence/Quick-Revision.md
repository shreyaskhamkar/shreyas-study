# Artificial Intelligence - Quick Revision

## Module 1: Introduction to AI

- AI studies systems that perceive, reason, learn, and act.
- Rational means maximizing expected performance with available information.
- Specify a task with PEAS and classify its environment before choosing an agent.
- Agent progression: reflex -> model -> goal -> utility -> learning.

## Module 2: Problem Spaces and Search

- Problem = initial state, actions, transition model, goal test, path cost.
- BFS uses depth; UCS uses `g`; greedy uses `h`; A* uses `g + h`.
- CSP = variables, domains, constraints.
- Minimax handles adversarial choices; alpha-beta avoids irrelevant work.

## Module 3: Knowledge Representation

- Logic gives formal semantics and proof.
- Semantic networks and frames support structured relationships and inheritance.
- Ontologies define a domain schema; knowledge graphs store linked facts.
- Resolution proves a query by deriving a contradiction from its negation.

## Module 4: Uncertain Knowledge and Reasoning

- Conditional probability changes after evidence is known.
- Bayes' rule combines prior and likelihood to find a posterior.
- Naive Bayes simplifies classification with a conditional-independence assumption.
- HMMs model hidden states changing over time.

## Module 5: Artificial Neural Networks

- A neuron computes weighted sum + bias + activation.
- A perceptron learns a linear boundary; hidden layers model nonlinear patterns.
- Gradient descent reduces loss; backpropagation computes the gradients.
- Use validation and regularization to detect and reduce overfitting.

## Ten memory lines

1. Rational is not omniscient.
2. BFS is not cheapest-path search when costs differ.
3. A* balances cost paid and estimated cost remaining.
4. A heuristic is knowledge that guides search.
5. Representation determines which inferences are easy.
6. Conditional probability is directional.
7. Priors matter when evidence is interpreted.
8. HMM states are hidden; emissions are observed.
9. Bias shifts a neural decision boundary.
10. Backpropagation computes gradients; an optimizer applies them.

## PDF-derived high-yield additions

### Module 1

- Narrow/weak AI solves a limited task; general/strong AI is a hypothetical
  broad capability.
- AI combines representation, reasoning/computation, and learning.
- Environment assumptions determine whether a task is observable, deterministic,
  static, discrete, single-agent, and known.
- A responsible AI answer may mention privacy, bias, explainability, safety, and
  human oversight.

### Module 2

- CSP notation is `(V, D, C)`; constraints can be unary, binary, higher-order, or
  global such as `AllDifferent`.
- Forward checking removes inconsistent neighbour values after an assignment.
- AC-3 repeatedly removes values with no supporting neighbour value.
- Minimax assumes a finite, deterministic, two-player, zero-sum, perfect-information
  game. Alpha-beta prunes when `alpha >= beta` without changing the answer.
- Beam search keeps only a fixed number of frontier nodes and may lose the best
  solution.

### Module 3

- Explicit knowledge is stored; implicit knowledge is inferred.
- Domain knowledge is specialized; common-sense knowledge is general everyday
  knowledge.
- Good representations handle ambiguity, change, defaults, and exceptions.
- Resolution: implication elimination -> CNF -> negate query -> resolve -> empty
  clause means contradiction and entailment.

### Module 4

- Time may be a point, interval, duration, sequence, or relation such as before,
  after, during, or overlaps.
- Probability expresses uncertainty; fuzzy logic expresses degree of membership.
- Bayes: posterior = likelihood x prior / evidence.
- HMM: filtering = forward, smoothing = forward-backward, decoding = Viterbi.
- Expected utility is more appropriate than most-likely outcome when consequences
  have different costs.

### Module 5

- Learning types: supervised uses labels, unsupervised finds structure, and
  reinforcement learning uses rewards or penalties.
- An algorithm trains; a model stores the learned parameters.
- A perceptron converges only for linearly separable data.
- For backpropagation, show forward pass, loss, chain-rule gradients, and the
  learning-rate update.
