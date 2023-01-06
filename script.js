// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt the user for password length
  var passwordLength = prompt("Enter the desired password length (must be between 10 and 64 characters):");

  // Validate password length
  while (passwordLength < 10 || passwordLength > 64) {
    alert("Error: Password length must be between 10 and 64 characters. Please try again")
    passwordLength = prompt("Enter the desired password length (must be between 10 and 64 characters):");
  }

  // Prompt the user for character types to include in password
  var lowercase = confirm("Include lowercase characters in the password?");
  var uppercase = confirm("Include uppercase characters in the password?");
  var numeric = confirm("Include numeric characters in the password?");
  var special = confirm("Include special characters in the password?");

  // Validate that at least one character type has been selected
  while (!lowercase && !uppercase && !numeric && !special) {
    alert("Error: At least one character type must be selected. Please try again.");
    lowercase = confirm("Include lowercase characters in the password?");
    uppercase = confirm("Include uppercase characters in the password?");
    numeric = confirm("Include numeric characters in the password?");
    special = confirm("Include special characters in the password?");
  }
  
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  // Create an array, selectedCharCodes, that will be used to generate password
  var selectedCharCodes = [];
  if (lowercase) {
    selectedCharCodes = selectedCharCodes.concat(lowerCasedCharacters);
  }
  if (uppercase) {
    selectedCharCodes = selectedCharCodes.concat(upperCasedCharacters);
  }
  if (numeric) {
    selectedCharCodes = selectedCharCodes.concat(numericCharacters);
  }
  if (special) {
    selectedCharCodes = selectedCharCodes.concat(special);
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);