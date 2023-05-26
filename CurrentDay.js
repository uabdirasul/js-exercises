function displayDate() {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const am_pm = date.getHours() >= 12 ? "PM" : "AM";
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  const time = hours + " " + am_pm + " : " + minutes + " : " + seconds;
  return time;
}

displayDate();
