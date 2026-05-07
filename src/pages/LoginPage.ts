import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  public url(): string {
    return 'https://demo.playwright.dev/todomvc/';
  }

  public title(): string {
    return 'TodoMVC';
  }

  public async login(): Promise<void> {
    console.log('Performing login actions...');
  }
}
