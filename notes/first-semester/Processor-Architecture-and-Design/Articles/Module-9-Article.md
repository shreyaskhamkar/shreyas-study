# Module 9 Article: Interrupts, Exceptions, and the ISR Lifecycle

## The big idea

The CPU cannot poll every device forever — that wastes cycles. Instead, devices
**ask for attention** with an **interrupt**; the CPU pauses, handles the event
in a small handler, and resumes. This single mechanism is behind responsive
keyboards, disk I/O that doesn't freeze the screen, and the timer that lets
multitasking exist.

## Three kinds of control-transfer events

| Kind | When | Who triggers | Example |
|---|---|---|---|
| Exception | During instruction execution | CPU/hw internally | divide-by-zero, page fault |
| Interrupt | Anytime, asynchronously | external device | keyboard, disk done |
| Trap | When program calls | the program | system call (`syscall`) |

A **trap** is really just a synchronous, deliberate interrupt used to enter the
OS. The hardware that handles a hardware interrupt handles a system call too.

## The full lifecycle of an interrupt

```mermaid
flowchart TD
    A[Running user code] --> B{Interrupt/Exception raised?}
    B -->|No| C[Continue user code]
    B -->|Yes| D[Finish current instruction]
    D --> E[Save PC + flags to kernel stack]
    E --> F[Switch to kernel/supervisor mode]
    F --> G[Read cause register / vector]
    G --> H[Jump to the ISR (via vector table)]
    H --> I[ISR: clear source, do work, maybe wake a process]
    I --> J{Called from user mode?}
    J -->|Yes| K[Restore user state and return to next instruction]
    J -->|No| L[Schedule / return to kernel]
    K --> C
    L --> C
```

Key details:

- The CPU **automatically** saves the return address and processor status so the
  program can resume exactly where it stopped.
- A **dedicated kernel stack** is swapped in, because the user stack is not
  trusted.
- The **interrupt vector** is a table of handler addresses. The CPU indexes it
  with the interrupt number.

## Masking, priorities, and nesting

- **Maskable (IRQ):** can be disabled by clearing the interrupt-enable flag
  (`cli`/`sti` on x86, `msr daif, #0xf` on ARM). Used for short critical
  sections.
- **Non-maskable (NMI):** cannot be disabled; used for critical events (power
  failure, watchdog).
- **Priority + nesting:** a higher-priority interrupt can preempt a running ISR.
  The CPU pushes another frame; this is safe only if ISRs are **reentrant**.

## The interrupt vector table

Each interrupt source is assigned a small number (the vector). The CPU multiplies
that by the word size and adds it to a base register (e.g. x86 `IDTR`, ARM
`VBAR`/`VBR`) to find the handler's address:

```
VectorBase + vector_number × entry_size → handler_address
```

The OS fills this table at boot (in C code that installs function pointers),
linking a device IRQ to the right ISR.

## Writing and managing ISRs

An ISR is a function with special rules:

1. **Save** any registers it will clobber (or use a dedicated IRQ register set).
2. **Identify the source** — read the device's interrupt-status register.
3. **Handle it** — clear the interrupt flag at the device (critical: if you
   don't, the interrupt fires again immediately).
4. **Do the minimum** — copy data to a queue and defer heavy work to a **top
   half** / tasklet / softirq, or wake a waiting process via the OS scheduler.
5. **Return** with the special instruction that restores saved state
   (`iret` on x86, `eret` on ARM) and drops back to user mode.

### The "always clear the source" rule

If an ISR doesn't clear the device's interrupt flag, the device keeps
interrupting — creating an **interrupt storm** that locks up the machine. This
is the single most common ISR bug.

## System calls use the same path

A program that calls `write(fd, buf, n)` does roughly:

```c
mov  rax, SYS_write     // syscall number
mov  rdi, fd
mov  rsi, buf
mov  rdx, n
syscall                 // trap into kernel
```

The CPU switches to kernel mode, jumps to the syscall entry, the OS dispatches
`sys_write`, copies data to the file, and returns the byte count. Same hardware,
deliberate trigger.

## Worked example: a timer ISR

The kernel timer fires every 1 ms (preemption tick):

```
ISR(timer):
    save regs
    increment ticks
    if current process timeslice expired:
        set need_resched = 1
        wake scheduler
    clear timer flag          # MUST DO
    restore regs
    iret
```

The preemption flag tells the OS to switch processes at the next opportunity.

## Exam angle

For "explain how an interrupt is handled":

1. Device raises IRQ line.
2. CPU finishes the current instruction.
3. Save PC + flags; switch to kernel mode and a kernel stack.
4. Index the interrupt vector; jump to the ISR.
5. ISR clears the source, does minimal work (or schedules deferred work).
6. Restore state and return to the interrupted instruction.

> Tip: emphasize (a) switching to **kernel mode**, (b) **saving state**, and
> (c) **clearing the interrupt source** — these three points carry most of the
> marks.
