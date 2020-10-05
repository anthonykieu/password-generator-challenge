var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "@", "#", "$", "%", "(", "*", ")", "?", "]"];

var generatePassword = function () {
  // ask user if they'd like to fight or skip using  function
  var passwordLength = window.prompt("How long would you like your password to be? Choose a number between 8 and 128");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
    window.alert(" Invalid length. please provide a number between 8 and 128 characters long.");
    return generatePassword();
  }
  console.log(passwordLength);

  // lowerCaseLetters
  var promptLowerCase = window.confirm("Would you like to have lower case letters in the password");
  if (promptLowerCase) {
    var addLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    var intLowerCase = 1;
  } else {
    var addLowerCase = "";
    var intLowerCase = 0;
  }
  console.log(addLowerCase);


  // upperCase
  var promptUpperCase = window.confirm("Would you like to have upper case letters in the password");
  if (promptUpperCase) {
    var addUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
    var intUpperCase = 1;
  } else {
    var addUpperCase = "";
    var intUppercase = 0;
  }
  console.log(addUpperCase);

  // numeric
  var promptNumeric = window.confirm("Would you like to have numbers in the password");
  if (promptNumeric) {
    var addNumeric = numeric[Math.floor(Math.random() * numeric.length)];
    var intNumeric = 1;
  } else {
    var addNumeric = "";
    var intNumeric = 0;
  }
  console.log(addNumeric);

  // special
  var promptSpecial = window.confirm("Would you like to have special characters in the password");
  if (promptSpecial) {
    var addSpecial = special[Math.floor(Math.random() * special.length)];
    var intSpecial = 1;
  } else {
    var addSpecial = "";
    var intSpecial = 0;
  }
  console.log(addSpecial);

  // Combining arrays of only those selected to be in the password

  if (promptLowerCase == true && promptUpperCase == true && promptNumeric == false && promptSpecial == false) {
    var array = lowerCase.concat(upperCase);
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == false && promptSpecial == false) {
    var array = lowerCase;
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == true && promptSpecial == false) {
    var array = lowerCase.concat(numeric);
  }else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == false && promptSpecial == true) {
    var array = lowerCase.concat(special);
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == true && promptSpecial == false) {
    var array = lowerCase.concat(upperCase, numeric);
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == false && promptSpecial == true) {
    var array = lowerCase.concat(upperCase, special);
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == true && promptSpecial == true) {
    var array = lowerCase.concat(numeric, special);
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == true && promptSpecial == true) {
    var array = lowerCase.concat(upperCase, numeric, special);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == false && promptSpecial == false) {
    var array = upperCase;
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == false && promptSpecial == false) {
    var array = upperCase.concat(lowerCase);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == true && promptSpecial == false) {
    var array = upperCase.concat(numeric);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == false && promptSpecial == true) {
    var array = upperCase.concat(special);
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == true && promptSpecial == false) {
    var array = upperCase.concat(lowerCase, numeric);
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == false && promptSpecial == true) {
    var array = upperCase.concat(lowerCase, special);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == true && promptSpecial == true) {
    var array = upperCase.concat(numeric, special);
  }
  else if (promptLowerCase == false && promptUpperCase == false && promptNumeric == false && promptSpecial == true) {
    var array = special;
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == false && promptSpecial == true) {
    var array = special.concat(lowerCase);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == false && promptSpecial == true) {
    var array = special.concat(upperCase);
  }
  else if (promptLowerCase == false && promptUpperCase == false && promptNumeric == true && promptSpecial == true) {
    var array = special.concat(numeric);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == true && promptSpecial == true) {
    var array = special.concat(upperCase, numeric);
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == true && promptSpecial == true) {
    var array = special.concat(lowerCase, numeric);
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == false && promptSpecial == true) {
    var array = special.concat(lowerCase, uppercase);
  }
  else if (promptLowerCase == false && promptUpperCase == false && promptNumeric == true && promptSpecial == false) {
    var array = numeric;
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == true && promptSpecial == false) {
    var array = numeric.concat(lowerCase);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == true && promptSpecial == false) {
    var array = numeric.concat(upperCase);
  }
  else if (promptLowerCase == false && promptUpperCase == false && promptNumeric == true && promptSpecial == true) {
    var array = numeric.concat(special);
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == true && promptSpecial == true) {
    var array = numeric.concat(lowerCase, special);
  }
  else if (promptLowerCase == true && promptUpperCase == true && promptNumeric == true && promptSpecial == false) {
    var array = numeric.concat(lowerCase, upperCase);
  }
  else if (promptLowerCase == true && promptUpperCase == false && promptNumeric == true && promptSpecial == true) {
    var array = numeric.concat(lowerCase, special);
  }
  else if (promptLowerCase == false && promptUpperCase == true && promptNumeric == true && promptSpecial == true) {
    var array = numeric.concat(upperCase, special);
  }
  
  console.log(array);
  console.log(array.length)

  var additional = ""
  for (var i = 0; i < passwordLength - (intLowerCase + intUpperCase + intNumeric + intSpecial); i++) {
    var addLength = array[Math.floor(Math.random() * array.length)];
    console.log(addLength);
    var additional = additional + addLength;
    var password = additional + addLowerCase + addNumeric + addSpecial + addUpperCase;
  }
  return password;

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
