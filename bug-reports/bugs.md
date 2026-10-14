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

## BUG-SAVED-001: Company logo missing on Saved Jobs page

**Module:** Saved Jobs — UI / Company branding

**Page:** https://crew.tinobritty.me/saved-jobs

**Severity:** Minor to moderate (to be confirmed)

**Priority:** Medium

**Status:** Observed; root cause not confirmed.

### Steps to reproduce
1. Sign in to the Crew portal.
2. Navigate to Saved Jobs.
3. Locate the "Open Source Core Contributor" job card.
4. Observe its company logo.
5. Compare it with the Product Designer card and the logo on the Jobs page.

### Expected result
The company logo should load correctly and display consistently on the Jobs and Saved Jobs pages.

### Actual result
The first saved job card displays a broken or missing company logo, while the Product Designer card displays its logo. The user reports that the first company's logo displays correctly on the Jobs page.

### Evidence
Screenshot provided by the tester showing the broken logo on the Saved Jobs page.

### Investigation notes
Compare the image URL and image-loading behavior between the Jobs and Saved Jobs pages. Check for an invalid image URL, incorrect image mapping, or a failed image request.

### Limitations
The root cause has not been verified. No confirmed implementation-level defect has been established.
