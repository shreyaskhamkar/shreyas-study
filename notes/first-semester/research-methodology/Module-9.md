# Module 9: Creativity, Literature Review, and Technical Communication

[← Previous: Module 8](<Module-8.md>) · [Subject index](README.md) · [Next: Module 10 →](<Module-10.md>)

## Learning outcomes

After this module, you should be able to:

- apply creativity techniques to generate research ideas;
- conduct and structure a literature review;
- avoid plagiarism and reference correctly;
- write a research paper, thesis/report, and proposal;
- present research effectively;
- use LaTeX for documentation;
- understand IPR basics and protect innovations.


## Prerequisites

Complete [Module 8](Module-8.md) first. Review its quick-revision section if any term below feels unfamiliar.

## Study blocks

Study one block at a time. Work through its example and checkpoint before continuing.

| Block | Topic | Suggested time |
|---|---|---|
| 1 | Start here: the simple idea | 10-15 minutes |
| 2 | Creativity and innovation in research | 10-15 minutes |
| 3 | Literature review techniques | 10-15 minutes |
| 4 | Plagiarism, citation styles, and referencing tools | 10-15 minutes |
| 5 | Technical writing: papers, theses, reports | 10-15 minutes |
| 6 | Research presentation and conference skills | 10-15 minutes |
| 7 | Basics of LaTeX for research documentation | 10-15 minutes |
| 8 | Intellectual Property Rights (IPR) | 10-15 minutes |
| 9 | Case studies in high-impact research papers | 10-15 minutes |


## Start here: the simple idea

Great research needs two minds: the **creative** mind that asks new questions and
finds new connections, and the **scholarly** mind that records, cites, and shares
findings honestly. This module is about training both.

### Analogy

Creativity = the prospector finding a new gold vein; literature review =
surveying the mine to see where others dug; writing/presenting = showing the
vein clearly and honestly; IPR = staking your claim so others pay you respect (or
royalties).

## Creativity and innovation in research

### Wallas' model of creativity

1. **Preparation:** gather information on the problem.
2. **Incubation:** step away; let the subconscious work.
3. **Illumination:** the "aha!" insight.
4. **Verification:** test and refine the insight.

### Techniques to boost creativity

- **Brainstorming:** quantity first, judgment later.
- **SCAMPER:** Substitute/Combine/Adapt/Modify/Put to other uses/Eliminate/Reverse.
- **Six Thinking Hats:** view the problem from different "lenses."
- **Analogies / cross-domain transfer:** map ideas from another field.
- **Reversal / inversion:** ask "what would make this fail?"
- **Random stimulus:** link a random word to the problem.

### Innovation in research: the SC framework

- **Science (S):** understand (new theory/knowledge).
- **Creation (C):** apply/invent (new artefact/method).

### For our stress study

Idea: combine exercise with **peer accountability** (a social spin on an existing
intervention) → novel twist worth testing.

## Literature review techniques

### Part 1 — planning and searching

1. **Define keywords** from your question (PICO: Population, Intervention,
   Comparison, Outcome).
2. **Choose databases** (Google Scholar, IEEE Xplore, PubMed, Scopus).
3. **Set inclusion/exclusion criteria** (years, study type, language).
4. **Snowball/gray-literature search** (follow citations backward/forward).

### Part 2 — organising and synthesising

- **Chronological:** how ideas developed over time.
- **Thematic:** group by concepts/themes.
- **Methodological:** group by techniques used.
- **Theoretical:** group by theory/framework.

**Synthesise, don't just list.** Use a table:

| Author (year) | Approach | Key finding | Limitation |
|---|---|---|---|

### Literature matrix

Organise by theme → evidence → gap → your question. End the review by stating
the **gap** your research fills.

## Plagiarism, citation styles, and referencing tools

### Plagiarism = presenting others' work as your own

Kinds: copy-paste, paraphrase without credit, self-plagiarism, idea theft.

### Citation styles

- **APA:** author-date (used in social/behavioural sciences).
- **IEEE:** numbered brackets [1] (engineering/CS).
- **ACM:** numbered (computing).
- **Chicago:** notes-bibliography OR author-date.

### Referencing tools

- **Reference managers:** Zotero, Mendeley, EndNote.
- **LaTeX:** `BibTeX`/`biblatex` with a `.bib` file.

**Always cite:** direct quote, paraphrase, data, figures, ideas, methods.

## Technical writing: papers, theses, reports

### IMRaD structure (papers)

- **I**ntroduction — problem, gap, question, objectives.
- **M**ethods — design, data, analysis plan (reproducible).
- **R**esults — what you found (no interpretation).
- **A**nd **D**iscussion — interpret, limitations, implications.

### Thesis/report structure

Title, abstract, acknowledgements, table of contents, list of figures/tables,
**introduction**, literature review, methodology, results, discussion,
**conclusion**, references, appendices.

### Writing tips

- Use **active voice** and **present tense** for known facts; past tense for
  your results.
- One idea per paragraph; topic sentence + evidence + link.
- Write clearly to a non-expert reviewer: define acronyms, justify choices.

