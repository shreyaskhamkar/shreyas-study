# Persistent Data Management — MCQ (Multiple Choice Questions)

## Module 1: Introduction, Data Models, ER/EER Modelling

**1. Which schema level describes the overall logical structure of the data, independent of how it is stored or viewed?**
a) External
b) Conceptual
c) Internal
d) Physical

**2. A candidate key is:**
a) Any attribute set that uniquely identifies a tuple
b) A minimal super key
c) The primary key plus all foreign keys
d) A multi-valued attribute

**3. When mapping a many-to-many relationship into a relational schema, you:**
a) Add a foreign key on the one-side entity
b) Create a junction (associative) table
c) Store a list in a single column
d) Merge the two entities into one table

## Module 2: Functional Dependencies and Normalization

**4. In a functional dependency X → Y, X is called:**
a) A super key
b) A determinant
c) A candidate key
d) A foreign key

**5. A relation is in BCNF if:**
a) It is already in 3NF
b) Every non-trivial functional-dependency determinant is a super key
c) It has no partial dependencies
d) It has no multivalued dependencies

**6. A transitive dependency (a non-key attribute depending on another non-key attribute) violates:**
a) 1NF
b) 2NF
c) 3NF
d) BCNF

## Module 3: Relational Algebra

**7. The relational division operator (R ÷ S) returns tuples of R that:**
a) Appear in both R and S
b) Match/combine with every row of S
c) Are in R but not in S
d) Combine with S via Cartesian product

**8. Which of the following is NOT a basic (primitive) relational-algebra operator?**
a) Selection (σ)
b) Projection (π)
c) Join (⋈)
d) Aggregation

**9. Pushing a selection (σ) down before a join in relational algebra is an example of:**
a) Query rewriting (logical optimization)
b) Physical optimization
c) Index selection
d) Normalization

## Module 4: Tuple and Domain Relational Calculus

**10. A tuple-relational-calculus query of the form { t ∈ R | P(t) } is:**
a) Procedural
b) Declarative
c) Algebraic
d) Imperative

**11. In domain relational calculus (DRC), the variables range over:**
a) Tuples
b) Rows
c) Attribute domain values
d) Complete tables

**12. Which expression correctly states "no tuple satisfies P"?**
a) ∃x P(x)
b) ∀x P(x)
c) ¬∃x P(x)
d) ∃x ¬P(x)

## Module 5: SQL, Views, Procedures, Triggers, Cursors

**13. In the logical processing order of a SQL query, which clause comes immediately after GROUP BY?**
a) WHERE
b) HAVING
c) SELECT
d) FROM

**14. To test whether a column value is NULL in SQL, you must use:**
a) Col = NULL
b) Col == NULL
c) Col IS NULL
d) Col <> NULL

**15. A LEFT JOIN between tables A and B preserves:**
a) Only the rows that match in both A and B
b) All rows of A; matching rows of B; non-matching B columns become NULL
c) All rows of B
d) All rows of both tables

## Module 6: Indexing, B+ Trees, and Hashing

**16. In a B+ tree, the actual data records are stored in:**
a) Internal nodes
b) The root node
c) Linked leaf nodes
d) Internal-node pointers only

**17. A dense index contains:**
a) One entry per data page
b) One entry per distinct search-key value
c) One entry per record/row
d) Entries only for the primary key

**18. Hashing-based indexes are best suited for:**
a) Range queries (BETWEEN, <, >)
b) Prefix searches
c) Equality lookups
d) Sorted output

## Module 7: Query Processing and Optimization

**19. The query optimizer chooses the final execution plan with the:**
a) Largest number of operators
b) Smallest estimated cost
c) Fewest join operations
d) Largest intermediate result set

**20. A hash join is most appropriate for:**
a) A tiny indexed inner relation with a small outer relation
b) Large inputs joined on an equality condition
c) Already-sorted inputs
d) A non-equality predicate

**21. Pushing selection/projection down the execution tree primarily reduces:**
a) Stored disk space
b) Intermediate result size
c) Network latency
d) Lock duration

## Module 8: Transactions, Serializability, Recovery

**22. The four properties of a transaction are known as:**
a) ACID
b) BASE
c) CAP
d) RAID

**23. A schedule is conflict-serializable if its precedence graph has no:**
a) Vertices
b) Sources
c) Sinks
d) Cycles

**24. The "dirty read" anomaly can occur under which isolation level?**
a) Read uncommitted
b) Read committed
c) Repeatable read
d) Serializable

## Module 9: Concurrency Control

**25. In two-phase locking, the growing phase means that transactions:**
a) May acquire and immediately release locks
b) May acquire locks but may not release any
c) May hold only shared locks
d) Release all locks at the end of the phase

**26. In lock compatibility, can two transactions hold Shared (S) locks on the same item simultaneously?**
a) No
b) Yes
c) Only if one holds an Exclusive lock
d) Only during a read operation

**27. A cycle in the wait-for graph indicates:**
a) A serializable schedule
b) A deadlock
c) Starvation
d) A livelock

## Module 10: XML, Distributed/Parallel DBMS, Big Data

**28. The CAP theorem states that during a network partition, a distributed system can provide:**
a) Either consistency or availability, but not both
b) Availability and partition tolerance together
c) Consistency and partition tolerance together
d) All three of consistency, availability, and partition tolerance

**29. Two-phase commit (2PC) is used to guarantee:**
a) Atomicity across distributed participants
b) Serializability of transactions
c) Data replication
d) Network partitioning

**30. In the MapReduce model, the phase that groups and sorts the intermediate key-value pairs between Map and Reduce is the:**
a) Map phase
b) Shuffle phase
c) Sort phase
d) Reduce phase

## Answers (key only)

<details>
<summary>Reveal answers after attempting the questions</summary>

