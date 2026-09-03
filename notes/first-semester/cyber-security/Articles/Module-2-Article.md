# Module 2 Article: Firewalls, DMZs, and the Shared-Responsibility Cloud

## The big idea

If a network is a building, the **firewall** is the guarded door and the **DMZ**
is the foyer where visitors wait. **Virtual private networks (VPNs)** are
tunnels that hide your traffic inside the public Internet, like a courier
driving through hostile territory in an armored truck. And the cloud is like
renting a security guard: the **provider** secures the perimeter; **you** secure
your apartment.

## Firewalls: the policy enforcement point

A firewall's job is simple in principle and fiddly in practice: let good traffic
in/out, block bad traffic, log everything, and **deny by default**.

### Types of firewalls

| Type | How it decides | Strength | Weakness |
|---|---|---|---|
| Packet filter | Inspect IP header, ports, flags | Fast | Stateless; no context |
| Stateful | Track connection state (SYN, ESTABLISHED) | Recovers some context | Still shallow |
| Application proxy | Understand the app protocol (HTTP) | Deep, content-aware | Slower, complex |
| Next-Gen Firewall (NGFW) | Stateful + DPI + app control + IDS | Rich | Expensive |

### Writing a good firewall policy

Rules are evaluated **top to bottom**; order matters. The pattern:

1. **Allow** specific, needed services (e.g., HTTPS to the web DMZ).
2. **Allow** established/related return traffic.
3. **Deny everything else** (the all-important default-deny).

A common student mistake: putting a broad "allow all" above a specific "deny",
which shadows the deny.

## The DMZ: containing public-facing servers

```
            Internet
                 │
            [FW1]  (allow https/dns to DMZ only)
                 │
          DMZ:  web, mail, DNS servers
                 │
            [FW2]  (allow app-tier DB traffic only)
                 │
          Internal LAN: databases, file servers
```

The DMZ is **not** trusted. A compromise in the DMZ should not directly expose
the internal network. FW2 restricts the DMZ→LAN traffic to exactly what the
application needs (e.g., web→DB on port 3306).

## VPN: private tunnels over public wires

A **VPN** lets a remote user or site appear as if it is on the private network,
encrypting the journey across the hostile Internet.

- **Remote-access VPN:** one user connects in ("I'm in the office"). Typically
  **IPSec** (IKE + ESP) or an **SSL VPN** (browser-based).
- **Site-to-site VPN:** connects two offices over the Internet as if linked by a
  private line. Usually **IPSec in tunnel mode**.

### IPSec in a nutshell

- **AH (Authentication Header):** integrity + auth, no encryption.
- **ESP (Encapsulating Security Payload):** encryption + integrity/auth.
- **IKE (Internet Key Exchange):** negotiates the security association and keys.
- **Modes:** transport (end-to-end, host-to-host) and tunnel (network-to-network,
  the IP header is encapsulated).

## Cloud security: shared responsibility

The cloud is not "automatically secure." The famous split:

| | Cloud provider secures | Customer secures |
|---|---|---|
| IaaS | physical DC, hypervisor, host OS, storage infra | guest OS, apps, data, IAM, network config |
| PaaS | runtime, middleware | application code, data, users |
| SaaS | application + infra | data, user access, sharing settings |

The #1 cause of cloud breaches is **misconfiguration** on the customer side: open
S3 buckets, permissive security groups, exposed databases.

## Worked example: a SecureBank cloud deployment

```text
Users
  ↓ HTTPS (TLS 1.3)
Internet‑facing Load Balancer (regional)
  ↓
App servers (private subnet)   →   DB (private subnet, encrypted at rest)
  ↑                                 (security group: app tier only, port 3306)
WAF + Logging                    (backup: nightly encrypted snapshots)
IAM roles (no long-lived keys)   MFA required for admin console
```

- **Identity:** IAM roles + MFA, least-privilege policies.
- **Network:** private subnets; SG allows only app→DB.
- **Data:** encryption at rest (KMS) and in transit (TLS).
- **Ops:** centralized logging to a SIEM, config-as-code, automated tests.

## Virtualization (brief)

Virtual machines share a physical host under a **hypervisor**:

- **Type 1 (bare metal):** Xen, ESXi — runs directly on hardware (used in servers).
- **Type 2 (hosted):** VirtualBox — runs as an app on an OS.

The **hypervisor boundary** is the new "perimeter." A **VM escape** (crossing
that boundary) is a serious threat; keep hypervisors patched and minimize shared
channels.

## Grid and HPC: security at scale

- **Grid computing** federates resources across organizations — hard to secure
  because trust spans administrative domains (use federation / SAML).
- **HPC** (supercomputers) often run on flat, high-speed interconnects with weak
  perimeters and minimal user isolation — a single infected job can be catastrophic.

## Exam angle

For "explain the DMZ and firewall placement":

1. Draw Internet → FW1 → DMZ → FW2 → LAN.
2. State what goes in the DMZ (public servers) and the LAN (sensitive data/apps).
3. Explain the **default-deny** rule and why rules are order-sensitive.
4. Mention monitoring/logging.

> Tip: "shared responsibility" is a frequent exam phrase — always specify which
> party does what, and that **misconfiguration** is the top cloud risk.
