// DOM ELements
var copy = document.getElementById("copy");
var passwordForm = document.getElementById("passwordGenForm");
var generate = document.getElementById("generate");
var result = document.getElementById("result");
var symbols = document.getElementById("symbols");
var numbers = document.getElementById("numbers");
var length = document.getElementById("length");
var upperCase = document.getElementById("upperCase");
var lowerCase = document.getElementById("lowerCase");

//Variables
var lowerCaseArray = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsArray = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?"]
  // upperCase.concat(lowerCase)
  // lowerCase.concat(upperCase)
  // symbols.concat(numbers)
  // numbers.concat(symbols);

   // console.log(symbols)

// length box 8-128
// options to choose
// 

copy.addEventListener("click", () => {
  var textarea = document.createElement("textarea");
  var copy = result.innerText;

  if (!copy) return;

  textarea.value = copy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard! ❤");
});

  // Write Password Selection
passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var charAmount = length.value;
  var addUpperCase = upperCase.checked;
  var addLowerCase = lowerCase.checked;
  var addNumbers = numbers.checked;
  var addSymbols = symbols.checked;
  var password = generatePassword(
    charAmount,
    addUpperCase,
    addLowerCase,
    addNumbers,
    addSymbols,
  );
  result.innerText = password;
});

// Generate Password Area
var generatePassword = (
  charAmount,
  addUpperCase,
  addLowerCase,
  addNumbers,
  addSymbols,
) => {
  var charCodes = [];
  if (addUpperCase) charCodes = charCodes.concat(upperCaseArray);
  if (addLowerCase) charCodes = charCodes.concat(lowerCaseArray);
  // unsure of this line of code
  if(addNumbers) charCodes = charCodes.concat(numbersArray);
  if(addSymbols) charCodes = charCodes.concat(symbolsArray);
  var passwordChars = "";
  for (var i = 0; i < charAmount; i++) {
    const characterCode = Math.floor(Math.random() * charCodes.length);

    //finalPassword + final 

    var tempVal = charCodes[characterCode];

    passwordChars += tempVal;
  }
  return passwordChars.toString();
};