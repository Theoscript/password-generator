/**
 * arrays for all potential characters
 */
const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  ".",
  "?",
];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

/**
 * storing of the required html elements
 */
let rangeSliderValue = document.querySelector(".generator__range-value");
let sliderControl = document.querySelector("#generator__range");
let numberControl = document.querySelector("#generator__checkbox-number");
let symbolControl = document.querySelector("#generator__checkbox-symbol");
let passwordOutput = document.querySelector(".generator__password");
let copyControl = document.querySelector(".generator__copy");
let messageElement = document.querySelector(".generator__message");
let generateControl = document.querySelector(".generator__button");

/**
 * event listeners
 */
// slider value functionality
let passwordLength = 8; // default minimum password length
sliderControl.addEventListener("input", () => {
  rangeSliderValue.textContent = sliderControl.value;
  passwordLength = sliderControl.value;
});

// password generation functionality
generateControl.addEventListener("click", () => {
  let eligibleSelection = [];

  if (numberControl.checked && symbolControl.checked) {
    eligibleSelection = [...characters, ...symbols, ...numbers];
    let password = "";
    for (let i = 1; i <= passwordLength; i++) {
      password += eligibleSelection[getRandomIndex(eligibleSelection)];
      passwordOutput.textContent = password;
    }
  } else if (numberControl.checked) {
    eligibleSelection = [...characters, ...numbers];
    let password = "";
    for (let i = 1; i <= passwordLength; i++) {
      password += eligibleSelection[getRandomIndex(eligibleSelection)];
      passwordOutput.textContent = password;
    }
  } else if (symbolControl.checked) {
    eligibleSelection = [...characters, ...symbols];
    let password = "";
    for (let i = 1; i <= passwordLength; i++) {
      password += eligibleSelection[getRandomIndex(eligibleSelection)];
      passwordOutput.textContent = password;
    }
  } else {
    eligibleSelection = [...characters];
    let password = "";
    for (let i = 1; i <= passwordLength; i++) {
      password += eligibleSelection[getRandomIndex(eligibleSelection)];
      passwordOutput.textContent = password;
    }
  }
});

// password copy functionality
copyControl.addEventListener("click", () => {
  let copySelection = passwordOutput.textContent;

  if (copySelection === "") {
    messageElement.style.color = "#d7a54d";
    messageElement.textContent = "Please generate a password ⚠️";
  } else {
    navigator.clipboard.writeText(copySelection);
    messageElement.style.color = "var(--primary-200)";
    messageElement.textContent = "Successfully copied the password 🎉";
  }
});

// generates the random indexes from which characters are selected
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
