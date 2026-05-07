import { Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public abstract url(): string;

  public abstract title(): string;

  public async open(): Promise<void> {
    await this.page.goto(this.url());
  }
}
