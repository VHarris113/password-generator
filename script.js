// variables
var lowercase ='abcdefghijklmnopqrstuvwxyz';
var uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers ='0123456789';
var symbols='!@#$%^&*()_+{}:"<>?~';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var possiblePass = '';
  var finalPass='';
  //The password criteria for a user
  var passLength = parseInt(prompt("How many characters do you want in your password? Choose between 8-128", 8));
  //Make sure the numbers are in range
  if (isNaN(passLength)) {
    alert("This is not a number!");
    return "Please try again.";
  };
  if (passLength < 8) {
    alert("Not enough password characters.");
    return "Please try again.";
  };
  if (passLength > 128) {
    alert("This is too many characters.");
    return "Please try again.";
  };
  var lowerChoice = confirm("Do you want lowercase letters in your password?");
  if (lowerChoice) {
    possiblePass += lowercase;
  };
  var upperChoice = confirm("Do you want uppercase letters in your password?");
  if (upperChoice) {
    possiblePass += uppercase;
  };
  var numberChoice = confirm("Do you want numbers in your password?");
  if (numberChoice) {
    possiblePass += numbers;
  };
  var specialChoice = confirm("Do you want special characters in your password?");
  if (specialChoice) {
    possiblePass += symbols;
  };
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * possiblePass.length);
    var randomCharacter = possiblePass[randomIndex];
    finalPass += randomCharacter;
  }
  //Final
  return finalPass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);