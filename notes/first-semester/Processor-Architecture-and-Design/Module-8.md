# Module 8: Virtual Memory Systems

[← Previous: Module 7](<Module-7.md>) · [Subject index](README.md) · [Next: Module 9 →](<Module-9.md>)

## Learning outcomes

After this module, you should be able to:

- explain the concept and implementation of virtual memory;
- describe the required hardware support (MMU, page tables, TLB);
- explain the operating system's role and the value of memory abstraction.


## Prerequisites

Complete [Module 7](Module-7.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Concept and implementation | 10-15 minutes |
| 3 | Required hardware support | 10-15 minutes |
| 4 | Operating system role in memory abstraction | 10-15 minutes |


## Start here: the simple idea

**Virtual memory** gives programs each a large, private, contiguous-looking
address space that is **bigger** than physical RAM by using the disk as an
extension. The processor and OS cooperate to translate **virtual addresses**
used by a program into **physical addresses** where data really lives.

### Everyday analogy

Your computer's RAM is like a small desk you're actively working at. Virtual
memory is like having a giant filing cabinet (the disk) plus an assistant (the
MMU/OS) who fetches the file folders you ask for onto the desk, and stores
others away when the desk gets full. To you, it feels as if the whole cabinet is
on the desk.

## Concept and implementation

### Virtual address space vs physical memory

- A program uses **virtual addresses** (e.g., 32-bit → 4 GiB addressable range).
- Physical RAM is usually smaller than the *total* virtual space of all
  running programs, and a program may use more than physical RAM.
- The OS divides both virtual and physical memory into equal-size **pages**
  (commonly 4 KiB).

### Paging

The OS keeps a **page table** per process: virtual page number → physical frame
number, plus status bits. If a virtual page's physical frame holds another
process's data, its entry says "not present."

```text
Virtual address:  [ VPN ][ offset ]   (page offset, same in phys addr)
                  20 bits  12 bits    (4 KiB pages, 32-bit address)
Physical address: [ PFN ][ offset ]
```

### The page-fault life cycle

1. Program accesses virtual page `V`.
2. MMU finds `V` marked **not present** (or protected) → raises a **page fault**
   (or segmentation fault).
3. The OS stops the program, picks a victim frame, writes it back to disk if
   dirty, reads the needed page from disk into the freed frame, updates the
   page table, and resumes the program.
4. The instruction restarts and now succeeds.

## Required hardware support

Virtual memory requires hardware to translate fast:

### Memory Management Unit (MMU)

- Translates every virtual address to a physical address on the fly, in
  **every memory access**.
- Uses the page table (base register → page table in memory).

### Translation Lookaside Buffer (TLB)

- A small, fast **cache of recent page-table translations** (to avoid a memory
  access on every translation).
- On a TLB **hit**, translation is fast.
- On a TLB **miss**, the MMU walks the page table in memory, then fills the TLB.

```text
Average memory access time (with TLB):
  TLB hit time:       t + t_cache
  TLB miss time:      t + t_cache + t_mem   (page-table walk)
  AMAT ≈ t + t_cache + (1 - hit_rate)·t_mem
```

### Protection bits

Each page-table entry carries:

- **Present/Absent (P):** is the page in RAM or on disk?
- **Read/Write/Execute (R/W/X):** what accesses are allowed?
- **User/Supervisor (U/S):** can user-mode code access this page?
- **Dirty bit:** has the page been written (so it must be restored on eviction)?
- **Accessed bit:** has the page been read/written (used for replacement)?

### Address width registers

The OS must know how big a page is and where page tables live. x86 uses CR0–CR4
control registers and model-specific registers (MSRs); ARM uses `TTBR0_EL1` /
`TCR_EL1` (translation table base / control).

## Operating system role in memory abstraction

The OS owns the policy; the hardware owns the mechanism.

### OS responsibilities

- **Allocate pages** to processes and set up page tables at `exec`/process start.
- **Handle page faults:** decide which page to evict (replacement policy).
- **Page replacement:** Least Recently Used (LRU) approximations are common; the
  OS uses the accessed/dirty bits to approximate LRU.
- **Demand paging:** load a page only when it is first accessed (lazy loading).
- **Copy-on-write (COW):** share parent/child memory after `fork`; copy a page
  only when one side writes — speeds up `fork`/`exec`.
- **Shared memory:** map the same physical frame into two processes' address
  spaces.
- **Protection:** enforce read/write/execute/user permissions per page.

### Importance of abstraction in system design

Virtual memory is a textbook example of good abstraction:

- **Protection:** processes can't read each other's or kernel memory.
- **Simplification:** programs use a simple linear address space; no need to
  fit everything in RAM manually.
- **Sharing:** map the same physical page into multiple address spaces (useful
  for shared libraries and IPC).
- **Efficiency:** run programs larger than RAM; keep the active set in fast RAM.
- **Uniformity:** memory-mapped files and devices look like ordinary memory.

## Common mistakes

- Thinking virtual memory means "more RAM" — it trades disk for RAM (much slower).
- Believing every unmapped access is a segmentation fault — a page fault is often normal.
- Ignoring the TLB: software that thrashes the TLB/page tables runs slowly.

## Memory rules

- Virtual memory gives each process a big private address space using disk.
- Pages: virtual page → physical frame; offsets are unchanged.
- MMU translates; TLB caches translations.
- Page fault = OS loads the page from disk (demand paging).
- Protection bits: P, R/W/X, U/S, dirty, accessed.
- Abstraction value: protection, sharing, simple addressing, demand paging.

## Check your understanding

1. In one line, what does virtual memory add beyond physical RAM?
2. What is the difference between a page fault and a segmentation fault?
3. What is the TLB and why is it needed?
4. What OS policy does the hardware mechanism enable for virtual memory?
5. Give one benefit of copy-on-write.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. It lets a process use an address space larger than RAM by storing inactive
   pages on disk and loading them on demand.
2. A page fault is a normal, recoverable event (page not in RAM → load it); a
   segmentation fault is an invalid, unrecoverable access (bad address, or
   protection violation).
3. The TLB is a cache of recent virtual→physical translations; without it, every
   memory access would cost an extra page-table walk.
4. The OS decides page allocation, replacement, demand paging, and protection
   policies; the MMU/TLB perform fast translation and fault generation.
5. It allows `fork` to share pages between parent and child, copying only on
   write, so `fork`+`exec` is fast and uses little memory until a write.

</details>

## Quick revision box

- Virtual memory: each process gets a big private virtual address space.
- Paging: VFN→PFN mapping via page tables; offsets unchanged.
- MMU translates; TLB caches translations; page tables in memory.
- Page fault: OS loads page from disk (demand paging); replacement (LRU approx).
- Protection bits P/R-W-X, U/S, dirty, accessed.
- Abstraction benefits: protection, sharing, simplicity, demand paging.

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

[← Previous: Module 7](<Module-7.md>) · [Subject index](README.md) · [Next: Module 9 →](<Module-9.md>)
