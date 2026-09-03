# Processor Architecture and Design - Full Syllabus Internal Exam

**Exam schedule:** Tuesday, 25 August 2026 | **Slots:** 8:00 AM-10:00 AM or 7:00 PM-9:00 PM

## Instructions

- Total questions: 23
- Sections: 8
- Answer all questions.
- This paper covers Modules 1-9.
- Time suggested: 90 minutes

## Section 1 - MCQ

1. Which component translates virtual addresses to physical addresses?
   - A. ALU
   - B. MMU
   - C. Control bus
   - D. ISA

2. Which event is normally asynchronous?
   - A. Hardware interrupt
   - B. System-call trap
   - C. Divide-by-zero exception
   - D. Instruction decode

3. Which structure caches recent page translations?
   - A. TLB
   - B. IR
   - C. MAR
   - D. Stack pointer

## Section 2 - Multiple-Select MCQ

4. Which are benefits of virtual memory? Select all that apply.
   - A. Process isolation
   - B. Sharing of selected pages
   - C. Guaranteed faster disk access
   - D. Running programs larger than physical RAM

5. Which are characteristics of a system call? Select all that apply.
   - A. It is requested by software
   - B. It transfers control to the kernel
   - C. It commonly uses a trap mechanism
   - D. It always runs in user mode

6. Which resources can a hypervisor virtualize? Select all that apply.
   - A. CPU
   - B. Memory
   - C. I/O devices
   - D. Only the keyboard

## Section 3 - True / False

7. A page offset changes when a virtual page is mapped to a physical frame.
8. User mode has fewer privileges than kernel mode.
9. A Type 1 hypervisor runs directly on physical hardware.

## Section 4 - Assertion and Reason

10. Assertion: The TLB improves address-translation performance. Reason: It caches recently used page-table entries.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

11. Assertion: A system call is a hardware interrupt. Reason: A system call is deliberately requested by a running program.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

12. Assertion: Virtualization can create an illusion of dedicated hardware. Reason: A hypervisor maps virtual resources to shared physical resources.
   - A. Both are true, and the reason explains the assertion.
   - B. Both are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

## Section 5 - Ordering

13. Arrange the page-fault response: (A) restart instruction, (B) detect missing page, (C) load page, (D) update page table.

14. Arrange interrupt handling: (A) dispatch handler, (B) save state, (C) restore state, (D) identify/acknowledge source.

15. Arrange the address path: (A) physical memory access, (B) virtual address generated, (C) TLB lookup, (D) page-table walk on TLB miss.

## Section 6 - Two-Side Match and Choose

16. Match: 1. MMU  2. TLB  3. Page fault  4. Hypervisor; a. Translation cache b. Missing/protected page event c. Virtual-machine monitor d. Address translator.

17. Match: 1. Interrupt 2. Trap 3. Fault 4. Abort; a. Deliberate software event b. Recoverable exception c. External asynchronous event d. Generally unrecoverable exception.

18. Match: 1. User mode 2. Kernel mode 3. ISR 4. Time slice; a. Short handler b. Restricted execution c. Privileged execution d. Scheduled CPU interval.

## Section 7 - Descriptive Questions

19. Explain virtual memory translation using the MMU, page table, TLB, page fault, and protection bits.

20. Explain how an operating system creates the illusion of dedicated CPU, memory, and I/O resources for each process.

## Section 8 - Fill in the Blanks

21. The table that maps virtual page numbers to physical frame numbers is the __________.
22. A deliberate software-generated synchronous event used to request an OS service is a __________.
23. The small cache of recent address translations is the __________.

## Answer Key

1. B  2. A  3. A
4. A, B, D  5. A, B, C  6. A, B, C
7. False  8. True  9. True
10. A  11. D  12. A
13. B, C, D, A  14. B, D, A, C  15. B, C, D, A
16. 1-d, 2-a, 3-b, 4-c
17. 1-c, 2-a, 3-b, 4-d
18. 1-b, 2-c, 3-a, 4-d
19. Award marks for virtual-page/physical-frame mapping, unchanged offset, MMU/TLB roles, page-table walk, page-fault handling, and protection bits.
20. Award marks for time-sharing, virtual address spaces/MMU, drivers and queues, isolation, and virtualization overhead.
21. Page table  22. Trap  23. TLB

## Descriptive Answers

### Answer 19

Virtual memory gives each process a private virtual address space. The CPU generates a virtual address divided into a virtual page number and an offset. The MMU uses the TLB to look up a recent virtual-page to physical-frame mapping. On a TLB miss, it consults the process page table. The page offset remains unchanged, while the virtual page number is replaced by a physical frame number. If the page is not present, a page fault transfers control to the OS. The OS loads the page from storage, updates the page table, and restarts the instruction. Page-table bits such as present, read/write/execute, user/supervisor, dirty, and accessed enforce protection and support replacement.

### Answer 20

The operating system creates the CPU illusion through time-sharing: it assigns each process a time slice and performs context switches. It creates the memory illusion by giving every process a private virtual address space and translating addresses through the MMU and page tables. It creates the I/O illusion through device drivers, queues, and file interfaces, so programs use standard operations without controlling the physical device directly. These abstractions improve isolation, sharing, portability, and hardware utilization, but scheduling, translation, and virtualization add overhead.
