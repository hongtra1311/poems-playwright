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

Or use the provided npm scripts:

```bash
npm run test         # runs all tests (playwright test)
npm run test:ui      # open Playwright UI (playwright test --ui)
npm run test:search  # run tests tagged with @search
npm run test:smoke   # run tests tagged with @smoke
npm run test:poem    # run tests tagged with @poem
```

## Key issues and risks

1. The tests rely on UI text and DOM contents from https://poets.org/, which are outside our control and may change. Mitigations applied in this project include:

- **Retries** configured in Playwright (`retries: 2`) to reduce transient failures.
- **Increased timeouts** for tests and actions to accommodate slower responses.
- **baseURL** usage so tests assert relative paths and can run against different environments.
- **More robust assertions**: partial text matches and regex-based assertions are used instead of brittle exact full-paragraph matches.

Remaining brittleness: content edits on the upstream site can still break tests (e.g., large wording changes or removed pages). The strategy is to prefer representative assertions (stable substrings, element roles) and to avoid full-document exact matches where possible; when upstream changes are expected, update the affected assertions to keep tests meaningful.
