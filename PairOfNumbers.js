/**
 * This function takes two parameters x and y and checks if either of them is equal to 50 or if their sum is equal to 50.
 * If any of these conditions are true, it logs true to the console.
 * @param {number} x - The first number to check.
 * @param {number} y - The second number to check.
 */
function pairOfNumbers(x, y) {
  if (x == 50 || y == 50 || x + y == 50) {
    console.log(true);
  }
}

pairOfNumbers(30, 10);
