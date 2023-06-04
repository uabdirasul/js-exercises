function isStartWithJava(str) {
  const beginningLetters = str.slice(0, 4).toLowerCase();

  if (beginningLetters === "java") {
    return true;
  }

  return false;
}

console.log(isStartWithJava("Javascript"));
