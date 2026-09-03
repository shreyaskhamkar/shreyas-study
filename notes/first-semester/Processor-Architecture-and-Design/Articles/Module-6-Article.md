# Module 6 Article: RISC vs CISC and the ISA Landscape

## The big idea

An **Instruction Set Architecture (ISA)** is the contract a processor offers:
the instructions it understands, the registers it exposes, the addressing modes,
and the memory model. Two ISAs that differ are **not** source-compatible. Two
processors sharing an ISA (say, Intel and AMD on x86) can run the same binaries
even though their insides differ.

The grand historical split is **RISC vs CISC**, and the landscape today is
ARM everywhere plus x86 in the data center.

## RISC vs CISC, principle by principle

| Design point | RISC philosophy | CISC philosophy |
|---|---|---|
| Instruction set size | Many simple ops | Fewer, complex ops |
| Instruction length | Fixed (e.g. 32-bit) | Variable length |
| Execution time | ~1 cycle each | Often several cycles |
| Memory access | Load/store only | Memory-to-memory allowed |
| Addressing modes | Few | Many |
| Microcode | Rare | Common |
| Code density | Lower | Higher |
| Pipelining | Natural (uniform) | Harder |

## A concrete RISC example: ARM

Take "compute `a + b` and store it":

```
LDR  R0, [R2]      ; load a
LDR  R1, [R3]      ; load b
ADD  R0, R0, R1    ; R0 = a + b
STR  R0, [R4]      ; store result
```

Four instructions, all fixed 32-bit, each roughly one cycle. The load/store
discipline is what makes pipelining clean.

## A concrete CISC example: x86

The "equivalent" x86 can fuse memory and operation:

```
add eax, [ebx]      ; add memory [ebx] to register eax
```

One instruction, but variable length and multiple internal steps. Internally,
modern x86 **decodes** this into RISC-like **micro-ops** before executing them.
So the RISC/CISC line has blurred: x86 is CISC at the ISA but RISC at the
microarchitecture.

## Popular ISAs and where they live

| ISA | Type | Where you meet it |
|---|---|---|
| x86 / x86-64 | CISC | Windows/Linux desktops, x86 servers |
| ARM / AArch64 | RISC | Phones, tablets, Apple Silicon, embedded |
| RISC-V | RISC, open | Teaching, embedded, emerging servers |
| MIPS | RISC | Legacy/networking, textbooks |
| PowerPC | RISC | Older Macs, embedded/ automotive |
| SPARC | RISC | Oracle/ Fujitsu servers |

**ARM's edge** is power efficiency (RISC + load/store + simple pipeline),
which is why it dominates mobile and is now expanding into laptops (Apple M
series) and servers (AWS Graviton).

## Performance vs cost: the memory trade-off

ISAs live inside real chips bounded by cost and power. The **ideal memory model**
pretends memory is free and infinitely fast, so `CPU_time = IC × CPI × t_cycle`.
Reality forces trade-offs:

- More/faster cache → higher hit rate but more area, power, and latency.
- Off-chip DRAM → cheap and big but slow (high miss penalty).
- The **sweet spot** minimizes AMAT while keeping die area and power in budget.

## Cache on-chip vs off-chip (where does data live)

- **On-chip:** registers, L1, L2, and usually L3 are on the same die as the
  cores — fastest, most expensive.
- **Off-chip (but on-package):** some chips stack an L4 cache on the package,
  still "off the core die" but faster than DRAM.
- **Off-package DRAM:** main memory — cheap, gigabytes, but slower than any on-
  die cache.

The CPU hides off-chip latency through prefetching, the TLB, and (in
out-of-order cores) **memory-level parallelism**: issuing several independent
loads at once so one miss doesn't block everything.

## ARM practical setup (how this is developed)

- **Toolchain:** `aarch64-none-elf-` or `arm-none-eabi-` GCC for cross-compiling.
- **Emulator:** QEMU (`qemu-system-aarch64`) to run without hardware.
- **Disassembler:** `objdump -d` to see how source becomes machine code.
- **Debugger:** `gdb` with QEMU for breakpoints and register inspection.
- **Hardware:** Raspberry Pi (ARM) or any dev board for real execution.

## Exam angle

For "compare RISC and CISC":
1. Start with the **table** (instruction count, length, memory access, pipelining).
2. Give **one concrete instruction** from each (ARM `LDR`/`ADD` vs x86 `add`).
3. Note the **modern caveat**: x86 decodes to micro-ops; the RISC philosophy now
   wins everywhere, including inside CISC CPUs.

> Tip: if asked "is the ISA the same as the microarchitecture?" — no. The ISA
> is the programmer-visible contract; the microarchitecture is the implementation.
> Intel and AMD both implement x86 with very different CPUs.
