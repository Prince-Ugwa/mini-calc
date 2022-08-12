const inputValue = document.querySelector(".input");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", calc);
});
function calc() {
  let btnValue = this.innerText;
  if (btnValue === "CE") {
    inputValue.innerText = " ";
    result.innerText = " ";
    return;
  }
  if (btnValue === "C") {
    inputValue.innerText = " ";
    result.innerText = " ";
    return;
  }
  if (btnValue === "Esc") {
    inputValue.innerText = inputValue.innerText.slice(0, -1);
    return;
  }
  if (btnValue === "=") {
    result.innerText = eval(inputValue.innerText);
  } else {
    inputValue.textContent += btnValue;
    return;
  }
}
