# Module 4: Memory Systems and Hierarchy

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)

## Learning outcomes

After this module, you should be able to:

- classify memory by technology and role in the hierarchy;
- explain how RAM and cache are implemented and organized;
- describe ARM architecture and the CISC↔RISC shift;
- analyse clock cycles and performance.


## Prerequisites

Complete [Module 3](Module-3.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Memory classification | 10-15 minutes |
| 3 | The memory hierarchy | 10-15 minutes |
| 4 | RAM implementation | 10-15 minutes |
| 5 | Cache implementation | 10-15 minutes |
| 6 | Other memories | 10-15 minutes |
| 7 | Clock cycle analysis and performance | 10-15 minutes |
| 8 | Historical shift from CISC to RISC | 10-15 minutes |
| 9 | Introduction to ARM architecture | 10-15 minutes |
| 10 | Assembly language structure, syntax, and macros | 10-15 minutes |


## Start here: the simple idea

A computer has a **memory hierarchy**: a few fast/expensive bytes right next to
the CPU, and many slow/cheap bytes far away. The processor automatically keeps
the most-used data close, like keeping frequently used textbooks on your desk
and the rest on a distant shelf.

### Everyday analogy

- **Registers** = the variables you keep in your head while solving a problem.
- **L1/L2 cache** = the top of your desk — fast to reach.
- **RAM** = the bookcase in the room — slower to walk to.
- **SSD/HDD** = the library downstairs — slow, but huge and cheap.
- **Cloud storage** = off-site archive — very slow, very cheap.

## Memory classification

Memory is classified along two axes:

### By volatility

- **Volatile:** loses data when power is removed (SRAM, DRAM).
- **Non-volatile:** keeps data (magnetic HDD, SSD, ROM).

### By technology

| Technology | Kind | Volatile | Speed | Cost (per GB) | Density |
|---|---|---|---|---|---|
| SRAM | Cache | Yes | Fastest | Highest | Low |
| DRAM | Main memory | Yes | Fast | Medium | High |
| Magnetic (HDD) | Disk | No | Slow | Lowest | Highest |
| SSD (NAND) | Solid state | No | Fast | Medium-low | High |
| Optical | CD/DVD/Blu-ray | No | Slow | Low | Medium |

## The memory hierarchy

```text
Registers  <  L1 cache  <  L2 cache  <  L3 cache  <  RAM  <  SSD  <  HDD  <  Network
(few KB)   (tens KB)    (hundreds)   (few MB)    (GB)   (TB)   (TB+)  (far)
(fastest,  ...                              ...                       (cheapest)
 most expensive
 per byte)
```

The golden rule: **closer to the CPU is faster and more expensive per byte**.
The system hides the slower layers through **locality** (temporal and spatial).

## RAM implementation

RAM stores data in an **addressable** array. Two main technologies:

- **SRAM (Static RAM):** stores a bit in a 6-transistor cell. Fast, no refresh,
  used for caches. More transistors = lower density, higher cost.
- **DRAM (Dynamic RAM):** stores a bit as a charge in one **capacitor** plus one
  transistor. The charge leaks, so DRAM must be **refreshed** (~every 64 ms).

### DRAM addressing (2D organization)

A DRAM chip is organized in a 2D grid of rows and columns. The CPU sends a
**row address** (stored/activated), then a **column address** to read/write a
single cell. Accessing a different row incurs **row misses**, so
**row buffers** are kept open across accesses to the same row.

```text
CPU → Memory controller → DRAM: RAS# (row), CAS# (column), WE# (write enable)
```

## Cache implementation

A cache is a small, fast memory that stores **copies** of recently used main-
memory blocks. A cache line is typically 64 bytes. Three parameters define a
cache:

- **Size** (e.g., 32 KB L1).
- **Block/line size** (e.g., 64 B).
- **Associativity** (direct-mapped, set-associative, or fully associative).

### Cache hit and miss

- **Hit:** the requested block is in cache — return it quickly.
- **Miss:** the block is not in cache — fetch the whole line from the next level.

Miss types (the "Cache Miss-Hit" topics):

| Miss type | Cause |
|---|---|
| Compulsory (cold) | First access to a block, never loaded |
| Capacity | Set is full because working set exceeds cache size |
| Conflict | Two blocks map to the same set in a set-associative cache |
| (Hit-after-miss) | Once the line arrives, the retried access hits |

### Cache mapping

- **Direct-mapped:** each block maps to exactly one cache slot.
- **Set-associative (n-way):** each set has n slots; a block maps to a set.
- **Fully associative:** a block can go anywhere.

## Other memories

- **ROM / PROM / EPROM / EEPROM / Flash:** non-volatile memory programmed at
  various stages (factory, user, erasable by light/electricity).
- **CAM (Content-Addressable Memory):** finds data by content, not address; used
  in TLBs and IP lookup.
- **VRAM (Video RAM):** dual-ported memory for frame buffers.

## Clock cycle analysis and performance

The **clock** paces digital circuits. Two key quantities:

- **T_cycle = 1 / f_clock** (e.g., 2.5 GHz → 0.4 ns per cycle).
- **CPI = average cycles per instruction.**
- **CPU time = (Instruction count × CPI × T_cycle).**

A **single-cycle** CPU has high CPI but simple control; a **pipelined** CPU
lowers CPI by overlapping stages (Module 5). Performance is also limited by
**memory stalls** when the cache misses.

## Historical shift from CISC to RISC

- **CISC (Complex Instruction Set Computer):** many instructions, often
  variable length, some taking multiple cycles (e.g., x86). Goal: make
  assembly easier and reduce code size.
- **RISC (Reduced Instruction Set Computer):** fewer, simple, fixed-length
  instructions, mostly one cycle each, load-store discipline (e.g., ARM,
  MIPS, RISC-V). Goal: higher throughput via pipelining.

The shift (roughly 1980s onward) showed that compiler-generated pipelines of
simple instructions outperformed microcode-heavy complex ones.

## Introduction to ARM architecture

**ARM** (originally Acorn RISC Machine) is a family of RISC ISAs:

- Load-store model: arithmetic works only on registers; `LDR`/`STR` move data.
- Fixed 32-bit instructions in AArch32 (conditional execution of most ops).
- Many registers (16 general-purpose in basic ARM).
- Dominant in mobile because of low power (the "mobile revolution").

ARM vs x86 illustrates the RISC vs CISC split; Module 6 covers ISAs in depth.

## Assembly language structure, syntax, and macros

Assembly is a human-readable encoding of machine code. Structure:

```
.section .data      ; global data
.section .text      ; code
label:   instruction operands   ; optional label
```

- **Sections** separate code from data.
- **Labels** are symbolic addresses.
- **Directives** (`.data`, `.text`, `.global`) guide the assembler.
- A **macro** is a shorthand that expands to one or more instructions.

## Common mistakes

- Thinking DRAM doesn't need refresh (it does).
- Believing more cache is always better (it can increase latency).
- Confusing cache "miss" with a subsequent "hit" — a miss is resolved by a later hit.

## Memory rules

- Volatile = loses data on power loss; non-volatile = keeps it.
- SRAM: fast, 6T cell, no refresh, expensive. DRAM: 1 cap + 1 transistor, refresh.
- Cache: closer/faster/pricier; misses come in compulsory, capacity, conflict types.
- CPU time = instruction count × CPI × cycle time.
- RISC = simple instructions, high throughput; CISC = complex, lower cycles/instruction.

## Check your understanding

1. Why must DRAM be refreshed but SRAM does not?
2. What three parameters define a cache?
3. What is the difference between a cache hit and a compulsory miss?
4. Name two reasons RISC designs pipeline better than classic CISC.
5. In one line: what is a macro in assembly?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. DRAM stores a bit as charge in a capacitor that leaks; SRAM uses a stable
   flip-flop that holds its value without refresh.
2. Cache size, block (line) size, and associativity.
3. A hit means the block is already in cache; a compulsory miss is the first
   access to a block that was never loaded.
4. RISC uses fixed-length, simple, mostly single-cycle instructions with a
   load-store discipline, so pipeline stages are uniform and predictable.
5. A macro is a symbolic shorthand that the assembler expands into one or more
   real instructions.

</details>

## Quick revision box

- Memory hierarchy: registers → L1 → L2 → L3 → RAM → SSD → HDD (fast→slow, expensive→cheap).
- SRAM (6T, no refresh) for cache; DRAM (1 cap + 1 transistor, refresh) for RAM.
- Cache hit = data present; miss types: compulsory, capacity, conflict.
- CPU time = IC × CPI × cycle time.
- CISC (few complex) vs RISC (many simple, load-store).
- ARM = RISC, low power, mobile; x86 = CISC, desktop/server.

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

[← Previous: Module 3](<Module-3.md>) · [Subject index](README.md) · [Next: Module 5 →](<Module-5.md>)
