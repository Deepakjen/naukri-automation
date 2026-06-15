# Naukri Resume Update Automation

A Playwright-based automation framework built using the Page Object Model (POM) design pattern to automate the Naukri profile login and resume update process.

## 🚀 Project Overview

This project automates the following workflow:

1. Open Naukri website
2. Login using valid credentials
3. Navigate to Profile Page
4. Upload updated resume
5. Generate execution reports

The framework is designed with maintainability and scalability in mind using Playwright and POM architecture.

---

## 🛠️ Tech Stack

- Playwright
- JavaScript
- Node.js
- Git & GitHub
- GitHub Actions
- Page Object Model (POM)

---

## 📁 Project Structure

```text
NAUKRI
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── pages
│   ├── LoginPage.js
│   └── ProfilePage.js
│
├── resume
│   └── Deepak_Jena_Test_Engineer.pdf
│
├── tests
│   └── resumeupdate.spec.js
│
├── playwright.config.js
├── package.json
├── .env
└── README.md
```

---

## 📌 Framework Features

- Page Object Model (POM)
- Environment Variable Management
- Resume Upload Automation
- Playwright HTML Reports
- GitHub Integration
- GitHub Actions CI/CD Setup
- Screenshot Capture for Debugging
- Secure Credentials using GitHub Secrets

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Deepakjen/naukri-automation.git
```

Navigate to the project:

```bash
cd naukri-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## 🔐 Environment Configuration

Create a `.env` file:

```env
URL=https://www.naukri.com/
EMAIL=your_email
PASSWORD=your_password
```

---

## ▶️ Execute Tests

Run in headed mode:

```bash
npx playwright test tests/resumeupdate.spec.js --headed
```

Run all tests:

```bash
npx playwright test
```

---

## 📊 View Reports

After execution:

```bash
npx playwright show-report
```

---

## 🔄 GitHub Actions Integration

This project is integrated with GitHub Actions for CI/CD execution.

Configured GitHub Secrets:

- URL
- EMAIL
- PASSWORD

Workflow File:

```text
.github/workflows/playwright.yml
```

---

## ⚠️ CI/CD Execution Limitation

The automation successfully executes in GitHub Actions until the authentication stage.

During cloud execution, Naukri triggers OTP verification because GitHub-hosted runners use new machines, browsers, and IP addresses for every run.

As OTP verification is designed to prevent unattended automation, the login process cannot be completed automatically in CI environments without:

- Dedicated test account
- Authentication bypass
- Session reuse strategy
- API-based authentication

The framework itself executes successfully and this behavior is expected from secure job portals.

---

## 📷 Debugging Approach

To investigate CI execution issues:

- Screenshot artifacts were generated
- GitHub Actions logs were analyzed
- Authentication flow was validated
- OTP verification was identified as the root cause

---

## 🎯 Key Learnings

- Playwright Automation Framework Design
- Page Object Model Implementation
- File Upload Automation
- Environment Variable Handling
- GitHub Actions CI/CD Integration
- Artifact & Report Management
- Cloud Execution Debugging
- Authentication Challenge Analysis

---

## 👨‍💻 Author

Deepak Jena

QA Automation Engineer

GitHub:
https://github.com/Deepakjen

LinkedIn:
https://www.linkedin.com/in/deepak-sdet/

---
