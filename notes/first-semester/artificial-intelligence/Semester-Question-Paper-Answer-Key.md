# OCA-510 MJ — Model Answers and Marking Guide

## Q1 answer key

Award **1 mark** for the option and **1 mark** for a valid reason.

| No. | Answer | Reason and closest-distractor check | Module |
|---:|---|---|---:|
| 1 | B | Rationality is defined against expected performance, not program size or sensor count. | 1 |
| 2 | A | PEAS specifies task performance, environment, actuators, and sensors; “actions/state” is not the expansion. | 1 |
| 3 | A | Sensors reveal all relevant state; observability does not imply deterministic transitions. | 1 |
| 4 | A | Stochastic means actions may have uncertain outcomes; it is independent of observability. | 1 |
| 5 | A | Internal state represents unobserved aspects/history; a simple reflex agent lacks it. | 1 |
| 6 | B | Actuators affect the world while sensors perceive it. | 1 |
| 7 | B | FIFO ordering expands by increasing depth; a LIFO stack produces DFS. | 2 |
| 8 | B | UCS prioritises accumulated path cost, not depth or estimated remaining cost. | 2 |
| 9 | A | A* combines cost so far and heuristic remaining cost; greedy uses only h. | 2 |
| 10 | B | Admissibility means `h(n)` is never above the true remaining cost; zero is allowed. | 2 |
| 11 | B | Safe cutoffs skip nodes that cannot affect the minimax decision; the value is unchanged. | 2 |
| 12 | A | Constraints restrict combinations of domain values; rewards belong to decision problems. | 2 |
| 13 | A | Propositional atoms have no internal object/quantifier structure. | 3 |
| 14 | B | FOL adds predicates, variables, functions, and quantifiers; connectives already exist in propositional logic. | 3 |
| 15 | B | From P and `P→Q`, modus ponens yields Q; `Q→P` is the converse. | 3 |
| 16 | A | Resolution combines complementary literals in clauses; probabilities are outside logical resolution. | 3 |
| 17 | A | Entities/concepts are nodes connected by labelled relations; a frame is attribute-slot oriented. | 3 |
| 18 | B | Backward chaining starts at a query and seeks rules/facts that support it. | 3 |
| 19 | A | Bayes combines a prior with evidence likelihood and normalisation to obtain a posterior. | 4 |
| 20 | A | Product factorisation characterises independence; independent events need not have equal probability. | 4 |
| 21 | A | A BN factorises a joint distribution with a DAG and local conditional probability tables. | 4 |
| 22 | A | The “naive” assumption is feature conditional independence once the class is known. | 4 |
| 23 | A | An HMM transitions among hidden states that probabilistically emit observations. | 4 |
| 24 | A | Expected utility weights each outcome's utility by probability; best-case choice ignores risk. | 4 |
| 25 | A | A neuron forms `w·x+b` and applies an activation; it is not a search operator. | 5 |
| 26 | A | ReLU passes positive x and returns zero for negative x; the sigmoid is option B. | 5 |
| 27 | C | XOR is not linearly separable, unlike AND, OR, and NOT. | 5 |
| 28 | A | Backpropagation propagates derivatives through layers using the chain rule. | 5 |
| 29 | A | Subtracting a learning-rate-scaled gradient locally reduces loss; adding it performs ascent. | 5 |
| 30 | A | Softmax produces nonnegative outputs summing to one across classes. | 5 |

## Q2 model answers

1. A rational agent chooses the action expected to perform best from its percepts and knowledge. Omniscience would require knowing actual future outcomes, which rationality does not assume. **Marks:** rationality 1; distinction 1. *(Module 1)*
2. A search problem specifies an initial state, actions/transition model, goal test, and path-cost function. Its solution is an action path from the initial state to a goal. **Marks:** components 1; solution 1. *(Module 2)*
3. Greedy best-first selects smallest `h(n)` and ignores cost already paid. A* selects smallest `g(n)+h(n)` and, with suitable conditions, is complete and optimal. **Marks:** each rule 1. *(Module 2)*
4. MRV chooses the unassigned variable with the fewest legal remaining values. Forward checking removes newly inconsistent values from neighbouring domains after an assignment. **Marks:** each method 1. *(Module 2)*
5. A semantic network represents concepts as nodes and relations as labelled edges. A frame represents an entity or situation with named slots, values, defaults, and inheritance. **Marks:** each representation 1. *(Module 3)*
6. X and Y are conditionally independent given Z when `P(X,Y|Z)=P(X|Z)P(Y|Z)`. A Bayesian network encodes such independences through its graph. **Marks:** definition 1; graph link 1. *(Module 4)*
7. For error `e=t−y`, update `w←w+ηex` and `b←b+ηe`. Correctly classified examples have zero error and no update. **Marks:** weight rule 1; bias/consequence 1. *(Module 5)*

## Q3 model answers

1. BFS uses shallowest/FIFO and is complete, and optimal for equal costs; DFS uses deepest/LIFO and is neither generally complete on infinite spaces nor optimal. UCS uses lowest g and is complete/optimal for positive bounded costs. Greedy uses lowest h and is generally neither. A* uses `g+h` and is complete/optimal with an admissible/consistent heuristic under standard assumptions. **Rubric:** BFS 1; DFS 1; UCS 1; greedy 1; A* 1. *(Module 2)*
2. Convert `P→Q` to `¬P∨Q`; the other clauses are P and `¬Q`. Resolve `¬P∨Q` with P to obtain Q. Resolve Q with `¬Q` to obtain the empty clause, a contradiction. Therefore `P→Q` and P entail Q. **Rubric:** conversion 1; clauses 1; first resolution 1; empty clause 1; conclusion 1. *(Module 3)*
3. `P(+)=0.90(0.01)+0.05(0.99)=0.0585`. Bayes gives `P(D|+)=0.90×0.01/0.0585=0.153846…`, about **15.38%**. The modest posterior despite good sensitivity is caused by the low prior and false positives. **Rubric:** formula 1; numerator 1; denominator 1; result 1; interpretation 1. *(Module 4)*
4. Net input is `0.2(1)+(−0.1)(0)−0.3=−0.1`, so output y is 0. Error is `t−y=1`. Update: `w₁=0.2+0.1(1)(1)=0.3`, `w₂=−0.1+0.1(1)(0)=−0.1`, and `b=−0.3+0.1(1)=−0.2`. **Rubric:** net 1; output/error 1; weights 2; bias 1. *(Module 5)*
