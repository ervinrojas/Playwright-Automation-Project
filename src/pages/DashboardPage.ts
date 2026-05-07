import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  public url(): string {
    return 'https://playwright.dev/';
  }

  public title(): string {
    return 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  }
}
