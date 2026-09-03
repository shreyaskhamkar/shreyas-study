# Processor Architecture and Design — Quick Revision

## Module 1: Introduction to Computing Systems

- Stored-program concept: program and data stored together in memory (EDVAC/EDSAC).
- Machine language = binary; assembly = mnemonic shorthand.
- Instruction cycle: fetch IR←MEM[PC], then decode, execute, write-back, PC←PC+4.
- Five-stage MIPS-like pipeline: IF → ID → EX → MEM → WB.
- Control unit generates control signals; hardwired (fast, fixed) vs microprogrammed (flexible).

## Module 2: Digital Electronics

- Binary place values are powers of 2; `1101₂ = 13₁₀`; group 4 bits per hexadecimal digit.
- Unsigned n-bit range: `0..2ⁿ−1`; two's-complement range: `−2ⁿ⁻¹..2ⁿ⁻¹−1`.
- Two's-complement negation = invert bits, then add 1; 8-bit signed range is `−128..127`.
- Binary addition: `1+1=10₂`; carry-out is not automatically signed overflow.
- BCD encodes each decimal digit in four bits and differs from ordinary binary.
- Combinational: output depends only on current inputs (adders, mux, decoder).
- Sequential: output depends on inputs **and** state (flip-flops, registers, counters).
- D flip-flop: on the clock edge, Q ← D; needs setup and hold times.
- NAND and NOR are universal gates.
- Finite-state machine: state + inputs → next state + output.

## Module 3: Architecture of a Computer System

- Core parts: CPU, memory, I/O, buses, chipset.
- CPU = datapath (registers, ALU, buses) + control unit.
- System bus: data (bidirectional), address (CPU→rest), control (read/write/interrupt/clock).
- Bus hierarchy: fast/inner (CPU–memory) → slow/outer (peripherals via chipset).
- Arbitration decides which device owns a shared bus.

## Module 4: Memory Systems and Hierarchy

- Hierarchy: registers → L1 → L2 → L3 → RAM → SSD → HDD (fast→slow, expensive→cheap).
- SRAM: 6T cell, no refresh, cache; DRAM: 1 cap + 1 transistor, refresh, main memory.
- Cache params: size, block/line size, associativity.
- Miss types: compulsory, capacity, conflict.
- AMAT = hit time + miss rate × miss penalty.
- CISC = complex/variable; RISC = simple/fixed/load-store.

## Module 5: Performance Optimization Techniques

- Pipeline = assembly line; ideal speedup ≈ number of stages; throughput up, single instruction time ~same.
- Hazards: structural (resource), data (value not ready), control (branch).
- Forwarding bypasses results; load-use still may stall.
- Branch prediction guesses direction/target; a miss flushes the pipeline.
- Parallelism: ILP (superscalar), TLP (threads), DLP (SIMD), task (cores).

## Module 6: Instruction Set Architecture

- ISA = contract: instructions, registers, addressing modes, memory model.
- RISC (ARM, MIPS, RISC-V) vs CISC (x86).
- ARM = RISC, load-store, low power, AArch32/AArch64, EL0/EL1.
- TLB caches translations; MESI keeps caches coherent.
- Cost/performance: more/faster memory is better but more expensive; diminishing returns.

## Module 7: Abstractions for Effective System Use

- Abstractions create the illusion of dedicated hardware per program.
- Memory illusion: per-process virtual address space via MMU + OS page tables.
- CPU illusion: multiprogramming/time-sharing via time-slicing on one core.
- I/O illusion: device drivers + "everything is a file" (`/dev/...`, `COM1`).
- Virtualization: hypervisor presents whole VMs (Type 1 bare-metal, Type 2 on OS host).
- Nested paging: guest-virtual → guest-physical → host-physical.

## Module 8: Virtual Memory Systems

- Gives each process a large private address space using disk; pages of size N.
- Page fault: page not in RAM → OS loads it (demand paging).
- Segmentation fault: bad address or protection violation (unrecoverable).
- MMU translates; TLB caches translations; page tables in memory.
- Protection bits: P (present), R/W (read/write), X (execute), U/S (user/supervisor), dirty, accessed.
- Page replacement: LRU approximated via accessed/dirty bits; copy-on-write after fork.

## Module 9: Interrupts and Exception Handling

- Exception: synchronous (instruction raises it); trap (program raises syscall); abort (fatal).
- Interrupt: asynchronous external device; maskable vs non-maskable (NMI).
- Handler flow: finish instruction → save PC/flags → kernel mode → vector → ISR → restore → return.
- System call = deliberate synchronous trap (syscall/svc/int 0x80).
- ISRs must be fast (defer with top-half/DPC), always clear the interrupt flag, avoid blocking.

## Module 10: System Interface and Execution

- API = source contract; ABI = binary contract (calling convention, struct layout, type sizes).
- System call: set args → privileged instruction (syscall/int 0x80/svc) → kernel mode → service → return.
- Protected mode: virtual addresses, privilege rings (0 = kernel, 3 = user), paging.
- Driver: kernel module owning a device; user asks via read/write/ioctl; uses interrupts/DMA.
- Boot: firmware (UEFI/BIOS) → bootloader → kernel → init (PID 1) → startup scripts (systemd/init).

## Ten memory lines

1. Stored-program computers keep code and data together.
2. Combinational depends on inputs now; sequential also on state.
3. The CPU has two halves: datapath and control unit.
4. System bus: data, address, control.
5. Memory hierarchy trades speed for size and cost.
6. Pipelines overlap instructions to raise throughput.
7. Hazards stall pipelines; forwarding and prediction reduce stalls.
8. The ISA is the contract between software and hardware.
9. Virtualization pretends each program owns the machine.
10. Virtual memory + interrupts + system calls rest on protection rings.
