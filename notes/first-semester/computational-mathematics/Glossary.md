# Computational Mathematics — Glossary

| Term | Meaning |
|---|---|
| Acyclic | Contains no cycles (graph) |
| Adjacency matrix | Matrix A with A[i][j] = edge weight/info between i and j |
| Adjugate | Transpose of the cofactor matrix; used to compute the inverse |
| Arithmetic progression | Sequence with constant difference between terms |
| Asymmetric | Neither symmetric nor skew-symmetric (relation) |
| Basis | A linearly independent set whose span is the whole space |
| Basis vector | A vector in a chosen basis |
| Biconditional | p ↔ q (iff); true exactly when p and q match |
| Bijection | A one-to-one and onto (invertible) function |
| Binary operation | An operation combining two operands |
| CNF | Conjunctive normal form: conjunction of clauses |
| Column space | Span of the columns of a matrix |
| Complete graph | Kₙ: every pair of distinct vertices joined by an edge |
| Completeness (logic) | Every valid formula is provable in the system |
| Compound proposition | A proposition built from connectives |
| Consistency (logic) | The system never proves both φ and ¬φ |
| Contradiction | A formula false under every truth assignment |
| Contingency | A formula true under some, false under other assignments |
| Cycle (graph) | A closed trail with no repeated vertices (except start/end) |
| Closed formula | A formula with no free variables |
| Cofactor | Cofactor matrix entry (-1)^(i+j)·M_ij (minor) |
| Combinatorial | Counting/arrangement style reasoning |
| Commutator | [A,B] = AB − BA |
| Connected (graph) | A path exists between every pair of vertices |
| Contrapositive | p→q is equivalent to ¬q→¬p |
| Contradiction (proof) | Assume ¬φ and derive ⊥ to prove φ |
| Convex combination | Combination Σ cᵢvᵢ with Σcᵢ=1, cᵢ≥0 |
| Coset | A translate of a subset (group/subgroup) |
| Cramer’s rule | Solving Ax=b using determinants (when unique) |
| Cycle (matrix/permutation) | A permutation cycle |
| Degree (graph) | Number of edges incident to a vertex |
| Degree (polynomial) | Highest power of the variable |
| Determinant | Scalar det(A): product of eigenvalues; nonzero ⇔ invertible |
| Derivation (proof) | A logical proof |
| Diagonal matrix | Square matrix with zeros off the main diagonal |
| Diagonalisable | A = PDP⁻¹ for diagonal D (n independent eigenvectors) |
| Dimension | Number of vectors in a basis; also size of a matrix (rows×cols) |
| Directed edge | An edge with a direction (ordered pair of vertices) |
| Directed graph | A graph with directed edges |
| Disjunction | p ∨ q (or) |
| DNF | Disjunctive normal form: disjunction of monomials |
| Domain (function) | Set of inputs of a function |
| Edge (graph) | A link between two vertices |
| Eigenspace | Space spanned by all eigenvectors for one eigenvalue |
| Eigenvalue | λ satisfying det(A−λI)=0 (scale factor in Av=λv) |
| Eigenvector | Non-zero v satisfying Av = λv |
| Elementary matrix | Identity plus one row operation; row ops are left-multiplication |
| Elementary row op | Swap, scale a row, or add a multiple of a row |
| Enumerable | Countable (finite or countably infinite) |
| Equivalence relation | Reflexive, symmetric, and transitive relation |
| Exclusive or | p ⊕ q: true when exactly one of p, q is true |
| Existential quantifier | ∃x P(x): "there exists an x such that P(x)" |
| Fiber | Preimage of a single point under a map |
| Field | Set with + and × forming two abelian groups (e.g. ℝ, ℂ) |
| Finite field | A field with finitely many elements (e.g. ℤ/pℤ) |
| First-order logic | Logic with quantifiers over elements (not sets) |
| Fixed point | x where f(x)=x |
| Forest | An acyclic graph (a disjoint union of trees) |
| Formula (well-formed) | A string following the grammar; WFF |
| Four-color theorem | Every planar map can be colored with four colors |
| Function | A mapping from a domain to a codomain, one output per input |
| Gaussian elimination | Row reduction to solve Ax=b |
| GCD | Greatest common divisor |
| General solution | Solution of a linear system = particular + homogeneous parts |
| Generate (span) | The set of all linear combinations |
| Geometric series | a + ar + ar² + … ; sums to a/(1−r) if |r|<1 |
| GL(m,n) | General linear group of invertible n×n matrices |
| Graph | A set of vertices and edges |
| Graph colouring | Assigning colors so adjacent vertices differ |
| Gram-Schmidt | Process turning a basis into an orthogonal/orthonormal basis |
| Greatest lower bound | GLB / infimum |
| Greatest element | Maximum of a set |
| Group | Set with one associative operation, identity, and inverses |
| Hamilton cycle | A cycle visiting every vertex exactly once |
| Hasse diagram | Diagram of a partially ordered set |
| Hausdorff dimension | Dimension measuring fractal complexity |
| Headless | Lacking a top element |
| Homogeneous | Same degree; linear system Ax=0 (homogeneous) |
| Homomorphism | Structure-preserving mapping between algebraic structures |
| Idempotent | x·x = x; or P ∪ P = P (sets) |
| Identity matrix | I: ones on diagonal, zeros elsewhere |
| Image (linear map) | Range; `{T(v): v ∈ V}` |
| Image (function) | Set of outputs of a function |
| Independent (linear) | Only the trivial combination gives 0 |
| Inconsistent | Having no solution |
| Induced subgraph | Subgraph keeping ALL edges of the parent among its vertices |
| Inference rule | A valid step from premises to conclusion (e.g. modus ponens) |
| Infimum | Greatest lower bound |
| Injective | One-to-one (distinct inputs → distinct outputs) |
| Inner product | u·v = Σuᵢvᵢ (real dot product) |
| Intersection | Common elements (∩) |
| Inverse (function) | f⁻¹ reverses f |
| Inverse (matrix) | A⁻¹ with AA⁻¹ = A⁻¹A = I (if det≠0) |
| Irreflexive | A relation with no (x,x) pairs |
| Isomorphic | Same structure; graph isomorphism = relabeling of vertices |
| Join (lattice) | Least upper bound (∨) |
| Kripke frame | A structure for modal logic semantics |
| König’s lemma | Infinite finitely-branching tree has an infinite path |
| Kernel (linear map) | null space {v: T(v)=0} |
| Kernel (semigroup) | Set of elements mapping to an idempotent |
| Kirchhoff’s theorem | Matrix-tree theorem counts spanning trees |
| Knaster-Tarski | Fixpoint theorem |
| Lattice | A poset where every pair has a meet and a join |
| Lattice (matrix) | Array arrangement |
| Law of excluded middle | p ∨ ¬p is always true |
| Law of noncontradiction | ¬(p ∧ ¬p) is always true |
| Leaf | A pendant vertex (degree 1) |
| Least upper bound | LUB / supremum |
| Least element | Minimum of a set |
| Linear combination | Σ cᵢvᵢ |
| Linear dependence | A nontrivial combination equals 0 |
| Linear transformation | T(u+v)=T(u)+T(v) and T(cu)=cT(u) |
| Linearly independent set | Only the trivial combination is 0 |
| Lipschitz | A continuity condition |
| Literal | A variable or its negation |
| Loop (graph) | An edge from a vertex to itself |
| Meet (lattice) | Greatest lower bound (∧) |
| Member | Element x of a set (x ∈ S) |
| Minor (graph) | Obtained by deleting/contracting edges and vertices |
| Minor (matrix) | A submatrix determinant |
| Modulo | Remainder after division; a mod n |
| Multiset | A set allowing repeated elements |
| Morphism | Structure-preserving map (homomorphism) |
| NAND | Not-and (universal gate) |
| Negation | ¬p (not p) |
| Neighbour | A vertex adjacent to another |
| NOR | Not-or (universal gate) |
| Norm | Length ||v|| of a vector |
| Not (¬) | Logical negation |
| NP | Nondeterministic polynomial-time (complexity) |
| Null space | Kernel of A; {x: Ax=0} |
| Nullity | dim(null space) |
| Number | A mathematical object (natural, integer, rational, real, complex) |
| Octet | A group of eight; also a term in graph theory |
| Open set | A set containing a neighborhood of each point |
| Order (group) | Number of elements in a group |
| Order (ring) | Number of elements |
| Order (relation) | A total/preorder relation |
| Ordered pair | (a,b) with a as first and b as second |
| Ordinal | Order type of a well-ordered set |
| Orientation (graph) | An assignment of direction to edges |
| Outer product | For vectors u,v: matrix u·vᵀ |
| Pairwise coprime | gcd of every pair is 1 |
| Parity | Evenness/oddness |
| Partition (set) | A division into disjoint nonempty subsets |
| Path (graph) | A walk with no repeated vertices |
| Path (function) | Image of a continuous function |
| Pigeonhole principle | If n items go into m<n boxes, some box has >1 item |
| Planar graph | A graph drawable without edge crossings |
| Poset | Partially ordered set |
| Power set | Set of all subsets P(S) |
| Predicate | A statement with variables (e.g., P(x)) |
| Preorder | A reflexive transitive relation |
| Prime | A natural number >1 with no divisors other than 1 and itself |
| Prime factorization | Writing an integer as a product of primes |
| Principal value | A chosen canonical value |
| Product | Result of multiplication |
| Projection | Mapping onto a subspace along a direction |
| Projection (onto vector) | proj_a(b) = ((a·b)/(a·a))·a |
| Proposition | A statement with a definite truth value |
| Prove | Demonstrate truth from premises or axioms |
| Public key | In asymmetric crypto, the shareable encryption/verification key |
| Quantifier | ∀ (for all), ∃ (there exists) |
| Quotient | Result of division |
| Radian | Angle unit: 180° = π radians |
| Rank | dim(column space) = dim(row space) |
| Rational | A number a/b with integers a,b (b≠0) |
| Real number | A point on the number line ℝ |
| Recurrence | A relation defining terms by previous terms |
| Recurrence relation | Definition of sequence by earlier terms |
| Reduced row echelon | Canonical form from Gauss-Jordan elimination |
| Reflexive | A relation where every x relates to itself |
| Relation | Set of ordered pairs |
| Relatively prime | gcd(a,b) = 1 |
| Representative | A chosen element of an equivalence class |
| Resolution | A proof rule for clauses |
| Ring | Set with + and × (e.g., integers ℤ) |
| Root | A solution (e.g., of a polynomial) |
| Row space | Span of the rows of a matrix |
| Rule of inference | A valid argument form (modus ponens etc.) |
| Scalar | A single number (not a vector) |
| Scalar multiplication | Multiplying a vector by a number |
| Scalar product | The dot product |
| Scheme | A syntactic rule/template producing infinitely many axioms (proof theory) |
| Scope (quantifier) | The part of a formula governed by a quantifier |
| Second-order logic | Quantification over relations/sets |
| Set | An unordered collection of distinct objects |
| Side condition | A requirement on variables (e.g., "a is fresh") |
| Sigma-algebra | A collection closed under complements/countable unions |
| Simple graph | Undirected graph, no loops, no multiple edges |
| Simultaneous | Occurring together |
| Singular | A matrix with det = 0 (no inverse) |
| Spanning set | A set whose linear combinations cover the space |
| Spanning tree | A tree using all vertices of a graph |
| Spectral theorem | Symmetric matrices have an orthonormal eigenbasis |
| Subgraph | A graph whose vertices/edges are subsets |
| Subgroup | A subset of a group closed under operation and inverses |
| Subset | A set whose elements all belong to another |
| Subspace | A subset of a vector space closed under + and scalar × |
| Subspace topology | (Topology) |
| Sufficient condition | A condition that guarantees another |
| Sum (graph) | Graph join |
| Supremum | Least upper bound |
| Surjective | Onto (every codomain element is hit) |
| Symmetric | p↔q; or relation where (x,y) ⇒ (y,x) |
| Symmetric group | The group of permutations S_n |
| Symmetric matrix | A = Aᵀ |
| Tautology | A formula true under every truth assignment |
| Term (logic) | A variable, constant, or function application denoting an object |
| Term (algebra) | A product of variables raised to powers |
| Tensor | Multilinear map / multi-indexed array |
| Total order | A partial order that is also total (comparable) |
| Totient | Euler's φ function counting coprime residues |
| Trace | Sum of diagonal entries (= sum of eigenvalues) |
| Translate | (Geometry) Move without rotating |
| Triangle inequality | ||x+y|| ≤ ||x|| + ||y|| |
| Triangular matrix | Upper/lower-triangular: zeros below/above diagonal |
| Trit | Three-valued logic (not standard here) |
| Truth assignment | A mapping of propositions to T/F |
| Truth table | A table of all truth assignments and formula values |
| Trivial solution | The zero solution to a homogeneous system |
| Turing machine | A theoretical model of computation |
| Union (set) | All elements of both sets (∪) |
| Universal quantifier | ∀x P(x): "for all x, P(x)" |
| Universe | The domain of discourse |
| Unique factorization | Writing an integer as a unique product of primes |
| Unit vector | A vector of length 1 |
| Universal set | The set of all objects under discussion |
| Validity | A formula true under every interpretation |
| Value | The result of an expression |
| Varignon | (Geometry: midpoint theorem parallelogram) |
| Vector | An element of a vector space |
| Vector space | A set closed under + and scalar × satisfying the axioms |
| Venn diagram | A diagram of sets |
| Vertex | A node of a graph |
| Walk | A sequence of vertices joined by edges |
| Well-ordering | Every subset has a minimum element |
| Well-ordered set | A totally ordered set that is well-ordered |
| WFF | Well-formed formula |
| XOR | Exclusive OR |
| Zero matrix | All entries zero |
| Zero vector | The additive identity (all-zero vector) |
| Zero-divisor | A nonzero element a with ab=0 for some nonzero b |
