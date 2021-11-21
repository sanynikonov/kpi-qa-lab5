const { test, expect } = require('@playwright/test');
test('login', async ({ page }) => {
  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
  // Click a:has-text("Log in")
  await page.click('a:has-text("Log in")');
  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', 'freddiemercury');
  // Click text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', 'freddiemercury');
  // Click button:has-text("Log in")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.demoblaze.com/' }*/),
    page.click('button:has-text("Log in")')
  ]);
  // Click text=Welcome freddiemercury
  await page.click('text=Welcome freddiemercury');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
});
