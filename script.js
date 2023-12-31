// Array of special characters to be included in password
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function to prompt user for password options
function getPasswordOptions() {
   var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

   // Check if the input is a number and within the specified range
   if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid number between 8 and 128.");
      return null;
   }

   var includeSpecialCharacters = confirm("Do you want to include special characters?");
   var includeNumericCharacters = confirm("Do you want to include numeric characters?");
   var includeLowerCasedCharacters = confirm("Do you want to include lowercase characters?");
   var includeUpperCasedCharacters = confirm("Do you want to include uppercase characters?");

   // Check if at least one character type is selected
   if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowerCasedCharacters && !includeUpperCasedCharacters) {
      alert("Please select at least one character type.");
      return null;
   }

   // Return an object with user choices
   return {
      length: length,
      specialCharacters: includeSpecialCharacters,
      numericCharacters: includeNumericCharacters,
      lowerCasedCharacters: includeLowerCasedCharacters,
      upperCasedCharacters: includeUpperCasedCharacters,
   };
}

// Function for getting a random element from an array
function getRandom(arr) {
   var randomIndex = Math.floor(Math.random() * arr.length);
   var randomElement = arr[randomIndex];
   return randomElement;
}

// Function to generate password with user input
function generatePassword() {
   var options = getPasswordOptions();

   if (!options) {
      // User canceled or entered invalid options
      return "";
   }

   var allCharacters = [];
   var result = [];

   if (options.specialCharacters) {
      allCharacters = allCharacters.concat(specialCharacters);
   }

   if (options.numericCharacters) {
      allCharacters = allCharacters.concat(numericCharacters);
   }

   if (options.lowerCasedCharacters) {
      allCharacters = allCharacters.concat(lowerCasedCharacters);
   }

   if (options.upperCasedCharacters) {
      allCharacters = allCharacters.concat(upperCasedCharacters);
   }

   for (var i = 0; i < options.length; i++) {
      var character = getRandom(allCharacters);
      result.push(character);
   }

   // Convert the result array to a string
   return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

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
