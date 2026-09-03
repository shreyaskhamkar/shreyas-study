# Module 9: Concurrency Control

[← Previous: Module 8](<Module-8.md>) · [Subject index](README.md) · [Next: Module 10 →](<Module-10.md>)

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 9: Concurrency Control** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 8](Module-8.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Why this matters in practice | 10-15 minutes |
| 3 | Difficult concurrency ideas explained simply | 10-15 minutes |
| 4 | 1. Purpose | 10-15 minutes |
| 5 | 2. Lock-based control | 10-15 minutes |
| 6 | 3. Two-Phase Locking (2PL) | 10-15 minutes |
| 7 | 4. Deadlocks and starvation | 10-15 minutes |
| 8 | 5. Timestamp-ordering protocol | 10-15 minutes |
| 9 | 6. Optimistic concurrency control | 10-15 minutes |
| 10 | 7. Pessimistic versus optimistic | 10-15 minutes |
| 11 | 8. MVCC | 10-15 minutes |
| 12 | 9. Phantom protection | 10-15 minutes |


## Start here: the simple idea

Concurrency means many users use the database at the same time. Imagine two teachers editing the same student's marks. Without control, one teacher's update may accidentally overwrite the other.

### Locks are like room keys

- A **shared lock (S)** allows reading. Many transactions may read together.
- An **exclusive lock (X)** allows writing. Others must wait because the value is being changed.

**Two-Phase Locking (2PL)** has a growing phase, where locks are collected, and a shrinking phase, where locks are released. It makes schedules conflict-serializable, but it can create a **deadlock**.

A deadlock is like this:

```text
Transaction 1 holds A and waits for B.
Transaction 2 holds B and waits for A.
```

## Why this matters in practice

- In textbooks, concurrency control explains safe shared access to data.
- In industry, the same ideas stop two users from overwriting each other in forms, carts, payments, and editing screens.
- A beginner can think of it as traffic control for database updates.

Other approaches are:

- **Timestamp ordering:** older and newer transactions follow a fixed time order.
- **Optimistic control:** work first and check for conflicts before saving; good when clashes are rare.
- **MVCC:** keep multiple versions so readers and writers block each other less often.

Concurrency control balances correctness and speed. More waiting can reduce errors but also reduce throughput; fewer locks can increase retries or conflicts.

## Difficult concurrency ideas explained simply

### Strict and rigorous 2PL

- **Strict 2PL:** keep all write locks until commit or rollback.
- **Rigorous 2PL:** keep both read and write locks until commit or rollback.

Rigorous is therefore stronger and may cause more waiting.

### Deadlock detection

A **wait-for graph** contains one node per transaction. Draw `T1 -> T2` when T1 waits for T2. A cycle proves that a deadlock exists. The DBMS chooses one transaction as a victim, rolls it back, and lets the others continue.

### Starvation

**Starvation** means a transaction repeatedly waits or repeatedly gets selected as the deadlock victim, so it never finishes. Giving older or frequently restarted transactions higher priority can help.

### Pessimistic and optimistic control

Pessimistic control says, “A conflict may happen, so lock first.” Optimistic control says, “A conflict is unlikely, so work first and validate before commit.”

Use pessimistic control for frequently updated data. Optimistic control works well for mostly read-only or low-conflict data.

### MVCC

MVCC keeps several versions of a row. A reader can see an older committed version while a writer creates a newer one. Readers and writers block each other less, but old versions must later be cleaned up.

## 1. Purpose

Concurrency control coordinates simultaneous transactions so the database maintains the required isolation and recoverability while achieving good throughput. Main approaches are locking, timestamp ordering, optimistic validation, and multiversion concurrency control (MVCC).

## 2. Lock-based control

- **Shared lock (S):** required to read; several transactions may hold S locks together.
- **Exclusive lock (X):** required to write; conflicts with both S and X locks held by others.

| Requested / held | S | X |
|---|---:|---:|
| S | Compatible | No |
| X | No | No |

A lock manager maintains a lock table and waiting queues. Locks may be at database, table, page, row, or predicate/key-range granularity.

Fine-grained locks improve concurrency but use more memory and management work. Coarse locks reduce overhead but increase contention. **Intention locks** (`IS`, `IX`, `SIX`) coordinate multiple granularities by announcing lower-level lock intentions.

## 3. Two-Phase Locking (2PL)

Basic 2PL divides each transaction into:

1. **Growing phase:** acquire locks; release none.
2. **Shrinking phase:** release locks; acquire no new lock.

2PL guarantees conflict serializability but can cause deadlock.

Variants:

- **Conservative/static 2PL:** obtains all locks before starting; avoids deadlock but reduces concurrency.
- **Strict 2PL:** holds all X locks until commit/abort; prevents dirty reads/writes and cascading rollback.
- **Rigorous 2PL:** holds both S and X locks until commit/abort.

Lock conversion must respect phases: upgrade S→X while growing; downgrade X→S while shrinking.

## 4. Deadlocks and starvation

A deadlock occurs when transactions wait cyclically:

```text
T1 holds X, waits for Y
T2 holds Y, waits for X
```

### Handling methods

- **Prevention:** impose resource ordering or use timestamp schemes.
  - Wait-die: older waits; younger aborts.
  - Wound-wait: older aborts (“wounds”) younger; younger waits for older.
- **Detection:** build a wait-for graph; a cycle indicates deadlock. Abort a selected victim.
- **Timeout:** abort a transaction waiting too long; simple but can produce false positives.

Victim selection considers work completed, locks held, rollback cost, and number of prior restarts. Repeatedly choosing the same victim causes **starvation**; aging or restart priority helps prevent it.

## 5. Timestamp-ordering protocol

Each transaction receives a unique timestamp `TS(T)`. For each item X, maintain:

- `read_TS(X)`: largest timestamp of any transaction that read X
- `write_TS(X)`: largest timestamp of any transaction that wrote X

### Read rule

T may read X if `TS(T) ≥ write_TS(X)`; otherwise T is too old and aborts/restarts. On success, update `read_TS(X)`.

### Write rule

T may write X only if it does not violate an already completed later read/write, typically requiring:

```text
TS(T) ≥ read_TS(X) and TS(T) ≥ write_TS(X)
```

Otherwise it aborts (or an obsolete write may be ignored under Thomas's write rule).

Timestamp ordering is deadlock-free because transactions do not wait for locks, but repeated rollback can cause starvation and wasted work.

## 6. Optimistic concurrency control

Best when conflicts are rare:

1. **Read phase:** read data and make updates in a private workspace.
2. **Validation phase:** check whether committing would violate serializability.
3. **Write phase:** apply updates if validation succeeds; otherwise restart.

It avoids long lock waits but performs poorly under high contention.

## 7. Pessimistic versus optimistic

| Feature | Pessimistic locking | Optimistic control |
|---|---|---|
| Assumption | Conflicts are likely | Conflicts are rare |
| Action | Block before conflict | Detect conflict near commit |
| Cost under contention | Waiting/deadlocks | Aborts/retries |
| Suitable workload | Hot, frequently updated data | Read-heavy/low-conflict data |

## 8. MVCC

MVCC stores multiple committed versions. Readers select a version visible to their snapshot while writers create new versions, reducing reader-writer blocking. Old versions must eventually be reclaimed.

MVCC is an implementation family, not one fixed isolation guarantee. Depending on the DBMS and level, it can provide read committed, snapshot isolation, or serializable behavior. Write-write conflicts still require coordination, and write skew must be considered.

## 9. Phantom protection

Row locks cannot protect a row that does not yet exist. A transaction reading `WHERE Marks > 90` may see a newly inserted qualifying row later. Serializable locking can use predicate or key-range locks; serializable MVCC systems use dependency tracking or validation.

## Exam focus

- 2PL guarantees conflict serializability, not deadlock freedom.
- Strict 2PL holds X locks to completion; rigorous 2PL holds all locks.
- Draw a wait-for graph for deadlock questions.
- Compare protocols on blocking, aborts, starvation, and workload suitability.

## Common mistakes

- Saying shared locks conflict with other shared locks
- Claiming basic 2PL prevents deadlocks
- Confusing deadlock with starvation
- Assuming MVCC removes every write conflict

## Memory rules

- Shared means read together; exclusive means write alone.
- Growing phase acquires locks; shrinking phase releases them.
- A wait-for graph cycle means deadlock.
- Pessimistic control blocks early; optimistic control validates late.

## Check your understanding

1. Can two transactions hold shared locks on the same row?
2. Why is timestamp ordering deadlock-free?
3. When is optimistic control a good choice?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Yes, because both transactions only read.
2. Transactions abort instead of waiting for locks, so a waiting cycle cannot form.
3. It suits workloads where conflicts are rare, such as many reads and few competing writes.

</details>

## Quick revision box

Concurrency control protects isolation while allowing useful parallel work. Different protocols trade waiting, restarts, memory, and implementation complexity.

## Practice ladder

1. **Easy - Recall:** Define the module's central idea in one or two sentences.
2. **Easy - Recognize:** Identify the correct method for a small example and explain why it fits.
3. **Medium - Apply:** Work through one representative problem without copying the example.
4. **Medium - Compare:** Contrast two methods or concepts from the module.
5. **Hard - Integrate:** Solve a university-style scenario and justify every major step.

<details>
<summary>Reveal self-evaluation guide</summary>

A complete response uses correct terminology, shows intermediate steps, connects the result to the scenario, and states one assumption or limitation.

</details>

---

[← Previous: Module 8](<Module-8.md>) · [Subject index](README.md) · [Next: Module 10 →](<Module-10.md>)
