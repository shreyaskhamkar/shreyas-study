# Processor Architecture and Design: One-Day Study Guide

Use this file for one-day exam preparation. Do not read the deep-dive articles today. Study a section, close the file, and reproduce the key idea from memory.

## One-day timetable

| Time | Work |
|---|---|
| 45 min | Read the exam pattern and the high-yield revision below |
| 90 min | Modules 1-3: computer basics, logic, CPU and buses |
| 90 min | Modules 4-6: memory, cache, pipelining and ISA |
| 90 min | Modules 7-10: virtualization, virtual memory, interrupts and system interface |
| 60 min | Write answers to the important questions without looking |
| 45 min | Attempt the three practice tests, focusing on wrong answers |
| 30 min | Memorize formulas, sequences and definitions |
| 20 min | Final recall: draw the five essential diagrams from memory |

Take a 10-minute break after each 50 minutes. If you have less time, study Modules 4, 5, 8, 9 and 10 first.

## Exam strategy

- Answer objective questions quickly and mark uncertain ones for review.
- For descriptive answers, use: definition -> working/steps -> diagram or example -> advantages/limitations.
- Always distinguish similar terms: ISA/microarchitecture, cache/TLB, interrupt/exception, API/ABI, page fault/segmentation fault.
- Draw labelled diagrams. A simple correct diagram earns more than a long unclear paragraph.

## Module 1: Introduction to computing systems

### Essential ideas

- Stored-program concept: instructions and data are stored in memory, so the same computer can run different programs.
- Machine language is binary instructions executed directly by the processor. Assembly language uses mnemonics and is translated by an assembler.
- PC (program counter) stores the address of the next instruction.
- IR (instruction register) stores the currently fetched instruction.
- MAR stores a memory address; MDR stores data being transferred to or from memory.
- The control unit generates signals that coordinate the datapath.
- Hardwired control is fast but difficult to change. Microprogrammed control is flexible but generally slower.

### Instruction cycle

```text
PC -> MAR -> memory read -> IR
PC = PC + 4
Decode opcode and read registers
Execute in the ALU
Access memory if required
Write result back
```

Pipeline version:

```text
IF -> ID -> EX -> MEM -> WB
Fetch  Decode  Execute  Memory  Write-back
```

## Module 2: Digital electronics

- Combinational logic: output depends only on current inputs. Examples: adders, multiplexers and decoders.
- Sequential logic: output depends on current inputs and previous state. Examples: registers, counters and flip-flops.
- A D flip-flop copies D to Q on the active clock edge. Setup and hold times ensure reliable operation.
- NAND and NOR are universal gates because any logic circuit can be built from either one.
- A multiplexer selects one input from many. A decoder activates one output based on a binary input.
- A finite-state machine has a current state, inputs, next-state logic and outputs.

### 2-bit counter

```text
Present state   Next state
00              01
01              10
10              11
11              00
```

For D flip-flops:

```text
D0 = NOT Q0
D1 = Q1 XOR Q0
```

## Module 3: Computer architecture and buses

The five main components are CPU, main memory, input, output and interconnection/bus system.

- CPU = datapath + control unit.
- Datapath contains registers, ALU, buses and multiplexers.
- The ALU performs arithmetic and logical operations.
- Data bus carries data and is usually bidirectional.
- Address bus carries addresses, usually from CPU to memory or I/O.
- Control bus carries read, write, clock and interrupt signals; some signals are bidirectional.
- Bus arbitration decides which device may use a shared bus.

```text
             +------------------+
             |       CPU        |
             | datapath/control |
             +---+----------+---+
                 |          |
       address --+          +-- control
                 |
            bidirectional data
                 |
          +------+------+
          | memory/I/O  |
          +-------------+
```

## Module 4: Memory systems and cache

### Memory hierarchy

```text
Registers -> L1 -> L2 -> L3 -> RAM -> SSD -> HDD
fast/small/expensive                 slow/large/cheap
```

- SRAM uses flip-flop-like cells, does not need refresh, and is used for cache.
- DRAM uses a capacitor and transistor, needs periodic refresh, and is used for main memory.
- A cache hit means the requested block is found in cache. A cache miss means it must be fetched from a lower level.
- Compulsory miss: first access to a block.
- Capacity miss: cache is too small.
- Conflict miss: blocks compete for the same cache location.
- Direct-mapped cache: one possible location; fast but more conflict misses.
- Fully associative cache: any location; fewer conflict misses but expensive hardware.
- Set-associative cache: compromise using multiple locations per set.

