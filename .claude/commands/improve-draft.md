# Improve Draft Article

Find and improve the first draft fish article in this repository.

## Steps

### 1. Find Draft Article

Find the first `ru.mdx` file in the `content/` folder that contains `draft: true` in frontmatter:

```bash
grep -l "draft: true" content/*/ru.mdx | head -1
```

### 2. Analyze the Article

- Read the found `ru.mdx` file
- Read the corresponding `_info.json` in the same folder for scientific name and parameters
- Determine the fish scientific name from the folder name (kebab-case slug)

### 3. Improve Russian Article

Rewrite the article as a professional aquarist with years of experience:

- **Style:** Expert but accessible for beginners
- **Tone:** Informative, practical
- **Structure:** Keep all 6 required sections:
  1. `## Обзор` — introduction, description, species features
  2. `## Требования к аквариуму` — volume, water parameters, decoration
  3. `## Кормление и диета` — diet, feeding schedule
  4. `## Уход и содержание` — water changes, filtration, monitoring
  5. `## Совместимость` — suitable and unsuitable tank mates
  6. `## Разведение` — spawning conditions, fry care

**Frontmatter requirements:**
- REMOVE the `draft: true` line
- Keep `title` and `aliases`
- Ensure `excerpt` is wrapped in double quotes and contains 140-160 characters: `excerpt: "Your excerpt text here"`

**Content requirements:**
- Use italics for scientific names: `_Species name_`
- Add internal links to other species where appropriate: `[name](/ru/slug)`
- Specify exact water parameters from `_info.json`
- Write practical tips from real keeping experience

### 4. Create English Version

Create an `en.mdx` file in the same folder:

- Translate the improved Russian article to English
- Adapt section names:
  - `## Overview`
  - `## Tank Requirements`
  - `## Feeding and Diet`
  - `## Care and Maintenance`
  - `## Compatibility`
  - `## Breeding`
- Translate `title`, `aliases`, `excerpt` in frontmatter
- **Note:** Each language version may use different aliases to accommodate language-specific conventions (e.g., common names that exist only in one language, transliterations, or locally popular trade names)
- Change internal links to `/en/slug` format

### 5. Format Files

After creating/editing files, run:

```bash
npm run format:all
```

### 6. Verify

Ensure that:
- [ ] `draft: true` is removed from `ru.mdx`
- [ ] `excerpt` is within 140-160 characters (both versions)
- [ ] All 6 sections are present (both versions)
- [ ] Files are formatted

## Result

Report which article was improved (scientific name and file paths).
