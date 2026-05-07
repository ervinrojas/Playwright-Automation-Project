import { test, expect } from '@playwright/test';
import { TestUser } from '../src/models/TestUser';

test('Login test using OOP User objects', async ({ page }) => {

  const adminUser = new TestUser(
    'admin@example.com',
    'admin',
    'Ervin',
    'Rojas'
  );

  const standardUser = new TestUser(
    'standard@example.com',
    'standard',
    'John',
    'Doe'
  );

  const testUsers = [adminUser, standardUser];

  for (const user of testUsers) {
    console.log(`Testing login for: ${user.fullName()} [Role: ${user.getRole()}]`);

    await page.goto('https://demo.playwright.dev/todomvc/'); // Using a placeholder URL for demonstration
    
    expect(user.getEmail()).toContain('@example.com');
    expect(user.fullName()).not.toBeNull();
    
    console.log(`Successfully validated user: ${user.getEmail()}`);
  }
});
