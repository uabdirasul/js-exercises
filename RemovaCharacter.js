function removeCharacter(str, pos) {
  let firstPart = str.slice(0, pos);
  let secondPart = str.slice(pos + 1, str.length);

  return `${firstPart}${secondPart}`;
}

console.log(removeCharacter("Python", 3));
