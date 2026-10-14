
const { test, expect } = require('@playwright/test');

const JOBS_URL = 'https://crew.tinobritty.me/jobs';

// Test 1: Verify that the jobs page loads successfully
test('Job listings page loads successfully', async ({ page }) => {
  const response = await page.goto(JOBS_URL);

  expect(response).not.toBeNull();
  expect(response.status()).toBe(200);

  await expect(page.locator('body')).not.toBeEmpty();
});

// Test 2: Inspect the visible jobs page content
test('Inspect visible jobs page content', async ({ page }) => {
  await page.goto(JOBS_URL);

  await page.screenshot({
    path: 'test-results/jobs-page.png',
    fullPage: true
  });

  console.log('Page title:', await page.title());

  console.log(
    'Visible headings:',
    await page.locator('h1, h2, h3').allTextContents()
  );

  console.log(
    'Page text:',
    (await page.locator('body').innerText()).slice(0, 3000)
  );
});

// Test 3: Verify login navigation
test('Login navigation opens the login page', async ({ page }) => {
  await page.goto(JOBS_URL);

  await page.getByRole('link', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/login/);
});

// Test 4: Verify the observed job listing is visible
test('Visible job listing has a title', async ({ page }) => {
  await page.goto(JOBS_URL);

  await expect(
    page.getByRole('heading', {
      name: /Open Source Core Contributor/
    })
  ).toBeVisible();
});

// Test 5: Verify View details navigation
test('View details opens a different page', async ({ page }) => {
  await page.goto(JOBS_URL);

  const initialUrl = page.url();

  await page.getByText('View details', { exact: true }).click();

  await expect(page).not.toHaveURL(initialUrl);
});
