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

function chosenChars() {
    var passLength = parseInt(prompt("How many characters would you like in your password? (From 8 to 128 characters)"), 8);

    if (passLength < 8) {
        alert("Password must contain 8 or more characters.");
        return;
    }
    if (passLength > 128) {
        alert("The password must be less than 128 characters.");
        return;
    }

    var confirmUpper = confirm("Would you like uppercase letters?");
    
    var confirmLower = confirm("Would you like lowercase letters?");
    
    var confirmNumber = confirm("Would you like to add numbers?");
    
    var confirmSpecial = confirm("Would you like to add special characters?");

    if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
        alert("Your password should include at least one special character, letter, and/or number.");
        return;
    }

    var options = {
        passLength: length,
        numbers: numbers,
        lowerCase: lowerCase,
        upperCase: upperCase,
        symbols: symbols,
    }

    return options;

};


function generatePassword() {

    var options = generateOptions();
    console.log(options)

    var randomPassword = [];
    console.log(randomPassword)

    if (options.symbols) {
        for (1 =0; i < symbols.length; ++i) {
            randomPassword.push(symbols[i]);
        }
    };

    if (options.numbers) {
        for (1 =0; i < numbers.length; ++i) {
            randomPassword.push(numbers[i]);
        }
    };

    if (options.upperCase) {
        for (1 =0; i < upperCase.length; ++i) {
            randomPassword.push(upperCase[i]);
        }
    };

    if (options.lowerCase) {
        for (1 =0; i < lowerCase.length; ++i) {
            randomPassword.push(lowerCase[i]);
        }
    };

    var genPw = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPwd = Math.floor(Math.random() * Math.floor(randomPassword.length));
        genPw.push(randomPassword[randomPwd]);
    }

    console.log(genPw)

    var finalPass = genPw.join("");
    console.log(finalPass);

    document.getElementById

    var password = "";
    
    generateBtn.addEventListener("click", writePassword)