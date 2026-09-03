# Module 2: Problem Spaces and Search

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)

## Learning outcomes

After completing this module, you should be able to:

- formulate a problem as a state-space search;
- compare uninformed and informed search strategies;
- use heuristics with greedy best-first search and A*;
- explain problem reduction, constraint satisfaction, and adversarial search; and
- select an appropriate search method for a given problem.


## Prerequisites

Complete [Module 1](Module-1.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Problem formulation | 10-15 minutes |
| 2 | Uninformed search | 10-15 minutes |
| 3 | Informed search and heuristics | 10-15 minutes |
| 4 | Local search | 10-15 minutes |
| 5 | Problem reduction | 10-15 minutes |
| 6 | Constraint satisfaction problems | 10-15 minutes |
| 7 | Adversarial search | 10-15 minutes |
| 8 | Method comparison | 10-15 minutes |


## Problem formulation

A search problem has five parts:

1. **Initial state:** where the agent starts.
2. **Actions:** choices available in a state.
3. **Transition model:** the result of applying an action.
4. **Goal test:** whether a state satisfies the objective.
5. **Path cost:** the total cost of the selected actions.

A **state space** contains all states reachable from the initial state. A search
tree records the paths explored through this space. A node normally stores the
state, parent, action, path cost `g(n)`, and depth.

### Evaluation criteria

| Criterion | Question |
|---|---|
| Completeness | Will it find a solution if one exists? |
| Optimality | Will it find the least-cost solution? |
| Time complexity | How many nodes are generated? |
| Space complexity | How many nodes are stored? |

Let `b` be branching factor, `d` the shallowest goal depth, and `m` the maximum
search depth.

## Uninformed search

Uninformed methods use only the problem definition and no estimate of distance
to the goal.

### Breadth-first search (BFS)

BFS expands the shallowest unexpanded node using a FIFO queue.

- Complete when `b` is finite.
- Optimal when every step has equal cost.
- Time and space are approximately `O(b^d)`.
- Its large memory demand is the main weakness.

### Uniform-cost search (UCS)

UCS expands the node with the lowest path cost `g(n)` using a priority queue.
It is complete and optimal when every step cost is at least a positive constant.

### Depth-first search (DFS)

DFS expands the deepest node first using a stack or recursion.

- Space is only `O(bm)`.
- It is not generally complete in an infinite state space.
- It is not optimal.

### Depth-limited and iterative-deepening search

Depth-limited search prevents DFS from descending beyond limit `l`. Iterative
deepening search repeatedly runs depth-limited search with limits `0, 1, 2, ...`.
It combines BFS completeness with DFS's low memory and is optimal for equal costs.

### Bidirectional search

Search proceeds forward from the start and backward from the goal until the
frontiers meet. Its ideal complexity is about `O(b^(d/2))`, but it requires a
known goal state and reversible predecessor generation.

## Informed search and heuristics

A **heuristic** `h(n)` estimates the cheapest remaining cost from node `n` to a
goal.

### Greedy best-first search

Greedy search expands the node with minimum `h(n)`. It can reach a goal quickly,
but it ignores the path cost already paid and is neither generally complete nor
optimal.

### A* search

A* uses:

```text
f(n) = g(n) + h(n)
```

where `g(n)` is cost so far and `h(n)` is estimated remaining cost.

- An **admissible** heuristic never overestimates the true remaining cost.
- A **consistent** heuristic satisfies `h(n) <= c(n,a,n') + h(n')`.
- Tree-search A* is optimal with an admissible heuristic.
- Graph-search A* is optimal with a consistent heuristic.

If two admissible heuristics satisfy `h2(n) >= h1(n)` everywhere, `h2` dominates
`h1` and usually expands fewer nodes.

### Worked A* choice

Suppose the frontier contains:

| Node | `g(n)` | `h(n)` | `f(n)` |
|---|---:|---:|---:|
| A | 4 | 7 | 11 |
| B | 6 | 3 | 9 |
| C | 5 | 5 | 10 |

A* expands B first because its `f` value is smallest. Greedy search also chooses
B because its `h` value is smallest, but this agreement is not guaranteed.

## Local search

Local-search methods store one or a small number of current states rather than
complete paths.

- **Hill climbing:** repeatedly moves to a better neighbour; can become trapped
  at local maxima, plateaus, and ridges.
- **Simulated annealing:** sometimes accepts a worse move, with decreasing
  probability, to escape local optima.
- **Genetic algorithm:** evolves a population using selection, crossover, and mutation.

## Problem reduction

A difficult goal can be reduced to smaller subgoals and represented by an
**AND-OR graph**:

- an OR node succeeds when any one alternative succeeds;
- an AND node succeeds only when all required subproblems succeed.

AO* is a best-first method for finding a minimum-cost solution graph in an
AND-OR graph.

## Constraint satisfaction problems

A CSP consists of:

- variables `X1, X2, ...`;
- a domain of values for each variable; and
- constraints specifying allowed combinations.

Examples include map colouring, timetabling, Sudoku, and resource allocation.

### CSP methods and heuristics

- **Backtracking:** depth-first assignment of one variable at a time.
- **Forward checking:** removes inconsistent values after each assignment.
- **Arc consistency (AC-3):** repeatedly removes unsupported domain values.
- **MRV:** chooses the variable with the fewest legal values.
- **Degree heuristic:** chooses the variable constraining most others.
- **Least-constraining value:** tries the value that rules out the fewest choices.

## Adversarial search

In a two-player, zero-sum, deterministic game, **minimax** chooses the move whose
worst-case outcome is best. MAX attempts to increase utility; MIN attempts to
decrease it.

**Alpha-beta pruning** skips branches that cannot affect the minimax decision.
It returns the same move as minimax but can examine far fewer nodes when moves
are ordered well.

- `alpha`: best value MAX can guarantee so far;
- `beta`: best value MIN can guarantee so far;
- prune when `alpha >= beta`.

For large games, a depth cutoff and evaluation function estimate non-terminal
positions.

## Method comparison

| Method | Selection rule | Complete | Optimal |
|---|---|---|---|
| BFS | Shallowest node | Yes | Equal costs |
| UCS | Lowest `g` | Yes | Yes, positive costs |
| DFS | Deepest node | No, in general | No |
| Iterative deepening | Increasing depth limit | Yes | Equal costs |
| Greedy | Lowest `h` | No, in general | No |
| A* | Lowest `g + h` | Yes, under conditions | Yes, under conditions |

## Common mistakes

- Treating BFS as optimal when step costs differ; use uniform-cost search.
- Treating greedy search and A* as identical; A* also includes cost already paid.
- Calling a heuristic admissible without checking that it never overestimates.
- Marking a graph state visited too early when a cheaper path may still be found.
- Using minimax without alternating MAX and MIN levels.

## Quick revision

- A search problem needs an initial state, actions, transition model, goal test, and path cost.
- BFS chooses shallowest; UCS chooses lowest `g`; greedy chooses lowest `h`.
- A* chooses lowest `f = g + h` and is optimal under the stated heuristic conditions.
- CSP = variables + domains + constraints; MRV chooses the most constrained variable.
- Alpha-beta pruning changes the work performed, not the minimax result.

## Important exam questions

1. Formulate the 8-puzzle or route-finding task as a search problem.
2. Compare BFS, DFS, UCS, and iterative deepening.
3. Explain admissibility and consistency in A* search with an example.
4. Solve a small game tree using minimax and alpha-beta pruning.
5. Define a CSP and explain backtracking, forward checking, MRV, and AC-3.
6. Explain problem reduction and AND-OR graphs.

## PDF-aligned algorithm details

### CSP model and constraint types

A CSP is written as `(V, D, C)`: variables `V`, a domain for each variable `D`,
and constraints `C`. Constraints may be unary, binary, higher-order, or global
(for example, `AllDifferent`). A solution is a complete assignment satisfying
every constraint; a conflict-free partial assignment is not yet a solution.

### Constraint propagation

After assigning `X = v`, forward checking removes inconsistent values from each
unassigned neighbour. If any domain becomes empty, backtrack immediately.

AC-3 maintains a queue of arcs. For `(Xi, Xj)`, remove a value `x` from `Di`
when no value `y` in `Dj` satisfies the constraint. If `Di` changes, reinsert
affected neighbouring arcs. Arc consistency does not necessarily produce a
complete assignment.

### Adversarial-search assumptions and algorithm

Basic minimax assumes a finite, deterministic, two-player, zero-sum game with
perfect information. At terminal nodes use utility; at MAX nodes take the
maximum child value; at MIN nodes take the minimum. For large trees, use a depth
cutoff and evaluation function.

Alpha-beta pruning preserves the minimax answer:

1. Start with `alpha = -infinity` and `beta = +infinity`.
2. Update `alpha` at MAX nodes and `beta` at MIN nodes.
3. Stop exploring remaining children when `alpha >= beta`.

Good move ordering increases pruning. Beam search keeps only a fixed number of
best frontier nodes at each level, saving memory but generally sacrificing
completeness and optimality.

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

[← Previous: Module 1](<Module-1.md>) · [Subject index](README.md) · [Next: Module 3 →](<Module-3.md>)
