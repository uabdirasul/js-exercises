function randomInteger() {
  const randomNumber = Math.ceil(Math.random() * 10);
  const guessedNumber = prompt("Your guess?");

  if (randomNumber == guessedNumber) {
    alert("Good work");
    return;
  }

  alert("Not matched");
}

randomInteger();
