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
  // Prompt user for password length
  var length = parseInt(
    prompt('What is the desired length of your password? (min 10, max 64)')
  );
  // Validate password length
  if (isNaN(length) || length < 10 || length > 64) {
    alert('Please enter a valid password length');
    return;
  }
  // Prompt user for character type options
  var hasSpecialCharacters = confirm(
    'Would you like your password to contain special characters?'
  );
  var hasNumericCharacters = confirm(
    'Would you like your password to contain numeric characters?'
  );
  var hasLowerCasedCharacters = confirm(
    'Would you like your password to contain lower cased characters?'
  );
  var hasUpperCasedCharacters = confirm(
    'Would you like your password to contain upper cased characters?'
  );
  // Validate at least one character type was selected
  if (
    !hasSpecialCharacters &&
    !hasNumericCharacters &&
    !hasLowerCasedCharacters &&
    !hasUpperCasedCharacters
  ) {
    alert('Please select at least one character type');
    return;
  }
  // Return password options as an object
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Get a random index from the array
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  // Get password options
  var options = getPasswordOptions();
  // Initialize result array
  var result = [];
  // Array to store possible password characters
  var possibleCharacters = [];
  // Array to store guaranteed password characters
  var guaranteedCharacters = [];
  // If special characters option is selected, add special characters to possible characters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  // If numeric characters option is selected, add numeric characters to possible characters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  // If lowercase characters option is selected, add lowercase characters to possible characters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  // If uppercase characters option is selected, add uppercase characters to possible characters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  // For each character in the password length, add a random character to the result array
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }
  // For each guaranteed character, replace a random character in the result array with the guaranteed character
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  // Convert result array to string and return
  return result.join('');
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