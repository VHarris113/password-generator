// generate random password
var length = {
  max: i=20,
  min: i=8,
};

var lowerCase = { 
  length:
  function lowerCase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
}

var upperCase = {
  upperCase:
  function upperCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
};

var upperCase = {
  numberS:
  function numberS () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
};

var randomSymbols = {
  randomSymbols:
  function randomSymbols () {
    var symbols = '!@#$%^&*()+=<>?/'
      return symbols[Math.floor(Math.random() * symbols.length)] 
    }
}

function generatePassword(length, lowerCase, upperCase, randomSymbols, numberS) {

}

// for(var i = 0; i <= result; i++){
//   password = password + 
// };

  let password = "";
// var options = []

var length = document.querySelector("#length");
var lowerCase = document.querySelector("#lowercase");
var upperCase = document.querySelector("#uppercase");
var randomSymbols = document.querySelector("#symbols");
var numberS = document.querySelector("#numbers");
var result = document.querySelector("#result");
var generateBtn = document.getElementById("generateBtn");

var length = length.value
var lowerCase = lowerCase.value
var upperCase = upperCase.value
var randomSymbols = randomSymbols.value
var numberS = numberS.value

// var password = generatePassword(length, lowerCase, upperCase, randomSymbols, numberS)

// var randomFunc = {
//   lower: lowerCase,
//   upper: upperCase,
//   number: numberS,
//   symbols: randomSymbols,
// }

var userChoice = window.prompt("Halt! Would you like a password?");

if (!userChoice) {
  return;
}


// function generatePassword(length, lowerCase, upperCase, randomSymbols, numberS) {
// }

var userChoice = window.confirm("Would you like lowercase letters?") {
  function lowerCase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
}; if else {
  return;
}

{
  var userChoice;
 if (window.confirm("Would you like uppercase letters?")) {
  function upperCase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  var userChoice = window.confirm("Would you like numbers?")

  var userChoice = window.confirm("Would you like symbols?")




// }

// var userChoice = window.confirm("Would you like lowercase letters?");

// var userChoice = window.confirm("Would you like numbers?");

// var userChoice = window.confirm("Would you like symbols?");



// Generate Events
// I want to click yes or no when asked a question
// generateBtn.addEventListener("click",
//   length: 

//   passwords.innerText = generatePassword(
//     length,
//     lowerCase,
//     upperCase,
//     numberS,
//     randomSymbols,
//   );
// // });
 
// function generatePassword(lower, upper, number, symbol, length) {
//   let result = "",

//    const typesCount = lower + upper + number + symbol;

//    const typesArr = [lower, upper, number, and symbol];


// }

function generatePassword(length, lowerCase, upperCase, randomSymbols, numberS) {

}