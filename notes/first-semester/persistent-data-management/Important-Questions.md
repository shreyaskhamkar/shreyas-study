# Persistent Data Management — Important Questions

Use the answer points to check your response after attempting each question.

## Module 1

### Short answers

1. Define DBMS and list four advantages over a file system.
2. Differentiate conceptual, logical, and physical data models.
3. Explain super, candidate, primary, composite, and foreign keys.
4. What are participation and cardinality constraints?

### Long answer

**Design an ER model for a library and map it to relations.**

Answer points: entities `BOOK`, `COPY`, `MEMBER`, `LOAN`, `AUTHOR`; BOOK–COPY is 1:M; MEMBER–COPY borrowing is represented by LOAN with issue/due/return dates; BOOK–AUTHOR is M:N; identify keys and participation; map M:N through `BOOK_AUTHOR`; make `COPY(BookID,CopyNo)` a weak entity if copy number is only locally unique.

## Module 2

### Short answers

1. Define functional dependency and attribute closure.
2. Explain insertion, update, and deletion anomalies.
3. Distinguish 3NF from BCNF.
4. What are lossless join and dependency preservation?

### Problem

Normalize `ORDER_LINE(OrderNo, OrderDate, CustomerID, CustomerName, ProductID, ProductName, Qty)` to 3NF, assuming key `(OrderNo, ProductID)`.

Answer points:

```text
OrderNo → OrderDate, CustomerID
CustomerID → CustomerName
ProductID → ProductName
(OrderNo,ProductID) → Qty

ORDER(OrderNo, OrderDate, CustomerID)
CUSTOMER(CustomerID, CustomerName)
PRODUCT(ProductID, ProductName)
ORDER_LINE(OrderNo, ProductID, Qty)
```

State primary/foreign keys and show removal of partial and transitive dependencies.

## Module 3

1. Explain all fundamental relational algebra operations with examples.
2. Compare theta join, equijoin, natural join, and outer join.
3. Why does division represent “for all”?
4. Write algebra for students who are not enrolled in any course.
5. Write algebra for students enrolled in every required course.

Answer hints:

```text
Not enrolled:
πSID(STUDENT) − πSID(ENROLL)

All required:
πSID(ENROLL) −
πSID((πSID(ENROLL) × REQUIRED) − ENROLL)
```

## Module 4

1. Compare TRC, DRC, and relational algebra.
2. Explain free and bound variables.
3. What makes a calculus expression safe?
4. Write TRC for students with no enrolment.
5. Express “students enrolled in every course” using `∀`, then using `¬∃`.

Answer point: connect all tuple/domain variables to actual relations so the result is range-restricted.

## Module 5

1. Distinguish DDL, DML, DQL, DCL, and TCL.
2. Explain `WHERE` versus `HAVING`.
3. Compare view and materialized view.
4. Compare stored procedure, trigger, and cursor.
5. Explain SQL null and three-valued logic.

### SQL practice

Write queries to:

1. Find the three courses with the highest average marks.
2. List departments with at least ten students.
3. List students with no enrolments.
4. List students who take every course.
5. Increase marks by five, capped at 100, for one course inside a transaction.

## Module 6

1. Compare clustered/non-clustered and dense/sparse indexes.
2. Explain B+ tree search, insertion, and deletion with diagrams.
3. Why do linked leaf nodes make range queries efficient?
4. Explain collision handling and dynamic hashing.
5. Compare B+ tree and hash indexes by query type.
6. Explain the leftmost-prefix rule for a composite index.

## Module 7

1. Draw and explain the query-processing pipeline.
2. Define cost, cardinality, and selectivity.
3. Compare nested-loop, hash, and sort-merge joins.
4. Explain selection and projection pushdown.
5. How do stale statistics lead to poor plans?
6. Explain materialized-view refresh choices.

Long-answer structure: show logical query, alternative physical choices, statistics used, estimated cost, selected plan, and actual-plan verification.

## Module 8

1. Explain ACID using a bank transfer.
2. Define conflict and conflict equivalence.
3. Test a given schedule using a precedence graph.
4. Compare conflict and view serializability.
5. Compare recoverable, cascadeless, and strict schedules.
6. Explain WAL, checkpoints, undo, and redo.
7. Compare SQL isolation levels and anomalies.

### Schedule problem

For:

```text
R1(X), W1(X), R2(X), W2(X), R2(Y), W2(Y), R1(Y), W1(Y)
```

X creates edge `T1→T2`; Y creates `T2→T1`; the cycle means the schedule is not conflict-serializable.

## Module 9

1. Draw the S/X lock-compatibility matrix.
2. Explain basic, conservative, strict, and rigorous 2PL.
3. Show deadlock using a wait-for graph and describe recovery.
4. Compare wait-die and wound-wait.
5. State timestamp-ordering read and write rules.
6. Compare pessimistic, optimistic, and MVCC approaches.
7. Why do phantoms require predicate/key-range protection?

## Module 10

1. Distinguish well-formed and valid XML; compare DTD and XSD.
2. Explain horizontal, vertical, and hybrid fragmentation.
3. Explain 2PC and why it may block.
4. State CAP accurately for a network partition.
5. Compare shared-memory, shared-disk, and shared-nothing architectures.
6. Explain HDFS and MapReduce.
7. Compare Hadoop MapReduce and Spark.
8. Explain four NoSQL models and suitable workloads.
9. Describe the 5Vs of big data.

## Module 11 practical sessions

1. Write a PostgreSQL workflow to create tables, insert data, clean values, join tables, aggregate results, and validate row counts.
2. Create and call a PL/pgSQL procedure with input parameters and error handling using `RAISE EXCEPTION`.
3. Create a trigger function that validates or audits `INSERT` and `UPDATE` operations.
4. Explain when a PostgreSQL view is updatable and when an `INSTEAD OF` trigger is required.
5. Demonstrate `BEGIN`, `COMMIT`, `ROLLBACK`, and `SAVEPOINT` using two query windows.
6. Explain cursor declaration, opening, fetching, looping, and closing, and compare cursors with set-based SQL.
7. Explain HDFS and the Mapper -> Shuffle/Sort -> Reducer workflow, including Combiner and Partitioner.
8. Describe a query-tuning workflow using `EXPLAIN ANALYZE` and index selection.
9. Explain database roles, privileges, and the principle of least privilege.

## Full-syllabus 10-mark questions

1. Starting with an ER design, show its mapping, normalization, SQL implementation, and useful indexes.
2. Explain how the optimizer converts a declarative SQL query into an executable physical plan.
3. Show how transaction management, concurrency control, and recovery work together to preserve correctness.
4. Compare centralized relational databases with distributed SQL, NoSQL, and big-data processing systems.

## Answer-writing checklist

- Begin with a precise definition.
- Draw the requested diagram or table.
- Explain the mechanism step by step.
- Include a small example.
- State advantages, limitations, and suitable use.
- End comparisons with a clear decision criterion.
