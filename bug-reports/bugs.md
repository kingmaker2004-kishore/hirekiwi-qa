# Bug Reports — HireKiwi QA Assessment

## Current Status

No confirmed application defects have been documented yet.
Exploratory testing and automated checks are ongoing.

## Investigation 1 — QA Engineer listing URL

**Observation:** A previously assumed QA Engineer details URL returned a 404 page.

**Expected Result:** A valid job listing URL should open the corresponding job details page.

**Actual Result:** The tested URL displayed a 404 page.

**Severity:** Not assigned — the URL has not been verified as the actual link from the live listing.

**Status:** Needs verification.

**Evidence:** See the Playwright error context if retained in test-results.

**Next Action:** Verify the URL by opening the actual listing from the jobs page. Only report this as a confirmed defect if the genuine listing link reproduces the issue.

## Test Limitations

- The public jobs page showed an Open Source Core Contributor listing during testing.
- The QA Engineer listing was not present in the inspected page content.
- Live application submission was not performed.
- Form validation, duplicate submission, network failure, and server error scenarios still require testing in a safe mock environment.
- Browser compatibility beyond the browser used for the current tests has not been verified.

## Defect Reporting Rule

Only record a confirmed defect after reproducing the behavior and comparing it with an expected requirement. Include steps to reproduce, expected and actual results, severity, and evidence.
