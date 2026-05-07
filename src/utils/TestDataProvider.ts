import { TestUser } from '../models/TestUser';

export class TestDataProvider {

  public static getFiveUsers(): TestUser[] {
    return [
      new TestUser('user1@example.com', 'admin', 'Juan', 'Perez'),
      new TestUser('user2@example.com', 'editor', 'Maria', 'Garcia'),
      new TestUser('user3@example.com', 'viewer', 'Carlos', 'Rodriguez'),
      new TestUser('user4@example.com', 'admin', 'Ana', 'Martinez'),
      new TestUser('user5@example.com', 'editor', 'Luis', 'Lopez'),
    ];
  }

  public static getBaseUrl(env: string): string {
    const envUrls: Record<string, string> = {
      'dev': 'https://dev.api.example.com',
      'staging': 'https://staging.api.example.com',
      'prod': 'https://api.example.com',
    };

    return envUrls[env] || envUrls['dev'];
  }
}
