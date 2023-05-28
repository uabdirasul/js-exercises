const firstN = document.querySelector("#firstN");
const secondN = document.querySelector("#secondN");

const multiplyBtn = document.querySelector(".multiply-btn");
const divideBtn = document.querySelector(".divide-btn");

const result = document.querySelector(".result");

multiplyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstN.value && secondN.value) {
    const resultMultiply = firstN.value * secondN.value;
    result.innerHTML = resultMultiply;
  }
});

divideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstN.value && secondN.value) {
    const resultDivide = firstN.value / secondN.value;
    result.innerHTML = resultDivide;
  }
});
