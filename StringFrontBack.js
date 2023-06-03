function changeBackFrontOfString(str) {
  let firstLetter = str[0];
  return `${firstLetter}${str}${firstLetter}`;
}

console.log(changeBackFrontOfString("JavaScript"));
