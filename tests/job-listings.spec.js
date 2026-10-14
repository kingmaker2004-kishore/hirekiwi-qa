const { test, expect } = require('@playwright/test');

test('Job listings page loads successfully', async ({ page }) => {
  const response = await page.goto('https://crew.tinobritty.me/jobs');

  expect(response).not.toBeNull();
  expect(response.status()).toBe(200);

  await expect(page.locator('body')).not.toBeEmpty();
});
