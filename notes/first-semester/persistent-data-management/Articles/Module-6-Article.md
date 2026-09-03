# Module 6 Article: Indexing and Hashing for Fast Access

## The problem being solved

Without indexing, a database may need to scan many rows to find a match. Indexing reduces this work by creating a faster path to the data.

## Types of indexes

- Primary index: built on the primary key or sorted data file
- Secondary index: built on a non-ordering attribute
- Dense index: one entry for every search key value or record
- Sparse index: fewer entries, usually one per block or group

Clustered indexes store rows in the same order as the index key. Non-clustered indexes do not.

## Why B+ trees are popular

B+ trees stay balanced and keep all search results efficient. Their leaves are linked, which makes range queries fast.

Properties:

- all actual data pointers are at the leaf level
- internal nodes store routing keys
- all leaves are at the same depth

That balance is why B+ trees are preferred in many DBMS products.

## Hashing

Hashing uses a hash function to map a key to a bucket. It is excellent for exact-match lookups but not ideal for range queries.

The main issue is collision handling. Two keys can map to the same bucket, so the DBMS needs a strategy such as chaining or open addressing.

## B+ tree vs hashing

| Feature | B+ Tree | Hashing |
|---|---|---|
| Best for | Range queries and ordering | Exact match |
| Search time | Logarithmic | Very fast on average |
| Keeps order | Yes | No |
| Common use | General-purpose indexes | Equality lookups |

## Study hint

If the question asks which structure to use:

- choose B+ tree for sorted access, range search, and ordered traversal
- choose hashing for direct lookup by exact key

## Exam point

A strong answer mentions both performance and maintenance. Indexes speed up reads, but they also add storage cost and slow down writes because the index must be updated too.
