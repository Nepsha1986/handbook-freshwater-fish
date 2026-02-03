# CLAUDE.md - AI Assistant Guidelines

This document provides comprehensive guidelines for AI assistants working with the Handbook Freshwater Fish codebase.

## Project Overview

**Name:** Handbook Freshwater Fish
**Purpose:** A multilingual knowledge base for freshwater aquarium fish species, serving as a single source of truth for aquarium enthusiasts worldwide.

**Repository:** https://github.com/Nepsha1986/handbook-freshwater-fish

## Technology Stack

- **Language:** JavaScript/Node.js
- **Package Manager:** npm
- **Formatter:** Prettier (v3.3.3)
- **Testing:** Jest (v29.7.0) with Babel
- **Content Format:** MDX (Markdown + JSX) with JSON metadata

## Project Structure

```
handbook-freshwater-fish/
├── __tests__/                 # Test files
│   └── content.test.js        # Validates _info.json structure
├── content/                   # Fish species content (~303 species)
│   └── [species-slug]/        # One folder per species (kebab-case)
│       ├── _info.json         # Structured metadata (required)
│       ├── _img.webp          # Fish image (WebP format)
│       ├── en.mdx             # English content
│       └── ru.mdx             # Russian content (PRIMARY source)
├── babel.config.js            # Babel configuration
├── .prettierrc                # Prettier formatting rules
├── package.json               # Project configuration
├── README.md                  # Project overview
└── GEMINI.md                  # Content creation guidelines
```

## Development Commands

```bash
npm install          # Install dependencies
npm test             # Run Jest tests (validates all _info.json files)
npm run format:all   # Format all content files with Prettier
npm run format       # Run Prettier on specific files
```

## Content Structure

### Species Folder Naming

- Use kebab-case based on scientific name
- Example: `abramites-hypselonotus` for *Abramites hypselonotus*

### Metadata File (`_info.json`)

Every species folder must contain a `_info.json` file with this exact structure:

```json
{
  "scientificName": "Abramites hypselonotus",
  "family": "Anostomidae",
  "traits": {
    "size": "12-15",
    "lifespan": "5-10",
    "activityTime": "day",
    "careLevel": 4,
    "behaviour": 4,
    "breedingDifficulty": 5
  },
  "tankInfo": {
    "temperature": "22-28",
    "volume": 200,
    "gh": "5-15",
    "ph": "6.0-7.5"
  }
}
```

**Field Specifications:**

| Field | Type | Format/Values |
|-------|------|---------------|
| `scientificName` | string | Latin binomial name |
| `family` | string | Taxonomic family name |
| `traits.size` | string | `"min-max"` in centimeters |
| `traits.lifespan` | string | `"min-max"` in years |
| `traits.activityTime` | string | `"day"` or `"night"` |
| `traits.careLevel` | number | 1 (easy) to 5 (hard) |
| `traits.behaviour` | number | 1 (peaceful) to 5 (aggressive) |
| `traits.breedingDifficulty` | number | 1 (very easy) to 5 (very hard) |
| `tankInfo.temperature` | string | `"min-max"` in Celsius |
| `tankInfo.volume` | number | Minimum liters (integer) |
| `tankInfo.gh` | string | `"min-max"` General Hardness |
| `tankInfo.ph` | string | `"min-max"` pH value |

### Content Files (`.mdx`)

Each species has content files for supported languages:
- `ru.mdx` - Russian (PRIMARY source of truth)
- `en.mdx` - English (translation from Russian)

**MDX Frontmatter:**

```yaml
---
title: Fish Common Name
aliases: [Alternative Name 1, Alternative Name 2]
excerpt: Short description (140-160 characters)
draft: true  # Optional: marks incomplete articles
---
```

**Required Sections:**

1. `## Overview` - Introduction, scientific name, habitat, appearance
2. `## Tank Requirements` (or `## Требования к аквариуму`) - Tank size, water parameters
3. `## Feeding and Diet` (or `## Кормление и диета`) - Dietary needs
4. `## Care and Maintenance` (or `## Уход и содержание`) - Daily/weekly care
5. `## Compatibility` (or `## Совместимость`) - Tank mates, aggression
6. `## Breeding` (or `## Разведение`) - Reproduction information

### Image Files

- Format: WebP (preferred) or JPG
- Filename: `_img.webp`
- Typical size: ~150KB

## Code Conventions

### Formatting

Prettier is configured with:
- `printWidth`: 120 characters
- `tabWidth`: 2 spaces
- `proseWrap`: always (wraps prose content)

Run `npm run format:all` before committing.

### Internal Links

When referencing other fish species in articles:
- English: `[fish name](/en/scientific-name-slug)`
- Russian: `[название рыбы](/ru/scientific-name-slug)`

Example: `[Congo tetra](/en/phenacogrammus-interruptus)`

## Testing

The test suite validates all `_info.json` files against the expected schema:

```bash
npm test
```

Tests verify:
- All required fields are present
- Correct data types (strings vs numbers)
- Proper nested structure for `traits` and `tankInfo`

## Language Priority

**Russian (`ru.mdx`) is the PRIMARY source.** When improving or creating content:

1. Always create/modify Russian content first
2. English content should be translated from Russian
3. This ensures consistency across languages

## Content Quality Guidelines

When writing or improving content:

1. Write from the perspective of an experienced aquarist
2. Use accurate, factual information based on the scientific name
3. Keep excerpts between 140-160 characters
4. Include practical care advice for home aquariums
5. Mention specific water parameters and tank requirements
6. Use italics for scientific names: `_Abramites hypselonotus_`

## Draft Articles

Articles with `draft: true` in frontmatter:
- May contain incomplete or inaccurate information
- The only trusted data is the scientific name (from folder name)
- Should be improved before removing the draft flag

## Git Workflow

- Main development uses feature branches with PRs
- Semantic versioning (0.0.x increments)
- Commits should reference relevant changes clearly

## Common Tasks

### Adding a New Fish Species

1. Create folder: `content/[scientific-name-slug]/`
2. Create `_info.json` with all required metadata
3. Create `ru.mdx` (Russian content first)
4. Create `en.mdx` (English translation)
5. Add `_img.webp` image file
6. Run `npm test` to validate metadata
7. Run `npm run format:all` to format files

### Improving Existing Content

1. Check if `draft: true` is set
2. Verify scientific name matches folder name
3. Improve `ru.mdx` first (primary source)
4. Update `en.mdx` as translation
5. Do NOT modify `_info.json` unless specifically requested
6. Run tests and formatting before committing

## File Validation Checklist

Before committing changes, verify:

- [ ] `_info.json` passes schema validation (`npm test`)
- [ ] All numeric fields are numbers (not strings)
- [ ] All range fields use `"min-max"` format
- [ ] MDX frontmatter includes title, aliases, excerpt
- [ ] Excerpt is 140-160 characters
- [ ] All six content sections are present
- [ ] Files are formatted (`npm run format:all`)
