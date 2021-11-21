const { test, expect } = require('@playwright/test');

test('add product to cart', async ({ page }) => {

  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');

  // Click text=Samsung galaxy s6
  await page.click('text=Samsung galaxy s6');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1');

  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1#');

  // Click text=Cart
  await page.click('text=Cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');

  // Click text=Samsung galaxy s6
  await page.click('text=Samsung galaxy s6');

});