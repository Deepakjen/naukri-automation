export class ProfilePage {
    constructor(page) {
        this.page = page;

        this.profileIcon = page.locator('//div[@class="nI-gNb-drawer__icon"]');
        this.viewProfile = page.locator('//a[@class="nI-gNb-info__sub-link"]');
        this.updateResumeButton = page.locator("//input[@value='Update resume']");
    }

    async openProfile() {
        await this.profileIcon.click();
        await this.viewProfile.click();
    }

    async uploadResume(filePath) {
        await this.updateResumeButton.click();

        await this.page.setInputFiles(
            'input[type="file"]',
            filePath
        );
    }
}