### Formula

```text
AMAT = hit time + (miss rate x miss penalty)
```

Example: hit time = 1 ns, miss rate = 5%, miss penalty = 20 ns.

```text
AMAT = 1 + (0.05 x 20) = 2 ns
```

Write policies:

- Write-through updates cache and memory immediately.
- Write-back updates memory when the block is evicted.
- Write-allocate loads a missing block into cache before writing.

## Module 5: Pipelining and performance

Pipelining overlaps different instructions in different stages. It improves throughput, not necessarily the time of one instruction.

```text
Cycle       1    2    3    4    5
Instruction 1  IF   ID   EX  MEM   WB
Instruction 2       IF   ID   EX  MEM
Instruction 3            IF   ID   EX
```

### Hazards

- Structural hazard: two operations need the same hardware resource.
- Data hazard: an instruction needs a result that is not ready.
- Control hazard: a branch changes which instruction should be fetched.
- Forwarding/bypassing sends a result directly to a later stage.
- A load-use hazard may still require a stall.
- Branch prediction guesses the branch direction. A wrong guess flushes incorrect instructions.
- Ideal speedup is approximately the number of pipeline stages, but stalls, flushes and resource conflicts reduce real speedup.

### Parallelism

- ILP: instruction-level parallelism, such as superscalar execution.
- TLP: thread-level parallelism.
- DLP: data-level parallelism, such as SIMD.
- Multicore parallelism: separate cores execute tasks concurrently.

## Module 6: Instruction Set Architecture

- ISA is the software-visible contract: instructions, registers, data types, addressing modes and memory rules.
- Microarchitecture is the internal implementation of an ISA: pipeline, cache, control logic and execution units.
- RISC generally uses simple, fixed-length, load-store instructions and is easy to pipeline.
- CISC generally uses complex, variable-length instructions and many addressing modes.
- ARM/AArch64, MIPS and RISC-V are RISC-style ISAs. x86/x86-64 is CISC-style.
- In a load-store ISA, only load and store instructions access memory; arithmetic uses registers.
- MESI cache states are Modified, Exclusive, Shared and Invalid.

## Module 7: Abstraction and virtualization

Operating systems create the illusion that every program has its own CPU, memory and devices.

- CPU illusion: time-sharing gives each process a time slice.
- Memory illusion: each process receives a private virtual address space.
- I/O illusion: device drivers provide a standard interface to different hardware.
- Type 1 hypervisor runs directly on hardware.
- Type 2 hypervisor runs on top of a host operating system.
- Virtual machines require an additional translation layer: guest virtual -> guest physical -> host physical.
- Benefits include isolation, portability, snapshots, consolidation and controlled resource allocation.

## Module 8: Virtual memory

Virtual memory gives each process a private address space that may be larger than physical RAM.

```text
Virtual address:  [ virtual page number ][ offset ]
                         | page table/TLB
Physical address: [ physical frame number ][ offset ]
```

- The page offset does not change during translation.
- The MMU performs address translation.
- The TLB is a fast cache of recent virtual-page-to-physical-frame translations.
- A page table stores translations for a process.
- A page fault occurs when the required page is not currently in RAM.
- Page-fault sequence: detect missing page -> choose frame -> load page from storage -> update page table/TLB -> restart instruction.
- A page fault is often recoverable; a segmentation fault usually means an invalid address or protection violation.
- Important page-table bits: present, read/write, execute, user/supervisor, dirty and accessed.
- Virtual memory provides process isolation, demand paging, controlled sharing and copy-on-write.

### 5-mark answer structure

Write: definition, virtual page/frame split, MMU, TLB hit and miss, page-table lookup, page fault handling, protection bits, benefits and cost. Include the address-translation diagram above.

### TLB formula

```text
Average extra TLB cost = TLB hit time + (TLB miss rate x page-walk cost)
```

For 98% hit rate, 1 ns hit time and 10 ns page walk:

```text
1 + (0.02 x 10) = 1.2 ns extra on average
```

