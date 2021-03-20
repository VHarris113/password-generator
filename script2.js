// Assignment Code
var generateBtn = document.querySelector("#generate");

// Needed variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$^&*()-_=+<>,.?;:";

// Ask user for input
var chosenChars = ["lowerCase", "upperCase", "numbers", "symbols"];
var passLength = "";
// confirm passlength
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;
  
function generatePassword() {
    passLength = (prompt("How many characters would you like in your password? Pick 8 to 128."), 8);
    while(passLength <= 7 || passLength >= 129) {
        alert("Password must be between 8-128 characters.");
        var passLength = (prompt("How many characters would you like? Pick 8 to 128."));
    }

    var confirmUpper = confirm("Would you like uppercase letters?");
    var confirmLower = confirm("Would you like lowercase letters?");
    var confirmNumber = confirm("Would you like to add numbers?");
    var confirmSpecial = confirm("Would you like to add special characters?");
    while (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false) {
        alert("Come on, you gotta pick one.");
        return;
    }
}

var chosenChars = ["lowerCase", "upperCase", "numbers", "symbols"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    if (confirmSpecial) {
        chosenChars = 
    }



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
