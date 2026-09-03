# Persistent Data Management — Quick Revision

## Module 1: Data models

- DBMS provides controlled storage, querying, integrity, security, concurrency, and recovery.
- External → conceptual → internal schemas support data independence.
- Conceptual model = business view; logical model = relations and constraints; physical model = storage.
- ER basics: entity, attribute, relationship, cardinality, participation.
- Candidate key = minimal super key; primary key = chosen candidate; foreign key = reference.
- Map 1:M by placing the 1-side key on the M-side; map M:N using a junction table.
- EER adds specialization, generalization, inheritance, and aggregation.

## Module 2: Design and normalization

- FD `X→Y`: equal X values require equal Y values.
- Compute `X+` to test whether X is a super key.
- Lossless join avoids spurious tuples; dependency preservation allows constraints without joins.
- 1NF: atomic values.
- 2NF: no partial dependency of non-prime attributes on a candidate key.
- 3NF: for every non-trivial `X→A`, X is a super key or A is prime.
- BCNF: every non-trivial determinant is a super key.
- 4NF: every non-trivial MVD determinant is a super key.

## Module 3: Relational algebra

- Procedural: specifies how to derive the result.
- `σ` selects rows; `π` projects columns; `⋈` joins; `×` pairs all rows.
- Union/intersection/difference require union compatibility.
- Division answers “for all.”
- Push selective operations down to reduce intermediate relations.

## Module 4: Relational calculus

- Declarative: specifies what condition result values satisfy.
- TRC variables range over tuples; DRC variables range over attribute values.
- `∃` = exists; `∀` = for all; `¬∃` = none.
- Safe expressions are finite and range-restricted to the active domain.
- Safe calculus and relational algebra have equal expressive power.

## Module 5: SQL

- DDL defines, DML modifies, DQL queries, DCL authorizes, TCL controls transactions.
- Logical query order: `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`.
- `WHERE` filters rows; `HAVING` filters groups.
- Inner join keeps matches; left join also keeps unmatched left rows.
- Use `IS NULL`; comparison with null is unknown.
- View stores a query definition; materialized view stores its result.
- Procedure is invoked; trigger fires automatically; cursor processes row by row.

## Module 6: Indexing and hashing

- Indexes reduce reads but consume space and slow writes.
- Clustered index matches physical order; non-clustered is separate.
- Dense = entry per key/record; sparse = selected entries and requires ordered data.
- B+ tree has all data entries at linked leaves: good for equality and ranges.
- Hashing maps keys to buckets: excellent for equality, poor for ranges.
- Composite indexes usually follow the leftmost-prefix principle.

## Module 7: Query optimization

- Parse → logical tree → rewrite → cost optimization → physical plan → execute.
- Cardinality and selectivity estimates drive access path, join order, and join algorithm.
- Nested loop suits small indexed input; hash join suits large equality joins; merge join suits sorted inputs.
- Selection/projection pushdown reduces intermediate results.
- Inspect estimated versus actual rows with execution-plan tools.
- Materialized views exchange freshness and write cost for faster reads.

## Module 8: Transactions

- ACID: atomicity, consistency, isolation, durability.
- Conflict: different transactions, same item, at least one write.
- Precedence graph acyclic ⇔ conflict-serializable.
- `Strict ⇒ Cascadeless ⇒ Recoverable`.
- Anomalies: dirty read, non-repeatable read, phantom, lost update.
- WAL writes log before data; undo losers and redo winners as required.

## Module 9: Concurrency control

- S lock reads; X lock writes; S–S compatible only.
- 2PL: growing then shrinking; ensures conflict serializability.
- Strict 2PL holds X locks to completion; rigorous holds all locks.
- Wait-for graph cycle indicates deadlock.
- Timestamp ordering is deadlock-free but may abort/restart transactions.
- Optimistic control validates near commit; MVCC provides visible versions.

## Module 10: Advanced topics

- XML is well-formed by syntax and valid when it conforms to DTD/XSD.
- Distribution uses fragmentation and replication; transparency hides placement.
- 2PC: prepare/vote, then commit/abort; coordinator failure may block prepared participants.
- CAP tradeoff applies during a network partition.
- Parallel DB: speedup, scaleup, and skew.
- HDFS stores distributed blocks; MapReduce maps, shuffles, reduces.
- Spark is a DAG-based distributed compute engine.
- NoSQL types: key-value, document, wide-column, graph.
- Big Data: volume, velocity, variety, veracity, value.

## Ten memory lines

1. ER designs the facts.
2. Normalization separates facts.
3. Algebra says how.
4. Calculus says what.
5. SQL puts theory into practice.
6. Indexes avoid unnecessary reads.
7. The optimizer chooses an estimated low-cost route.
8. ACID protects transaction meaning.
9. Concurrency protocols coordinate simultaneous work.
10. Distributed systems trade simplicity for scale and resilience.

## Module 11: Practical sessions

- Practical workflow: inspect -> clean -> transform -> join -> aggregate -> validate -> report.
- PostgreSQL procedure: `CREATE OR REPLACE PROCEDURE ... LANGUAGE plpgsql ...`; execute with `CALL`.
- PostgreSQL trigger: create a `RETURNS trigger` function, then attach it with `CREATE TRIGGER`.
- `NEW` is the incoming row; `OLD` is the previous row.
- Use `BEGIN`, `COMMIT`, `ROLLBACK`, and `SAVEPOINT` when testing transactions.
- Views are saved queries; materialized views store results and need refresh.
- Cursors process rows one at a time; set-based SQL is usually faster.
- HDFS stores replicated blocks; MapReduce uses Map -> Shuffle/Sort -> Reduce.
- Spark is a distributed processing engine; it is not the same as HDFS.
- Query tuning: inspect with `EXPLAIN ANALYZE`, improve, then compare correctness and cost.
