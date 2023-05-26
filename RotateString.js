function RotateString(className) {
  const element = document.querySelector("." + className);
  let text = element.textContent;

  setInterval(() => {
    text = text[text.length - 1] + text.slice(0, text.length - 1);
    element.textContent = text;
  }, 100);
}

RotateString("text");
