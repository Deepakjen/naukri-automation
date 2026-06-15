import { test } from '@playwright/test';
import dotenv from 'dotenv';

import { LoginPage } from '../pages/LoginPage.js';
import { ProfilePage } from '../pages/ProfilePage.js';

dotenv.config();

test.describe('Resume Update', () => {

    test('TC-01: Verify User Can Update Resume Successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const profilePage = new ProfilePage(page);

        await loginPage.navigate(process.env.URL);

        await loginPage.login(
            process.env.EMAIL,
            process.env.PASSWORD
        );

        // Screenshot after login
        await page.screenshot({
            path: 'after-login.png',
            fullPage: true
        });

        await profilePage.openProfile();

        await profilePage.uploadResume(
            './resume/Deepak_Jena_Test_Engineer.pdf'
        );

        await page.screenshot({
            path: 'after-upload.png',
            fullPage: true
        });

    });

});