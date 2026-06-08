import { test, expect } from '@playwright/test';

test.describe('Resume Update Tests', () => {
  test('opens Naukri login layer', async ({ page }) => {

    // Open Naukri
    await page.goto('https://www.naukri.com/');

    // Click Login button
    await page.click('xpath=//*[@id="login_Layer"]');

    // Enter Email
    await page.locator('xpath=//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[2]/input')
      .fill('deepakjena903@gmail.com');

    // Enter Password
    await page.locator('xpath=//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[3]/input')
      .fill('Deepak@123');

    // Click Login
    await page.click('xpath=//*[@id="root"]/div[4]/div[2]/div/div/div[2]/div/form/div[6]/button');


    // Click "View Profile"
    await page.locator('//div[@class="nI-gNb-drawer__icon"]').click();
    await page.locator('//a[@class="nI-gNb-info__sub-link"]').click();
    await page.pause();



  });
});