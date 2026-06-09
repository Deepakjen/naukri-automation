import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Resume Update Tests', () => {
  test('opens Naukri login layer', async ({ page }) => {

    // Open Naukri
    await page.goto('https://www.naukri.com/');

    // Click Login button
    await page.click('xpath=//*[@id="login_Layer"]');

    // Enter Email
    await page.locator("(//input[@placeholder='Enter your active Email ID / Username'])[1]")
    .fill(process.env.EMAIL || '');

    // Enter Password
    await page.locator("//input[@placeholder='Enter your password']")
      .fill(process.env.PASSWORD || '');

    // Click Login
    await page.click("//button[normalize-space()='Login']");


    // Click "View Profile"
    await page.locator('//div[@class="nI-gNb-drawer__icon"]').click();
    await page.locator('//a[@class="nI-gNb-info__sub-link"]').click();

  });
});