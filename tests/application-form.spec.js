const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const MOCK_URL = pathToFileURL(
  path.resolve(__dirname, '../mock/application.html')
).href;

test.beforeEach(async ({ page }) => {
  await page.goto(MOCK_URL);
});

test('TC-08: Required fields prevent empty submission', async ({ page }) => {
  await page.locator('#submit-button').click();

  await expect(page.locator('#name')).toHaveJSProperty(
    'validity.valueMissing', true
  );
  await expect(page.locator('#message')).toBeEmpty();
});

test('TC-09: Invalid email prevents submission', async ({ page }) => {
  await page.locator('#name').fill('Test Candidate');
  await page.locator('#email').fill('invalid-email');
  await page.locator('#submit-button').click();

  await expect(page.locator('#email')).toHaveJSProperty(
    'validity.typeMismatch', true
  );
  await expect(page.locator('#message')).toBeEmpty();
});

test('TC-10: Whitespace-only name is rejected', async ({ page }) => {
  await page.locator('#name').fill('   ');
  await page.locator('#email').fill('candidate@example.com');
  await page.locator('#submit-button').click();

  await expect(page.locator('#name')).toHaveJSProperty(
    'validity.valid', false
  );
  await expect(page.locator('#message')).toBeEmpty();
});

test('TC-13: Valid application displays success confirmation', async ({ page }) => {
  await page.locator('#name').fill('Test Candidate');
  await page.locator('#email').fill('candidate@example.com');
  await page.locator('#submit-button').click();

  await expect(page.locator('#message')).toHaveText(
    'Submitting application...'
  ).catch(() => {});

  await expect(page.locator('#message')).toHaveText(
    'Application submitted successfully.'
  );
  await expect(page.locator('#submit-button')).toBeEnabled();
});

test('TC-14: Rapid duplicate submission is prevented', async ({ page }) => {
  await page.locator('#name').fill('Test Candidate');
  await page.locator('#email').fill('candidate@example.com');

  await page.locator('#submit-button').evaluate(button => {
    button.click();
    button.click();
  });

  await expect.poll(() =>
    page.evaluate(() => window.submissionCount)
  ).toBe(1);

  await expect(page.locator('#message')).toHaveText(
    'Application submitted successfully.'
  );
});
