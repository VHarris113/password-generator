

var options = ["length", "upperCase", "lowerCase", "randomNumber", "randomSymbols"]

var userChoice = window.confirm("Halt! Would you like a password?");

var userGen = function () {
    var userChoice = window.confirm("Would you like uppercase letters?");
};      if (confirm("Awesome-sauce!")) {
        window.confirm("Would you like lowercase letters?");
};      if (confirm("Neato!")) {
        window.confirm("Do you want to add symbols?");
};      if (confirm("Woohoo!")) {
        window.confirm("Would you like to add numbers?");
};      if (confirm("Noice!"));

var randomChar = {
    length: passLength,
    lower: lowerCase,
    upper: upperCase,
    number: randomNumber,
    symbol: randomSymbols

};

function passLength() {
    i = 0; i < 20; i++;
    return length[4];
}

function lowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function upperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function randomSymbols() {
    var symbols = "~!@#%^&*()_+";
    return symbols[Math.floor(Math.random() * symbols.length)];
};