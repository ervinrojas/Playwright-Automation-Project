import { test, expect } from '@playwright/test';
import { FlakyService } from '../src/utils/FlakyService';

test('Error Handling: Retries and Custom Exceptions', async () => {
  const service = new FlakyService();

  console.log("\n>>> STARTING CASE 1: Retrying a flaky call");
  const result = await service.fetchDataWithRetry("valid_api_key");
  
  console.log(`Result of Case 1: ${result}`);
  expect(result).toBe("Successfully retrieved data");

  console.log("\n>>> STARTING CASE 2: Handling Custom Exception (TestDataMissingException)");
  try {
    await service.fetchDataWithRetry("");
  } catch (error) {
    const errorName = error instanceof Error ? error.name : 'UnknownError';
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    console.error(`Caught error in test: [${errorName}] - ${errorMessage}`);
    expect(errorName).toBe("TestDataMissingException");
  }
});
