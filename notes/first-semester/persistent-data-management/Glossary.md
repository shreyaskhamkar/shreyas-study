# Persistent Data Management — Glossary

| Term | Meaning |
|---|---|
| ACID | Atomicity, consistency, isolation, and durability properties of transactions |
| Active domain | Values that actually occur in a database instance or query constants |
| Attribute | Named property/column of an entity or relation |
| Attribute closure | Attributes implied by an attribute set under functional dependencies |
| B+ tree | Balanced index tree with all data entries in linked leaves |
| BCNF | Normal form in which every non-trivial FD determinant is a super key |
| Candidate key | Minimal set of attributes uniquely identifying a tuple |
| Cardinality | Relationship mapping ratio or, in query plans, estimated/result row count |
| Cascadeless schedule | Schedule in which transactions read only committed values |
| Checkpoint | Recovery marker that limits log scanning |
| Clustered index | Index whose order determines or closely matches row storage order |
| Commit | Successful durable completion of a transaction |
| Conflict | Same item, different transactions, with at least one write |
| Conflict serializability | Equivalence to a serial schedule by swapping non-conflicting operations |
| Cursor | Mechanism for processing query results one row at a time |
| Data independence | Ability to change one schema level with little/no impact above it |
| DDL | SQL commands that define schema objects |
| Deadlock | Cycle of transactions each waiting for another |
| Dense index | Index with an entry for every search-key value/record |
| Domain | Permitted set of values for an attribute |
| DRC | Relational calculus whose variables range over domain values |
| Durability | Committed transaction effects survive failure |
| Entity | Distinguishable real-world object |
| Entity integrity | Primary-key values cannot be null |
| Execution plan | Physical operators chosen to run a query |
| Foreign key | Attribute set referencing a candidate key in another/same relation |
| Fragmentation | Splitting a distributed relation horizontally, vertically, or both |
| Functional dependency | Constraint `X→Y` in which X values determine Y values |
| Hashing | Mapping a key to a bucket using a hash function |
| HDFS | Distributed, replicated block-oriented Hadoop file system |
| Index | Auxiliary access structure that speeds data retrieval |
| Isolation | Degree to which concurrent transactions are separated |
| Join | Operation combining related tuples from relations |
| Lock | Concurrency-control claim on a data resource |
| Lossless join | Decomposition whose join reconstructs exactly the original relation |
| Materialized view | Physically stored result of a query |
| MVD | Multivalued dependency expressing independent sets of values |
| MVCC | Concurrency method maintaining multiple data versions |
| Normalization | Decomposing relations to reduce redundancy and anomalies |
| Optimizer | DBMS component that selects an estimated low-cost plan |
| Phantom | New/deleted qualifying row observed when a predicate is repeated |
| Precedence graph | Directed conflict graph used to test serializability |
| Primary key | Candidate key chosen as the main tuple identifier |
| Projection | Relational operation selecting attributes/columns |
| Query selectivity | Fraction of input rows retained by a predicate |
| Recoverable schedule | Dependent transaction commits only after the source writer commits |
| Referential integrity | Foreign key matches a referenced value or permitted null |
| Relation | Set of tuples over named attributes; represented as a table |
| Relational algebra | Procedural formal language of relation operations |
| Relational calculus | Declarative formal query language based on logic |
| Replication | Maintaining copies of data at multiple sites |
| Rollback | Undoing transaction changes |
| Safe expression | Calculus query guaranteed a finite, domain-restricted result |
| Schedule | Interleaving of transaction operations preserving each transaction's order |
| Selection | Relational operation choosing rows that satisfy a predicate |
| Serializability | Correctness criterion requiring effect equivalent to a serial order |
| Sparse index | Ordered index containing entries for only selected keys/pages |
| Spark | Distributed DAG-based data-processing engine |
| Spurious tuple | Incorrect tuple introduced by joining a lossy decomposition |
| Strict schedule | Uncommitted writes cannot be read or overwritten by another transaction |
| Super key | Any attribute set that uniquely identifies a tuple |
| Timestamp ordering | Concurrency protocol enforcing a timestamp-based serial order |
| Transaction | Logical unit of database work |
| Trigger | Program automatically fired by a database event |
| TRC | Relational calculus whose variables range over tuples |
| Two-Phase Commit | Distributed atomic-commit protocol with prepare and decision phases |
| Two-Phase Locking | Protocol with a lock-growing phase followed by a shrinking phase |
| View | Named stored query presenting a virtual table |
| WAL | Write-ahead logging: log reaches stable storage before corresponding data |
| Weak entity | Entity identified using an owner key plus a partial key |

