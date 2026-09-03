# Module 3 Article: IDS, IPS, and the False-Positive Tightrope

## The big idea

Locking every door is impossible; so you also **watch who tries** the doors. An
**Intrusion Detection System (IDS)** is a silent alarm that calls when something
looks wrong; an **Intrusion Prevention System (IPS)** is the bouncer who can
also bar the door. The hard part is tuning them: too sensitive and you get
alert fatigue (false positives); too loose and you miss real attacks (false
negatives).

## IDS vs IPS: the one-letter difference that matters

| | IDS | IPS |
|---|---|---|
| Placement | **Out of the traffic path** | **In the traffic path** |
| Action | Alert | Alert + block/drop |
| Risk | Misses attacks that pass silently | A wrong block denies legitimate traffic |
| Network impact | Passive (no downtime risk) | Active (availability risk if misconfigured) |

A common exam trick: ask whether a device that *only alerts* is IDS or IPS. It is
**IDS** — the power to **prevent** is what distinguishes IPS.

## Network vs host: two views

- **Network IDS/IPS (NIDS/NIPS):** sits at a choke point (DMZ gateway) and sees
  packets for many hosts. Great for broad patterns (port scans, floods) but
  blind to host state.
- **Host IDS/IPS (HIDS/HIPS):** an agent on the host watches processes, file
  integrity, logs, and system calls. Deep context (it can tell a legit `rm` from
  a malicious one) but only one host per agent.

Best practice: **defense in depth** = both. NIDS catches network-wide anomalies;
HIDS catches host-level mischief.

## Misuse vs anomaly: two philosophies

- **Misuse / signature-based:** compares observed activity to a database of known
  attack signatures (think "snort rule").
  - Low false positives for known attacks.
  - **Blind to zero-days** and variants (encrypt your traffic and the engine never
    saw that signature).
- **Anomaly-based:** builds a profile of "normal" and flags deviations.
  - Can catch zero-days and insider misuse.
  - Higher false positives (legitimate but unusual behavior triggers alerts).

## The precision/recall trade-off (and why "false positive" is a loaded word)

Let `TP` = true positive, `FP` = false positive, `FN` = false negative.

```
Precision = TP/(TP + FP)     "of all alarms, how many were real?"   (low FP → high precision)
Recall    = TP/(TP + FN)     "of all real attacks, how many did we catch?" (low FN → high recall)
```

Tightening a rule (more conditions) usually **raises precision** (fewer false
alarms) but **lowers recall** (misses more real attacks). Loosening does the
opposite. In a bank, you often accept more false positives to keep recall (not
miss fraud) high; in a noisy SOC you tune to keep analysts sane.

## Worked example: classifying an alert

An IDS flags a user downloading a 1.2 GB file at 02:00 via `scp` over port 22.

- Known user? **TP** if exfiltration policy forbids it → real incident.
- A backup server doing nightly backups? **FP** — same signature, legitimate.

The fix isn't "disable the rule" but **context**: correlate with asset
criticality, user role, and baseline behavior, then route to a triage queue.

## IDS functionalities and traffic analysis

Beyond simple packet matching, modern IDS/IPS can:

- **Reassemble** TCP streams to inspect full sessions (not just packets).
- **Decode** application protocols (HTTP, DNS, FTP) to spot protocol abuse.
- **Count** connections to detect port scans (nmap) or SYN floods.
- Perform **payload analysis** and pattern matching (regex).
- Feed alerts into a **SIEM** for correlation across many sensors.

**Traffic analysis** is the flip side: even on encrypted links, the *shape* of
traffic (volume, timing, endpoints) can leak information (is a CEO calling in?
are backups running? is a file being exfiltrated?). Countermeasures include
padding and traffic-mixing (Tor-style).

## IDS metrics that matter

- **Detection rate** (= recall).
- **False-positive rate** per day (analysts measure this in "alerts/day").
- **Time to detect (TTD)** and **time to respond (TTR)**.
- **Coverage** of the sensor (does it see internal, external, or both?).

## Exam angle

For "IDS vs IPS" and "false positive vs false negative":

1. Distinguish by **placement and action**: IDS = out-of-path + alert; IPS =
   in-path + block.
2. Define FP = alarm on a benign event, FN = miss of a real attack.
3. Show the precision/recall formulas and the trade-off arrow.
4. Give misuse (signature, low FP, blind to 0-day) vs anomaly (profile, catches
   0-day, high FP).

> Tip: if asked about "alert fatigue," it is the symptom of too many false
> positives; the cure is tuning, baselines, and correlation, not disabling rules.
