// Assignment Code
var generateBtn = document.querySelector("#generate");

// Needed variables

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// abcdefghijklmnopqrstuvwxyz
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// "0123456789";
var symbols = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "=", "+", "?"];
// "!@#$^&*()-_=+<>,.?;:";
var randomPassword = "";

var chosenChars = ["lowerCase", "upperCase", "numbers", "symbols"];

// Ask user for input
var chosenChars = ["lowerCase", "upperCase", "numbers", "symbols"];
var passLength = "";
// confirm passlength
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;

function generatePassword() {

    // var donePassword = "";
    passLength = (prompt("How many characters would you like in your password? Pick 8 to 128."), 8);
    confirmUpper = confirm("Would you like uppercase letters?");
    confirmLower = confirm("Would you like lowercase letters?");
    confirmNumber = confirm("Would you like to add numbers?");
    confirmSpecial = confirm("Would you like to add special characters?");
    while (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false);
    for (var i = 0; i < passLength; i++);
    passLength = prompt("How many characters do you want it to be? Choose between 8-128.", 8);
    while (passLength < 8 || passLength > 128 || typeof(passLength) != "number" || passLength === NaN || passLength === null);
};

var chosenChars = ["lowerCase", "upperCase", "numbers", "symbols"];
// Write password to the #password input
function generatePassword() {
    // Ask user for input
    var chosenChars = ["lowerCase", "upperCase", "numbers", "symbols"];

    var confirmUpper = window.confirm("Would you like uppercase letters?");
    if (confirmUpper) {
      chosenChars += upperCase;
    };
    var confirmLower = window.confirm("Would you like lowercase letters?");
      if (confirmLower) {
          chosenChars += lowerCase;
      };
      var confirmNumber = window.confirm("Would you like numbers?");
      if (confirmNumber) {
          chosenChars += numbers;
      };
      var confirmSpecial = window.confirm("Would you like symbols?");
      if (confirmSpecial) {
          chosenChars += symbols;
      };

    

    // var passLength = function() {
    //     for (var i = 0; i < passLength; i++) {
    //     // var random = Math.floor(Math.random() * chosenChars.length);
    //     }
      

  passwordText.value = password;

}

// Add event listener to generate button
