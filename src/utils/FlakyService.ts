import { TestDataMissingException } from '../exceptions/TestDataMissingException';

export class FlakyService {
  private attempts = 0;

  public async fetchData(apiKey: string): Promise<string> {
    if (!apiKey) {
      throw new TestDataMissingException("API_KEY");
    }

    this.attempts++;

    if (this.attempts === 1) {
      throw new Error("Network Timeout: Connection lost");
    }

    return "Successfully retrieved data";
  }

  public async fetchDataWithRetry(apiKey: string): Promise<string> {
    try {
      return await this.fetchData(apiKey);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.warn(`[FIRST FAILURE LOGGED]: ${errorMessage}. Retrying once...`);

      return await this.fetchData(apiKey);
    } finally {
      console.log("[CLEANUP]: Closing connection / Clearing temporary data.");
    }
  }
}
