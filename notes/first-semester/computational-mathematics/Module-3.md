# Module 3: Graphs and Trees

[← Previous: Module 2](<Module-2.md>) · [Subject index](README.md) · [Next: Module 4 →](<Module-4.md>)

## Learning outcomes

After this module, you should be able to:

- define graphs, vertices, edges, walks, trails, and paths;
- apply the Handshaking Lemma and recognise Eulerian graphs;
- test graph isomorphism and construct spanning/induced subgraphs;
- compute a minimum spanning tree (MST) with Kruskal's and Prim's algorithms;
- describe trees, rooted/binary trees, pendant vertices, and tree centre;
- represent a graph as an adjacency matrix.


## Prerequisites

Complete [Module 2](Module-2.md) first. Review its quick-revision section if any term below feels unfamiliar.


## Short study blocks

Treat each row as a separate lesson and solve one graph by hand before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Graph terminology and the Handshaking Lemma | 10-15 minutes |
| 2 | Walks, trails, paths, and Eulerian graphs | 10-15 minutes |
| 3 | Trees and their properties | 10-15 minutes |
| 4 | Adjacency and weight matrices | 10-15 minutes |
| 5 | Spanning trees and Kruskal's algorithm | 10-15 minutes |
| 6 | Prim's algorithm | 10-15 minutes |

## Start here: the simple idea

A **graph** models "things and the connections between them": cities and roads,
people and friendships, web pages and links. **Trees** are graphs with no loops
— like a family tree or a company org chart. Many optimisation problems
(routing, network cabling) are "find the cheapest way to connect everything,"
solved by **minimum spanning trees**.

### Everyday analogy

- Graph = a map with stations (vertices) and routes (edges).
- Walk = any journey along routes. Path = journey without repeating a station.
- Tree = a family tree: connected, no cycles.
- MST = laying cables to connect all houses with minimum total wire.

## Graph theory: definitions and examples

A **graph** G = (V, E) consists of a set V of **vertices** (nodes) and a set E
of **edges** (links).

| Term | Meaning |
|---|---|
| Vertex / node | a point in the graph |
| Edge / link | a connection between two vertices |
| Directed graph (digraph) | edges have a direction (u→v) |
| Undirected graph | edges have no direction |
| Weighted graph | each edge has a number (cost/length) |
| Adjacent | two vertices joined by an edge |
| Degree d(v) | number of edges incident to v (in+out for digraphs) |

### Running example: the Campus graph

```text
Vertices: V = {A, B, C, D, E}
Edges (undirected, weighted):
  A—B (1)   B—C (3)   C—D (1)   D—E (4)   E—A (2)   A—C (5)
```

```mermaid
graph TD
  A -- 1 -- B
  B -- 3 -- C
  C -- 1 -- D
  D -- 4 -- E
  A -- 2 -- E
  A -- 5 -- C
```

Degrees: d(A)=3, d(B)=2, d(C)=3, d(D)=2, d(E)=3.

## Examples of graphs

- **Social network:** vertices = people, edges = friendships.
- **Road/city map:** vertices = intersections, edges = roads.
- **Web graph:** vertices = web pages, directed edges = hyperlinks.
- **Computer network:** vertices = routers/servers, edges = links.

## The Handshaking Lemma

**Lemma:** In any undirected graph, `Σ d(v) = 2|E|`. (Each edge contributes 2 to
the sum of degrees.)

**Corollary — handshake lemma:** the number of vertices of odd degree is even.

**Worked example:** Campus graph has 6 edges, so `Σd(v) = 2·6 = 12`. Indeed
`3+2+3+2+3 = 12`. ✓

## Complete graph, subgraphs, and spanning subgraphs

- **Complete graph Kₙ:** every pair of distinct vertices is joined. `|E| = n(n−1)/2`.
  K₅ has 5·4/2 = 10 edges.