## Module 9: Interrupts and exceptions

- Exception: synchronous event caused by the current instruction, such as divide-by-zero.
- Interrupt: asynchronous event from hardware, such as a keyboard or timer.
- Trap: deliberate synchronous transfer to the operating system, commonly for a system call.
- Fault: potentially recoverable exception; the instruction can be restarted.
- Abort: serious, usually unrecoverable error.
- IRQ is generally maskable. NMI is non-maskable and reserved for urgent hardware events.
- An interrupt vector identifies the correct handler.

### Interrupt lifecycle

```text
Device raises IRQ
-> finish/currently save execution state
-> save PC and flags
-> switch to kernel mode
-> identify source and read vector
-> run ISR and clear device interrupt
-> restore PC and flags
-> return to the interrupted program
```

ISRs should be short, should not block, and should defer lengthy work.

## Module 10: System interface and boot

- API is a source-level contract used by programmers.
- ABI is a binary-level contract: calling convention, register usage, type sizes, alignment, struct layout and binary format.
- An API can change internally without breaking ABI if the binary calling convention remains compatible.
- A system call is a controlled entry from user mode to kernel mode.

```text
Set system-call number and arguments
-> execute syscall/trap instruction
-> CPU switches to kernel mode
-> kernel validates arguments and performs service
-> result returned to user mode
```

- User mode cannot execute privileged I/O directly.
- x86 commonly uses ring 0 for kernel and ring 3 for user programs.
- ARM commonly uses EL1 for the kernel and EL0 for applications.
- A driver is kernel software that controls a hardware device.
- Boot sequence: BIOS/UEFI -> bootloader -> kernel/initrd -> init or systemd (PID 1) -> startup services.

## Must-memorize definitions

| Term | Meaning |
|---|---|
| PC | Address of the next instruction |
| IR | Current instruction |
| ALU | Arithmetic and logic operations |
| ISA | Software-visible hardware contract |
| MMU | Translates virtual to physical addresses |
| TLB | Cache of address translations |
| Cache | Fast copy of frequently used memory blocks |
| ISR | Interrupt service routine |
| API | Source-level interface |
| ABI | Binary-level interface |
| Page fault | Required page is absent from RAM |
| Bus arbitration | Choosing which device gets a shared bus |

## Likely objective answers

- Next-instruction register: PC.
- Virtual-address translator: MMU.
- Fastest memory: registers.
- Asynchronous event: hardware interrupt.
- Datapath parts: ALU, registers, multiplexers.
- Cache miss types: compulsory, capacity, conflict.
- Virtual-memory benefits: isolation, shared mapping and programs larger than RAM.
- RISC characteristics: simple instructions, load-store design and often fixed-length instructions.
- Data bus: bidirectional.
- DRAM: requires refresh.
- TLB: does not store complete instructions; it stores translations.
- System call: commonly a software trap into kernel mode.
- Instruction order: Fetch -> Decode -> Execute -> Write-back.
- Page-fault order: Detect -> Load -> Update -> Restart.
- ISR order: Save -> Identify/acknowledge -> Dispatch -> Restore.

## Important long-answer questions

Practice these without looking at the notes:

1. Explain one instruction from fetch through write-back and describe the control unit.
2. Design a 2-bit binary counter using D flip-flops.
3. Compare direct-mapped, set-associative and fully associative caches.
4. Explain pipelining, hazards and why real speedup is less than ideal.
5. Compare RISC and CISC.
6. Explain how virtualization creates the illusion of dedicated hardware.
7. Explain virtual memory and address translation.
8. Describe the complete hardware-interrupt lifecycle.
9. Differentiate API and ABI and explain binary compatibility.

## Final self-test

Before the exam, answer these from memory:

- Draw the fetch-decode-execute cycle.
- Draw the five pipeline stages.
- Write the AMAT formula and solve one example.
- Draw virtual-to-physical address translation.
- Explain a page fault in four steps.
- Classify divide-by-zero, keyboard input and system call.
- Explain RISC versus CISC in four points.
- Write the boot sequence.
- State the difference between ISA and microarchitecture.
- State the difference between API and ABI.

If you can answer these and reproduce the diagrams, revise your marked mistakes once and stop studying. Do not begin new articles at the last minute.
