import { defineConfig } from 'vitepress'

const firstSemester = (title: string, path: string, modules: number[]) => ({
  text: title,
  collapsed: true,
  items: [
    { text: 'Subject overview', link: `/notes/first-semester/${path}/README` },
    ...modules.map((module) => ({
      text: `Module ${module}`,
      link: `/notes/first-semester/${path}/Module-${module}`,
    })),
  ],
})

export default defineConfig({
  title: 'Shreyas Study',
  description: 'Searchable MCA study notes and revision material.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Shreyas Study',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'First Semester', link: '/notes/first-semester/' },
      { text: 'Add-on Courses', link: '/notes/add-on-courses/' },
    ],
    sidebar: {
      '/notes/first-semester/': [
        { text: 'First Semester', link: '/notes/first-semester/' },
        firstSemester('Artificial Intelligence', 'artificial-intelligence', [1, 2, 3, 4, 5]),
        firstSemester('Computational Mathematics', 'computational-mathematics', [1, 2, 3, 4, 5, 6]),
        firstSemester('Cyber Security', 'cyber-security', [1, 2, 3, 4]),
        firstSemester('Persistent Data Management', 'persistent-data-management', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        firstSemester('Processor Architecture and Design', 'Processor-Architecture-and-Design', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        firstSemester('Programming from First Principles', 'programming-from-first-principles', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
        { text: 'Supplementary: 56 Laws of Software Engineering', link: '/notes/first-semester/programming-from-first-principles/Software-Engineering-56-Laws-Combined-Article' },
        firstSemester('Research Methodology', 'research-methodology', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      ],
      '/notes/add-on-courses/': [
        { text: 'Add-on Courses', link: '/notes/add-on-courses/' },
        { text: 'Human Rights', link: '/notes/add-on-courses/human-rights/README' },
        { text: 'Introduction to Constitution', link: '/notes/add-on-courses/introduction-to-constitution/README' },
      ],
    },
    search: { provider: 'local' },
    outline: 'deep',
    socialLinks: [],
    footer: {
      message: 'Built from Markdown with VitePress.',
    },
  },
})
