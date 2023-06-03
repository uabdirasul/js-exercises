/**
 * Checks if the given number is positive and a multiple of 3 or 7.
 *
 * @param {number} number The number to check.
 * @returns {boolean} True if the number is positive and a multiple of 3 or 7, false otherwise.
 */
function checkPositive(number) {
  // Check if the number is positive.
  if (number > 0) {
    // Check if the number is a multiple of 3 or 7.
    return checkMultiple(number);
  }

  // The number is not positive, so return false.
  return false;
}

/**
 * Checks if the given number is a multiple of 3 or 7.
 *
 * @param {number} number The number to check.
 * @returns {boolean} True if the number is a multiple of 3 or 7, false otherwise.
 */
function checkMultiple(number) {
  // Check if the number is a multiple of 3.
  if (number % 3 === 0) {
    return true;
  }

  // Check if the number is a multiple of 7.
  if (number % 7 === 0) {
    return true;
  }

  // The number is not a multiple of 3 or 7, so return false.
  return false;
}

console.log(checkPositive(14));
