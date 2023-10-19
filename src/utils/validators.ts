/**
 * Higher-order function to wrap a validator function.
 * 
 * This allows us to separate the responsibilities of validating data and throwing an error when the data is invalid.
 * Validators can then be used in conditional logic where it's inappropriate to throw an error when they fail, and we 
 * can be intentional about cases where errors should be thrown.
 * @param cb - callback function
 * @param options - options object containing callback function arguments
 * @param errorMessage - error message to throw if the callback function returns false
 * @throws Error - throws a generic Error if the callback returns false
 * @returns void
 */
export const throwIfInvalid = (
  cb: Function, 
  options: Object, 
  errorMessage: string): void => {
  
  const isValid = cb(options);
  if (!isValid) {
      throw new Error(errorMessage);
  }
}

/**
 * Validates whether a string is non-empty.
 * 
 * @param {string} value - string to be validated
 * @returns boolean - true if string is non-empty, false otherwise
 */
export const isStringNonEmpty = (options: {value:string}): boolean => {
  const {value} = {...options};
  return typeof value === "string" && value.trim() !== "";
}

/**
 * Validates whether a string is within a range of allowed values.
 * 
 * @param {string} value - string to be validated
 * @param {string[]} allowedValues - array of valid strings to validate against
 * @returns boolean - true if string is in range, false otherwise
 */
export const isStringAllowed = (options: {value: string, allowedValues: string[]}): boolean => {
  const {value, allowedValues} = {...options};
  const allowedValuesSet = new Set(allowedValues);
  return allowedValuesSet.has(value);
}

