# Module 8 Article: Transactions, Serializability, and Recovery

## The transaction idea

A transaction is a unit of work that should either complete fully or have no effect at all. This is essential for correctness when many users update the same database.

## ACID

- Atomicity: all or nothing
- Consistency: rules are preserved
- Isolation: transactions should not interfere incorrectly
- Durability: committed changes survive failure

## Transaction states

```text
Active -> Partially committed -> Committed
   |              |
   v              v
Failed --------> Aborted
```

## Serializability

A schedule is serializable if it is equivalent to some serial execution of the same transactions. This gives correctness with concurrency.

Conflict serializability is tested using conflicting operations on the same data item where at least one operation is a write.

## Recoverability

Schedules must be recoverable so that if one transaction reads data written by another, the writer must commit first. Otherwise a failure can create invalid committed results.

## Recovery techniques

- Logging records changes
- Checkpoints reduce recovery work
- Undo reverses uncommitted work
- Redo reapplies committed work if needed

## Example scenario

If a bank transfer debits one account and credits another, the transaction must not stop in the middle. If it does, money could disappear or be created incorrectly. That is why atomicity and recovery are so important.

## Exam tip

When writing a transaction answer, explain:

1. what a transaction is
2. why ACID matters
3. how serializability ensures correctness
4. how logging/checkpointing helps recovery
