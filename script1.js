// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789";
// var symbols = "!@#$^&*()-_=+<>,.?;:";
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// abcdefghijklmnopqrstuvwxyz
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// "0123456789";
var symbols = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "=", "+", "?"];
// "!@#$^&*()-_=+<>,.?;:";



var finalPass = lowerCase.concat(
  upperCase.concat(numbers.concat(symbols.concat))
);

var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// If confirm, continue to next question series
// If cancel, then display goodbye message



// Write password to the #password input
function writePassword() {
  

  passwordText.value = password;
}
// Assignment Code
if (window.confirm("Would you like a password?")) {
 
} else {
  alert("Goodbye!")
}




function generatePassword() {
  // Ask user for input
  var chosenChars = ["lowerCase", "upperCase", "numbers", "symbols"];
  var passLength = prompt(
    "How many characters do you want it to be? Choose between 8-128.",
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


var passLength = function() {
  for (var i = 0; i < passLength; i++) {
  var random = Math.floor(Math.random() * chosenChars.length);
  }

  password += chosenChars[random];

  return password;
  
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordText);
    // gives us password
