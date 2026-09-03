# Processor Architecture and Design — Important Questions

Use the answer points to check your response after attempting each question.

## Module 1

### Short answers

1. Explain the stored-program concept and why it was a turning point in computing history.
2. What is the difference between machine language and assembly language?
3. List and explain the stages of the fetch-decode-execute cycle.
4. What is the role of the program counter?
5. Distinguish between hardwired control and microprogrammed control.

### Long answer

**Describe how a computer executes a single instruction, from fetch to write-back, and explain the role of the control unit.**

Answer points: PC→MAR; read MEM[PC]→IR; PC←PC+4; decode opcode and read register operands; ALU performs operation; (optional) memory access; write-back to destination register; the control unit generates the sequence of control signals (RegDst, ALUSrc, MemRead, MemWrite, RegWrite, MemtoReg) that steer the datapath at each step.

## Module 2

### Short answers

1. Differentiate combinational and sequential logic with examples.
2. Draw the symbols and truth tables for NAND and XOR gates.
3. Explain the operation of a D flip-flop. Why are setup and hold times important?
4. What does it mean that NAND and NOR are universal gates?
5. Draw a state transition diagram for a 2-bit binary counter.

### Long answer

**Design the logic for a 2-bit binary counter using D flip-flops, showing the next-state equations and a state table.**

Answer points: states 00,01,10,11; D0 = Q0' (toggle); D1 = Q1⊕Q0; table mapping present→next; note rising-clock edge triggers state change.

## Module 3

### Short answers

1. List the five core components of a computer system.
2. What are the three kinds of buses, and which is bidirectional?
3. Explain the role of the chipset.
4. Distinguish the datapath from the control unit.
5. What is bus arbitration?

### Problem

Draw the system bus and label the data bus, address bus, and control bus. For each, state the main direction of data flow.

Answer: data bus bidirectional; address bus CPU→memory/IO; control bus mostly CPU→others (read, write, clock, interrupt) with some bidirectional lines (interrupt requests, acknowledge).

## Module 4

### Short answers

1. Arrange the memory hierarchy from fastest/smallest to slowest/largest.
2. Compare SRAM and DRAM on cell structure, refresh, speed, and cost.
3. Define cache hit, cache miss, and the three main miss types.
4. State the AMAT formula and what each term means.
5. Summarize the RISC vs CISC design philosophy.

### Long answer

**Compare direct-mapped, set-associative, and fully associative caches, including advantages and disadvantages of each.**

Answer points: direct-mapped—1 place per block, fast but high conflict misses; fully associative—any slot, low conflict but expensive/slow; set-associative—compromise (n-way), balanced cost/conflict.

## Module 5

### Short answers

1. In the assembly-line analogy, what corresponds to "stages"?
2. Give one example each of structural, data, and control hazards.
3. What is forwarding/bypassing, and when is it insufficient?
4. Explain 2-bit saturating branch prediction.
5. Name four kinds of parallelism beyond a single in-order pipeline.

### Long answer

**Explain how pipelining works and why, despite its benefits, it does not achieve the ideal speedup in practice.**

Answer points: overlap IF/ID/EX/MEM/WB stages so ~1 instruction completes per cycle ideally; ideal speedup ≈ number of stages; in practice hazards (stalls, flushes) and resource conflicts reduce CPI below ideal.

## Module 6

### Short answers

1. Define Instruction Set Architecture and contrast it with microarchitecture.
2. List four RISC and two CISC characteristics.
3. Name five popular ISAs and a typical use case for each.
4. Describe the key features of the ARM architecture.
5. What is the AMAT formula, and how does halving the miss rate change it?

### Problem

A cache has a 1 ns hit time and a 20 ns miss penalty. If the miss rate is 5%, what is the AMAT? If the miss rate drops to 2.5%, what is the new AMAT?

Answer: AMAT = 1 + 0.05×20 = 2 ns; new = 1 + 0.025×20 = 1.5 ns.

## Module 7

### Short answers

1. What illusion does time-sharing create for programs?
2. How is the per-program memory illusion implemented?
3. Distinguish a Type 1 and a Type 2 hypervisor.
4. What extra translation layer does virtualized memory require?
5. Give two benefits of virtualization beyond running multiple OSes.

### Long answer

**Explain how virtual memory, multitasking, and device virtualization together create the illusion that each program has dedicated hardware.**

Answer points: per-process virtual address spaces + MMU give private memory; time-slicing gives CPU share; driver/file abstraction gives dedicated devices; protection rings isolate; virtualization adds nested paging for whole-VM isolation.

## Module 8

### Short answers

1. What is a virtual address space, and how big is it for a 32-bit program?
2. Explain paging with a virtual address bit split.
3. What hardware components are essential for virtual memory?
4. What is a page fault, and how does the OS handle it?
5. State the meaning of the P, R/W, and U/S page-table bits.

### Problem

If the TLB hit rate is 98%, TLB hit time is 1 ns, and a page-table walk costs 10 ns, compute the effective TLB-miss-stalled memory access time.

Answer: 1 + 0.02×10 = 1.2 ns extra on average (AMAT ≈ base + 1.2 ns stall).

## Module 9

### Short answers

1. Classify each as exception, interrupt, or trap: divide-by-zero, keypress, syscall.
2. What is the difference between a fault and an abort?
3. Why switch to kernel mode before running an ISR?
4. What is a non-maskable interrupt, and when is it used?
5. What is an interrupt vector?

### Long answer

**Outline the complete lifecycle of a hardware interrupt, from device raise to program resumption, including state saved and modes switched.**

Answer points: device raises IRQ → finish current instruction → save PC/flags → load kernel stack pointer and switch to supervisor mode → read interrupt vector/cause → jump to ISR → clear device interrupt flag → possibly schedule → restore saved PC/flags → return to user mode and resume.

## Module 10

### Short answers

1. Give one example of an API change that does not break the ABI, and one that does.
2. How does a system call enter the kernel at the hardware level?
3. What are the four stages of the PC boot sequence?
4. Why must drivers run in kernel mode?
5. What problem does symbol versioning solve?

### Long answer

**Explain the difference between API and ABI, and describe how a shared library can evolve while preserving binary compatibility with existing programs.**

Answer points: API = source-level contract (names, signatures); ABI = binary contract (calling convention, struct layout, type sizes, name mangling, library format). Compatibility preserved via symbol versioning, deprecation without removal, and accessors instead of direct struct field access.

## Full-syllabus questions

1. Starting from a simple stored-program machine, trace one instruction through fetch-decode-execute, then extend the design step by step to a pipelined processor, identifying the hazards you introduce and how you resolve them.
2. Compare and contrast the memory hierarchy, virtual memory, and the ISA. How do RISC and CISC influence each?
3. Explain how protection rings, virtual memory, and system calls cooperate to give each process the illusion of dedicated hardware.
4. A system has a 2 GHz clock, a single-cycle CPU with CPI = 1, and an AMAT of 2 ns with 5% miss rate and 20 ns miss penalty. Estimate CPU time for 10^9 instructions and discuss how adding a second pipeline would change it.
