/**
 * Checks if a given year is a leap year in the Gregorian calendar.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
function leapYear(year) {
  // If the year is divisible by 100, it is a leap year only if it is also divisible by 400.
  // Otherwise, it is a leap year if it is divisible by 4.
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapYear(2024)); // true
console.log(leapYear(2022)); // false