- **Subgraph H = (V', E')** of G: V' ⊆ V, E' ⊆ E (edges must join vertices in V').
- **Induced subgraph** G[V']: keep **all** edges of G among vertices V'.
- **Spanning subgraph:** a subgraph with **all** vertices (V' = V).
- **Weighted graph:** edges carry numbers (costs, lengths, capacities).

## Walks, trails, and paths

- **Walk:** a sequence v₀, e₁, v₁, e₂, v₂, …, vₖ (vertices joined by edges).
- **Trail:** a walk with no repeated **edge**.
- **Path:** a walk with no repeated **vertex** (except maybe start = end).
- **Closed walk/trail/circuit:** starts and ends at the same vertex.
- **Cycle:** a closed path with ≥3 vertices.

```text
Eulerian trail  : uses every edge exactly once
Eulerian circuit: closed Eulerian trail
Hamiltonian path: visits every vertex exactly once
```

## Eulerian graphs

### Part 1 — Necessary conditions (Euler's theorem)

A connected graph has an **Eulerian circuit** iff **every vertex has even
degree**. It has an **Eulerian trail** (not circuit) iff **exactly two vertices
have odd degree** (these are the trail's start and end).

**Worked example:** the Campus graph has degrees 3,2,3,2,3 — four odd-degree
vertices, so it has **neither** an Eulerian circuit nor a single Eulerian trail.

### Part 2 — Algorithm (Fleury / Hierholzer)

To find an Eulerian circuit when all degrees are even:

1. Pick any vertex; follow unused edges, never crossing a bridge (a bridge is an
   edge whose removal disconnects the graph) unless forced.
2. Splicing the circuits together yields one circuit using every edge.

**Euler tour** = another name for an Eulerian circuit.

## Trees: definition and properties

A **tree** is a connected, acyclic undirected graph. Equivalently, a graph on n
vertices is a tree iff it is connected with n−1 edges (and acyclic).

### Properties (Part 1–3, consolidated)

1. A tree on n ≥ 2 vertices has at least two **pendant (leaf) vertices**
   (degree-1 vertices).
2. There is a **unique path** between any two vertices.
3. Adding any edge creates exactly one cycle; removing any edge disconnects it.
4. Any connected graph on n vertices has at least n−1 edges; a tree has exactly
   n−1.

### Rooted and binary trees

- **Rooted tree:** one vertex is the **root**; edges point away from it.
  Children, parent, leaves, and the **height** (longest root→leaf path).
- **Binary tree:** each node has ≤ 2 children (left, right).
- **Full binary tree:** every node has 0 or 2 children.
- **Complete binary tree:** all levels filled except possibly the last, which is
  filled left to right.

### Pendant vertices and centre of a tree

- A **pendant vertex** (leaf) has degree 1.
- The **centre** of a tree: iteratively remove all leaves; the last one (or two)
  vertex/vertices left is the centre. A tree has either one centre or two
  adjacent centres.

**Worked example (centre):** path `A–B–C–D`. Remove leaves A, D → `B–C`. Remove
leaves B, C → empty. So B,C were the final pair ⇒ **two centres**: B and C.

## Spanning trees and MST

A **spanning tree** of a connected graph is a subgraph that is a tree and
**spans all vertices**. A connected graph has many spanning trees; the
**minimum spanning tree (MST)** is the one of minimum total edge weight.

## Graph isomorphism

Two graphs are **isomorphic** when there is a one-to-one correspondence between
their vertices that preserves adjacency. The vertex names may differ, but the
structure is the same. Useful necessary checks include equal numbers of vertices
and edges, the same degree sequence, and matching counts of connected components,
cycles, and other structural features. These checks can disprove isomorphism but
do not by themselves prove it; a valid vertex mapping must preserve every edge.

## Matrix representation of graphs

The **adjacency matrix** A of G (n vertices) is n×n with:

```text
A[i][j] = 1 (or weight) if edge i—j exists, else 0
```

- For an undirected graph, A is symmetric.
- Number of length-2 walks between i and j = (A²)[i][j].

**Worked example (Campus adjacency):**

```text
    A B C D E
A [ 0 1 5 0 2 ]
B [ 1 0 3 0 0 ]
C [ 5 3 0 1 0 ]
D [ 0 0 1 0 4 ]
E [ 2 0 0 4 0 ]
```

## Minimum spanning tree: Kruskal's algorithm

**Kruskal's algorithm:**

1. Sort all edges by weight (ascending).
2. Add edges one by one **if they do not form a cycle** (use a union-find
   structure to detect cycles).
3. Stop when n−1 edges are chosen.

### Worked example (Campus graph)

Edges sorted ascending: `AB(1), CD(1), EA(2), BC(3), DE(4), AC(5)`. A spanning tree on 5 vertices needs 4 edges.

| Step | Edge | Cycle? | Result |
|---|---|---|---|
| 1 | AB(1) | no | {AB} |
| 2 | CD(1) | no | {AB,CD} |
| 3 | EA(2) | no | {AB,CD,EA} |
| 4 | BC(3) | no — connects component {A,B,E} to {C,D} | {AB,CD,EA,BC} → 4 edges, done |
| 5 | DE(4) | yes (would close a cycle) | skipped |
| — | AC(5) | yes (would close a cycle) | skipped |

Total weight = `1+1+2+3 = 7` — the MST. (Both Kruskal and Prim below return weight 7; the minimum weight is unique even if the tree is not.)

## Minimum spanning tree: Prim's algorithm

**Prim's algorithm:**

1. Start at any vertex.
2. Repeatedly add the **cheapest edge** that connects the current tree to a new
   vertex (like growing one component).
3. Stop when all vertices are included.

### Worked example (Campus graph, start at A)

Greedy steps grow the tree from vertex A:

| Step | Chosen edge | Reason | Tree vertices |
|---|---|---|---|
| 1 | — | start | {A} |
| 2 | AB(1) | cheapest edge from A | {A,B} |
| 3 | EA(2) | cheapest live edge (AE=2 < AC=5, BC=3) | {A,B,E} |
| 4 | BC(3) | cheapest live edge (BC=3 < ED=4, AC=5) | {A,B,C,E} |
| 5 | CD(1) | cheapest live edge (CD=1) | {A,B,C,D,E} → done |

Edges picked: AB(1), EA(2), BC(3), CD(1). Total = `1+2+3+1 = 7`, matching Kruskal.

The MST weight (7) is **unique**, even though Kruskal and Prim may pick different
sets of edges that tie on weight.

## Common mistakes

- Counting the edge that closes a cycle in Kruskal's (it must be skipped).
- Thinking a directed graph's adjacency matrix is symmetric (it isn't).
- Confusing degree (count of incident edges) with the Handshaking Lemma sum.
- Believing every spanning tree is minimum (only one has the smallest total weight).

## Memory rules

- Handshaking lemma: Σ degree = 2|E|; number of odd-degree vertices is even.
- Eulerian circuit ⇔ all degrees even; Eulerian trail ⇔ exactly two odd degrees.
- Tree: connected + acyclic; n vertices ⇒ n−1 edges; unique path between any two.
- Centre: peel leaves layer by layer; 1 or 2 vertices remain.
- Kruskal = sort edges, skip cycles (union-find); Prim = grow from a vertex.
- Adjacency matrix A; (A²)[i][j] = number of 2-walks.

## Mini Quiz

Attempt all questions before revealing the answers.

1. What is the degree of every vertex in K₆?
2. State Euler's theorem for an Eulerian circuit (necessary & sufficient condition).
3. True or false: removing a pendant vertex from a tree leaves a tree.
4. In Kruskal's algorithm, what check decides whether to accept an edge?
5. If A is the adjacency matrix of an undirected simple graph, what is true of A?

## Answers

<details>
<summary>Reveal answers</summary>


1. Every vertex has degree n−1 = 5.
2. A connected graph has an Eulerian circuit iff every vertex has even degree.
3. True. Removing a leaf and its incident edge leaves the remaining graph connected and acyclic.
4. Check whether adding the edge forms a cycle (via union-find); skip if it does.
5. A is symmetric with 0/1 entries and diagonal 0 (simple, undirected, no loops).

</details>

## Quick revision box

- Graph G=(V,E); directed/undirected; weighted; degree d(v); Σd = 2|E| (handshake).
- Walk/trail/path/cycle/circuit; Eulerian trail = every edge once; Euler's theorem by degrees.
- Tree = connected + acyclic; n−1 edges; unique paths; leaves (≥2); centre by leaf-peeling.
- Spanning tree; MST unique weight; Kruskal (sort+union-find) and Prim (grow from vertex).
- Adjacency matrix; A symmetric for undirected; (A²)[i][j] counts 2-walks.
- Subgraph (V'⊆V, E'⊆E); induced = all edges; spanning = all vertices.

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

[← Previous: Module 2](<Module-2.md>) · [Subject index](README.md) · [Next: Module 4 →](<Module-4.md>)
