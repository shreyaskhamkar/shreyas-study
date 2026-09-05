# OCA-504 MJ — Model Answers and Marking Guide

## Q1 answer key

Award **1 mark** for the option and **1 mark** for a valid reason.

| No. | Answer | Reason and closest-distractor check | Module |
|---:|---|---|---:|
| 1 | B | The conceptual schema is the global logical view; the internal schema describes storage. | 1 |
| 2 | B | A candidate key is unique and minimal; a superkey may include redundant attributes. | 1 |
| 3 | B | A junction relation stores both entity keys; a list-valued column violates relational design. | 1 |
| 4 | B | The left side determines Y and is called the determinant; it need not be a key. | 2 |
| 5 | B | BCNF demands a superkey for every nontrivial FD; merely being prime is insufficient. | 2 |
| 6 | C | 3NF removes transitive non-key dependency; 2NF addresses partial dependency. | 2 |
| 7 | B | Division expresses “for all” over S; matching one row is existential. | 3 |
| 8 | D | Aggregation is extended algebra; selection, projection, and product are primitive. | 3 |
| 9 | A | Equivalent algebraic rewriting reduces rows before the join; it does not alter schema. | 3 |
| 10 | B | Calculus states what result satisfies a predicate, not an execution procedure. | 4 |
| 11 | B | Domain calculus variables denote individual values; tuple-calculus variables denote tuples. | 4 |
| 12 | C | Negating existence means there is no satisfying tuple; `∃x¬P(x)` only finds one failure. | 4 |
| 13 | B | Logical order is FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. | 5 |
| 14 | C | NULL uses three-valued logic and `IS NULL`; equality with NULL is unknown. | 5 |
| 15 | B | LEFT JOIN retains all left rows and fills unmatched right columns with NULL. | 5 |
| 16 | C | Linked leaves store data entries and support ordered scans; internal nodes guide search. | 6 |
| 17 | B | Dense indexing has an entry for every record/search-key occurrence; sparse indexing may use one per block. | 6 |
| 18 | C | Hashing directly locates equal keys but does not preserve range order. | 6 |
| 19 | B | Cost-based optimization estimates I/O/CPU and selects the cheapest plan, not simply the fewest operators. | 7 |
| 20 | B | Hash joins partition/build by equal join keys; they do not naturally implement inequalities. | 7 |
| 21 | B | Filtering rows/columns early shrinks data flowing to later operators. | 7 |
| 22 | A | Atomicity, consistency, isolation, and durability are ACID; CAP concerns distributed tradeoffs. | 8 |
| 23 | D | An acyclic precedence graph has a topological serial order; a cycle prevents one. | 8 |
| 24 | A | Read uncommitted allows values written by transactions that may still roll back. | 8 |
| 25 | A | 2PL first acquires without releasing, then releases without acquiring. | 9 |
| 26 | B | Shared locks are mutually compatible for reads; an exclusive lock conflicts with both. | 9 |
| 27 | B | A cycle means transactions wait circularly and none can proceed. | 9 |
| 28 | A | With partition tolerance required, CAP forces a consistency-versus-availability choice. | 10 |
| 29 | A | 2PC makes all distributed participants commit or abort together; it does not itself guarantee serializability. | 10 |
| 30 | B | Shuffle partitions, groups, and sorts mapper output for reducers. | 10 |

## Q2 model answers

1. A superkey uniquely identifies a tuple but may contain unnecessary attributes. A candidate key is a minimal superkey, so removing any attribute destroys uniqueness. **Marks:** uniqueness 1; minimality 1. *(Module 1)*
2. A decomposition is lossless when joining its projections recreates exactly the original relation. It must introduce neither spurious tuples nor information loss. **Marks:** reconstruction 1; no spurious tuples 1. *(Module 2)*
3. Selection `σ` filters rows satisfying a predicate; projection `π` chooses columns and removes duplicate tuples under set semantics. **Marks:** each operator 1. *(Module 3)*
4. `WHERE` filters rows before grouping, while `HAVING` filters groups after aggregation. Aggregate conditions such as `COUNT(*)>5` therefore belong in `HAVING`. **Marks:** timing 1; aggregate use 1. *(Module 5)*
5. B+ trees preserve key order and support equality plus range scans; hash indexes are usually faster for equality but unsuitable for ordered ranges. **Marks:** each comparison 1. *(Module 6)*
6. A schedule is conflict-serializable if swapping nonconflicting operations can transform it into a serial schedule. Equivalently, its precedence graph is acyclic. **Marks:** definition 1; graph test 1. *(Module 8)*
7. Shared locks allow concurrent readers but not a writer; an exclusive lock permits one holder to read/write and conflicts with other S or X locks. **Marks:** S 1; X 1. *(Module 9)*

## Q3 model answers

1. External schemas are user/application views, the conceptual schema is the global logical design, and the internal schema describes physical storage. Mappings connect the levels. Physical data independence allows storage/index changes without conceptual changes; logical independence allows conceptual changes without breaking unaffected external views. **Rubric:** three levels 3; physical independence 1; logical independence 1. *(Module 1)*
2. The candidate key is `(Student,Course)`. Because `Course→Instructor`, a non-key attribute depends on part of the composite key, violating 2NF (and therefore higher forms). Decompose into `Enrollment(Student,Course)` and `CourseInstructor(Course,Instructor)`. Their common attribute Course is a key of the second relation, so the join is lossless. **Rubric:** key 1; dependency/problem 1; normal form 1; decomposition 1; lossless reason 1. *(Module 2)*
3. `SELECT dept, AVG(salary) AS avg_salary FROM Employee GROUP BY dept HAVING COUNT(*) > 5;` FROM supplies rows, GROUP BY forms departments, HAVING removes groups of five or fewer, and AVG computes the requested aggregate. **Rubric:** SELECT/AVG 1; FROM 1; GROUP BY 1; HAVING/COUNT 1; explanation 1. *(Module 5)*
4. Atomicity makes a transaction all-or-nothing, consistency preserves rules, isolation hides harmful interleavings, and durability preserves commits. WAL records changes before data pages reach disk. After a crash, recovery redoes committed logged actions if needed and undoes an uncommitted transaction, restoring atomicity and durability. **Rubric:** ACID 2; WAL 1; redo 1; undo 1. *(Module 8)*

