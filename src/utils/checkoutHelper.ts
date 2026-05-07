import { Page } from '@playwright/test';

export class CheckoutHelper {

  public static async login(page: Page, user: any) {
    await page.goto('https://example.com/login');
    await page.fill('#username', user.username);
    await page.fill('#password', user.password);
    await page.click('#login-button');
    await page.waitForURL('**/inventory');
  }

  public static async addItemsToCart(page: Page, items: any[]) {
    for (const item of items) {
      const isAvailable = await page.isVisible(`.item-${item.id}`);
      if (isAvailable) {
        await page.click(`.item-${item.id} .add-to-cart`);
      }
    }
  }

  public static async completeCheckout(page: Page, user: any): Promise<string> {
    await page.click('.shopping_cart_link');
    await page.click('#checkout');

    await page.fill('#first-name', user.firstName);
    await page.fill('#last-name', user.lastName);
    await page.fill('#postal-code', user.zipCode);

    await page.click('#continue');
    await page.click('#finish');

    return await page.innerText('.complete-header');
  }
}
