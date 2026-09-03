# Processor Architecture and Design - Practice Test 3

This test covers Modules 7-9.

## Questions

1. What abstraction makes one CPU appear continuous to several processes?
2. Distinguish a Type 1 hypervisor from a Type 2 hypervisor.
3. What is the purpose of a page table?
4. What does the TLB cache?
5. Explain the steps taken by the OS after a page fault.
6. A 32-bit address uses 4 KiB pages. How many bits are used for the page offset?
7. Distinguish an exception, an interrupt, and a trap.
8. Why does the processor switch to kernel mode for a system call?
9. List the main steps of an interrupt service routine.
10. Explain two benefits and one cost of virtualization.

## Answer Key

1. Time-sharing or multiprogramming.
2. Type 1 runs directly on hardware; Type 2 runs as an application on a host OS.
3. It maps virtual page numbers to physical frame numbers and stores protection/status bits.
4. Recent virtual-to-physical address translations.
5. Save context, identify the missing page, choose a frame, write back a dirty victim if needed, load the page, update the page table/TLB, and restart the instruction.
6. 12 bits, because 4 KiB = 2^12 bytes.
7. An exception is synchronous and instruction-related; an interrupt is asynchronous and external; a trap is a deliberate synchronous software event.
8. Kernel mode is required for protected operations such as device access and memory management.
9. Save state, identify and acknowledge the source, dispatch to the handler, perform short service work, clear the source, restore state, and return.
10. Benefits include isolation, sharing, portability, and efficient utilization. A cost is translation, scheduling, or I/O overhead.
