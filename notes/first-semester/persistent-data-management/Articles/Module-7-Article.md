# Module 7 Article: Query Processing and Optimization

## What the DBMS does with a query

The DBMS does not jump straight from SQL text to output. It parses the query, checks it, rewrites it, chooses an execution plan, and then runs that plan.

## Typical flow

```text
SQL query -> parser -> rewrite/optimization -> execution plan -> result
```

The optimizer is the decision-making part. It chooses a plan that tries to reduce I/O, CPU, and memory usage.

## Query optimization ideas

- Push selections down early to reduce rows
- Push projections down to reduce columns
- Join smaller intermediate results first
- Prefer indexes when they help more than a scan

These are heuristics that often improve performance.

## Cost factors

The DBMS estimates cost using things like:

- number of disk blocks read
- number of tuples processed
- available indexes
- join method
- memory availability

## Join methods

- Nested loop join: simple, but can be expensive
- Sort-merge join: useful when inputs are sorted
- Hash join: effective for equality joins

Each method has situations where it performs well.

## Materialized views

A normal view stores only the query definition. A materialized view stores the actual result too. This speeds up repeated reads, but it must be refreshed when base data changes.

## Why this module is important

This is where theory meets performance. Two queries can return the same result but have very different execution costs. The optimizer is the reason DBMSs remain fast on large datasets.

## Exam focus

If asked to explain optimization, mention:

1. parsing
2. rewriting
3. plan generation
4. cost estimation
5. execution

Then add two or three heuristics and one join example.
