

var length = document.querySelector("#length");
var lowerCase = document.querySelector("#lowercase");
var upperCase = document.querySelector("#uppercase");
var randomSymbols = document.querySelector("#symbols");
var numberS = document.querySelector("#numbers");
var result = document.querySelector("#result");
var generateBtn = document.getElementById("generateBtn");

var randomFunc = {
  lower: lowerCase,
  upper: upperCase,
  number: numberS,
  symbols: randomSymbols,
}

window.alert(
  "Would you like a password?"
);

// Generate Events
// I want to click yes or no when asked a question
// generateBtn.addEventListener("click",
//   length: 

  passwords.innerText = generatePassword(
    length,
    lowerCase,
    upperCase,
    numberS,
    randomSymbols,
  );
// });
 
function generatePassword(lower, upper, number, symbol, length) {
  let result = "",

   const typesCount = lower + upper + number + symbol;

   const typesArr = [lower, upper, number, and symbol];


}

var userChoice = window.confirm("Would you like uppercase letters?");


var userChoice = window.confirm("Would you like lowercase letters?");

var userChoice = window.confirm("Would you like numbers?");

var userChoice = window.confirm("Would you like symbols?");


function lowerCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function upperCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function numberS () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbols () {
  var symbols = '!@#$%^&*()+=<>?/'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
