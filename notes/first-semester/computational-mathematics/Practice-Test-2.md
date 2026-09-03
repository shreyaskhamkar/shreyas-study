# Computational Mathematics - Practice Test 2

This test covers Modules 3-4.

## Questions

1. State the Handshaking Lemma.
2. Distinguish a walk, trail, and path.
3. What condition gives an Eulerian circuit?
4. State three properties of a tree.
5. How does Kruskal's algorithm choose edges?
6. How does Prim's algorithm choose edges?
7. When is matrix multiplication defined?
8. Is matrix multiplication commutative? Explain.
9. State the transpose product rule.
10. Find the determinant of `[[2, 1], [3, 4]]`.

## Answer Key

1. The sum of all vertex degrees equals `2|E|`.
2. A walk may repeat; a trail does not repeat edges; a path does not repeat vertices.
3. The graph must be connected and every vertex must have even degree.
4. Connected, acyclic, unique path between every two vertices, and `n - 1` edges for `n` vertices.
5. Sort edges by increasing weight and accept an edge if it does not create a cycle.
6. Start at a vertex and repeatedly add the cheapest edge connecting the current tree to a new vertex.
7. When the number of columns of the first matrix equals the number of rows of the second.
8. No. In general `AB` is not equal to `BA`.
9. `(AB)^T = B^T A^T`.
10. `2*4 - 1*3 = 5`.
