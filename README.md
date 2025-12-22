# POEMS Playwright Automation

Automation test project using Playwright for https://poets.org/

## Features

- Home Page.
- Search poems
  - Search The Waste Land by T.S.Eliot.
  - Search invalid input.
- Read The Waste Land.
- View information of poet.

## Setup

```bash
npm install
npx playwright install
```

## Run test cases

To run search feature

```bash
npx playwright test --grep @search
```

To run home feature

```bash
npx playwright test --grep @smoke
```

To run poem detail feature

```bash
npx playwright test --grep @poem
```

To run all test cases

```bash
npx playwright test
```
