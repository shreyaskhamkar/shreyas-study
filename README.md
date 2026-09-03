# Shreyas Study

Searchable MCA study notes published at
[study.shreyaskhamkar.com](https://study.shreyaskhamkar.com).

## Local development

```bash
npm install
npm run docs:dev
```

The Markdown content lives under `notes/`. Add new first-semester material to
`notes/first-semester/<subject>/` and add-on material to
`notes/add-on-courses/<course>/`.

Separate supplementary reading belongs under `notes/<topic>/`.

The site is built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.
