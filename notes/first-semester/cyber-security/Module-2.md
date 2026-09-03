# Module 2: Security Management

## Learning outcomes

After completing this module, you should be able to:

- explain the central ideas in **Module 2: Security Management** using simple language;
- apply the main method or rules to a worked example;
- connect the topic to a practical computing scenario; and
- answer short and long university questions with clear steps.


## Prerequisites

Complete [Module 1](Module-1.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Chapter 1 — Security Management Practices | 10-15 minutes |
| 2 | Chapter 2 — Security Laws & Standards | 10-15 minutes |
| 3 | Chapter 3 — Network Security Technologies | 10-15 minutes |


## Chapter 1 — Security Management Practices

### Learning outcomes

After this chapter, you should be able to:

- explain information classification and security policy;
- perform basic risk analysis;
- distinguish business continuity and disaster recovery;
- state what an authentication policy and access control enforce.

### Start here: the simple idea

Security management is the practice of **organizing people, processes, and
technology** so that security is a managed risk rather than an accident. The
goal is protecting **assets** (data, systems, reputation) aligned to
**impact**, while still allowing the business to operate.

### Everyday analogy

Think of a bank vault manager. They classify documents (cash = highest value,
receipts = low), write a policy ("only the manager may open the vault"), assess
risk ("a robbery attempt is unlikely but devastating"), plan for the worst
(disaster kit), and enforce rules (ID badge + PIN to enter).

### Security management

Security management = the **ongoing program** of governance, risk, and compliance
(GRC) plus operational security. It sits above technology and decides **what**
to protect, **how much** to spend, and **who** can do what.

### Information classification

Classify information by **confidentiality** and **criticality** so controls and
response scale to value:

```text
Levels (typical):
  Restricted / Confidential  — customer PII, source code, keys
  Internal / Sensitive       — employee data, designs
  Public                     — brochures, marketing
```

A **classification policy** says who may access what at each level, and how
information must be stored, transmitted, and destroyed.

### Security policy

A **security policy** is the high-level statement of management intent. Types:

- **Organizational (master) policy:** the umbrella statement.
- **Issue-specific policy:** e.g., acceptable-use, remote-access, BYOD.
- **System-specific policy:** rules for one system.

Policies are **interpreted** into standards, **implemented** with procedures, and
**enforced** by controls.

### Risk management

**Risk = probability × impact.** Steps:

1. **Identify assets** and their value.
2. **Identify threats** and vulnerabilities.
3. **Assess** likelihood and impact (qualitative: Low/Med/High; or quantitative).
4. **Treat** risk: avoid, transfer (insurance), mitigate, or accept.
5. **Monitor** and review.

```text
Risk = Threat × Vulnerability × Impact
(or Asset value × probability of loss)
```

### Security procedures, guidelines, and best practices

- **Procedures:** step-by-step "how to" (e.g., how to patch a server).
- **Guidelines:** recommended good practice (e.g., password length ≥ 12).
- **Best practices:** community-accepted baselines (NIST, ISO 27001, CIS).
- Example best practice for SecureBank: rotate database credentials quarterly,
  log all admin actions, and require MFA for privileged access.

### Business continuity and disaster recovery

- **Business Continuity Planning (BCP):** keep the business running during and
  after a disruption. Defines **RTO** (Recovery Time Objective = how quickly
  service must be back) and **RPO** (Recovery Point Objective = how much data
  may be lost).
- **Disaster Recovery (DR):** the IT-specific subset: backup, redundancy, failover,
  and restore procedures. SecureBank's DR plan might replicate its database to a
  secondary data center (RPO = seconds, RTO = minutes).

### Ethics

Professional ethics: do no harm, act within the law, protect stakeholder
interests, and maintain competence. The **(ISC)² Code of Ethics** and **ISACA**
guidelines emphasize protecting society, acting honorably, and providing
diligent service.

## Chapter 2 — Security Laws & Standards

### Start here: the simple idea

Cyber security is regulated. **Intellectual property (IPR)** law protects
innovation; **cyber law** criminalizes hacking and data breaches; **security
standards** define best-practice baselines.

### Intellectual Property Rights (IPR)

| Right | Protects | Example |
|---|---|---|
| Patent | invention/process (20 yr) | encryption algorithm implementation |
| Trademark | brand/name/logo (indefinite) | "SecureBank" logo |
| Copyright | creative work (life+70) | software code, docs |
| Trade secret | confidential business info (until leaked) | customer list, formulas |
| Industrial design | product appearance | device shape/UI |
| Geographical indication | product origin (Champagne) | regional specialties |
| Plant variety protection | new plant varieties | agriculture tech |

### Cyber law

Cyber law covers offences like unauthorized access (hacking), data theft,
computer fraud, cyber-terrorism, and digital evidence handling. Examples: the
**Computer Fraud and Abuse Act (US)**, the **EU GDPR** (data protection), and
**India's IT Act**. Many jurisdictions now require reporting breaches within
72 hours.

### Digital Signature Certificate (DSC)

A **digital signature certificate** binds a public key to an identity, issued by a
**Certificate Authority (CA)**. It is the trust anchor for PKI used in HTTPS,
code signing, and e-commerce.

### Security standards

- **ISO/IEC 27001:** Information Security Management System (ISMS) standard.
- **NIST Cybersecurity Framework:** Identify, Protect, Detect, Respond, Recover.
- **PCI DSS:** security standard for payment-card data.
- **SOC 2:** auditing for security, availability, processing, confidentiality, privacy.
- **CIS Controls:** prioritized hardening actions.

## Chapter 3 — Network Security Technologies

### Start here: the simple idea

Network security uses **layers** of defense: firewalls at the boundary, VPNs for
remote encryption, and network design that isolates trust zones.

### Firewall

A **firewall** is a device/system that enforces a security policy between
network zones by filtering traffic by rule.

Types:

- **Packet-filtering firewall:** router-like; inspects header fields (IP, ports,
  flags). Fast but stateless.
- **Stateful firewall:** tracks connection state (SYN, ESTABLISHED, FIN).
- **Application-layer firewall (proxy/gateway):** understands the application
  protocol (HTTP, FTP) and can filter on content.
- **Next-Generation Firewall (NGFW):** combines stateful + DPI + IPS + app control.

### DMZ (Demilitarized Zone)

A **DMZ** is a sub-network that sits **between** the internal network and the
Internet, hosting public-facing servers (web, mail) so that compromising them
doesn't directly expose the internal network.

```text
Internet → [FW1] → DMZ (web,mail,DNS) → [FW2] → Internal LAN (DB, apps)
```

### Firewall policies

A policy is an ordered list of **allow/deny** rules, often with a default
**deny** at the bottom ("least privilege"). Typical SecureBank policy: allow
HTTPS (443) inbound to the web DMZ; allow only the app tier to reach the
database (3306); deny everything else.

### Firewall design

- **Default-deny** inbound; allow only needed services.
- **Rule order matters:** specific allows first, then broad deny.
- **Logging:** log denied and notable allowed traffic for auditing.
- **Regular review** and patching of firewall rules and firmware.

### VPN

A **Virtual Private Network** extends a private network over a public network
(Internet), encrypting traffic so it is private in transit.

- **Remote-access VPN:** a user connects in ("I am on the office network").
  Client uses **IPSec** or **SSL VPN**.
- **Site-to-site VPN:** connect two offices over the Internet.

### IPSec

A suite of protocols securing IP traffic:

- **AH (Authentication Header):** integrity + auth, no encryption.
- **ESP (Encapsulating Security Payload):** confidentiality + auth.
- **IKE (Internet Key Exchange):** negotiates keys and parameters.
- Modes: **transport** (end-to-end) and **tunnel** (network-to-network).
- SecureBank uses IPSec site-to-site tunnels between its offices.

### SSL VPN

An **SSL/TLS-based remote-access VPN**, usually via a web browser or thin client.
Often easier to deploy than IPSec (no special client) but typically only allows
specific applications (not full network access).

### Tunneling

Wrap one protocol inside another (e.g., IPv6 packets inside IPv4, or IPSec ESP
packets inside plain IP). A common pattern: **GRE** (Generic Routing
Encapsulation) for multicast across unicast links.

### Cloud computing

Delivery models:

- **IaaS** (infrastructure): virtual machines, storage (AWS EC2/S3).
- **PaaS** (platform): managed runtime for apps (Heroku, App Engine).
- **SaaS** (software): delivered as a service (Google Workspace, Salesforce).

Security implications: shared responsibility model — the **provider** secures the
cloud, the **customer** secures what is in the cloud (identity, data,
configuration). Misconfigurations (open S3 buckets) are the leading cloud risk.

### Grid computing and virtualization

- **Grid computing:** federating resources across locations for parallel jobs
  (e.g., SETI@home). Security challenge: authenticating across domains.
- **Virtualization:** running multiple VMs on one host (Module 7). Hypervisor
  isolation is the security boundary; a VM escape breaks that boundary.

### High Performance Computing (HPC)

Clusters of many nodes working on one problem (supercomputer). Security challenge:
massive scale, specialized interconnects (InfiniBand), and often weaker
perimeter (research LANs).

## Common mistakes

- Writing a long firewall rule list without ordering (specific before general).
- Treating the DMZ as fully trusted — it is still hostile territory.
- Forgetting shared responsibilities in the cloud (the provider secures the
  infrastructure; you secure your configs/data).

## Memory rules

- Classification drives controls; policy drives classification.
- Risk = likelihood × impact; treat = avoid/transfer/mitigate/accept.
- BCP = keep business running; DR = recover IT; RTO/RPO are the metrics.
- Firewall = ordered allow/deny rules, default deny.
- VPN = private tunnel over public net; IPSec = AH/ESP + IKE; SSL VPN = browser-based.
- Cloud security = shared responsibility; misconfiguration is the top risk.

## Check your understanding

1. What is the difference between a security policy and a security procedure?
2. How are RTO and RPO different, and which matters more for backups?
3. What is the "default-deny" firewall principle and why use it?
4. Explain shared responsibility between a cloud provider and a customer.
5. Give one advantage IPSec has over SSL VPN, and one disadvantage.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. A policy is the high-level management intent; a procedure is the step-by-step
   implementation that enforces that intent.
2. RTO = max time to restore service; RPO = max data loss tolerated. RPO matters
   more for backups (how much you can lose); RTO for failover planning.
3. Default-deny means block everything not explicitly allowed — defense in depth
   by default.
4. The provider secures the cloud (hypervisor, physical, network); the customer
   secures what's in the cloud (IAM, data, config) — a config mistake is the
   customer's fault.
5. IPSec gives full-network/tunnel access (any app), but SSL VPN is easier to
   deploy (browser, no client). IPSec's full access is an advantage and a risk.

</details>

## Quick revision box

- Classification levels × access rules × audit = information classification.
- Policy (intent) → standards → procedures (how) → guidelines/best practices.
- Risk = Threat × Vulnerability × Impact; treat via avoid/transfer/mitigate/accept.
- BCP keeps business alive; DR restores IT; metrics RTO (time) and RPO (data loss).
- IPR: patent, trademark, copyright, trade secret, design, GI, plant variety.
- Cyber law: computer offences + breach-notification obligations (e.g., GDPR 72h).
- Firewall = packet filter + stateful + app proxy + NGFW; default-deny policy.
- DMZ isolates public-facing servers between two firewalls.
- VPN (IPSec/SSL) tunnels private traffic over public networks.
- Cloud = shared responsibility; grid/HPC/virtualization expand the trust boundary.

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
