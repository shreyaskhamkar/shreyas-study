# Persistent Data Management: One-Day Study Guide

This is the exam-focused companion to Modules 1-10 and the Module 11 practical PDFs. Use it for one-day preparation. Do not read every article today. Study a section, close the file, and reproduce the definition, operation, diagram, or SQL pattern from memory.

## One-day timetable

| Time | Work |
|---|---|
| 30 min | Read this guide once and mark weak topics |
| 75 min | Modules 1-2: data models, ER/EER, keys, dependencies and normalization |
| 60 min | Modules 3-4: relational algebra and relational calculus |
| 90 min | Module 5: SQL, views, procedures, triggers and cursors |
| 60 min | Modules 6-7: indexes, hashing, query processing and optimization |
| 90 min | Modules 8-9: transactions, serializability and concurrency control |
| 45 min | Module 10: XML, distributed DBMS, big data and NoSQL |
| 45 min | Module 11 practical patterns and PostgreSQL commands |
| 60 min | Attempt Important Questions and MCQs without looking |
| 30 min | Final recall: formulas, notation, diagrams and SQL patterns |

If you have less time, prioritize Modules 2, 3, 5, 6, 7, 8 and 9, then revise Module 10 and practical commands.

## Exam strategy

- For definitions, write meaning, purpose, and one example.
- For comparisons, use a table with at least four differences.
- For relational algebra/calculus, define the relations and show each step.
- For normalization, show functional dependencies, candidate key, violation, decomposition, and normal form reached.
- For schedules, identify conflicting operations and draw a precedence graph.
- For SQL, write correctly formatted queries and explain `WHERE`, `GROUP BY`, `HAVING`, joins, and `NULL` behavior.
- For practical answers, describe input -> processing -> validation -> output.

## Common example schema

```text
STUDENT(StudentID, Name, DepartmentID, Email)
DEPARTMENT(DepartmentID, DepartmentName)
COURSE(CourseID, Title, Credits)
ENROLLMENT(StudentID, CourseID, Semester, Marks)
```

Typical keys:

- `STUDENT.StudentID`
- `DEPARTMENT.DepartmentID`
- `COURSE.CourseID`
- `ENROLLMENT(StudentID, CourseID, Semester)`

## Module 1: Data models and ER/EER modelling

- A database is an organized collection of related data. A DBMS stores, retrieves, protects, and manages it.
- The three-schema architecture is external -> conceptual -> internal.
- External schemas are user views; the conceptual schema is the complete logical design; the internal schema describes storage.
- Physical data independence means storage changes do not require logical-schema changes. Logical data independence means logical changes have minimal effect on user views.
- An entity is a distinguishable object. An attribute describes an entity. A relationship connects entities.
- A strong entity has its own key. A weak entity depends on an owner entity and has a partial key.
- Cardinality may be 1:1, 1:N, N:1, or M:N. Participation may be total or partial.
- Candidate keys uniquely identify rows; a primary key is the selected candidate key; a foreign key references another relation's key.
- Superclass/subclass, specialization, generalization, aggregation, and inheritance are EER concepts.

### ER to relational mapping

```text
Strong entity       -> relation with all simple attributes and primary key
1:N relationship    -> foreign key on the N-side
M:N relationship    -> new relation with both participating keys
Multivalued attr.   -> separate relation(owner_key, value)
Weak entity         -> owner key + partial key as composite primary key
```

Draw an ER diagram with entities, attributes, keys, cardinality, and participation before mapping it.

## Module 2: Functional dependencies and normalization

- A functional dependency `X -> Y` means that equal X values must have equal Y values.
- A superkey uniquely identifies a tuple. A candidate key is a minimal superkey.
- Attribute closure `X+` is the set of attributes determined by X.
- Armstrong's axioms: reflexivity, augmentation, and transitivity. Union, decomposition, and pseudotransitivity are derived rules.
- Partial dependency: a non-key attribute depends on part of a composite key.
- Transitive dependency: a non-key attribute depends on another non-key attribute.
- Lossless decomposition recreates the original relation without spurious tuples.
- Dependency preservation allows constraints to be checked without joining decomposed relations.

### Normal forms

| Form | Main condition |
|---|---|
| 1NF | Atomic values; no repeating groups |
| 2NF | 1NF and no partial dependency on a candidate key |
| 3NF | 2NF and no transitive dependency; for every FD X -> A, X is a superkey or A is prime |
| BCNF | For every non-trivial FD X -> Y, X is a superkey |
| 4NF | No non-trivial multivalued dependency unless its determinant is a superkey |

