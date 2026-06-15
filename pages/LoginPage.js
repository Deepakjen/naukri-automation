export class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginButton = page.locator('#login_Layer');
        this.emailTextbox = page.locator("(//input[@placeholder='Enter your active Email ID / Username'])[1]");
        this.passwordTextbox = page.locator("//input[@placeholder='Enter your password']");
        this.signInButton = page.locator("//button[normalize-space()='Login']");
    }

    async navigate(url) {
        await this.page.goto(url, {
            waitUntil: 'networkidle'
        });
    }

    async login(email, password) {
        await this.loginButton.click();

        await this.emailTextbox.fill(email);

        await this.passwordTextbox.fill(password);

        await this.signInButton.click();
    }
}