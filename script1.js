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
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$^&*()-_=+<>,.?;:";
  upperCase.concat(lowerCase)
  lowerCase.concat(upperCase)
  symbols.concat(numbers)
  numbers.concat(symbols);

  // console.log(symbols)
  // Generate Code
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

var generatePassword = (
  charAmount,
  addUpperCase,
  addLowerCase,
  addNumbers,
  addSymbols,
) => {
  var defaultChar = lowerCase;
  if (addUpperCase) defaultChar = defaultChar.concat(upperCase);
  if (addLowerCase) defaultChar = defaultChar.concat(lowerCase);
  // unsure of this line of code
  if(addNumbers) defaultChar = defaultChar.concat(numbers);
  if(addSymbols) defaultChar = defaultChar.concat(symbols);
  var passwordChars = [];
  for (var i = 0; i < charAmount; i++) {
    var charCode =
    generatePassword(Math.floor(Math.random() * generatePassword.length));
    passwordChars.push(charCode);
  }

  return passwordChars.join("");

}