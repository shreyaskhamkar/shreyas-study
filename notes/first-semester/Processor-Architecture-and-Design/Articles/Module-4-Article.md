# Module 4 Article: The Memory Hierarchy in Practice

## The big idea

The processor is far faster than memory. The **memory hierarchy** exists to
paper over this gap: a little fast/expensive memory close to the core, and a
lot of slow/cheap memory far away. Every program, every instruction, every
data access rides this hierarchy. Getting it right is the single biggest
performance lever in a system.

## The latency gap in numbers

| Level | Typical size | Latency | Bandwidth |
|---|---|---|---|
| Registers | 32–256 B | ~1 cycle | CPU-width bus |
| L1 cache | 32–64 KB per way | ~1–2 cycles | ~ several × CPU width/cycle |
| L2 cache | 256 KB–1 MB | ~10–20 cycles | |
| L3 cache | 2–32 MB | ~30–50 cycles | |
| Main RAM (DRAM) | GBs | ~200–300 cycles | ~ 10–50 GB/s |
| SSD (NAND) | TBs | ~100,000 cycles | ~3–7 GB/s |
| HDD | TBs | millions of cycles | ~100–200 MB/s |

A single cache miss to DRAM costs hundreds of instructions. This is why cache
behaviour dominates performance.

## SRAM vs DRAM: why they behave differently

- **SRAM** (cache): a 6-transistor cell holds a value without refresh. Stable
  and fast, but uses 6 transistors per bit → low density, high cost.
- **DRAM** (RAM): a 1-transistor + 1-capacitor cell stores a bit as charge.
  Much denser and cheaper, but the charge **leaks**, so the memory controller
  must **refresh** every row ~every 64 ms. Between accesses, a row is kept
  "open" as a **row buffer** for fast back-to-back access to the same row.

## How a cache works

A cache stores **lines** (typically 64 bytes) copied from main memory. On an
access:

1. **Look in the cache.** If the line holding that address is present →
   **hit** (fast).
2. If not → **miss**: copy the whole 64-byte line from the next level.
3. If no space: **replace** a victim line (write it back if dirty).

Three parameters define any cache: **size**, **block size**, and
**associativity**.

- **Direct-mapped:** each block maps to exactly one slot → cheap tags, but
  conflict misses abound.
- **Set-associative (n-way):** each set has n slots → balanced. Most modern
  caches.
- **Fully associative:** any line anywhere → expensive, low conflict.

## Cache miss types (the "Cache Miss-Hit" topics)

| Miss type | Cause | Example |
|---|---|---|
| Compulsory (cold) | First reference to a block | First loop iteration over an array |
| Capacity | Working set larger than cache | Iterating arrays bigger than L2 |
| Conflict | Two blocks map to the same set in a set-associative cache | Two arrays same size, stride = cache size |
| Hit-after-miss | After a miss, the retried access now hits | Loading a line, then reading adjacent bytes |

## Writing back and writing through

- **Write-through:** write to cache *and* next level immediately. Simple, but
  high traffic.
- **Write-back:** write only to the cache line; write the next level **only when
  the line is evicted** (and only if a **dirty** bit says it changed). Lower
  traffic, higher complexity.
- **Write-allocate** (fetch the line on a read-for-ownership after a miss) vs
  **no-write-allocate / write-around**.

## AMAT: one formula to rule them all

```
AMAT = Hit time + Miss rate × Miss penalty
```

Worked numbers: if the L1 hit takes 1 cycle, the miss rate is 5%, and fetching a
line from L2 costs 20 cycles,

```
AMAT = 1 + 0.05 × 20 = 2 cycles average
```

Halving the miss rate to 2.5%: `1 + 0.025 × 20 = 1.5`. Because misses are
expensive, small reductions in miss rate have outsized impact.

## Cache coherence on chip

When multiple cores each have caches, the same physical address may exist in
several caches. **MESI** (Modified, Exclusive, Shared, Invalid) is the classic
protocol:

- **Modified:** this cache owns a dirty copy; others are invalidated.
- **Exclusive:** clean; only this cache has it.
- **Shared:** clean copy; other caches may have it too.
- **Invalid:** this line is stale; others may hold it.

A read miss that finds a line in another cache's Modified state triggers a
**cache-to-cache transfer** (snooping or directory-based).

## Exam angle

For a "cache mapping" question:

1. Compute the index: `block_number mod number_of_sets`.
2. Compute the tag: `block_number / number_of_sets` (or `block_number div
   sets`).
3. Determine hit/miss, noting compulsory vs conflict vs capacity.
4. For AMAT, plug into `Hit time + Miss rate × Miss penalty`.

> Tip: remember that a 64-byte line means consecutive addresses often "miss
> once then hit" — this is **spatial locality**, the reason big lines help.
