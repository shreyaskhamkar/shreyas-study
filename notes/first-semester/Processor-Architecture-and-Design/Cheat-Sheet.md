# Processor Architecture and Design — Cheat Sheet

## Machine model: MiniCPU

- 32-bit, load-store RISC, 16 registers R0–R15 (R0 = constant 0), little-endian.
- Instructions: LDR, STR, ADD, SUB, MUL, BEQ, JMP, MOV, HLT.
- Flags: Z, C, N, V. PC increments by 4.

## Instruction cycle (single-cycle view)

```text
PC → MAR; read MEM[PC] → IR; PC ← PC+4
Decode opcode, read register file
ALU computes result
(optionally) write MEM or write register file
```

## Pipeline stages

```
IF  Fetch instruction (IR ← MEM[PC])
ID  Decode + read registers
EX  ALU operation
MEM Access data memory
WB  Write result to register
```

```text
Ideal CPI = 1 instruction/cycle (full pipeline)
Non-pipelined CPI ≈ #stages per instruction
```

## Hazards

```text
Structural  = hardware resource conflict       → add resource or stall
Data        = operand not ready                → forwarding or stall
Control     = branch target unknown            → predict or delay branch
```

```text
Load-use stall (no forwarding for load→use):
  LW R1,... ; ADD R2,R1,R3   → 1 stall cycle
```

## Branch prediction

- Static: always not-taken, or backward=taen.
- 2-bit saturating counter: strongly/weakly taken/not-taken.
- Misprediction cost = flush pipeline (≈ #stages cycles lost).

## AMAT

```text
Average Memory Access Time = Hit Time + Miss Rate × Miss Penalty

TLB-miss AMAT = t_hit + (1 - TLB_hit_rate) × t_page_walk
```

## Cache

```text
Cache params: size, block size, associativity
Miss types: compulsory, capacity, conflict
Write policies: write-through vs write-back; write-allocate vs no-write-allocate
Set index = (block_number mod number_of_sets); tag = block_number / sets
MESI: Modified, Exclusive, Shared, Invalid
```

## Memory hierarchy (per-byte cost, latency)

```
Registers < L1 < L2 (< L3) < RAM < SSD < HDD < tape/network
```

## Addressing & translation

```text
Virtual address:  [ VPN ][ offset ]
Physical addr:    [ PFN ][ offset ]
Translation:      page table (per process), base register → PT in memory
MMU does it per access; TLB caches recent VPN→PFN
Protection bits per PTE: P, R/W, X, U/S, dirty, accessed
```

## RISC vs CISC

```text
RISC: load-store, fixed/simple, ~1 CPI, easy pipelining, more instructions
CISC: memory-to-memory, variable, complex, microcode, fewer instructions
```

| ISA | Type | Notes |
|---|---|---|
| x86 / x86-64 | CISC | Desktop/server |
| ARM/AArch64 | RISC | Mobile → server |
| RISC-V | RISC | Open/standard |
| MIPS | RISC | Teaching |

## Exceptions, interrupts, traps

```text
Exception (synchronous)  → fault/recoverable, or abort/fatal
Interrupt  (asynchronous)  → maskable IRQ / non-maskable NMI
Trap       (syscall)       → deliberate, into kernel
Flow: finish instr → save PC/flags → kernel mode → vector → ISR → restore
```

## Protection rings

```text
x86: ring 0 (kernel) → ring 3 (user). Only ring 0 executes privileged I/O.
ARM: EL1 (kernel) / EL0 (user).
```

## System call (x86-64)

```text
mov rax, <number>   ; syscall number
mov rdi, <arg1>     ; args in rdi, rsi, rdx, r10, r8, r9
syscall             ; enter kernel; result in rax; ret with sysret
```

## Boot

```text
BIOS/UEFI → bootloader (GRUB/systemd-boot) → kernel + initrd → /sbin/init (PID 1) → systemd targets
```

## Virtual memory notes

```text
Page size typical: 4 KiB. Page table per process.
Demand paging: load on first touch.
Copy-on-write: share after fork, copy on write.
Replacement: LRU approximated via accessed/dirty bits.
```
