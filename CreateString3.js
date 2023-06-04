/**
 * Creates a new string with the last three letters of the given string repeated twice.
 *
 * @param {string} str The string to be processed.
 * @returns {string|boolean} The new string, or false if the given string is less than or equal to three characters long.
 */
function createStringFromGiven(str) {
  // Check if the string is less than or equal to three characters long.
  if (str <= 3) {
    // Return false.
    return false;
  }

  // Get the last three letters of the string.
  const lastLetters = str.slice(str.length - 3);

  // Return a new string with the last three letters repeated twice.
  return `${lastLetters}${str}${lastLetters}`;
}

console.log(createStringFromGiven("Swift"));
