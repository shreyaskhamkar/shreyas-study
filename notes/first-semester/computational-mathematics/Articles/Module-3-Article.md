# Module 3 Article: Networks, Trees, and the Shortest Path

## The big idea

A **graph** is a picture of relationships: who-knows-whom, what-cities-are-
linked, what-pages-link-to-what. Strip away the geography and you can solve
real problems with the same tools: routing GPS navigation, laying fiber cheaply
(minimum spanning tree), or finding influencers in a social network.

## Graph modelling in the wild

| Real system | Vertices | Edges |
|---|---|---|
| Road map | Cities | Roads |
| Social network | People | Friendships |
| Web | Web pages | Hyperlinks |
| Network (IT) | Routers | Links |
| Course prerequisites | Courses | "must take first" |

## The Handshaking Lemma and why it is useful

Summing every vertex's degree counts each edge **twice** (once at each end):

```text
Σ v∈V d(v) = 2|E|
```

**Corollary:** the number of vertices with **odd** degree is always even. This
is a useful invariant for checking that a drawn graph "makes sense."

## Walks, trails, paths, and cycles

- **Walk:** any sequence of vertices joined by edges.
- **Trail:** a walk with no repeated *edge*.
- **Path:** a walk with no repeated *vertex*.
- **Cycle:** a closed trail (no repeated vertices except start=end).

These let us talk about routes. A **Hamiltonian path** visits every vertex once;
an **Eulerian trail** uses every edge once — they are different problems and easy
to confuse (an exam favourite).

## Eulerian graphs: the Königsberg bridges

Euler asked: can you walk Königsberg crossing each of its seven bridges exactly
once and return home? His abstraction (land as vertices, bridges as edges) proved
it **impossible** — because each vertex must have even degree. The theorem:

- **Eulerian circuit** exists ⟺ the graph is connected and **every** vertex has even degree.
- **Eulerian trail** exists ⟺ exactly **two** vertices have odd degree.

## Spanning trees: connecting everything cheaply

A **spanning tree** of a connected graph is a tree using **all the vertices**.
Among all spanning trees, the **minimum spanning tree (MST)** has the smallest
total edge weight.

### Kruskal's and Prim's (recap from the article + cheat sheet)

- **Kruskal:** sort all edges ascending; add an edge if it doesn't close a cycle
  (use union-find). Complexity: O(E log E).
- **Prim:** start at a vertex; repeatedly add the cheapest edge reaching a new
  vertex (priority queue). Complexity: O((V+E) log V) with a heap.

Both yield the **same minimum weight** (the weight is unique), though possibly
different trees.

## Worked example: laying fiber in a campus

SecureBank wants to link five buildings with minimum fiber. Edges (km):

```text
AB=1, BC=3, CD=1, DE=4, EA=2, AC=5
```

- Kruskal picks AB(1), CD(1), EA(2), BC(3) = **7 km** (skips DE and AC).
- Prim from A picks AB(1), EA(2), BC(3), CD(1) = **7 km** (same total).

## Shortest path: Dijkstra

A different problem — connect **two** points as cheaply as possible — is solved
by **Dijkstra's algorithm** (greedy, non-negative weights):

1. Set dist(start)=0, all others ∞.
2. Repeatedly pick the unvisited vertex with smallest dist, relax its neighbours.
3. Stop when the target is settled (or all settled).

## Matrix representation of graphs

The **adjacency matrix** A: `A[i][j] = 1` (or weight) if edge i→j, else 0.
- `(A²)[i][j]` counts **length-2 walks** from i to j.
- For an undirected simple graph, A is symmetric.

## Trees (the graph kind): rooted, binary, and their properties

- A **rooted tree** has a designated root; every other vertex has a parent.
- A **binary tree**: each node has ≤ 2 children (left, right).
- **Height** = longest root→leaf path; **balanced** ≈ height ≈ log₂(#nodes).
- Trees model hierarchies (org charts, file systems) and are the backbone of
  search structures (BSTs, tries, B-trees in databases).

## Centre of a tree

The **centre** is found by repeatedly stripping leaves (vertices of degree 1).
The last 1 or 2 vertices left are the centre(s) — an ideal spot for a server in
a tree-shaped network to minimize maximum distance.

## Exam angle

For graph questions:

1. **Handshaking lemma:** quote `Σd = 2|E|`, then use the odd-degree corollary.
2. **Eulerian:** even degrees for circuits; exactly two odd for trails.
3. **MST:** Kruskal (sort + union-find) vs Prim (grow + priority queue); both give
   the same minimum weight.
4. **Walks vs trails vs paths vs cycles:** mind the repeated-edge/vertex rules.
5. Adjacency matrix powers count walks.

> Tip: if asked "shortest path," answer Dijkstra for non-negative weights and
> Bellman-Ford for negative weights (Dijkstra fails with negatives).

## See also

- Module 4 (matrices): adjacency matrices and reachability.
- `Cheat-Sheet.md` for the MST algorithms and walk definitions.
