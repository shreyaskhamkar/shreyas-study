# Module 3: Information & Network Security

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 3: Information & Network Security** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 2](Module-2.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Chapter 1 — Access Control & Intrusion Detection | 10-15 minutes |


## Chapter 1 — Access Control & Intrusion Detection

### Learning outcomes

After this chapter, you should be able to:

- explain identification, authentication, and authorization;
- compare host-based and network-based IDS/IPS;
- distinguish misuse and anomaly detection;
- interpret false-positive and false-negative rates and IDS metrics.

### Start here: the simple idea

Before anyone can use a system, you must **identify** them, **authenticate**
them, and then **authorize** what they can do. Then you watch the traffic: an
**Intrusion Detection System (IDS)** spots attackers, and an
**Intrusion Prevention System (IPS)** can block them inline.

### Everyday analogy

- **Identification:** showing your ID badge at reception.
- **Authentication:** the guard checking your photo on the badge (or your PIN).
- **Authorization:** the badge's magnetic stripe telling which floors you may
  enter.
- **IDS/IPS:** a security camera (IDS, watches) and a bouncer (IPS, acts) at the
  door.

### Identification

Claiming an identity (username). Identification alone proves nothing — anyone
can claim to be `"admin"`.

### Authentication

Proving the claimed identity. Factors:

1. **Something you know** (password/PIN).
2. **Something you have** (hardware token, phone, smart card).
3. **Something you are** (fingerprint, face, voice — biometrics).
4. **Somewhere you are** (network location) — weaker.
5. **Something you do** (typing rhythm).

**Multi-factor authentication (MFA)** = two or more independent factors. This is
why SMS codes (factor 2) on top of a password (factor 1) are better than either
alone — even though SMS is weaker than an authenticator app.

### Authorization

Deciding **what an authenticated user may do**:

- **DAC (Discretionary Access Control):** the resource owner decides (file
  permissions, ACLs).
- **MAC (Mandatory Access Control):** the system labels data and subjects
  (e.g., "Top Secret"); access is enforced, not chosen.
- **RBAC (Role-Based Access Control):** permissions are grouped into roles
  (admin, accountant, viewer); users get roles. Most enterprise apps.
- **ABAC (Attribute-Based Access Control):** decisions from attributes (time,
  location, device) and policies. More flexible than RBAC.

**Principle of least privilege:** give users only the access they need to work.

### Intrusion Detection System (IDS)

An **IDS** monitors network or host activity and **alerts** on suspicious
behavior. It does not usually block by itself.

- **Network-based IDS (NIDS):** watches network packets (e.g., at the DMZ
  gateway). Sees everything flowing but has limited host context.
- **Host-based IDS (HIDS):** runs on a single host, watches system calls, log
  files, and file integrity (e.g., Tripwire, OSSEC). Deep context, narrow scope.

### Intrusion Prevention System (IPS)

An **IPS** sits **inline** and can **drop or block** malicious traffic, not just
alert. Because it is inline, it is more powerful — and riskier: a misconfiguration
can block legitimate traffic (availability impact).

### Misuse vs anomaly detection

- **Signature/misuse-based IDS:** compares observed activity to a database of
  known attacks (like antivirus signatures). Low false positives, but blind to
  unknown ("zero-day") attacks.
- **Anomaly-based IDS:** builds a profile of "normal" behavior and flags
  deviations. Can catch new attacks, but prone to false positives.

Many commercial IDS combine both (**hybrid**).

### IDS metrics: false positive and false negative

- **False positive (FP):** benign activity flagged as an attack (Type I error).
  Bad: wastes analyst time; can breed "alert fatigue."
- **False negative (FN):** an attack *not* detected (Type II error). Bad: a real
  breach goes unnoticed.
- There is a classic **precision/recall trade-off:** tighten the detection rule
  → fewer FP but more FN (lower recall); loosen → fewer FN but more FP.

```
Precision = TP / (TP + FP)     (few false alarms)
Recall    = TP / (TP + FN)     (catch most attacks)
```

### IDS functionalities

Modern IDS/IPS also provide:

- **Traffic analysis:** reconstruct sessions, identify protocols and anomalies.
- **Logging and forensics:** detailed records for post-incident analysis.
- **Integration** with SIEM (Security Information and Event Management).
- **Automated response:** e.g., temporarily block an IP on repeated offenses.

### Traffic analysis

Even when traffic is **encrypted**, the **pattern** (who talks to whom, how
much, when) leaks information. Traffic analysis can reveal which services a user
contacts, when the office is empty, or whether a message was sent — useful to
an attacker and defended against partly by **constant-rate padding** and
**mix networks**.

## Common mistakes

- Confusing IDS (detect/alert, out of path) with IPS (prevent, inline).
- Tuning an anomaly detector too loosely → thousands of false alarms.
- Believing a signature-based IDS catches unknown threats (it doesn't).

## Memory rules

- Identify (claim) → authenticate (prove) → authorize (allow).
- MFA = two+ independent factors; least privilege = minimal rights.
- DAC = owner decides; MAC = system labels; RBAC = roles; ABAC = attributes.
- IDS = watches and alerts; IPS = watches and blocks (inline).
- Misuse = known signatures (low FP, high FN for unknown); anomaly = model-based (high FP, low FN for new).
- False positive = false alarm (Type I); false negative = missed attack (Type II).

## Check your understanding

1. In the AAA triad, what does each letter stand for and how do they differ?
2. Which is more powerful but riskier: IDS or IPS? Why?
3. Why does tightening a detector lower FP but raise FN?
4. What can traffic analysis reveal even about encrypted traffic?
5. Name two access-control models besides RBAC.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Authentication (prove identity), Authorization (decide rights), Accounting
   (log/auditing). Identification is the precursor (claiming identity).
2. IPS — it is inline and can block, so a wrong rule can drop legitimate
   traffic (availability impact), whereas IDS only alerts.
3. A tighter rule only flags clearer matches → fewer false alarms but also
   misses more real attacks (lower recall / more false negatives).
4. Communication patterns — who talks to whom, volume, timing — even when payload
   is encrypted.
5. DAC (discretionary) and MAC (mandatory); ABAC (attribute-based) too.

</details>

## Quick revision box

- Authentication factors: know (password), have (token), are (biometric).
- MFA + least-privilege + RBAC = practical access control.
- IDS = detect/alert (out of path); IPS = block (inline).
- Misuse/signature = known attacks; anomaly = profile-based.
- NIDS (network) vs HIDS (host); NIPS (network) vs HIPS (host).
- FP = false alarm; FN = missed attack; precision/recall trade-off.
- Traffic analysis leaks patterns even through encryption.

## Exam guidance

Identify the asset and threat, name the security objective, explain the control, and state one limitation. Use defensive examples only.

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
