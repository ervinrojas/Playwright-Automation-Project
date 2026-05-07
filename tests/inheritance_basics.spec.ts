import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { BasePage } from '../src/pages/BasePage';

test('Inheritance and Polymorphism demonstration', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  const pages: BasePage[] = [loginPage, dashboardPage];

  for (const p of pages) {
    console.log(`Processing page: ${p.constructor.name}`);

    await p.open();
    
    const actualTitle = await page.title();
    console.log(`Expected title: "${p.title()}"`);
    console.log(`Actual title: "${actualTitle}"`);

    expect(actualTitle).toContain(p.title());
  }
});