### Normalization procedure

```text
List attributes and FDs
-> find candidate keys using closure
-> identify partial/transitive/MVD problems
-> decompose
-> test lossless join
-> check dependency preservation
```

Do not claim a relation is in 3NF only because it has no duplicate rows. Normal forms concern dependencies and structure.

## Module 3: Relational algebra

Relational algebra is procedural: it specifies the operations used to produce a relation.

| Operator | Meaning |
|---|---|
| `sigma` / `s` | Selection: choose rows satisfying a condition |
| `pi` / `p` | Projection: choose columns |
| `rho` / `r` | Rename relation or attributes |
| `union` | Tuples in either compatible relation |
| `-` | Tuples in first relation but not second |
| `x` | Cartesian product |
| `join` | Combine matching tuples |
| `intersection` | Tuples common to both relations |
| `divide` | “For every” or “all” query |

Examples:

```text
s DepartmentID = 10 (STUDENT)
p Name, Email (STUDENT)
STUDENT join ENROLLMENT
TAKES divide REQUIRED_COURSE
```

Remember:

- Union, intersection, and difference require union-compatible schemas.
- Selection reduces rows; projection reduces columns.
- Division answers “which students took every required course?”
- Relational algebra uses set semantics in classical theory; SQL commonly uses bags unless `DISTINCT` is used.
- Query optimization often pushes selections and projections closer to the base relations.

## Module 4: Relational calculus

Relational calculus is declarative: it describes what result is wanted, not the sequence of operations.

