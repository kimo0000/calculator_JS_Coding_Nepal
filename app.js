const inputEl = document.querySelector("input");
const btns = document.querySelectorAll("button");

let specialChars = ["%", "=", "*", "/", "-", "+"];
let output = "";

const calculate = (btnVal) => {
  if (btnVal === "=" && output !== "") {
    output = eval(output);
    console.log(output);
  } else if (btnVal === "AC") {
    output = "";
    console.log(output);
  } else if (btnVal === "DEL") {
    output = output.toString().slice(0, -1);
    console.log(output);
  } else {
    if (output === "" && specialChars.includes(btnVal)) return;
    output += btnVal;
    console.log(output);
  }

  inputEl.value = output;
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => calculate(btn.textContent));
});
