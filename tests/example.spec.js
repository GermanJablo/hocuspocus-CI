import { test, expect } from '@playwright/test';

test('has title', async ({ page, browser }) => {
  await page.goto('http://localhost:5173');
  const context = await browser.newContext();
  const page2 = await context.newPage();
  await page2.goto('http://localhost:5173');
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Reset counter' }).click();
  await page.getByRole('button', { name: 'Increment Counter' }).click();
  await page.getByRole('button', { name: 'Increment Counter' }).click();
  await page.getByRole('button', { name: 'Increment Counter' }).click();
  const locator = page.locator('text=3');
  const locator2 = page2.locator('text=3');
  await expect(locator).toHaveText('3');
  await expect(locator2).toHaveText('3');
  await expect(page).toHaveTitle("Hocuspocus CI");
},);
