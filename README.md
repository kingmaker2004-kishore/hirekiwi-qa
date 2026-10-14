# HireKiwi QA Assessment — Job Application Workflow

## Project Overview

This project evaluates the publicly accessible Crew hiring portal for the HireKiwi QA Engineer assessment.

**Testing approach:** Exploratory testing and browser automation  
**Automation framework:** Playwright  
**Language:** JavaScript  
**Browser:** Chromium  
**Target:** https://crew.tinobritty.me/jobs

## Objectives

- Verify job listing page availability and visible content.
- Test login navigation and job listing navigation.
- Prepare positive, negative, and boundary test scenarios.
- Identify and document reproducible defects.
- Define safe approaches for submission and error-handling tests.

## Project Structure

```text
hirekiwi-qa/
├── tests/
│   ├── job-listings.spec.js
│   └── job-details.spec.js
├── test-plan/
│   └── test-cases.md
├── bug-reports/
│   └── bugs.md
├── screenshots/
├── package.json
└── README.md
```

## Prerequisites

- Node.js and npm
- Visual Studio Code or another code editor
- Playwright test package

## Installation

Install project dependencies:

```bash
npm install
npx playwright install chromium
```

If the project dependencies are not already recorded in package.json, install Playwright:

```bash
npm install --save-dev @playwright/test
```

## Run Tests

Run the complete test suite:

```bash
npx playwright test --workers=1
```

Run the job details test file:

```bash
npx playwright test tests/job-details.spec.js --workers=1
```

Run tests with a list reporter:

```bash
npx playwright test --reporter=list
```

## Test Results

### Latest recorded execution

The five tests in `tests/job-details.spec.js` passed in 17 seconds.

The checks covered:

1. Job listings page loads successfully.
2. Visible page content can be inspected.
3. Login navigation opens the login page.
4. The observed job listing title is visible.
5. The View details link navigates to a different URL.

These results apply to the recorded execution only. Website content can change between runs.

## Test Plan

Eighteen planned scenarios are documented in `test-plan/test-cases.md`. Scenarios not executed remain marked Not Run.

## Bug Reports

Investigation notes and testing limitations are documented in `bug-reports/bugs.md`. No confirmed application defects have been established in the current report.

## Safety and Limitations

- No fake applications were submitted to the live portal.
- The QA Engineer listing was not visible in the inspected jobs page content.
- The previously assumed job details URL returned a 404 page and still requires verification against the actual listing link.
- Form validation, duplicate submissions, network failures, server errors, and cross-browser compatibility have not yet been fully tested.
- The current automated checks do not establish that the complete application workflow is defect-free.

## Next Steps

- Expand automated coverage to at least five meaningful high-priority scenarios.
- Test form behavior against a local mock application.
- Verify the actual job details URL.
- Capture and document reproducible defects.
- Update test results after each execution.

## Assessment Integrity

This repository records the tests and observations performed so far. Results should be updated only after the corresponding scenarios have been executed.
