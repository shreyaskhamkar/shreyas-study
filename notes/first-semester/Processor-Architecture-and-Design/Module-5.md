# Module 5: Performance Optimization Techniques

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)

## Learning outcomes

After this module, you should be able to:

- describe pipelining and the assembly-line analogy;
- identify structural, data, and control hazards;
- explain branch prediction and its effect on performance;
- contrast the CPU instruction cycle with pipelined execution;
- explain interrupts and basic parallel processing.


## Prerequisites

Complete [Module 4](Module-4.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | The CPU instruction cycle (non-pipelined) | 10-15 minutes |
| 3 | Instruction pipelining | 10-15 minutes |
| 4 | Hazards | 10-15 minutes |
| 5 | Branch prediction | 10-15 minutes |
| 6 | Parallel processing | 10-15 minutes |
| 7 | Interrupts | 10-15 minutes |


## Start here: the simple idea

**Pipelining** is the art of working on several instructions at once, like an
assembly line where each worker completes one step while the next worker takes
over. A given instruction still takes several stages, but **throughput** (the
rate of finished instructions) goes up.

### Everyday analogy

A car factory: stamping → painting → assembly. If one car needs all three
steps in sequence at one station, you finish one car per day. On an assembly
line, station 1 stamps car 2 while station 2 paints car 1 — you finish roughly
one car per stage-cycle. Each car still takes 3 days, but the output rate is
much higher.

## The CPU instruction cycle (non-pipelined)

The classic **instruction cycle** has two (or more) phases:

1. **Fetch** the instruction from memory.
2. **Decode + Execute + (Memory) + Write-back.**

This repeats for every instruction. If each step takes one clock, a 5-stage
instruction takes ~5 clocks but only one finishes per 5 clocks.

## Instruction pipelining

A pipeline splits execution into **stages**. Classic 5-stage RISC pipeline:

```
IF → ID → EX → MEM → WB
Fetch   Decode  Execute  Memory  Write-back
```

With a full pipeline, ideally **one instruction completes every clock**, even
though each individual instruction takes 5 clocks to travel through.

### Ideal speedup

```
Speedup ≈ (time for N instructions non-pipelined) / (time pipelined)
        ≈ 5× (for a 5-stage pipeline, ignoring stalls)
```

In practice speedup < 5 due to hazards.

## Hazards

A **hazard** is anything that stops the simple "one instruction per cycle"
flow. Three kinds:

### 1. Structural hazard

Two instructions need the **same hardware** at the same time.

- Example: one memory port used for both instruction fetch and data access — the
  second must wait. The fix is often to **add the resource** (separate I- and
  D-caches) or **stall**.

### 2. Data hazard

One instruction needs a result that a **previous** instruction hasn't finished
producing.

```
ADD R1, R2, R3     ; writes R1
SUB R4, R1, R5     ; reads R1 before the ADD writes it  → data hazard
```

**Solutions:**
- **Forwarding/bypassing:** wire the ALU output directly to the next stage's
  input, skipping the write-back. Handles most cases.
- **Stalling (pipeline bubble):** insert "do nothing" cycles when forwarding
  can't help (e.g., a load followed immediately by a use).

### 3. Control hazard

The processor doesn't know the **next PC** until a branch is resolved.

- A branch taken or not taken changes the flow. Every cycle of uncertainty is a
  wasted cycle.

**Solutions:**
- **Branch prediction** (see below).
- **Delayed branch:** schedule one harmless instruction after the branch.
- **Branch target buffer / branch history** in modern CPUs.

## Branch prediction

The CPU **guesses** whether each branch is taken and goes on speculatively. If
it guessed right, no stall. If wrong, it **flushes** the wrong-path instructions
and restarts — costing several cycles.

| Predictor | Idea |
|---|---|
| Static | Always not-taken, or "branch backward = taken" |
| Dynamic (1-bit) | Remember last outcome of this branch |
| Dynamic (2-bit saturating) | Two bits: strongly/weakly taken or not |
| Global history | Use pattern of recent branches |
| TAGE / neural | Advanced pattern history |

Better predictors reduce control-hazard stalls but add hardware complexity.

## Parallel processing

Pipelining overlaps instructions in **time** on a single core. Parallelism
increases throughput across **multiple** execution units/cores:

- **Instruction-level parallelism (ILP):** issue multiple independent
  instructions per cycle (superscalar, VLIW).
- **Thread-level parallelism (TLP):** run multiple threads on one core
  (simultaneous multithreading / hyperthreading).
- **Data-level parallelism:** one operation on many data items (SIMD, GPUs).
- **Task-level parallelism:** distribute work across multi-core / clusters.

## Interrupts

An **interrupt** is an asynchronous signal that the CPU pause and handle an
event (key press, disk done, error). The pipeline is flushed, the CPU saves
state, runs the handler, and resumes. (Full treatment in Module 9.)

## Common mistakes

- Thinking pipelining speeds up a single instruction (it speeds up throughput).
- Believing forwarding eliminates all data hazards (loads followed by uses still
  stall).
- Ignoring that a wrong branch prediction flushes the pipeline.

## Memory rules

- Pipeline = assembly line; ideal speedup = number of stages.
- Structural = resource conflict; data = value not ready; control = branch unknown.
- Forwarding fixes most data hazards; stalls remain for loads.
- Branch prediction guesses to hide control hazards; misses flush the pipeline.
- Pipelining = time; parallelism = space (more units/cores).

## Check your understanding

1. In one sentence, how does a pipeline improve throughput but not single-instruction time?
2. Give one example each of structural, data, and control hazards.
3. What does forwarding/bypassing do?
4. When is a branch predictor "wrong," and what is the cost?
5. Name two forms of parallelism that go beyond a single in-order pipeline.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. A pipeline overlaps stages of different instructions, so one finishes per
   stage-clock, but any single instruction still travels through all stages.
2. Structural: sharing one memory port for fetch and data. Data: using a register
   before a prior instruction writes it. Control: not knowing the next PC at a branch.
3. It routes a result directly from an execution stage to the next instruction's input,
   avoiding the write-back delay.
4. It is wrong when its guess (taken/not-taken, or target) disagrees with the real outcome;
   the pipeline flushes the mis-speculated instructions, costing several cycles.
5. Instruction-level (superscalar) and thread-level (multithreading), and
   data-level (SIMD/multi-core).

</details>

## Quick revision box

- Pipeline stages: IF→ID→EX→MEM→WB; throughput ≈ 1 instr/cycle (ideal).
- Hazards: structural (resource), data (value not ready), control (branch).
- Forwarding bypasses results; stalls remain for load-use.
- Branch prediction hides control stalls; a miss flushes the pipeline.
- Parallelism: ILP (superscalar), TLP (threads), DLP (SIMD), task (cores).

## Exam guidance

Draw the relevant block or timing diagram, label data movement, show the calculation, and explain the performance consequence.

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

[← Previous: Module 4](<Module-4.md>) · [Subject index](README.md) · [Next: Module 6 →](<Module-6.md>)
