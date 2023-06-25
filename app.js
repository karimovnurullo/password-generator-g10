const input = document.querySelector(".input");
const copy = document.querySelector(".copy");
const rangeValue = document.querySelector(".range-value");
const rangeInput = document.querySelector(".range");
const generateBtn = document.querySelector(".generete-btn");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");

function updateInputValue(val) {
  rangeValue.textContent = val;
}

generateBtn.addEventListener("click", () => {
  const passwordLength = range.value;
  let chars = "";

  if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (numbers.checked) chars += "0123456789";
  if (symbols.checked) chars += "!@#$%^&*()[]{}<>?/";
  let password = generatePassword(passwordLength, chars);
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    !numbers.checked &&
    !symbols.checked
  ) {
    input.value = "Plaese select options";
  } else {
    input.value = password;
  }
});

function generatePassword(length, chars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIdx = Math.floor(Math.random() * chars.length);
    password += chars[randomIdx];
  }
  return password;
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  copy.textContent = "Copied";
  setTimeout(() => {
    copy.textContent = "Copy";
  }, 1000);
});
