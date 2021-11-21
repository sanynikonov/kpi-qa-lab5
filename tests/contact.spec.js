const { test, expect } = require('@playwright/test');

test('send contact', async ({ page }) => {

  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');

  // Click a:has-text("Contact")
  await page.click('a:has-text("Contact")');

  // Click input[type="text"]
  await page.click('input[type="text"]');

  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'freddiemercure@queen.uk');

  // Press Tab
  await page.press('input[type="text"]', 'Tab');

  // Fill #recipient-name
  await page.fill('#recipient-name', 'freddie mercury');

  // Press Tab
  await page.press('#recipient-name', 'Tab');

  // Fill textarea
  await page.fill('textarea', 'oh darling look at my cat delilah');

  page.on('dialog', dialog => dialog.accept());
  // Send message
  await page.click('text=Send message');

});