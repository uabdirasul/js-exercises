function modifyString(str) {
  const beginningLetter = `${str[0]}${str[1]}`;
  const result = str;

  if (beginningLetter.toLowerCase() === "py") {
    return str;
  }

  return "py" + result;
}

console.log(modifyString("PTHON"));
