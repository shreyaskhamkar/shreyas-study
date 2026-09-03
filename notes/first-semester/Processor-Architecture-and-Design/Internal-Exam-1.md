# Processor Architecture and Design - Internal Exam 1

**Exam schedule:** Tuesday, 25 August 2026 | **Slots:** 8:00 AM-10:00 AM or 7:00 PM-9:00 PM

## Instructions

- Total questions: 23
- Sections: 8
- Answer all questions.
- Keep diagrams neat and label every figure.
- Time suggested: 90 minutes

## Section 1 - MCQ

1. Which concept allowed instructions and data to be stored in the same memory?
   - A. Harvard architecture
   - B. Stored-program concept
   - C. Microprogramming
   - D. Bus arbitration

2. Which component holds the address of the next instruction?
   - A. IR
   - B. MAR
   - C. PC
   - D. ALU

3. Which gate is a universal gate?
   - A. XOR
   - B. NAND
   - C. AND
   - D. OR

4. In the memory hierarchy, which is usually the fastest?
   - A. HDD
   - B. DRAM
   - C. Cache
   - D. SSD

## Section 2 - Multiple-Select MCQ

5. Which of the following are parts of the CPU? Select all that apply.
   - A. Datapath
   - B. Control unit
   - C. Cache only
   - D. ALU

6. Which of the following are cache miss types? Select all that apply.
   - A. Compulsory
   - B. Capacity
   - C. Conflict
   - D. Random

7. Which statements are true about RISC? Select all that apply.
   - A. Uses simple instructions
   - B. Usually has fixed-length instructions
   - C. Always slower than CISC
   - D. Often uses a load-store style

## Section 3 - True / False

8. The data bus is usually bidirectional. 
9. A D flip-flop changes state continuously as long as the input changes. 
10. The control unit performs arithmetic operations on data.

## Section 4 - Assertion and Reason

11. Assertion: SRAM is faster than DRAM. Reason: SRAM does not require refresh.
   - A. Both assertion and reason are true, and the reason explains the assertion.
   - B. Both assertion and reason are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

12. Assertion: The ISA is the same as the microarchitecture. Reason: Both describe the physical implementation of the processor.
   - A. Both assertion and reason are true, and the reason explains the assertion.
   - B. Both assertion and reason are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

13. Assertion: Pipelining increases throughput. Reason: Multiple instructions can overlap in different stages.
   - A. Both assertion and reason are true, and the reason explains the assertion.
   - B. Both assertion and reason are true, but the reason does not explain the assertion.
   - C. Assertion is true, but reason is false.
   - D. Assertion is false, but reason is true.

## Section 5 - Ordering

14. Arrange the instruction cycle in the correct order.
   - A. Execute
   - B. Fetch
   - C. Decode
   - D. Write-back

15. Arrange the memory hierarchy from fastest to slowest.
   - A. RAM
   - B. Registers
   - C. Cache
   - D. Secondary storage

16. Arrange the following bus signals by common function category.
   - A. Address
   - B. Data
   - C. Control
   - D. Arbitration

## Section 6 - Two-Side / Match and Choose

17. Match the term to its description.
   - 1. Datapath
   - 2. Control unit
   - 3. Program counter
   - 4. ALU
   - a. Holds next instruction address
   - b. Performs arithmetic and logic
   - c. Moves and stores data during execution
   - d. Generates control signals

18. Choose the correct pairing.
   - 1. SRAM
   - 2. DRAM
   - 3. NAND
   - 4. ARM
   - a. Universal gate
   - b. RISC ISA
   - c. Main memory technology
   - d. Cache technology

19. Select the best match.
   - 1. Hit time
   - 2. Miss penalty
   - 3. AMAT
   - 4. Forwarding
   - a. Average memory access time
   - b. Time to fetch data after a miss
   - c. Time when cache supplies data
   - d. Pipeline hazard reduction method

## Section 7 - Descriptive Questions

20. Explain the fetch-decode-execute cycle of a computer with a neat diagram.

21. Compare SRAM and DRAM with respect to structure, refresh, speed, and cost.

## Section 8 - Fill in the Blanks

22. The program counter is often abbreviated as __________.

23. The formula for average memory access time is __________.

## Answer Key

### Section 1

1. B
2. C
3. B
4. C

### Section 2

5. A, B, D
6. A, B, C
7. A, B, D

### Section 3

8. True
9. False
10. False

### Section 4

11. Both are true, and the reason correctly explains the assertion.
12. Both are false.
13. Both are true, and the reason correctly explains the assertion.

### Section 5

14. B, C, A, D
15. B, C, A, D
16. A, B, C, D

### Section 6

17. 1-c, 2-d, 3-a, 4-b
18. 1-d, 2-c, 3-a, 4-b
19. 1-c, 2-b, 3-a, 4-d

### Section 7

20. Key points: fetch from memory into IR, decode opcode and operands, execute in ALU, write result back, PC advances, control unit issues control signals.
21. Key points: SRAM uses flip-flop cells and does not need refresh; DRAM uses capacitor-transistor cells and needs refresh; SRAM is faster and costlier, DRAM is denser and cheaper.

### Section 8

22. PC
23. `AMAT = Hit time + Miss rate x Miss penalty`
