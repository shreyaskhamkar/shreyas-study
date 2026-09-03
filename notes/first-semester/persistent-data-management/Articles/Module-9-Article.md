# Module 9 Article: Concurrency Control in Shared Databases

## Why concurrency control exists

Many users may read and write the same database at the same time. Without control, updates can overwrite each other or expose incorrect intermediate results.

## Locks

The most common mechanism is locking.

- Shared lock: used for reading
- Exclusive lock: used for writing

Compatibility matters. Many readers can share a lock, but a writer needs exclusive access.

## Two-phase locking

2PL has two phases:

1. Growing phase: acquire locks
2. Shrinking phase: release locks

If all transactions follow 2PL, the schedule is conflict serializable.

Strict 2PL keeps exclusive locks until commit and helps with recovery too.

## Deadlocks

Deadlock happens when two or more transactions wait for each other forever. Typical solutions include:

- prevention
- avoidance
- detection and recovery

## Timestamp ordering

Timestamp protocols order transactions using their start times. A transaction must respect that order when reading and writing data.

This avoids some lock-based waits, but it can cause restarts when operations arrive out of order.

## Optimistic control

Optimistic methods assume conflicts are rare. Transactions proceed without locks, then validate before commit.

This works well when contention is low.

## Isolation levels

Different isolation levels balance correctness and concurrency. Lower isolation may allow anomalies such as dirty reads or non-repeatable reads; higher isolation reduces those risks.

## Exam angle

If asked to compare methods, mention:

- locking is pessimistic
- timestamp ordering avoids waiting by using time order
- optimistic control is best when conflicts are rare

Then tie it back to deadlocks and serializability.
