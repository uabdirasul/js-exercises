/**
 * Find the difference between 13 and n.
 * @param {number} n - The number to subtract from 13.
 */
function findDifference(n) {
  if (n <= 13) {
    console.log(13 - n);
  } else {
    console.log((n - 13) * 2);
  }
}

findDifference(43);
