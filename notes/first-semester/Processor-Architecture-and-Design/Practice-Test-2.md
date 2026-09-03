# Processor Architecture and Design - Practice Test 2

## Section A - Objective Questions

1. What is the fastest level in the memory hierarchy?
2. Which memory technology typically requires refresh?
3. What does forwarding reduce in a pipeline?
4. What is the binary form of a processor instruction called?
5. What do we call the address of the next instruction?

## Section B - Application Questions

6. A cache has hit time 2 ns, miss rate 4 percent, and miss penalty 25 ns. Find AMAT.
7. Why is the data bus bidirectional?
8. State two features of ARM.
9. Explain one advantage of pipelining.
10. Explain one reason why microprogrammed control is preferred in some designs.

## Section C - Review Questions

11. What is the difference between datapath and control unit?
12. What are the three main cache miss types?
13. What is the stored-program idea?

## Answer Key

1. Registers or cache, depending on the level being compared; in general registers are the fastest.
2. DRAM.
3. Data hazards and some stall delays.
4. Machine language.
5. PC.
6. `2 + 0.04 x 25 = 3 ns`
7. Because data must flow from memory to CPU and from CPU to memory.
8. Any two: low power, load-store design, RISC style, fixed-length instructions, efficiency.
9. Higher throughput because multiple instructions overlap.
10. It is easier to modify and extend.
11. Datapath moves and transforms data; control unit generates signals and sequences operations.
12. Compulsory, capacity, conflict.
13. Program and data are stored together in the same memory.
