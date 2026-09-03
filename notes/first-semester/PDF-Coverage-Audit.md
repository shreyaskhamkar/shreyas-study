# Semester I PDF Coverage Audit

## Audit result

The five available subject collections were text-extracted and compared with
the corresponding module notes. Extraction succeeded for every source file:

| Subject | PDFs | Extracted pages | Extracted characters | Result |
|---|---:|---:|---:|---|
| Processor Architecture and Design | 93 | 1,789 | 2,533,519 | Named PDF topics covered after the Module 2 binary expansion |
| Computational Mathematics | 49 | 816 | 1,147,364 | All available Modules 1–4 PDF topics covered |
| Persistent Data Management | 80 | 1,244 | 1,797,101 | All Modules 1–11 PDF topics covered |
| Artificial Intelligence | 87 | 1,485 | 2,200,569 | All four PDF-folder areas covered across five note modules |
| Research Methodology | 92 | 1,680 | 2,591,493 | All Modules 1–11 PDF topics covered |
| **Total** | **401** | **7,014** | **10,270,046** | **0 extraction failures** |

“Covered” means that the lesson's named concepts, definitions, comparisons,
formulae/algorithms, and examinable distinctions are represented. The notes are
deliberately concise: repeated explanations, long case-study narratives, slide
boilerplate, and duplicate practical demonstrations are not copied verbatim.

## Corrections made during this audit

The main genuine omission was in Processor Architecture Module 2. Its PDFs
teach binary place value, conversions, arithmetic, signed/unsigned formats,
two's complement, fractions, and BCD, while the primary module note previously
mentioned only bits and bytes. These areas have now been added to:

- `Processor-Architecture-and-Design/Module-2.md`;
- `Processor-Architecture-and-Design/Quick-Revision.md`; and
- the 70-question Processor Architecture MCQ bank.

Other apparent automated mismatches were spelling variations in PDF filenames
(`Prepositional` for propositional, `Dependancy`, `Preceprtron`, and
`Practicle`) or a topic placed in an adjacent note. For example, the final
uninformed-search PDF in AI's source Module 1 is fully taught in AI note Module
2. These are not content gaps.

## Important source limitations

### Programming from First Principles

There is no matching Programming source folder under `PdfMaterial`. Its 14
modules are well structured and its MCQ bank now has 70 questions, but PDF-level
verification is impossible until the university PDFs or official syllabus for
OCA-501 MJ are added.

### Computational Mathematics

The source folders contain PDFs for Modules 1–4. `PdfMaterial/Computational
Mathematics/Module5` is empty, and there is no source Module 6 folder. The Vector
Spaces and Eigenvalues notes are useful, complete-looking supplementary
modules, but they cannot be certified against the supplied PDFs.

### Artificial Intelligence

The PDFs use four folders. Their fourth folder combines uncertainty and neural
networks; the notes split that material into Module 4 (uncertainty) and Module 5
(neural networks). This is an organizational difference, not missing coverage.

## Writing-quality assessment

The primary module notes consistently use learning outcomes, prerequisites,
short study blocks, plain-language explanations, definitions, worked examples,
common mistakes or exam traps, memory rules, and practice prompts. They are much
better suited to revision than the long, repetitive source PDFs.

Use the module notes to understand a topic, Quick Revision/Cheat Sheet to recall
it, and MCQ.md to test it. Return to a PDF only for its original diagram, a
longer worked example, or clarification of the lecturer's wording.
