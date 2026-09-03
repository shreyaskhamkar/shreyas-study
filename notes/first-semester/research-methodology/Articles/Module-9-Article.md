# Module 9 Article: Ideas, Integrity, and Influence — Creativity, Writing, and IPR

## The big idea

A brilliant study that nobody can read, cite, or build on has no impact. Module 9
is the **dissemination half** of research: generating ideas, writing clearly,
protecting your work, and sharing credit fairly. The habits here determine whether
your work is *used* (and trusted).

## Creativity and innovation in research

### Wallas' model of the creative process

1. **Preparation** — gather everything known about the problem.
2. **Incubation** — step away; let the mind roam (walk, sleep).
3. **Illumination** — the "aha!" insight surfaces.
4. **Verification** — test, refine, and document the insight.

> Creativity in research is less about sudden genius and more about **prepared
> minds meeting diverse inputs**. Incubation is why the best idea often comes
> in the shower.

### Creativity boosters

- **SCAMPER:** Substitute, Combine, Adapt, Modify, Put to other use, Eliminate,
  Reverse.
- **Six Thinking Hats:** view the problem from six angles (facts, emotions,
  critique, optimism, creativity, process).
- **Cross-domain analogies:** map a technique from another field (networks in
  biology → social network analysis).
- **Constraint forcing:** impose a limit ("solve this with 3 sensors") to spark
  novel solutions.

### Innovation frameworks

| Framework | Emphasis |
|---|---|
| **STEEPLE** | Scan Social, Technological, Economic, Environmental, Political, Legal, Ethical forces for opportunities |
| **SCAMPER / 6 hats** | Idea generation techniques |
| **SCSA** (Strength-Conscious-Synthesis-Application) | (less standard; combine strengths) |
| Design thinking | Empathy → define → ideate → prototype → test |

## Literature review: the honest map of what exists

A literature review is **not** a summary — it is an **argument** that:

1. Maps the field.
2. Shows where the consensus and disputes lie.
3. Identifies the **specific gap** your work fills.

### Systematic vs narrative

- **Narrative (traditional):** interpretive, thematic.
- **Systematic:** protocol-driven (keywords, databases, Boolean strings,
  inclusion/exclusion criteria, quality appraisal). Reduces bias.

### A practical workflow

1. Build a **keyword list**: PSS OR "Perceived Stress Scale" AND "exercise" AND
   "students."
2. Search **multiple databases** (Google Scholar, PubMed, IEEE, Scopus).
3. Screen titles → abstracts → full texts (track counts in a PRISMA-style flow
   diagram).
4. Extract key data into a table.
5. **Synthesize** thematically; end by stating the gap.

## Plagiarism, citation, and referencing

### Plagiarism = presenting others' work as your own

Includes **copy-paste**, **patchwriting** (near-synonymous rewording),
**self-plagiarism** (reusing your own published text without citation), and
**idea theft**.

### Citation styles

| Style | Look | Field |
|---|---|---|
| **APA** | Author (year) | social sciences |
| **IEEE** | [1] (numbered) | engineering/CS |
| **ACM** | [1] (numbered) | computing |
| **Chicago** | footnote or author-date | humanities |

### Referencing tools

- **Zotero / Mendeley / EndNote:** import PDFs → auto-generate citations/bibliography.
- **BibTeX / biblatex:** in LaTeX.
- Rule: cite all **direct quotes** (quotation marks + page), **paraphrases** (cite),
  **data/figures** (cite source), even when you **rewrite** the text.

## Technical writing: papers, theses, reports

### Paper structure (IMRaD)

- **Introduction:** the problem, the gap, your question, and why it matters.
- **Methods:** enough detail to reproduce (including ethics/approvals).
- **Results:** facts only (tables/figures), no interpretation.
- **Discussion:** what the results mean, limitations, implications, future work.
- **References:** everything you used; nothing you didn't.

### Thesis report

