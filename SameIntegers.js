/**
 * This function determines whether two integers are equal to 8, or if their sum or difference is equal to 8.
 * @param {number} firstNumber The first integer to be checked.
 * @param {number} secondNumber The second integer to be checked.
 * @returns {boolean} Whether the two integers are equal to 8, or if their sum or difference is equal to 8.
 */

function defineInteger(firstNumber, secondNumber) {
  if (firstNumber === 8 || secondNumber === 8) {
    return true;
  }

  if (
    firstNumber + secondNumber === 8 ||
    Math.abs(firstNumber - secondNumber) === 8
  ) {
    return true;
  }

  return false;
}

console.log(defineInteger(5, 3));
