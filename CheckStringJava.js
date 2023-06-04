/**
 * Checks if the given string starts with the word "java".
 *
 * @param {string} str The string to check.
 * @returns {boolean} Whether or not the string starts with "java".
 */
function isStartWithJava(str) {
  // Get the first 4 letters of the string and convert them to lowercase.
  const beginningLetters = str.slice(0, 4).toLowerCase();

  // Return true if the first 4 letters are "java".
  return beginningLetters === "java";
}

console.log(isStartWithJava("Javascript"));
