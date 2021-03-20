// DOM ELements
var copy = document.getElementById("copy");
var passwordForm = document.getElementById("passwordGenForm");
var generate = document.getElementById("generate");
var result = document.getElementById("result");
var symbols = document.getElementById("symbols");
var numbers = document.getElementById("numbers");
var length = document.getElementById("length");
var upperCase = document.getElementById("upperCase");
// var lowerCase = document.getElementById("lowerCase");

//Variables
var lowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?"]
  upperCase.concat(lowerCase)
  lowerCase.concat(upperCase)
  symbols.concat(numbers)
  numbers.concat(symbols);

   // console.log(symbols)

copy.addEventListener("click", () => {
  var textarea = document.createElement("textarea");
  var copy = result.innerText;

  if (!copy) return;

  textarea.value = copy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard! <3");
});

  // Write Password Selection
passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var charAmount = length.value;
  var addUpperCase = upperCase.checked;
  // var addLowerCase = lowerCase.checked;
  var addNumbers = numbers.checked;
  var addSymbols = symbols.checked;
  var password = generatePassword(
    charAmount,
    addUpperCase,
    // addLowerCase,
    addNumbers,
    addSymbols,
  );
  result.innerText = password;
});

// Generate Password Area
var generatePassword = (
  charAmount,
  addUpperCase,
  // addLowerCase,
  addNumbers,
  addSymbols,
) => {
  var charCodes = lowerCase;
  if (addUpperCase) charCodes = charCodes.concat(upperCase);
  // if (addLowerCase) charCodes = charCodes.concat(lowerCase);
  // unsure of this line of code
  if(addNumbers) charCodes = charCodes.concat(numbers);
  if(addSymbols) charCodes = charCodes.concat(symbols);
  const passwordChars = [];
  for (var i = 0; i < charAmount; i++) {
    const characterCode =
    charCodes(Math.floor(Math.random() * charCodes.length));

    finalPassword + final 

    passwordChars.push(fromCharCodes(characterCode));
  }
  return finalPassword
};


