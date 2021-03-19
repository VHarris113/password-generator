var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z"]
var randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var randomSymbols = ["!", "@", "#", "$", "^", "&", "*", "(", ")"]
var chosenChars = [];
var finalPass = lowerCase.concat(upperCase.concat(randomNumber.concat(randomSymbols.concat)))

var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

var userChoice = window.confirm("Halt! Would you like a password?")
    // If confirm, continue to next
    // If cancel, then display goodbye message

  

// Write password to the #password input
function writePassword() {
    var password = generatePassword(chosenCharsArray); {
    }
    
    passwordText.value = password;
  
};
// Assignment Code

// var userGen = function () {
    var chosenChars = window.confirm("Would you like uppercase letters?")
          if (upperCase) {
    var chosenChars = chosenChars.concat(finalPass);
        window.confirm("Would you like lowercase letters?");
};      if (lowerCase) {
    var chosenChars = chosenChars.concat(finalPass);
};
        window.confirm("Do you want to add symbols?");
      if (randomSymbols) {
    var chosenChars = chosenChars.concat(finalPass);
};
        window.confirm("Would you like to add numbers?");
      if (randomNumber) {
    var chosenChars = chosenChars.concat(finalPass);
};

var passLength = prompt("How many characters do you want it to be? Choose between 8-129.")
    for (var i = 0; i < length; i++) {

        var randomIzed = Math.floor(Math.random() * chosenChars.length)

        // push into final pass string

        var chosenChars = [random];
        var finalPass = '';
    };

    // return finalPass;


// Add event listener to generate button
generateBtn.addEventListener("click", function() {
    // if followed all prompts, then password is generated
    if (upperCase)
});