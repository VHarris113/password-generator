var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$^&*()-_=+<>,.?;:";

var finalPass = lowerCase.concat(
  upperCase.concat(numbers.concat(symbols.concat))
);

var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// If confirm, continue to next question series
// If cancel, then display goodbye message

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
}
// Assignment Code
var hello = window.confirm("Would you like a password?")

function generatePassword() {
  var writePassword = "";
  var chosenChars = "";
  var passLength = prompt(
    "How many characters do you want it to be? Choose between 8-129.",
    8
  );
  var confirmUpper = window.confirm("Would you like uppercase letters?");
  if (confirmUpper) {
    chosenChars += upperCase;
  }

  var confirmLower = window.confirm("Would you like lowercase letters?");
    if (confirmLower) {
        chosenChars += lowerCase;
    }
    var confirmNumber = window.confirm("Would you like numbers?");
    if (confirmNumber) {
        chosenChars += numbers;
    }
    var confirmSpecial = window.confirm("Would you like symbols?");
    if (confirmSpecial) {
        chosenChars += symbols;
    }


var writePassword = function() {
  for (var i = 0; i < passLength; i++) {
    writePassword = Math.floor(Math.random() * chosenChars.length);
  }

  return writePassword;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    