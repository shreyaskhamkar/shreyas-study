# Module 6: Instruction Set Architecture

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [Next: Module 7 →](<Module-7.md>)

## Learning outcomes

After this module, you should be able to:

- compare RISC and CISC instruction set architectures;
- name the popular ISAs and their main use cases;
- describe ARM architecture and its variations;
- apply the ideal memory model and cost/performance trade-offs;
- explain on-chip vs off-chip cache designs and cache miss/hit behaviour.


## Prerequisites

Complete [Module 5](Module-5.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | RISC vs CISC | 10-15 minutes |
| 3 | Popular ISAs | 10-15 minutes |
| 4 | Introduction to ARM architecture | 10-15 minutes |
| 5 | ARM practical setup | 10-15 minutes |
| 6 | Performance vs cost trade-offs | 10-15 minutes |
| 7 | On-chip and off-chip cache designs | 10-15 minutes |
| 8 | Cache miss and hit | 10-15 minutes |
| 9 | Other memories (coverage) | 10-15 minutes |


## Start here: the simple idea

An **Instruction Set Architecture (ISA)** is the contract: the instructions a
processor understands, the registers it exposes, the addressing modes, and how
memory behaves. Two implementations of the same ISA (e.g. Intel x86 and AMD
x86) can run the same programs but be built very differently inside.

The big split is **RISC vs CISC**, and today RISC-style (especially ARM)
dominates phones and increasingly laptops/servers, while x86 still dominates
desktops/servers.

### Everyday analogy

- An ISA is like a **menu**: it lists exactly what you can order (instructions)
  and how (addressing modes).
- RISC = a short menu of simple, fast dishes. CISC = a long menu with complex
  combo dishes.

## RISC vs CISC

| Aspect | CISC | RISC |
|---|---|---|
| Instruction count | Fewer, complex | Many, simple |
| Instruction length | Variable | Mostly fixed |
| Cycles per instruction | Often >1 | Mostly 1 |
| Addressing modes | Many | Few |
| Memory access | Memory-to-memory allowed | Load/store (register-register) |
| Code size | Smaller (dense) | Larger |
| Pipelines | Harder (variable length) | Easy (uniform) |
| Power/efficiency | Higher per op | Lower per op |
| Examples | x86, x86-64 | ARM, MIPS, RISC-V |

### The RISC philosophy

- Simple instructions that execute in roughly one cycle.
- Fixed instruction length simplifies decode and pipelining.
- Load/store: only `LDR`/`STR` touch memory; everything else is register-register.
- Many general-purpose registers reduce load/store frequency.
- Simple addressing modes.

### The CISC philosophy

- Instructions that match high-level operations (e.g. "sort" or string copy).
- Variable-length instructions save code space.
- Microcode (historically) implements complex instructions as micro-operations.
- Modern x86 internally translates to RISC-like micro-ops, blurring the line.

## Popular ISAs

1. **x86 / x86-64 (Intel, AMD):** CISC roots; dominant desktop/server OS.
2. **ARM / AArch64-A:** RISC; dominant mobile; growing server (Apple M, AWS Graviton).
3. **RISC-V:** Open, free RISC; rising in academia, embedded, and servers.
4. **MIPS:** RISC teaching ISA; little commercial use now.
5. **Power / PowerPC:** RISC; older Apple (pre-Intel), servers, embedded.
6. **SPARC:** RISC; Oracle/ Fujitsu servers.

## Introduction to ARM architecture

ARM is a family of RISC ISAs. Key points:

- **Load-store model:** arithmetic on registers; `LDR`/`STR` for memory.
- **AArch32:** 32-bit state, 32-bit fixed instructions, conditional execution.
- **AArch64 (ARMv8+):** 64-bit state, 31 × 64-bit general registers (`X0..X30`),
  32-bit views (`W0..W30`), fixed 32-bit instructions (and 16-bit Thumb-2).
- **Condition codes:** flags N, Z, C, V updated by arithmetic.
- **Low power:** explains mobile dominance; "compute is cheap, battery and heat are not."
- **Licensing model:** ARM Holdings licenses the ISA; many vendors (Qualcomm, Apple, Samsung, Nvidia) build chips.

## ARM practical setup

ARM development typically uses:

- A cross-assembler/linker (`arm-none-eabi-gcc` / `aarch64-none-elf-gcc`).
- An emulator such as **QEMU** for running without hardware.
- An IDE or editor with syntax highlighting (VS Code + Cortex-Debug).
- A board or dev kit (Raspberry Pi, Arduino with ARM) for real hardware.
- `objdump` / `gdb` for disassembly and debugging.

## Performance vs cost trade-offs

The **ideal memory model** assumes memory is infinitely fast and free, so CPU
time = instruction count × cycles/instruction. Reality violates this, so:

- Faster memory (SRAM) is more expensive and lower density → use little.
- Larger caches reduce miss rate but cost area, power, and latency.
- Off-chip (in package but outside the core) DRAM is cheaper but slower than
  on-chip SRAM.

**Cost/performance trade-off:** add the cheapest memory that still keeps the CPU
mostly fed. Diminishing returns set in: going from 25% to 10% miss rate may
cost far more than going from 75% to 25%.

## On-chip and off-chip cache designs

```text
CPU core
  │  L1 I-cache + L1 D-cache  (on-chip, ~32-64 KB each, ~1-2 cycle)
  │  L2 cache  (on-chip, ~256 KB-1 MB, ~10-20 cycles)
  │  L3 cache  (shared, on-chip/package, ~several MB, ~30-50 cycles)
  └─→ main memory (off-chip DRAM, ~100-300 cycles)
```

- **On-chip cache:** integrated on the same die; fastest; expensive.
- **Off-chip cache / DRAM:** connected via memory bus/channel; slower; larger
  and cheaper per byte.

Modern systems integrate L1/L2/L3 **on the same package** (often on-die), with
DRAM **off-package** (still "off-chip"). The cache coherence protocol (e.g.,
**MESI**: Modified, Exclusive, Shared, Invalid) keeps copies consistent across
cores.

## Cache miss and hit

A **cache hit** serves the request from cache (low latency). A **cache miss**
triggers a request to the next level; the miss types:

- **Compulsory:** first access ever to a block.
- **Capacity:** working set exceeds cache size.
- **Conflict:** multiple blocks compete for the same set (set-associative).
- **Coverage:** an access in a region that cannot be cached at all (rare).

Hit time and miss penalty:

```
Average memory access time (AMAT) =
  hit time + miss rate × miss penalty
```

## Other memories (coverage)

(Detail of SRAM/DRAM/Optical/magnetic covered in Module 4; summarized here as
the memory-technology choices that constrain ISA and system design.)

| Tech | Used for | Volatile? |
|---|---|---|
| SRAM | L1/L2/L3 cache | Yes |
| DRAM | main memory | Yes (refresh) |
| Magnetic (HDD) | mass storage | No |
| SSD (NAND flash) | fast storage | No |
| Optical | archival/media | No |
| ROM/Flash | firmware/boot | No |

## Common mistakes

- Saying "RISC is always faster" — RISC has better throughput/pipelining but
  higher instruction counts; total time must be measured.
- Confusing ISA (the contract) with microarchitecture (the implementation).
- Forgetting that modern x86 internally uses RISC-like micro-ops.

## Memory rules

- ISA = contract: instructions, registers, addressing, memory model.
- RISC = simple/fixed/one-cycle; CISC = complex/variable/memory-to-memory.
- ARM = RISC, load-store, low power, mobile/server.
- AMAT = hit time + miss rate × miss penalty.
- On-chip (fast/expensive) vs off-chip (slow/cheap) memory trade-off.
- MESI keeps on-chip caches coherent across cores.

## Check your understanding

1. Give one RISC and one CISC example, and one architectural difference.
2. What is the single feature that most cleanly distinguishes RISC from CISC?
3. Is the ISA the same as the microarchitecture? Give an example of two
   implementations sharing an ISA.
4. How is AMAT affected by halving the miss rate?
5. When does a cache miss not cause a stall?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. RISC: ARM; CISC: x86. Difference: RISC uses fixed-length, mostly
   single-cycle, load-store instructions; CISC uses variable-length, complex ones.
2. Load/store discipline: in RISC, only explicit load/store instructions access
   memory; arithmetic works only on registers.
3. No. ISA is the contract; microarchitecture is the implementation. Intel and
   AMD both implement x86 with very different CPUs.
4. AMAT is reduced by (miss rate/2) × miss penalty — a big improvement if the
   miss penalty is large.
5. When the access can be served from a **non-inclusive** cache level, or when
   the CPU can do other work (memory-level parallelism) or speculative execution
   hides the latency — it may not visibly stall a single thread.

</details>

## Quick revision box

- ISA = instructions, registers, addressing, memory model (contract).
- RISC: simple, fixed, load-store; CISC: complex, variable.
- ARM = RISC, low-power, mobile/server leader; x86 = CISC, desktop/server.
- AMAT = hit time + miss rate × miss penalty.
- Cache: on-chip fast/expensive; off-chip (DRAM) slow/cheap.
- MESI keeps multi-core caches coherent.

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

[← Previous: Module 5](<Module-5.md>) · [Subject index](README.md) · [Next: Module 7 →](<Module-7.md>)
