/**
 * findSunday - finds the first Sunday of the year between startYear and endYear (inclusive)
 *
 * @param {number} startYear - the year to start searching from
 * @param {number} endYear - the year to stop searching at
 */
function findSunday(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    const date = new Date(year, 0, 1);

    if (date.getDay() === 0) {
      console.log(`1st January will be a Sunday ${year}`);
    }
  }
}

findSunday(2014, 2050);