- Tuple Relational Calculus (TRC) uses tuple variables, such as `t`.
- Domain Relational Calculus (DRC) uses variables for individual attribute values.
- `exists` means there is at least one matching value.
- `for all` means every required value must satisfy the condition.
- Free variables appear in the result; bound variables are controlled by quantifiers.
- A safe expression returns a finite result based on values in the database.
- Relational algebra and safe relational calculus have equivalent expressive power (Codd's theorem).

### Comparison

| Feature | Relational algebra | TRC | DRC |
|---|---|---|---|
| Style | Procedural | Declarative | Declarative |
| Variables | Relations | Tuples | Attribute domains |
| Main idea | Operations | Tuple predicates | Domain predicates |
| Typical phrase | How to obtain | Which tuples | Which values |

When solving a calculus question, identify the result variables, write the relation membership condition, add predicates, and restrict quantified variables to database values for safety.

## Module 5: SQL and PostgreSQL

### SQL categories

| Category | Purpose | Examples |
|---|---|---|
| DDL | Define objects | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| DML | Change rows | `INSERT`, `UPDATE`, `DELETE` |
| DQL | Query rows | `SELECT` |
| DCL | Permissions | `GRANT`, `REVOKE` |
| TCL | Transactions | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

### Query order

```text
FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT
```

```sql
SELECT d.department_name, COUNT(*) AS total
FROM student s
JOIN department d ON d.department_id = s.department_id
WHERE s.name IS NOT NULL
GROUP BY d.department_id, d.department_name
HAVING COUNT(*) >= 5
ORDER BY total DESC;
```

- `WHERE` filters rows; `HAVING` filters groups.
- `COUNT(*)` counts rows. Most other aggregates ignore nulls.
- `UNION` removes duplicates; `UNION ALL` keeps them.
- Use `IS NULL` and `IS NOT NULL`; `value = NULL` is not correct.
- `INNER JOIN` returns matches; `LEFT JOIN` keeps every left-side row.
- `EXISTS` tests whether a matching row exists. A correlated subquery refers to the outer query.

### Views, procedures, triggers and cursors

- A view stores a query definition. A materialized view stores its result and needs refresh.
- A procedure is called explicitly. A trigger runs automatically on a database event.
- In PostgreSQL, procedures/functions use `LANGUAGE plpgsql`.
- A trigger function returns `trigger`; `NEW` is the incoming row and `OLD` is the previous row.
- Cursors process rows one at a time; set-based SQL is usually preferred.

```sql
CREATE OR REPLACE PROCEDURE add_bonus(p_dept integer, p_marks numeric)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE enrollment
    SET marks = LEAST(marks + p_marks, 100)
    WHERE student_id IN (
        SELECT student_id FROM student WHERE department_id = p_dept
    );
END;
$$;

CALL add_bonus(10, 5);
```

## Module 6: Indexing and hashing

- An index reduces the data pages that must be read, at the cost of storage and update overhead.
- Dense indexes have an entry for every search-key value or record; sparse indexes have fewer entries.
- Clustered indexes determine the physical order of data; a table usually has at most one clustered order.
- A secondary/non-clustered index has a separate structure pointing to records.
- A composite index uses multiple columns. Column order matters.
- A covering index contains all columns needed by a query.

### B-tree and B+ tree

- Balanced trees keep search depth small.
- In a B+ tree, actual data entries are at linked leaf nodes; internal nodes guide search.
- Linked leaves make range queries and ordered traversal efficient.
- Insert may split a full node and promote a separator. Delete may redistribute or merge nodes.

### Hashing

- A hash function maps a key to a bucket.
- Collision handling uses overflow buckets, chaining, or open addressing.
- Static hashing has a fixed bucket structure.
- Extendible hashing uses a directory and can double it.
- Linear hashing grows gradually by splitting buckets.
- Hash indexes are excellent for equality search but not for ordered/range search.

```text
Equality lookup       -> hashing or B+ tree
Range lookup          -> B+ tree
ORDER BY              -> B+ tree
Composite A = ? and B range -> composite B+ tree (A, B)
```

## Module 7: Query processing and optimization

```text
SQL text -> parser -> relational algebra -> optimizer -> physical plan -> executor
```

- The optimizer estimates cost using relation size, selectivity, available indexes, memory and join order.
- Common access paths: sequential scan, index scan, and index-only scan.
- Common joins: nested-loop, indexed nested-loop, hash join, and sort-merge join.
- Nested-loop joins suit a small outer relation or a useful inner index.
- Hash joins suit large unsorted equality joins.
- Sort-merge joins suit sorted inputs and can support some non-equality logic.
- Selection pushdown and projection pushdown reduce intermediate data.
- Materialization writes an intermediate result; pipelining passes tuples directly to the next operator.
- A materialized view precomputes expensive results and must be refreshed.

### Tuning sequence

```text
Measure -> EXPLAIN ANALYZE -> find costly scan/join/sort
-> rewrite or add suitable index -> measure again -> verify same result
```

## Module 8: Transaction management

- A transaction is a logical unit of work.
- ACID: Atomicity, Consistency, Isolation, Durability.
- States include active, partially committed, committed, failed, and aborted.
- A schedule interleaves operations of multiple transactions.
- Two operations conflict when they belong to different transactions, access the same data item, and at least one is a write.
- A schedule is conflict-serializable if its precedence graph is acyclic.
- A cycle proves the schedule is not conflict-serializable.
- View serializability is more general than conflict serializability but harder to test.
- A recoverable schedule commits a transaction only after transactions whose values it read have committed.
- Cascadeless schedules avoid reading uncommitted writes.
- Strict schedules prevent reading or overwriting data written by an uncommitted transaction.
- WAL means the log record is written before the changed page is written to stable storage.
- UNDO reverses uncommitted changes; REDO reapplies committed changes.

### Precedence graph method

```text
1. Create one node per transaction.
2. For each conflicting pair, add edge Ti -> Tj if Ti's operation occurs first.
3. Topological order exists -> conflict-serializable.
4. Cycle exists -> not conflict-serializable.
```

## Module 9: Concurrency control

- Shared (S) locks permit reading. Exclusive (X) locks permit writing and exclude other locks.
- Basic 2PL has a growing phase for acquiring locks and a shrinking phase for releasing them.
- Strict 2PL holds write locks until commit or abort.
- Conservative 2PL obtains all required locks before starting.
- Deadlock is a cycle in the wait-for graph.
- Deadlock handling: prevention, avoidance, detection and rollback/recovery.
- Timestamp ordering gives each transaction a timestamp and orders conflicting operations by it.
- Optimistic control validates at commit time; pessimistic control locks before conflicts occur.
- MVCC maintains multiple committed versions so readers can often avoid blocking writers.
- Phantom protection needs predicate locks, key-range locks, or an equivalent serializable mechanism.

### Lock compatibility

| Requested / Existing | S | X |
|---|---:|---:|
| S | Yes | No |
| X | No | No |

## Module 10: Advanced topics

### XML

- XML represents hierarchical, self-describing data using nested elements and attributes.
- Well-formed XML has one root, correct nesting, matching case-sensitive tags, and quoted attributes.
- Valid XML is well-formed and conforms to a DTD or XSD.
- XSD supports data types, namespaces, occurrence constraints and complex types.
- XQuery queries XML; XSLT transforms XML.

### Distributed and parallel databases

- Fragmentation divides data; replication copies data.
- Horizontal fragmentation divides rows. Vertical fragmentation divides columns and keeps a reconstruction key. Hybrid fragmentation combines both.
- Transparency hides distribution details from users.
- Two-phase commit: coordinator sends prepare, participants vote, then coordinator sends commit or abort. It can block if the coordinator fails after prepare.
- Shared-memory, shared-disk and shared-nothing are parallel architecture styles.
- Parallelism can improve speedup and scaleup, but skew and communication can limit performance.

### Big data and NoSQL

- Big-data characteristics: volume, velocity, variety, veracity and value.
- HDFS uses a NameNode for metadata and DataNodes for replicated blocks.
- MapReduce: Map -> Shuffle/Sort -> Reduce. Combiner can perform local aggregation; Partitioner sends keys to reducers.
- Spark is a distributed DAG-based processing engine and may cache intermediate results.
- NoSQL models: key-value, document, wide-column and graph.
- CAP describes the tradeoff among consistency, availability and partition tolerance during a network partition.

## Module 11: Practical session checklist

### End-to-end workflow

```text
Define objective -> inspect -> clean -> transform -> join
-> group/aggregate/sort -> validate -> save -> report
```

Validate row counts, data types, nulls, duplicates, unmatched joins, sample rows and final totals.

### PostgreSQL commands

```sql
BEGIN;
UPDATE student SET email = lower(trim(email)) WHERE student_id = 101;
SELECT * FROM student WHERE student_id = 101;
COMMIT;
-- or ROLLBACK;
```

Remember `CREATE OR REPLACE PROCEDURE`, `CALL`, trigger functions with `RETURNS trigger`, `RAISE NOTICE`, `RAISE EXCEPTION`, `EXPLAIN ANALYZE`, roles, privileges and least privilege.

## Must-memorize comparisons

| Comparison | First side | Second side |
|---|---|---|
| Procedural vs declarative | Relational algebra says how | SQL/calculus says what |
| Primary vs foreign key | Identifies a row here | References a key elsewhere |
| 3NF vs BCNF | Allows prime-attribute exception | Every determinant must be a superkey |
| B+ tree vs hashing | Ordered/range access | Equality access |
| View vs materialized view | Stores query definition | Stores query result |
| Procedure vs trigger | Explicitly called | Automatically fired |
| Conflict vs view serializable | Easier graph test | More general, harder test |
| HDFS vs Spark | Distributed storage | Distributed processing |
| Fragmentation vs replication | Divide data | Copy data |

## Likely long-answer questions

1. Explain the three-schema architecture and data independence.
2. Map an ER/EER design to relational tables.
3. Normalize a relation to 3NF or BCNF using functional dependencies.
4. Explain all relational algebra operations with examples.
5. Compare relational algebra, TRC and DRC.
6. Write SQL queries using joins, grouping, subqueries and set operations.
7. Explain B+ tree operations and compare B+ trees with hashing.
8. Explain query processing, join algorithms and optimization.
9. Test a schedule for conflict serializability using a precedence graph.
10. Explain 2PL, deadlock handling and timestamp ordering.
11. Explain XML, distributed databases, MapReduce, Spark and NoSQL.
12. Explain a complete PostgreSQL practical workflow with validation.

## Final self-test

Answer these without looking:

- What are the three schema levels?
- Find the closure of a set of attributes.
- Identify whether an FD causes a 2NF, 3NF or BCNF violation.
- Write selection, projection, join and division expressions.
- Give one TRC and one DRC example.
- Write a `GROUP BY ... HAVING` query and explain its order.
- Explain why `NULL = NULL` is not true.
- Draw a B+ tree with linked leaves.
- Choose a join algorithm for three different input situations.
- Draw a precedence graph and identify a cycle.
- Explain strict 2PL and one deadlock solution.
- Distinguish well-formed from valid XML.
- Explain HDFS and MapReduce in one diagram.
- Write a PostgreSQL procedure and trigger pattern.

If you can answer these and reproduce the key notation, diagrams and SQL patterns, revise only your marked mistakes. Do not start the deep-dive articles at the last minute.
