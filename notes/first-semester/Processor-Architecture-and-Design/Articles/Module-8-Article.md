# Module 8 Article: Virtual Memory Under the Hood

## The big idea

Virtual memory makes every program believe it has a **big, private, contiguous
memory**, even when physical RAM is small or shared. It does this by giving each
process a **virtual address space** and translating addresses on the fly, using
the disk as overflow when RAM fills up.

## Paging: chopping memory into pages

Physical RAM and each process's virtual space are both divided into equal-sized
**pages** (commonly 4 KiB). A 32-bit address splits as:

```
Bits 31..12 : Virtual Page Number (VPN)   20 bits → 1,048,576 pages
Bits 11..0  : Page offset                  12 bits → 4096 bytes
```

The **page offset never changes** during translation; only the page number is
mapped. The OS keeps a **page table** per process: VPN → PFN (Physical Frame
Number) plus permission/flag bits.

## Page fault: the slow path that loads a page

1. Program accesses virtual page `V`; the page table says "not present."
2. The MMU raises a **page fault** exception.
3. The OS handler:
   - Finds a free physical frame (or evicts a victim, writing it back if dirty).
   - Schedules a disk read to load the page.
   - Updates the page table: `V → frame`.
   - Returns to the faulting instruction.
4. The instruction **restarts** and now hits in the TLB.

## Required hardware: MMU and TLB

### Memory Management Unit (MMU)

Every memory access goes through the MMU, which translates the virtual address
to a physical address. To do this translation it consults the **page table in
memory** — but that would double every memory access. So:

### Translation Lookaside Buffer (TLB)

A small, fully-associative **cache of recent translations** sits next to the
MMU. On a virtual address:

- **TLB hit (≈ 1–2 cycles):** translation is immediate.
- **TLB miss:** the MMU walks the page-table tree in memory (multiple accesses),
  then caches the result in the TLB.

The TLB is the reason "thrashing" the page tables makes a program very slow.

### Protection bits per page table entry

| Bit | Name | Meaning |
|---|---|---|
| P | Present | Page is in RAM (1) or on disk (0) |
| R/W | Read/Write | Read-only page vs writable |
| X | Execute-Disable | No instruction fetch from this page |
| U/S | User/Supervisor | User mode can (1) or cannot (0) access |
| D | Dirty | Page has been written (write it back when evicted) |
| A | Accessed | Page has been read/written (used for replacement) |

## Demand paging and replacement

- **Demand paging:** load a page **only when first accessed**, not in advance.
  This is why a program can be larger than physical memory.
- **Replacement:** when RAM is full, evict a victim frame. The classic goal is
  **LRU (Least Recently Used)**; true LRU is expensive, so the OS approximates
  it using the **accessed** and **dirty** bits (the clock/second-chance
  algorithm).
- **Copy-on-write (COW):** after `fork()`, parent and child share the same
  physical pages, mapped read-only. Only when one side writes does the kernel
  copy the page. This makes `fork`+`exec` cheap.

## Shared memory and memory-mapped files

- **Shared memory:** map the **same physical frame** into two processes' address
  spaces (e.g., `shmget`/`mmap(MAP_SHARED)`). Fast IPC, but needs explicit
  synchronization (mutexes/semaphores).
- **Memory-mapped files:** map a file (or device) into the address space so reading
  memory touches the file's backing pages, loaded on demand. The file is not a
  special case of I/O — it looks like ordinary memory.

## Worked example: a page-table walk

Process accesses virtual `0x00403004`. VPN = `0x00403`, offset = `0x004`.

- The hardware/page-table walker follows the page table (or, on x86-64, a 4-level
  tree: PML4 → PDPT → PD → PT).
- It finds `VPN 0x00403 → PFN 0x1A200`, with bits `P=1, R/W=1, U/S=1, D=0, A=1`.
- Physical address = `(0x1A200 << 12) | 0x004 = 0x1A200004`.
- The translation is cached in the TLB for the next access.

## Exam angle

For a virtual-memory question:

1. Define **virtual address space** and why the offset is preserved.
2. Describe the **page fault** flow: fault → OS selects a victim → swap in →
   update page table → restart.
3. Explain the **TLB** and why it's needed (avoiding a page-table walk per access).
4. State the meaning of at least three page-table bits (P, R/W, U/S, D, A).
5. Mention **copy-on-write** as a use of these bits after `fork`.

> Tip: distinguish a **page fault** (recoverable, demand paging) from a
> **segmentation fault** (unrecoverable, bad address/violation). Both go through
> the same exception hardware, but the OS resolves one and kills the program on
> the other.