### CS research proposal (4-part plan used in the syllabus)

1. **Part 1.1–1.2:** introduce the problem and motivate the research question.
2. **Part 2:** literature review — the gap you will fill.
3. **Part 3:** proposed approach/methodology (design, experiments, evaluation).
4. **Part 4:** expected contribution, timeline (Gantt), and risks.

## Research presentation and conference skills

- **Abstract/first slide:** the one-sentence answer to "why does this matter?"
- **Story arc:** problem → gap → method → result → takeaway.
- **Visuals:** one message per slide; label axes; size fonts ≥24 pt.
- **Time management:** rehearse to the limit; build a buffer.
- **Q&A:** listen fully, answer the question asked, admit if you don't know.

## Basics of LaTeX for research documentation

LaTeX separates **content** from **formatting**:

```latex
\documentclass[12pt]{article}
\usepackage{graphicx, amssymb}
\begin{document}
\begin{figure}[h]
  \includegraphics[width=0.8\linewidth]{stress-plot}
  \caption{Stress scores declined (p<0.05).}
\end{figure}
$$ t = \frac{\bar x - \mu_0}{s/\sqrt{n}}, \quad df = n-1 $$
\bibliographystyle{plain}
\bibliography{myrefs}
\end{document}
```

**Why use it:** consistent formatting, superb maths, automatic references,
templates for journals/conferences.

## Intellectual Property Rights (IPR)

| Type | Protects | Duration | Example |
|---|---|---|---|
| **Patent** | Invention/functional innovation | ~20 years | A new sorting algorithm implemented in hardware |
| **Copyright** | Literary/artistic works | life + 50–70 yrs | Your paper, code, slides |
| **Trademark** | Brand names/logos | renewable (10 yr) | Product names |
| **Trade secret** | Secret know-how | as long as secret | Formula, process |

**For research:** publish to claim priority; file a patent before public
disclosure if it's an invention; never include proprietary code/images without
permission; cite third-party material.

## Case studies in high-impact research papers

1. **Page, Rabin: "Machine Learning in Static Analysis"** (SAS) — tight problem
   framing, reproducible benchmarks, clear ablation.
2. **Vaswani et al.: "Attention Is All You Need"** — clear motivation, simple
   figures, reproducible results, open source.
3. **A classic medical RCT** — pre-registered design, CONSORT checklist, effect
   size + CI.

**Common success factors:** a well-defined question, open/reproducible code,
honest limitations, clear figures.

## PDF-aligned additions

### Literature-review workflow

Define search terms and inclusion/exclusion criteria, search reliable databases,
screen titles and abstracts, read eligible sources, extract comparable evidence,
evaluate quality, and synthesize themes or gaps. A literature review is a
critical synthesis, not a list of summaries.

### Academic integrity and IPR

Plagiarism includes unattributed copying, close paraphrase without attribution,
and presenting another person's idea or data as one's own. Cite sources while
drafting and keep a source record. Patents protect qualifying inventions;
copyright protects original expression; trademarks distinguish goods or services.
Check ownership and disclosure rules before publishing software, datasets, or
inventions.

## Common mistakes

- Writing the literature review as a **summary list** (must synthesise to a gap).
- Citing so many sources that the reader can't tell which is yours.
- Claiming priority for ideas you didn't originate (or fail to cite prior art).
- Submitting to a journal whose scope doesn't match (desk-reject).
- Using one slide for three results (cognitive overload).

## Memory rules

- Creativity stages: Prep → Incubate → Illume → Verify.
- Literature review ends with the gap your work fills.
- IMRaD for papers; numbered cites in IEEE/ACM, author-date in APA.
- LaTeX for maths/plots/references; cite everything third-party.
- IPR: patent (invention) / copyright (writing) / trademark (brand) / trade secret.

## Check your understanding

1. In SCAMPER, what does "A" stand for?
2. What must a literature review end with?
3. Which citation style uses "[1]" numbers?
4. Name one reason to use LaTeX over Word for a CS paper.

## Answers

<details>
<summary>Reveal answers after attempting the questions</summary>

1. Adapt.
2. A clear statement of the gap the current research will fill.
3. IEEE (and ACM).
4. E.g., superior maths typesetting, automatic reference management, journal templates, reproducibility.

</details>

## Quick revision box

- Creativity: Wallas (prep/incubate/aha/verify); techniques (SCAMPER, brainstorming, analogies).
- Literature review: plan search (keywords/DBs/criteria) → synthesise (thematic/chronological) → gap → your question.
- Plagiarism = uncredited reuse; cite quotes, ideas, data, figures.
- Papers = IMRaD; proposals = problem/lit/approach/contribution+timeline.
- LaTeX: content/formatting separate; great for maths, refs, templates.
- IPR: patent (invention, ~20y), copyright (writing, long), trademark (brand), trade secret (indefinite).

## Exam guidance

Define the method, justify why it fits the research question, apply it to the running study, and mention one limitation or ethical consideration.

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

---

[← Previous: Module 8](<Module-8.md>) · [Subject index](README.md) · [Next: Module 10 →](<Module-10.md>)
