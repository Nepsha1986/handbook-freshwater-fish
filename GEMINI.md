# Gemini Assistant Guidelines

This document provides the templates and schemas to be used when adding new content for freshwater fish species.

When mentioning other fish species in an article, add an internal link to the corresponding article. The link format should be `[fish name](/en/scientific-name-slug)` for English articles and `[название рыбы](/ru/scientific-name-slug)` for Russian articles.

## Content Template (`.mdx`)

This is the template for the main content file.

```markdown
---
title: (fish name here will render as h1 in HTML document)
aliases: (array of common names of the fish)
excerpt: (short information about the fish, should have a length of 140 - 160 characters, will be rendered as meta name="description")
---

## Overview

(Provide a brief introduction to the fish species. Include basic information such as scientific name, common names, and
a general description of the fish’s appearance and natural habitat)

## Tank Requirements

(Detail the ideal tank conditions for the fish, including tank size, water temperature, pH levels, and necessary
equipment (e.g., filters, heaters). Mention any specific tank setup needs, such as substrate type or decoration
preferences)

## Feeding and Diet

(Explain the dietary needs of the fish. Include information on the types of food they eat in the wild and suitable
options for feeding them in an aquarium. Mention any special feeding practices or schedules that should be followed)

## Care and Maintenance

(Provide guidelines on how to care for the fish on a daily and weekly basis. Include information on water changes, tank
cleaning, and monitoring the fish’s health. Highlight any common health issues and how to prevent or treat them.)

## Compatibility

(Discuss how the fish interacts with other species. Include information on suitable tank mates and any species that
should be avoided. Mention whether the fish is aggressive, territorial, or peaceful)

## Breeding

(Describe the breeding behavior and requirements for the fish. Include information on how to create a suitable breeding
environment, signs of mating behavior, and how to care for the fry (baby fish). Provide tips for successfully breeding
the species in captivity)
```

## Metadata Structure (`_info.json`)

This JSON file contains structured data about the fish.

```json
{
  "scientificName": "scientific name of the fish",
  "family": "family of the fish",
  "traits": {
    "size": "length/size of grown-up fish with tail in centimeters. Format: ${from} - ${to}. Example: 4-6",
    "lifespan": "lifespan of the fish in years. Format: ${from} - ${to}. Example: 10-12",
    "activityTime": "activity time of the fish. Can be 'day' or 'night'. Example: day",
    "careLevel": "represents difficulty in care. Rate from 1 (easy) to 5 (hard). Example: 3",
    "behaviour": "represents behavior. Rate from 1 (peaceful) to 5 (aggressive). Example: 3",
    "breedingDifficulty": "represents breeding difficulty. Rate from 1 (very easy) to 5 (very hard). Example: 3"
  },
  "tankInfo": {
    "temperature": "water temperature in Celsius. Format: ${from} - ${to}. Example: 20-22",
    "volume": "tank minimum volume in liters. Example: 50",
    "gh": "water hardness in General Hardness. Format: ${from} - ${to}. Example: 9-19",
    "ph": "water acidity. Format: ${from} - ${to}. Example: 7.0-9.0"
  }
}
```

## Russian Content Template (`ru.mdx`)

```markdown
---
title: (название рыбы здесь будет отображаться как h1 в HTML-документе)
aliases: (массив распространённых названий рыбы)
excerpt: (краткая информация о рыбе, длина должна быть от 140 до 160 символов)
---

## Обзор

(Предоставьте краткое введение в вид рыбы. Включите основную информацию, такую как научное название,
распространённые названия и общее описание внешнего вида и естественной среды обитания рыбы)

## Требования к аквариуму

(Подробно опишите идеальные условия в аквариуме для рыбы, включая размер аквариума, температуру воды, уровни pH и
необходимое оборудование (например, фильтры, обогреватели). Упомяните любые особые потребности в обустройстве
аквариума, такие как тип субстрата или предпочтения в декоре)

## Кормление и диета

(Объясните пищевые потребности рыбы. Включите информацию о типах пищи, которую они едят в дикой природе, и подходящих
вариантах для кормления в аквариуме. Упомяните любые особые практики или графики кормления, которым следует
придерживаться)

## Уход и содержание

(Предоставьте рекомендации по уходу за рыбой на ежедневной и еженедельной основе. Включите информацию о подмене воды,
чистке аквариума и наблюдении за здоровьем рыбы. Выделите любые распространённые проблемы со здоровьем и способы их
профилактики или лечения)

## Совместимость

(Обсудите, как рыба взаимодействует с другими видами. Включите информацию о подходящих соседях по аквариуму и любых
видах, которых следует избегать. Укажите, является ли рыба агрессивной, территориальной или мирной)

## Разведение

(Опишите поведение и требования к разведению рыбы. Включите информацию о том, как создать подходящую среду для
размножения, признаки брачного поведения и как ухаживать за мальками (молодью рыбы). Предоставьте советы по успешному
разведению вида в неволе)
```

## Custom Directives

### improve_content

When the user types "improve_content", the following actions should be performed:

1.  Find the first three articles where `draft: true` is set in the frontmatter.
2.  Improve these articles by adding or modifying content to enhance their quality, without making any changes to the _info.json file.
3.  Assume that the draft articles may contain incorrect or misleading information.
4.  The only information to be trusted is the fish’s scientific name, which is derived from the folder name.
5.  The improvements should be written from the perspective of an experienced aquarist with deep knowledge of freshwater aquarium fish.
6.  Each folder contains articles in multiple languages, stored in [lang].mdx format. The Russian version (ru.mdx) is considered the primary source. Improvements must always be made to ru.mdx, and all other versions in the folder should be translations from the Russian version to the corresponding language. This ensures consistency across languages.
7.  Currently, only Russian (ru.mdx) and English (en.mdx) versions are supported.
8.  Once the three articles and their translations have been improved, the AI assistant must stop.

