export type ModuleEntry = {
  number: number
  path: string
}

export type SubjectModules = {
  name: string
  modules: ModuleEntry[]
}

const makeModules = (base: string, count: number): ModuleEntry[] =>
  Array.from({ length: count }, (_, index) => ({
    number: index + 1,
    path: `${base}/Module-${index + 1}`,
  }))

const makeModulesWithPracticalGuide = (base: string): ModuleEntry[] => [
  ...makeModules(base, 10),
  { number: 11, path: `${base}/Module-11-Practical-Guide` },
]

export const moduleCatalog: Record<string, SubjectModules> = {
  'artificial-intelligence': { name: 'Artificial Intelligence', modules: makeModules('/notes/first-semester/artificial-intelligence', 5) },
  'computational-mathematics': { name: 'Computational Mathematics', modules: makeModules('/notes/first-semester/computational-mathematics', 6) },
  'cyber-security': { name: 'Cyber Security', modules: makeModules('/notes/first-semester/cyber-security', 4) },
  'persistent-data-management': { name: 'Persistent Data Management', modules: makeModulesWithPracticalGuide('/notes/first-semester/persistent-data-management') },
  'processor-architecture-and-design': { name: 'Processor Architecture and Design', modules: makeModules('/notes/first-semester/Processor-Architecture-and-Design', 10) },
  'programming-from-first-principles': { name: 'Programming from First Principles', modules: makeModules('/notes/first-semester/programming-from-first-principles', 14) },
  'research-methodology': { name: 'Research Methodology', modules: makeModules('/notes/first-semester/research-methodology', 11) },
  'human-rights': { name: 'Human Rights', modules: makeModules('/notes/add-on-courses/human-rights', 6) },
  'introduction-to-constitution': { name: 'Introduction to Constitution', modules: makeModules('/notes/add-on-courses/introduction-to-constitution', 4) },
}

export function getModuleContext(path: string) {
  const match = path.match(/^\/notes\/(?:first-semester|add-on-courses)\/([^/]+)\/Module-(\d+)(?:-[^/]+)?$/i)
  if (!match) return null

  const subjectKey = match[1].toLowerCase()
  const subject = moduleCatalog[subjectKey]
  const moduleNumber = Number(match[2])
  if (!subject) return null

  const index = subject.modules.findIndex((module) => module.number === moduleNumber)
  if (index < 0) return null
  return { subjectKey, subject, moduleNumber, index }
}
