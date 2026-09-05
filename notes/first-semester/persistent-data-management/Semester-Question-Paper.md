# M.C.A. (Online Mode) Semester I Examination

**Paper Code:** OCA-504 MJ  
**Title:** Persistent Data Management  
**Time:** 3 Hours  
**Maximum Marks:** 70

## Q1) Multiple Choice Questions with reasoning — answer any 25 of 30 [25 × 2 = 50]

For every attempted question, select one option and give a brief reason.

| No. | Question | A | B | C | D |
|---:|---|---|---|---|---|
| 1 | Which schema describes the overall logical database? | External | Conceptual | Internal | Physical file |
| 2 | A candidate key is: | Any superkey | A minimal superkey | All foreign keys | A multivalued attribute |
| 3 | A many-to-many relationship maps to a: | Foreign key on one side | Junction table | List-valued column | Merged entity |
| 4 | In `X→Y`, X is the: | Dependent | Determinant | Foreign key | Domain |
| 5 | BCNF requires every nontrivial FD determinant to be a: | Prime attribute | Superkey | Foreign key | Composite key |
| 6 | A non-key attribute depending transitively on another non-key attribute violates: | 1NF | 2NF | 3NF | Domain integrity |
| 7 | Relational division finds R-tuples related to: | At least one S tuple | Every S tuple | No S tuple | Exactly two S tuples |
| 8 | Which is not a primitive relational-algebra operator? | Selection | Projection | Cartesian product | Aggregation |
| 9 | Pushing selection below a join is: | Logical query rewriting | Schema normalisation | Locking | Recovery |
| 10 | Tuple relational calculus is: | Procedural | Declarative | Imperative | Physical |
| 11 | DRC variables range over: | Tuples | Attribute-domain values | Tables | Files |
| 12 | “No tuple satisfies P” is: | `∃xP(x)` | `∀xP(x)` | `¬∃xP(x)` | `∃x¬P(x)` |
| 13 | In SQL logical processing, which follows `GROUP BY`? | WHERE | HAVING | SELECT | FROM |
| 14 | The correct NULL test is: | `col=NULL` | `col==NULL` | `col IS NULL` | `col<>NULL` |
| 15 | A LEFT JOIN preserves: | Matching rows only | Every left row | Every right row only | No unmatched rows |
| 16 | In a B+ tree, data entries occur in: | Internal nodes only | Root only | Linked leaves | Parent pointers only |
| 17 | A dense index normally has: | One entry per page | One per record/search-key occurrence | Root entries only | Foreign keys only |
| 18 | A hash index is best for: | Range queries | Prefix order | Equality lookup | Sorted output |
| 19 | The optimizer normally chooses the plan with: | Most operators | Lowest estimated cost | Fewest joins at any cost | Largest intermediates |
| 20 | A hash join is well suited to: | Inequality joins | Large equality joins | Pre-sorted range joins | Cartesian products |
| 21 | Early selection and projection reduce: | Schema size | Intermediate-result size | Lock compatibility | Table count |
| 22 | Transaction properties are abbreviated: | ACID | BASE | CAP | RAID |
| 23 | A schedule is conflict-serializable when its precedence graph has no: | Vertices | Sources | Sinks | Cycles |
| 24 | Dirty reads are permitted by: | Read uncommitted | Read committed | Repeatable read | Serializable |
| 25 | During 2PL's growing phase a transaction may: | Acquire but not release locks | Release but not acquire | Use only S locks | Release all locks |
| 26 | Two transactions may simultaneously hold which lock on one item? | Two X locks | Two S locks | One S and one X | No locks |
| 27 | A wait-for graph cycle indicates: | Serializability | Deadlock | Recovery | Replication |
| 28 | During a partition, CAP says a system must trade between: | Consistency and availability | Durability and atomicity | SQL and XML | Storage and compute |
| 29 | Two-phase commit coordinates: | Distributed atomicity | Index selection | Query parsing | Replication format |
| 30 | MapReduce groups intermediate key-value pairs during: | Map | Shuffle | Reduce output | Input splitting |

## Q2) Answer any five in approximately two sentences [5 × 2 = 10]

1. Distinguish a superkey from a candidate key.
2. What is a lossless decomposition?
3. Distinguish selection and projection in relational algebra.
4. Explain the difference between `WHERE` and `HAVING`.
5. Compare B+ tree and hash indexes for range and equality queries.
6. Define conflict serializability.
7. Distinguish shared and exclusive locks.

## Q3) Answer any two in approximately ten lines [2 × 5 = 10]

1. Explain the three-schema architecture and logical and physical data independence.
2. For `R(Student, Course, Instructor)` with `Student,Course→Instructor` and `Course→Instructor`, identify the normal-form problem and produce a lossless decomposition.
3. Write an SQL query that returns each department with more than five employees and its average salary, using `Employee(emp_id, dept, salary)`.
4. Explain ACID, write-ahead logging, and how recovery handles an uncommitted transaction after a crash.

