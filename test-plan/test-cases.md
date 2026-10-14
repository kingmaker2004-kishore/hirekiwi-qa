# HireKiwi QA Assessment — Test Cases

| ID | Scenario | Expected Result | Priority | Status |
|---|---|---|---|---|
| TC-01 | Open jobs page | Page loads successfully | P1 | Passed |
| TC-02 | Inspect page content | Page title and visible content can be inspected | P2 | Passed |
| TC-03 | Click Login | Login page opens | P1 | Passed |
| TC-04 | Verify visible job title | Observed listing title is visible | P1 | Passed |
| TC-05 | Click View details | Navigation to a different URL occurs | P1 | Passed |
| TC-06 | Verify job salary | Salary matches the published role details | P1 | Not Run |
| TC-07 | Verify experience requirement | Experience requirement is displayed correctly | P1 | Not Run |
| TC-08 | Submit empty required fields | Required-field validation appears | P1 | Not Run |
| TC-09 | Enter invalid email | Invalid email is rejected | P1 | Not Run |
| TC-10 | Enter whitespace-only input | Invalid blank input is rejected | P1 | Not Run |
| TC-11 | Enter minimum-length values | Valid boundary values are accepted | P2 | Not Run |
| TC-12 | Enter maximum-length values | Input limits are enforced correctly | P2 | Not Run |
| TC-13 | Submit valid test application | Confirmation is shown in a safe test environment | P1 | Not Run |
| TC-14 | Double-click submit | Duplicate requests are prevented or safely handled | P1 | Not Run |
| TC-15 | Simulate network failure | User receives an appropriate error or retry option | P1 | Not Run |
| TC-16 | Simulate server error | Failure is handled without false success | P1 | Not Run |
| TC-17 | Check browser compatibility | Core workflows work in supported browsers | P2 | Not Run |
| TC-18 | Submit malformed data | Invalid data is rejected safely | P1 | Not Run |

## Notes

- Passed statuses refer only to the browser checks executed so far.
- Other cases require further testing.
- Use a local mock application for form submission, duplicate requests, and failure scenarios.
- Do not submit fake applications to the live portal.