Title → abstract → acknowledgements → table of contents/figures → 1 Introduction
→ 2 Literature review → 3 Methodology → 4 Results → 5 Discussion → 6 Conclusion
→ References → Appendices.

### Writing tips

- **One message per paragraph**; a clear topic sentence.
- **Define acronyms** on first use (PSS-10 = Perceived Stress Scale…).
- **Past tense** for what you did ("we measured"); **present** for general truths.
- **Active voice** where possible ("we tested" vs "it was tested").
- **Figures over tables** for trends; **tables for exact values**.

## LaTeX for research documentation

LaTeX separates **content** from **formatting**:

```latex
\documentclass[12pt,a4paper]{article}
\usepackage{graphicx, booktabs, amsmath}
\begin{document}
\begin{figure}[h]
  \includegraphics[width=0.8\linewidth]{stress-plot}
  \caption{Mean PSS score fell from 24.5 to 18.2 (p < 0.01).}
\end{figure}
$$
  t = \frac{\bar x - \mu_0}{s/\sqrt{n}}, \quad df = n-1
$$
\bibliographystyle{plain}
\bibliography{myrefs}
\end{document}
```

**Why use LaTeX:** consistent formatting, excellent maths, automatic references,
and journal/conference templates.

## Intellectual Property Rights (IPR)

| Right | Protects | Duration |
|---|---|---|
| **Patent** | Invention/function (new, useful, non-obvious) | ~20 years from filing |
| **Copyright** | Literary/artistic works (papers, code, slides) | ~50–70 years after death |
| **Trademark** | Brand names/logos | renewable (≈10 years) |
| **Trade secret** | Confidential formula/process | indefinite while secret |

### For researchers

- **Publish** (with a date) to establish **priority**.
- **Patent first, publish second** if it is an invention (a patent must be filed
  before public disclosure, or you lose novelty).
- **Respect others' IP:** no code/images without a license; cite datasets.
- **Open choices:** release code under MIT/Apache; data under CC0 where ethical.

## Research presentation and conference skills

- **First slide:** one sentence answering "why does this matter?"
- **Story arc:** problem → your idea → evidence → takeaway.
- **Visuals:** one message per slide, axes labelled, fonts ≥ 24 pt.
- **Practice:** rehearse to the time; prepare for one tough question.

## Case study: an high-impact paper's anatomy

Take a classic CS paper (e.g., "Attention Is All You Need"): motivation in one
paragraph, related work a page, method a clear figure, results a table of
baselines, discussion of limitations, and a reproducibility statement + code link.
Impact comes from **clarity** as much as novelty.

## Common mistakes

- Literature review as a ** laundry list** of papers (must synthesise to a gap).
- Citing 50 papers to sound authoritative instead of citing the key ones well.
- Writing the references by hand (use a reference manager).
- Submitting a "kitchen sink" paper with too many weak results.
- Forgetting figures/tables need descriptive captions.

## Memory rules

- Creativity stages: Prep → Incubate → Illume → Verify; use constraints to force novelty.
- Literature review = map + dispute + gap (never just a summary).
- Cite quotes, paraphrases, data, figures; use a reference manager.
- IMRaD for papers; cite everything; define acronyms.
- LaTeX = maths + refs + templates; better than Word for technical writing.
- IPR: patent (invention), copyright (writing), trademark (brand), trade secret.

## Check your understanding

1. In SCAMPER, what does "R" stand for?
2. Before submitting a patent, must you publish first or file first?
3. What does IMRaD stand for?
4. True or false: paraphrasing never needs a citation.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Reverse (also: put to other uses).
2. File first (public disclosure destroys novelty).
3. Introduction, Methods, Results, and Discussion.
4. False — paraphrases still need a citation.

</details>

## See also

- Module 10 (ethics) for the integrity angle of writing/publishing.
- `Glossary.md` (plagiarism, pre-registration, peer review, copyright, patent).