1-b, 2-b, 3-b, 4-b, 5-b, 6-c, 7-b, 8-d, 9-a, 10-b, 11-c, 12-c, 13-b, 14-c, 15-b, 16-c, 17-c, 18-c, 19-b, 20-b, 21-b, 22-a, 23-d, 24-a, 25-b, 26-b, 27-b, 28-a, 29-a, 30-b.

</details>

## Extended practice: Questions 31–70

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 31 | Physical data independence allows changes to the: | Internal schema without conceptual changes | External schema only | Data values only | User passwords |
| 32 | A superkey differs from a candidate key because it may contain: | Nulls only | Redundant attributes | Foreign keys only | No attributes |
| 33 | A weak entity is identified using its partial key plus the: | Owner entity key | Any non-key | Relationship name | Row number |
| 34 | Total participation means: | Every entity instance participates | At most one participates | The relation is empty | Cardinality is many-to-many |
| 35 | Attribute closure `X+` is used to test: | Whether X determines attributes/a key | SQL syntax | Index height | Lock compatibility |
| 36 | Partial dependency can occur when the candidate key is: | Composite | Single-attribute only | Foreign | Surrogate only |
| 37 | 2NF removes: | Repeating groups | Partial dependencies of non-prime attributes | All transitive dependencies | Multivalued dependencies |
| 38 | A lossless decomposition guarantees the natural join produces: | No spurious tuples | No keys | Fewer attributes | Only BCNF |
| 39 | Selection in relational algebra filters: | Rows | Columns | Table names | Schemas |
| 40 | Projection primarily selects: | Rows | Columns | Indexes | Transactions |
| 41 | Union compatibility requires the same arity and: | Corresponding compatible domains | Primary key | Row count | Index type |
| 42 | A natural join matches attributes with: | The same name/meaning | Different domains | Nulls only | No equality |
| 43 | Relational calculus is based on specifying: | What result must satisfy | Operator execution order | Disk blocks | Loop statements |
| 44 | An unsafe calculus expression may produce a result that is: | Domain-independent and finite | Infinite/domain-dependent | Always empty | A key only |
| 45 | In TRC, variables range over: | Tuples | Individual domain values | SQL commands | Files |
| 46 | In DRC, variables range over: | Whole tuples only | Domain values | Tables only | Transactions |
| 47 | `WHERE` filters rows: | Before grouping | After grouping only | After `ORDER BY` | During commit |
| 48 | `HAVING` filters: | Base-table columns before grouping | Groups after aggregation | Index pages | Schemas |
| 49 | `COUNT(column)` differs from `COUNT(*)` because it ignores: | Duplicate values | Null values in that column | Zero | Rows without keys |
| 50 | A view normally stores: | Query definition | Full duplicate data always | Index nodes only | Log records |
| 51 | A trigger runs: | Automatically on a specified event | Only when called explicitly | Before DB startup | In the optimizer only |
| 52 | A correlated subquery is evaluated with reference to the: | Current outer row | Database log | Cache line | XML schema only |
| 53 | A B+ tree keeps search keys in internal nodes and records/pointers mainly in: | Root only | Leaves | Hash buckets | Log files |
| 54 | Equality lookup is typically strongest with: | Hash indexing | Unordered scan | Sorting only | Range partition only |
| 55 | Range queries are typically stronger with: | B+ tree | Hash table | Heap without index | Trigger |
| 56 | A sparse index generally requires the data file to be: | Ordered on the search key | Encrypted | Unnormalized | Distributed |
| 57 | Query selectivity is low when a predicate returns: | A small fraction of rows | Every row | No cost estimate | Many columns only |
| 58 | A nested-loop join is especially attractive when the inner input has: | A useful join index | No rows ever | Only XML | No predicate |
| 59 | Sort-merge join is well suited to: | Ordered inputs and range/equality joins | Cross products only | Trigger execution | Hash collisions |
| 60 | Materialization means an intermediate result is: | Stored before reuse/next stage | Never computed | Always indexed | Rolled back |
| 61 | Atomicity means a transaction's effects are: | All or none | Always visible immediately | Permanently cached | Concurrent only |
| 62 | Durability means committed changes survive: | Failures | Queries | Locks only | Normalization |
| 63 | Write-ahead logging requires the log record reach stable storage: | Before the changed data page | After every checkpoint only | After data deletion | Never |
| 64 | A non-repeatable read observes: | Different values for the same row | An uncommitted row only | A new matching row only | A deadlock only |
| 65 | Strict 2PL holds exclusive locks until: | Commit or abort | First read | Shrinking begins immediately | Checkpoint |
| 66 | Timestamp ordering resolves conflicts using: | Transaction timestamps | Wait-for cycles only | Table names | Page sizes |
| 67 | MVCC commonly lets readers access: | A suitable committed version | Uninitialized pages | Only exclusive locks | The log header |
| 68 | Horizontal fragmentation divides a relation by: | Rows | Columns | Index levels | Constraints |
| 69 | Replication primarily improves availability/read locality but adds: | Consistency/update coordination | Normal forms | SQL syntax | Candidate keys |
| 70 | Under CAP, a partition forces a choice between: | Consistency and availability | Atomicity and isolation | SQL and XML | Keys and indexes |

## Extended answer key

31-A, 32-B, 33-A, 34-A, 35-A, 36-A, 37-B, 38-A, 39-A, 40-B,
41-A, 42-A, 43-A, 44-B, 45-A, 46-B, 47-A, 48-B, 49-B, 50-A,
51-A, 52-A, 53-B, 54-A, 55-A, 56-A, 57-A, 58-A, 59-A, 60-A,
61-A, 62-A, 63-A, 64-A, 65-A, 66-A, 67-A, 68-A, 69-A, 70-A.
