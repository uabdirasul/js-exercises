function calculateDaysUntilChristmas() {
  const today = new Date();
  let christmasYear = today.getFullYear();
  if (today.getMonth() === 11 && today.getDate() > 25) {
    christmasYear += 1;
  }
  const christmasDate = new Date(christmasYear, 11, 25);
  const dayMilliseconds = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil(
    (christmasDate.getTime() - today.getTime()) / dayMilliseconds
  );
  console.log(`There are ${daysLeft} days left until Christmas!`);
}

calculateDaysUntilChristmas();
