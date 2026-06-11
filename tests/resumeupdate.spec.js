import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Resume Update Tests', () => {
  test('opens Naukri login layer', async ({ page }) => {

    // Stealth the browser before navigation to reduce headless detection.
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
      Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
      Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
      Object.defineProperty(window, 'chrome', { get: () => ({ runtime: {} }) });
    });
    await page.setExtraHTTPHeaders({ 'accept-language': 'en-US,en;q=0.9' });

    // Open Naukri
    await page.goto('https://www.naukri.com/', {
      waitUntil: 'networkidle'
    });

    // Open the login overlay first.
    await page.locator('#login_Layer').click();
    await page.locator("(//input[@placeholder='Enter your active Email ID / Username'])[1]").waitFor({
      state: 'visible'
    });

    // Enter Email
    await page.locator("(//input[@placeholder='Enter your active Email ID / Username'])[1]").fill(process.env.EMAIL || '');

    // Enter Password
    await page.locator("//input[@placeholder='Enter your password']").fill(process.env.PASSWORD || '');

    // Click Login
    await page.click("//button[normalize-space()='Login']");

    // Click "View Profile"
    await page.locator('//div[@class="nI-gNb-drawer__icon"]').click();
    await page.locator('//a[@class="nI-gNb-info__sub-link"]').click();

  });
});