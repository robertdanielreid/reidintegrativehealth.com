import { test, expect } from '@playwright/test';

test('capture screenshots', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'verification/home.png', fullPage: true });

  await page.goto('http://localhost:3000/services');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/services.png', fullPage: true });

  await page.goto('http://localhost:3000/about');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/about_new.png', fullPage: true });

  await page.goto('http://localhost:3000/contact');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/contact.png', fullPage: true });
});
