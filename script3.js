// Assignment Code
var generateBtn = document.querySelector("#generate");
var textarea = document.querySelector("#password");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "=", "+", "?"];



function generatePassword() {
    var generatedPassword = [];
    var passwordString = "";
    var passLength = prompt("How many characters would you like in your password? Pick 8 to 128.");
        if (passLength <= 8 || passLength <= 128) {
            alert("string");
            return generatePassword();
        }
    var confirmUpper = confirm("Would you like uppercase letters?");

    var confirmLower = confirm("Would you like lowercase letters?");
    var confirmNumber = confirm("Would you like to add numbers?");
    var confirmSpecial = confirm("Would you like to add special characters?");
    
    // while (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false);
    // for (var i = 0; i < passLength; i++);
    // passLength = prompt("How many characters do you want it to be? Choose between 8-128.", 8);
    // while (passLength < 8 || passLength > 128 || typeof(passLength) != "number" || passLength === NaN || passLength === null);
};

// 
// Write password to the #password input
function writePassword() {
  var password = generatePassword()
      // Ask user for input
      lowerCase = confirm("Do you want lower case letters?")
      if(lowerCase){
        passwordContainer=passwordContainer.concat(lowerCaseArray);
      }
      upperCase = confirm("Do you want upper case letters?")
      if(upperCase) {
        passwordContainer=passwordContainer.concat(upperCaseArray);
      }
      numbers = confirm("Do you want numbers in your password?")
      if(numbers) {
        passwordContainer=password.Container.concat(numberArray);
      }
      symbols = confirm("Do you want symbols in your password?")
      if(symbols) {
        passwordContainer=passwordContainer.concat(upperCaseArray);
      }
      
      for (var i = 0; i < length; i++){
        var randomNum = Math.floor(Math.random() * passwordContainer.length)
      }}
    
        // recording the input

        // submit new password


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

      }
      return finalPassword;
    }
    


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
