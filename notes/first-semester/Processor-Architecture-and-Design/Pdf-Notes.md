# Processor Architecture and Design - PDF-Based Study Notes

These notes are a compact exam guide for the PDF material in `PdfMaterial/Processor Architecture and Design`. The source set covers nine modules:

1. Introduction to computing systems
2. Digital electronics and binary systems
3. Architecture of a computer system
4. Memory systems and hierarchy
5. Performance optimization techniques
6. Instruction Set Architecture and ARM
7. Abstractions and resource virtualization
8. Virtual memory systems
9. Interrupts, exceptions, and system calls

Use this file for revision, then open the module-wise notes if you want a fuller explanation.

## Module 1 - Introduction to Computing Systems

### Core idea

A computer follows instructions stored in memory. The major breakthrough was the stored-program concept: program instructions and data live in the same memory.

### Important points

- Early calculators were single-purpose.
- A stored-program computer can run many programs without rewiring.
- Machine language is the binary form the CPU executes directly.
- Assembly language is the human-readable mnemonic form of machine language.
- The program counter (PC) holds the address of the next instruction.
- The fetch-decode-execute cycle is the basic instruction sequence.

### Control unit

- The control unit generates control signals.
- It sequences the datapath, memory access, and register transfers.
- Hardwired control is fast but rigid.
- Microprogrammed control is flexible but usually slower.

### Exam keywords

Stored-program concept, machine language, instruction cycle, PC, control unit, hardwired control, microprogrammed control.

## Module 2 - Digital Electronics and Binary Systems

### Core idea

Digital systems represent information using binary digits and build logic from gates and storage elements.

### Important points

- Combinational logic depends only on current inputs.
- Sequential logic depends on inputs and present state.
- Logic gates commonly studied: AND, OR, NOT, NAND, NOR, XOR, XNOR.
- NAND and NOR are universal gates.
- Flip-flops store one bit of state.
- A D flip-flop captures input `D` on the clock edge.
- Setup time and hold time must be satisfied for stable operation.

### Binary systems

- Binary numbers use base 2.
- Conversion between binary, decimal, and hexadecimal is a standard exam topic.
- Binary arithmetic uses carry and borrow rules.

### Exam keywords

Truth table, gate, combinational circuit, sequential circuit, flip-flop, counter, binary conversion, setup time, hold time.

## Module 3 - Architecture of a Computer System

### Core idea

A computer system is made of the CPU, memory, input/output devices, buses, and supporting chipset or interconnect logic.

### Important points

- The CPU contains the datapath and the control unit.
- The datapath includes registers, ALU, multiplexers, and internal buses.
- The system bus is usually divided into:
  - data bus
  - address bus
  - control bus
- The data bus is bidirectional.
- The address bus usually flows from CPU to memory/I/O.
- The control bus carries read, write, interrupt, and timing signals.
- Bus arbitration decides which device controls a shared bus.
- The chipset or controller logic helps manage system communication.

### Exam keywords

Datapath, control unit, bus hierarchy, bus arbitration, chipset, address bus, data bus, control bus.

## Module 4 - Memory Systems and Hierarchy

### Core idea

Memory is organized in a hierarchy so the system gets the best balance of speed, cost, and capacity.

### Important points

- Fast memories are small and expensive.
- Slow memories are large and cheap.
- Typical hierarchy: registers -> cache -> main memory -> secondary storage.
- SRAM is faster and more expensive.
- DRAM is denser, cheaper, and needs refresh.
- Cache stores frequently used data to reduce average access time.

### Cache basics

- Cache hit: data is found in cache.
- Cache miss: data must be fetched from lower memory.
- Miss types:
  - compulsory miss
  - capacity miss
  - conflict miss
- AMAT formula:

```text
AMAT = Hit time + Miss rate x Miss penalty
```

### ISA and design trade-off

- RISC uses simple, fixed-format instructions and a load-store style.
- CISC uses richer, often variable-length instructions.
- RISC usually aims for simpler hardware and easier pipelining.
- CISC usually aims for compact code and more complex instructions.

### Exam keywords

Memory hierarchy, SRAM, DRAM, cache hit, cache miss, AMAT, RISC, CISC.

## Module 5 - Performance Optimization Techniques

### Core idea

Performance can be improved by overlapping work, reducing stalls, and using parallelism.

### Important points

- Pipelining is like an assembly line.
- Classic stages: IF, ID, EX, MEM, WB.
- Ideal pipeline speedup is limited by hazards and stalls.
- Hazard types:
  - structural hazard
  - data hazard
  - control hazard
- Forwarding reduces some data stalls.
- Branch prediction tries to guess the next control path.
- Parallelism can be:
  - instruction-level parallelism
  - thread-level parallelism
  - data-level parallelism
  - task-level parallelism

