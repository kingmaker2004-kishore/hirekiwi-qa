# HireKiwi QA Assessment — Job Application Workflow

## Project Overview

This project evaluates the publicly accessible Crew hiring portal for the HireKiwi QA Engineer assessment.

- **Testing approach:** Exploratory testing and browser automation
- **Automation framework:** Playwright
- **Language:** JavaScript
- **Browser:** Chromium
- **Live target:** https://crew.tinobritty.me/jobs
- **Local test application:** `mock/application.html`

## Objectives

- Verify job listing page availability and visible content.
- Test login navigation and job-details navigation.
- Validate required fields, invalid email addresses, and whitespace-only input.
- Test successful submission feedback and rapid duplicate-submission prevention using a local mock.
- Identify and document observed defects.
- Define safe approaches for boundary, network, server-error, and cross-browser testing.

## Project Structure

```text
hirekiwi-qa/
├── tests/
│   ├── job-listings.spec.js
│   ├── job-details.spec.js
│   └── application-form.spec.js
├── mock/
│   └── application.html
├── test-plan/
│   └── test-cases.md
├── bug-reports/
│   └── bugs.md
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

- Node.js and npm
- Visual Studio Code or another code editor
- Git
- Playwright Test

## Installation

Install project dependencies:

```bash
npm install
npx playwright install chromium
```

## Running Tests

Run the complete test suite:

```bash
npm test -- --workers=1
```

Run only the job listing tests:

```bash
npx playwright test tests/job-listings.spec.js --workers=1
```

Run the job details and navigation tests:

```bash
npx playwright test tests/job-details.spec.js --workers=1
```

Run the local application-form tests:

```bash
npx playwright test tests/application-form.spec.js --workers=1
```

Use the list reporter:

```bash
npx playwright test --reporter=list
```

## Test Results

### Latest recorded execution

**Result: 11 passed, 0 failed, in 14.8 seconds.**

The executed tests covered:

**Live portal checks**
1. Job listings page loads successfully.
2. Visible page content can be inspected.
3. Login navigation opens the login page.
4. The observed job listing title is visible.
5. The View details link navigates to a different URL.
6. An additional job listings page-load check.

**Local mock application checks**
7. Required fields prevent empty submission.
8. Invalid email prevents submission.
9. Whitespace-only name is rejected.
10. Valid input displays submission success feedback.
11. Rapid duplicate submission is prevented by the mock.

Results apply only to this recorded execution. Website content and behavior may change between runs.

## Test Plan

The test plan is documented in `test-plan/test-cases.md`. It includes scenarios for listing details, form validation, boundary values, successful submission, duplicate requests, network and server errors, and cross-browser compatibility.

Test statuses should be updated according to actual execution. Scenarios that have not been tested must remain marked **Not Run**.

## Bug Reports and Observations

Detailed investigation notes are maintained in `bug-reports/bugs.md`.

Additional observations include:

- **Authentication navigation:** Sign Up and Login controls reportedly appear unresponsive, while Continue with GitHub responds to clicks.
- **Saved Jobs company logo:** The logo for the Open Source Core Contributor listing appears broken on the Saved Jobs page, although the tester reports that it displays on the Jobs page.

These observations require reproducibility checks and further investigation. The underlying causes have not been confirmed.

## Safety and Limitations

- No fake applications were submitted to the live portal.
- Form validation and submission feedback were tested against a local HTML mock; these tests do not verify actual backend submission.
- Network failures, server errors, and cross-browser compatibility remain unverified.
- Additional boundary-value scenarios remain to be executed.
- The QA Engineer listing was not visible in the inspected jobs page content.
- A previously assumed job-details URL returned a 404 page and requires verification against the actual listing link.
- The current results do not establish that the complete application workflow is defect-free.

## Next Steps

- Expand automated coverage for boundary values and failure scenarios.
- Verify the authentication navigation observations.
- Investigate the missing company logo and compare image requests across pages.
- Verify the actual job-details URL.
- Add tests for server-side validation and error handling in an authorized test environment.
- Capture reproducible evidence and update test results after each execution.

## Assessment Integrity

This repository documents the tests performed, observed behavior, and remaining limitations. Findings are distinguished from confirmed defects, and test results should be reported only after the corresponding scenarios have been executed.