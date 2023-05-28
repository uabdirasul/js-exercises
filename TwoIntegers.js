/**
 * Determines if the signs of two numbers are different.
 * @param {number} x - The first number to check.
 * @param {number} y - The second number to check.
 */
function positiveOrNegative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

positiveOrNegative(1, -1);