### Exam keywords

Pipeline, hazard, forwarding, stall, flush, branch prediction, speedup, throughput, parallelism.

## Module 6 - Instruction Set Architecture and ARM

### Core idea

The ISA is the contract between software and hardware. It defines what instructions exist and how software sees the processor.

### Important points

- ISA includes instructions, registers, addressing modes, and memory model.
- Microarchitecture is the physical implementation of an ISA.
- Popular ISAs: x86, ARM, RISC-V, MIPS.
- ARM is a RISC architecture.
- ARM design goals include low power, efficiency, and clean load-store operation.
- RISC systems usually have fixed-length instructions and simpler decoding.
- CISC systems usually have more complex instruction formats and richer addressing modes.

### Exam keywords

ISA, microarchitecture, addressing mode, load-store, ARM, RISC, CISC, instruction encoding.

## Module 7 - Abstractions and Resource Virtualization

### Core idea

Operating systems hide shared hardware behind abstractions so each process
appears to have its own CPU, memory, files, and devices.

### Important points

- Time-sharing gives each process a CPU time slice and creates the illusion of continuous execution.
- Multiprogramming keeps the CPU busy by switching to another ready job during I/O waits.
- Virtual memory gives each process an isolated virtual address space.
- Device drivers, queues, and file interfaces create the dedicated-I/O illusion.
- A Type 1 hypervisor runs directly on hardware; a Type 2 hypervisor runs on a host OS.
- Virtual machines virtualize CPU, memory, and I/O, but translation and isolation add overhead.

### Exam keywords![]

Abstraction, process, multiprogramming, time sharing, virtualization, hypervisor,
Type 1, Type 2, resource multiplexing, isolation.

## Module 8 - Virtual Memory Systems

### Core idea

Virtual memory maps a process's virtual pages to physical frames and uses disk
storage for pages that are not currently in RAM.

### Important points

- The MMU translates virtual addresses into physical addresses.
- A virtual address is divided into a virtual page number and page offset.
- The offset remains unchanged during page translation.
- A page table stores virtual-page to physical-frame mappings and protection bits.
- The TLB caches recently used translations.
- A page fault occurs when a required page is absent or access violates protection.
- Demand paging loads a page only when it is first used.
- Copy-on-write shares pages until a process writes to one.
- Common bits include present, read/write/execute, user/supervisor, dirty, and accessed.

### Exam keywords

Virtual address, physical address, page, frame, MMU, page table, TLB, page fault,
demand paging, page replacement, copy-on-write, protection.

## Module 9 - Interrupts, Exceptions, and System Calls

### Core idea

The processor handles unexpected events and protected services by saving its
state, transferring control to a handler, and later resuming execution.

### Important points

- An exception is synchronous and is caused by the current instruction.
- A hardware interrupt is asynchronous and is raised by an external device or timer.
- A trap is a deliberate synchronous software event, commonly used for a system call.
- A fault may be recoverable and restart the instruction; an abort is generally fatal.
- User mode has restricted privileges; kernel mode can access protected resources.
- An interrupt vector maps an event number to its handler address.
- An ISR should save state, identify the source, serve it quickly, clear the source, restore state, and return.
- Nested and prioritized interrupts require careful masking and state management.
- A system call transfers controlled execution from user mode to kernel mode through a trap.

### Exam keywords

Interrupt, exception, trap, fault, abort, IRQ, NMI, ISR, interrupt vector,
user mode, kernel mode, privilege, system call.

## High-yield formulas and rules

- `AMAT = Hit time + Miss rate x Miss penalty`
- Binary is base 2.
- A D flip-flop stores the value present at `D` on the active clock edge.
- The PC points to the next instruction.
- The data bus is bidirectional.
- The control unit controls, the ALU computes, registers store.

## One-page revision map

1. Module 1: how a computer executes instructions.
2. Module 2: how digital logic and binary storage work.
3. Module 3: how the CPU, buses, and I/O connect.
4. Module 4: how memory is organized and optimized.
5. Module 5: how performance is improved by pipelining and parallelism.
6. Module 6: how the instruction set defines the CPU interface.
7. Module 7: how the operating system virtualizes shared resources.
8. Module 8: how virtual addresses are translated and protected.
9. Module 9: how processors respond to events and protected requests.

## What to practice

- Draw the fetch-decode-execute cycle.
- Draw and label the system bus.
- Compare SRAM and DRAM.
- Solve one AMAT problem.
- Explain one pipeline hazard with an example.
- Distinguish ISA from microarchitecture.
- Compare multiprogramming with virtualization.
- Trace a page-table/TLB translation and page-fault response.
- Distinguish interrupts, exceptions, traps, faults, and aborts.
