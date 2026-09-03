# Module 10 Article: Ethics — Doing Research You Can Defend

## The big idea

Research ethics is the **social contract** between researchers and society: you get
the privilege of studying people and publishing, and in return you must protect
participants and be honest. The three classic pillars — **respect for persons,
beneficence, and justice** (from the 1979 Belmont Report) — still structure every
ethics review today, whether for medical, social-science, or CS research.

## The three Belmont principles

| Principle | What it means | Research translation |
|---|---|---|
| **Respect for persons** | People can set their own limits | **Informed consent**; protect vulnerable groups |
| **Beneficence** | Maximise benefits, minimise harms | **Risk/benefit assessment** |
| **Justice** | Fairness in selection & burden | **Fair subject selection**; no exploitation |

## Informed consent

A participant must understand (and agree to) four things:

1. The **purpose** of the study.
2. The **procedures** (what they will do / data used).
3. The **risks** and **benefits** (realistic, not inflated).
4. Their **rights** — voluntary participation, withdrawal at any time, no penalty.

**Documentation:** usually a signed form; for online surveys, a checkbox + info
page. **Waiver** of consent is allowed only by the ethics committee (IRB/REC/IEC)
in exceptional cases.

### For our stress study

Consent must say: PSS data will be de-identified and stored encrypted, used only
for research, kept 5 years then destroyed; participation is voluntary and withdrawal
is fine at any point. Students should know the exercise programme is optional and
that their grades will not be affected.

## Ethical committees and approvals

- **IRB** (US), **REC** (UK), **IEC/ERB** (many countries) — independent bodies
  reviewing protocol, consent, and risk.
- They ask: **scientific merit** (is it worth the risk?), **risk-benefit**,
  **consent adequacy**, and **privacy safeguards**.
- **Continuing review:** most approvals are annual; major changes require amendment.
- **Expedited / exempt:** minimal-risk studies may skip full board review (but
  still need ethics approval).
- A study is **unethical to publish without approval** if it involved human
  subjects — and many high-profile retractions are for exactly this reason.

## Data privacy and responsible data handling

### Core duties

1. **Minimise:** collect only what the question needs (not "just in case").
2. **Anonymise / pseudonymise:** strip or code identifiers.
3. **Secure:** encryption + access controls (only the research team).
4. **Comply:** GDPR (EU), HIPAA (US health), local data laws.
5. **Plan retention & disposal:** keep per policy (often 5–10 years), then destroy.

### For our study

- Store PSS responses under a numeric code (no names); keep the name↔code key
  in a separate, encrypted file.
- Do not link to academic records unless consent explicitly covers it (it
  usually does not).

## Responsible publishing

- **Honest reporting:** include non-significant results, limits, and
  methodological weaknesses.
- **Authorship (ICMJE criteria):** all of (1) substantial contributions, (2)
  drafting/ revising, (3) final approval, (4) accountability. Avoid gift/guest
  and ghost authorship.
- **Reproducibility:** share code/data where ethical (repositories: Zenodo, OSF).
- **Pre-registration:** publicly register hypotheses/methods before data collection
  (clinicaltrials.gov, OSF) to stop HARKing (Hypothesizing After Results are Known).
- **Conflict of interest disclosure:** funding, consultancy, patents.

## Research misconduct: the FFP trio

| Misconduct | What | Harm |
|---|---|---|
| **Fabrication** | Making up data/results | False knowledge |
| **Falsification** | Manipulating data/analysis | False knowledge |
| **Plagiarism** | Using others' ideas/work without credit | Stolen credit |

Other **questionable practices** (not all are "misconduct" but are harmful):

- **HARKing** (Hypothesizing After Results are Known).
- **p-hacking** (trying many analyses until p < 0.05).
- **Salami slicing** (one study → many thin papers).
- **Selective reporting** (publishing only favorable outcomes).

## Case study: research misconduct

The case of a high-profile psychology paper retracted for **falsified data**:
the author recycled the same spreadsheet across experiments and doctored images.
Detection came from a reader who noticed identical background noise in supposedly
independent photographs. Lesson: **transparent data and code make fraud harder to
hide.**

## Case studies in research misconduct (brief survey)

1. **Cold fusion announcement (1989):** premature, non-reproducible claim → damaged credibility.
2. **Stapel affair (2011):** wide-scale fabrication → 58 retracted papers, reforms in Dutch psychology.
3. **Macchiarini trachea implants:** faked results + unapproved devices → patient deaths, retractions.

Common thread: lack of raw-data sharing and weak oversight enabled large-scale
fabrication to persist.

## Balancing openness with risk

Some data can't be shared (health data, vulnerable subjects). Balance:

- Maximise openness (code, synthetic data, descriptive stats),
- Minimise risk (redact identifiers, use data-use agreements),
- Be transparent about exactly what is and isn't shared and why.

## Exam angle

For "ethical considerations in research":

1. State the three Belmont principles and connect each to a practice (consent,
   risk/benefit, fair selection).
2. List the four things informed consent must cover.
3. Name the three FFP forms of misconduct and one additional questionable practice
   (HARKing or p-hacking).
4. Mention data minimisation, anonymisation, and GDPR/ HIPAA by name.

## Common mistakes

- Treating ethics as paperwork (ethics is integral, not a hurdle).
- Believing anonymity = automatic consent (still need justification).
- Collecting more data than required "for later use."
- Ghost/gift authorship (credit without contribution / contribution without credit).

## Memory rules

- Belmont: **Respect, Beneficence, Justice.**
- Consent: **purpose + procedures + risks/benefits + rights.**
- FFP: **Fabrication, Falsification, Plagiarism.**
- Privacy: **minimise, anonymise, secure, comply, dispose.**
- Publish honestly, share code/data, disclose conflicts.

## Check your understanding

1. Name the three Belmont principles.
2. What is the single most common form of scientific misconduct (worldwide)?
3. Give one reason to pre-register a study.
4. What does "minimisation" mean in data privacy?

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Respect for persons, beneficence, justice.
2. Questionable: plagiarism is most commonly reported (fabrication and falsification
   are less common but more serious). (Accept "self-plagiarism / duplicate
   publication" too.)
3. To prevent HARKing and p-hacking by locking in hypotheses/methods.
4. Collect only the minimum data needed to answer the research question.

</details>

## See also

- Module 9 for the writing/publishing side of research integrity.
- `Glossary.md` (human subjects, IRB, informed consent, conflict of interest).
