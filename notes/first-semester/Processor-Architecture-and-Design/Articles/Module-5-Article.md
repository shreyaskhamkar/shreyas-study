# Module 5 Article: Pipelining — The Assembly Line Processor

## The big idea

A single instruction, step by step, is slow. But many instructions are all
doing different steps at once — so why not run them like an **assembly line**?
That is exactly what **pipelining** does: split execution into fixed stages and
overlap different instructions through those stages. Throughput rises, even
though any one instruction still takes the full number of stages.

## The classic 5-stage RISC pipeline

```
Stage   | What happens                    | Typical work
IF      | Fetch instruction               | IR ← MEM[PC]
ID      | Decode + read registers         | read rs, rt
EX      | Execute / address calculation   | ALU op
MEM     | Memory access                   | load/store data
WB      | Write result back to a register | write rd/rt
```

With a full pipeline, one instruction finishes every cycle (in the ideal case),
even though each individual instruction is five cycles "in flight."

## Why pipelining is not a free lunch

The **ideal speedup** for an N-stage pipeline is **N×**, but three things cut
into it:

1. Not every stage takes the same time (the cycle is set by the slowest stage).
2. **Stalls** insert empty "bubble" cycles.
3. **Branch mispredictions** flush the pipeline.

So real CPI > 1, and speedup < N.

## Pipeline registers and the stall

Between stages sit **pipeline registers** (IF/ID, ID/EX, EX/MEM, MEM/WB). They
hold the intermediate state so each stage can run independently every cycle.
When a stage cannot proceed (operand missing), it inserts a **bubble** (NOP),
stalling that one stage.

## Hazards, resolved

### Structural hazards
Two instructions need the **same hardware** at the same time. Example: one
memory system used for both instruction fetch and data access. Fixes: add a
second memory (split I/D) or stall.

### Data hazards
The instruction needs a result that an earlier instruction hasn't written yet.

```
LW  R1, 0(R2)      ; load R1
ADD R3, R1, R4     ; needs R1 — not ready yet → stall 1 cycle
```

**Forwarding (bypassing)** solves most by routing the ALU/memory output directly
to the next instruction's input, skipping write-back. It still **can't** help the
load-use case above, because the value isn't known until MEM, so the load must
stall.

### Control hazards
Branches break the "fetch the next sequential instruction" assumption.

- **Static prediction:** simple rules (e.g., branch not taken).
- **Dynamic prediction:** use a 1-bit or 2-bit saturating counter per branch,
  or global branch history.
- **Cost of a miss:** flush the wrongly-fetched instructions (≈ pipeline depth
  cycles lost).

## Throughput vs latency

- **Latency** = time for one instruction (≈ N cycles; pipeline doesn't reduce it).
- **Throughput** = instructions finished per unit time (≈ 1/cycle ideally; pipeline
  raises it).

This is the #1 confusion in exams: "Does pipelining make each instruction
faster?" Answer: no, but more finish per second.

## Worked example: a 5-instruction pipeline timing

Assume no hazards. Instructions I1..I5:

```
Cycle   1   2   3   4   5   6   7
I1      IF  ID  EX  MEM WB
I2          IF  ID  EX  MEM WB
I3              IF  ID  EX  MEM WB
I4                  IF  ID  EX  MEM WB
I5                      IF  ID  EX  MEM WB
```

Five instructions complete in 9 cycles instead of 25 — a ~3× speedup even
before accounting for hazards.

## Exam angle

For a pipelining question:

1. Draw the pipeline diagram (instructions across time), marking IF/ID/EX/MEM/WB.
2. If there's a data hazard, show where the bubble goes and whether forwarding
   helps.
3. If there's a branch, show the flush on a misprediction.
4. Compute speedup: `(CPI_nonpipe × IC × T) / (CPI_pipe × IC × T)`; IC cancels,
   so it's about CPI and clock rates.

> Tip: always state the difference between **latency** (un-improved) and
> **throughput** (improved) — examiners reward the distinction.
