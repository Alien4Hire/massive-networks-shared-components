import { isStringNonEmpty, isStringAllowed, throwIfInvalid } from "../validators";

describe('validators', () => {
  afterEach(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve);
    });
  });
  describe('isStringNonEmpty', () => {
    
    it('when value is an empty string, then I expect it to return false', async () => {
      const options = { value: "" };
      const expectedReturnValue = false;
      const actualReturnValue = isStringNonEmpty(options);

      expect(actualReturnValue).toBe(expectedReturnValue);
    });
    it('when value is a non-empty string, then I expect it to return true', async () => {
      const options = {value: "non-empty string"};
      const expectedReturnValue = true;
      const actualReturnValue = isStringNonEmpty(options);

      expect(actualReturnValue).toBe(expectedReturnValue);
    });
  });

  describe('isStringAllowed', () => {
    it('when value is a non-empty string and allowedValues is an array of non-empty strings, and value is in allowedValues, then I expect it to return true', async () => {
      const options = {
        value: "non-empty string",
        allowedValues: ["non-empty string", "other string", "test string"]
      };
      const expectedReturnValue = true;
      const actualReturnValue = isStringAllowed(options);

      expect(actualReturnValue).toBe(expectedReturnValue);
    });
    it('when value is a non-empty string and allowedValues is an array of non-empty strings, and value is not in allowedValues, then I expect it to return false', async () => {
      const options = {
        value: "not included string",
        allowedValues: ["non-empty string", "other string", "test string"]
      };
      const expectedReturnValue = false;
      const actualReturnValue = isStringAllowed(options);

      expect(actualReturnValue).toBe(expectedReturnValue);
    });
    it('when value is a non-empty string and allowedValues is an empty array, then I expect it to return false', async () => {
      const options = {
        value: "not included string",
        allowedValues: []
      };
      const expectedReturnValue = false;
      const actualReturnValue = isStringAllowed(options);

      expect(actualReturnValue).toBe(expectedReturnValue);
    });
    it('when value is an empty string and allowedValues is an array of non-empty strings, then I expect it to return false', async () => {
      const options = {
        value: "",
        allowedValues: ["non-empty string", "other string", "test string"]
      };
      const expectedReturnValue = false;
      const actualReturnValue = isStringAllowed(options);

      expect(actualReturnValue).toBe(expectedReturnValue);
    });
    it('when value is an empty string and allowedValues is an empty array, then I expect it to return false', async () => {
      const options = {
        value: "",
        allowedValues: []
      };
      const expectedReturnValue = false;
      const actualReturnValue = isStringAllowed(options);

      expect(actualReturnValue).toBe(expectedReturnValue);
    });
  });
  describe('throwIfInvalid', () => {
    it('when the callback validator function returns true, then I expect no error to be thrown', async() => {
      const callback = () => true;
      const options = { value: "test" };
      const errorMessage = "The validator returned false";

      expect(() => throwIfInvalid(callback, options, errorMessage)).not.toThrow(errorMessage);
    });
    it('when the callback validator function returns false, then I expect an error to be thrown with the supplied message', async() => {
      const callback = () => false;
      const options = { value: "test" };
      const errorMessage = "The validator returned false";

      expect(() => throwIfInvalid(callback, options, errorMessage)).toThrow(errorMessage);
    });
  });
});