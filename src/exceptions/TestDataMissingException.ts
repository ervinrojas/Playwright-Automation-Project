export class TestDataMissingException extends Error {
  constructor(dataName: string) {
    super(`CRITICAL ERROR: The required test data [${dataName}] is missing or undefined.`);
    this.name = "TestDataMissingException";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TestDataMissingException);
    }
  }
}
