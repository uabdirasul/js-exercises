/**
 * Computes the sum of two numbers.
 * @param {number} firstN - The first number to add.
 * @param {number} secondN - The second number to add.
 */
function computeSum(firstN, secondN) {
  if (firstN == secondN) {
    console.log(3 * (firstN + secondN));
  } else {
    console.log(firstN + secondN);
  }
}

computeSum(3, 3);
