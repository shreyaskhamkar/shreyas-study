# Processor Architecture and Design — Glossary

| Term | Meaning |
|---|---|
| ABI (Application Binary Interface) | Binary-level contract: calling convention, name mangling, layout, library format |
| Access time | Time to read or write a memory location |
| Active-low signal | A signal that is asserted when low (0) |
| ALU (Arithmetic Logic Unit) | Hardware block that performs arithmetic and logic operations |
| AMAT (Average Memory Access Time) | Hit time + miss rate × miss penalty |
| API (Application Programming Interface) | Source-level contract: functions, signatures, headers |
| Architecture (system) | Structure and organization of a computer's components |
| Assembler | Translates assembly mnemonics into machine code |
| Atomicity | An operation that completes entirely or not at all |
| Backtracking | Flushing instructions that were speculatively executed |
| Big-endian | Byte order with the most-significant byte first |
| Binary-coded decimal (BCD) | Decimal digits encoded in 4-bit binary |
| Bit | Binary digit, 0 or 1 |
| Booth's algorithm | Multiplication algorithm for signed binary numbers |
| Branch prediction | Hardware guessing the outcome of a branch to reduce control hazards |
| Bus | Shared set of wires carrying data, address, or control signals |
| Bus arbitration | Deciding which device may use a shared bus |
| Byte-addressable | Each byte has its own address |
| Cache | Small fast memory keeping copies of recently/frequently used data |
| Cache line | A unit of data transferred between cache and main memory |
| Cache coherence | Keeping multiple cached copies of the same data consistent |
| Cache hit | The requested data is found in cache |
| Cache miss | The requested data is not in cache; must be fetched |
| Capture | Saving processor state when an interrupt occurs |
| Carry flag | Processor flag set when an arithmetic result carries out of the most-significant bit |
| Chip select | Signal enabling a particular chip/device on a bus |
| Clock cycle | One period of the clock signal |
| Clock frequency | Number of cycles per second (Hz) |
| Combinational logic | Logic whose output depends only on current inputs |
| Condition code | Processor flag (Z, C, N, V) reflecting arithmetic results |
| Context switch | Saving and restoring process state to change the running task |
| Control hazard | Pipeline stall caused by not knowing the next instruction address |
| Control unit | Hardware that generates control signals sequencing CPU operations |
| Convention (calling) | Rules for passing arguments and returning values between functions |
| CPU (Central Processing Unit) | The processor that fetches, decodes, and executes instructions |
| CPI (Cycles Per Instruction) | Average clock cycles a processor needs per instruction |
| Critical path | Longest delay path that sets the clock period |
| Cross-platform | Working across different hardware/OS combinations |
| Data bus | Bus carrying actual data, usually bidirectional |
| Data hazard | Pipeline stall caused by a value not yet being available |
| Decode | Determining what operation an instruction specifies |
| Dedicated hardware illusion | The virtual machine view where each program thinks it owns the hardware |
| Delay slot | An instruction executed after a branch but before it takes effect |
| DMA (Direct Memory Access) | Hardware transfer of data between device and memory without CPU help |
| Effective address | The final memory address computed for an operand |
| Execute | Performing the operation specified by a decoded instruction |
| Exception | A synchronous interrupt usually caused by the current instruction |
| External interrupt | A hardware interrupt generated outside the CPU (e.g. by a device) |
| Fan-out | Number of inputs one output can drive |
| Fetch | Reading the next instruction from memory |
| Flip-flop | A 1-bit memory element storing its input on a clock edge |
| Floating-point unit (FPU) | ALU specialized for floating-point arithmetic |
| Global descriptor table (GDT) | x86 data structure describing segments, gates, and privilege levels |
| Hardwired control | Control unit built from fixed logic rather than microcode |
| Instruction | A single machine-code operation |
| Instruction cache | Cache storing recently fetched instructions |
| Instruction Register (IR) | Register holding the currently decoded instruction |
| Instruction Set Architecture (ISA) | The programmer-visible contract of an architecture |
| Interrupt | An asynchronous signal that pauses normal execution to handle an event |
| Interrupt acknowledge | Handshake signal/response when the CPU services an interrupt |
| Interrupt latency | Time from the interrupt request to the start of the ISR |
| Interrupt service routine (ISR) | Function executed when an interrupt is taken |
| Interrupt vector | Index or address pointing to the correct ISR |
| I/O (Input/Output) | Interface between a computer and external devices |
| Job | A program in the context of the operating system |
| Little-endian | Byte order with the least-significant byte first |
| Logic gate | Physical device implementing a Boolean function |
| Logical address | An address used by a program before translation (virtual address) |
| Machine language | Binary code directly executed by the CPU |
| Memory mapping | Assigning memory addresses to devices or files |
| Memory management unit (MMU) | Hardware translating virtual to physical addresses |
| Microcode | Low-level instructions implementing higher-level machine instructions |
| Microinstruction | A control step in a microprogrammed control unit |
| Miss penalty | Time to fetch a block from the next level on a cache miss |
| Mode bits | Processor state bits selecting user/kernel mode |
| MMU (Memory Management Unit) | See Memory management unit |
| Multiprogramming | Running multiple programs in memory to keep the CPU busy |
| Multiplexer (MUX) | A selector choosing one of several inputs onto one output |
| Native code | Machine code compiled for the local processor |
| Non-maskable interrupt (NMI) | An interrupt that cannot be disabled by software |
| Operand | A value on which an operation acts |
| Operating system (OS) | System software managing hardware and programs |
| Page | A fixed-size block of virtual/physical memory (e.g., 4 KiB) |
| Page fault | An exception when a referenced page is not in physical memory |
| Page frame | A fixed-size block of physical memory |
| Paging | Memory management scheme mapping fixed-size pages to frames |
| PCI / PCIe | Bus standards for connecting peripheral devices |
| Performance counter | Hardware register counting events like cycles or misses |
| Pipeline | Overlapping execution of instruction stages |
| Pipeline stall | Pausing the pipeline because an operand or resource is unavailable |
| Pipeline throughput | Rate at which the pipeline completes instructions |
| Prefetching | Loading data/instructions before they are needed |
| Privilege level | The CPU's permission level (e.g., ring 0 kernel, ring 3 user) |
| Processor | Synonym for CPU |
| Program counter (PC) | Register pointing to the next instruction to fetch |
| Protection ring | Hardware isolation level (0–3 on x86) controlling access to resources |
| Pseudo-ROM | RAM that behaves like ROM during boot but can be updated |
| Real address | A physical memory address |
| Register | Small fast storage inside the CPU |
| Register file | A collection of registers selectable by number |
| Relative jump | A branch whose target is offset from the current PC |
| Reset vector | Address the CPU jumps to on power-on or reset |
| RISC (Reduced Instruction Set Computer) | ISA style with few simple, fixed-size instructions |
| ROM (Read-Only Memory) | Non-volatile memory that is hard to modify |
| Rotational latency | Time waiting for the correct disk sector to rotate under the head |
| Segfault | Short for segmentation fault; an invalid memory access |
| Segmentation fault | Protection fault from accessing disallowed memory |
| Semaphore | A synchronization primitive with an integer value and queue |
| Set-associative cache | A cache where each set holds n lines; compromise between direct and full |
| Shadow register | A backup register set used on mode changes |
| Side effect | An operation that changes state beyond its return value |
| Signal | A wire that asserts to notify the processor of an event |
| Soft interrupt | An interrupt flagged in software for later, safer handling |
| Software interrupt | A trap or system call raised intentionally by a program |
| Source-synchronous | A clocking technique transferring data with a clock from the source |
| SRAM (Static RAM) | RAM that retains a bit without refresh, using a flip-flop |
| Storable | A value that can be saved and restored |
| Structural hazard | A conflict where hardware resources required by one stage are unavailable |
| System bus | The collection of buses connecting CPU, memory, and I/O |
| System call | A controlled request by a program for OS service |
| TLB (Translation Lookaside Buffer) | Hardware cache of recent virtual-to-physical address translations |
| Tick | A clock pulse |
| Timestamp counter | Register counting CPU cycles since boot |
| Timing analysis | Estimating how long operations take |
| Trap | A synchronous interrupt, e.g. a system call or exception |
| Translation lookaside buffer | See TLB |
| Two-level cache | Typical CPU cache: private L1 (+L2) per core and shared L3 |
| User mode | The restricted CPU mode where applications run |
| V (overflow flag) | Processor flag set when a signed arithmetic result overflows |
| Vector interrupt | An interrupt that supplies its own vector automatically |
| Virtual address | An address used by a program before translation to a physical address |
| Virtual memory | Memory management giving each process an address space larger than RAM |
| Wait state | Extra cycles inserted when a device is slower than the bus |
| Write buffer | A queue allowing writes to complete without stalling the CPU |
| Write-through | A cache policy updating the lower level on every write |
| Write-back | A cache policy writing the lower level only when a line is evicted |
