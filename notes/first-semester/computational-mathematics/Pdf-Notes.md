# Computational Mathematics - PDF-Based Study Notes

These notes consolidate the PDF material currently available for Modules 1-4.

## Module 1 - Logic

- A proposition is a statement that is either true or false.
- Main connectives are negation, conjunction, disjunction, implication, and biconditional.
- `p -> q` is false only when `p` is true and `q` is false.
- A tautology is true under every valuation; a contradiction is false under every valuation.
- Predicate logic adds variables, predicates, and quantifiers: `forall` means for all and `exists` means there exists.
- Quantifier negation: `not(forall x P(x))` is equivalent to `exists x not P(x)`.
- Boolean algebra uses laws such as identity, complement, De Morgan, distributive, associative, and commutative laws.
- Natural deduction uses introduction and elimination rules, with assumptions discharged when proving implications or negations.
- CNF is an AND of OR-clauses; DNF is an OR of AND-terms.
- Soundness means everything provable is valid; completeness means every valid formula is provable.

## Module 2 - Well-Formed Formulae and Type Checking

- A well-formed formula follows the grammar of the formal language.
- A formation or parse tree shows how a formula was constructed.
- A variable is free when it is outside the scope of a quantifier and bound when it is inside one.
- A closed formula has no free variables.
- Type checking prevents incompatible operations and catches many errors early.
- Type inference attempts to deduce types from expressions and their use.
- Simple type inference can be decidable, but richer language features can make general type checking undecidable.
- Type systems improve documentation, refactoring safety, compiler optimization, and error detection.

## Module 3 - Graphs and Trees

- A graph `G = (V, E)` consists of vertices and edges.
- A graph may be directed, undirected, weighted, complete, or a subgraph.
- Handshaking lemma: `sum degree(v) = 2|E|` for an undirected graph.
- A walk may repeat edges and vertices; a trail does not repeat edges; a path does not repeat vertices.
- An Eulerian circuit uses every edge exactly once and exists in a connected graph when all vertex degrees are even.
- A tree is connected and acyclic; a tree with `n` vertices has `n - 1` edges and a unique path between any two vertices.
- A spanning tree includes every vertex. An MST is a spanning tree with minimum total weight.
- Kruskal sorts edges and skips cycle-forming edges; Prim grows one tree from a starting vertex.
- An adjacency matrix records edge existence or weights. For an undirected graph it is symmetric.

## Module 4 - Matrices

- An `m x n` matrix has `m` rows and `n` columns.
- Addition requires equal dimensions. Multiplication requires columns of the first matrix to equal rows of the second.
- Matrix multiplication is generally not commutative: `AB` need not equal `BA`.
- Transpose swaps rows and columns, and `(AB)^T = B^T A^T`.
- For a 2 x 2 matrix, `det([[a,b],[c,d]]) = ad - bc`.
- A square matrix is invertible exactly when its determinant is nonzero.
- `A^-1 = (1/det(A)) adj(A)` when the inverse exists.
- A matrix can represent a linear transformation; the absolute determinant gives the area or volume scale factor.
- Gaussian elimination solves systems by row operations; Gauss-Jordan reduction can compute an inverse.

## High-Yield Rules

- `p -> q` is equivalent to `not p or q`.
- `not forall` becomes `exists not`; `not exists` becomes `forall not`.
- `sum degree(v) = 2|E|`.
- A tree with `n` vertices has `n - 1` edges.
- Kruskal sorts; Prim grows.
- Matrix multiplication uses row-by-column products.
- `(AB)^T = B^T A^T`.
- A matrix inverse exists when its determinant is nonzero.
