function changeStringPosition(word) {
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];

  return `${lastLetter}${word.slice(1, word.length - 1)}${firstLetter}`;
}

console.log(changeStringPosition("rasul"));
