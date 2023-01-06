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
  enterPasswordLength = prompt ("Hi, the length of the password needs to be between 10 and 64 characters \nEnter a password length between 10 and 64");
if (enterPasswordLength > 10 && enterPasswordLength < 65) {
    alert("Thank you, that's in the right range");
  }
  else if (enterPasswordLength < 10) {
    alert ("Too low Chicken Marengo, please try again");
    getPasswordOptions();
  }  
  else if (enterPasswordLength > 64) {
    alert ("Too high wise guy, please try again");
    getPasswordOptions();
  }
  else if (enterPasswordLength != numericCharacters) {
    alert ("That's a fine character Jim but 'tis no number"); 
    getPasswordOptions();
  }

  // return enterPasswordLength;

}


function getPasswordCase() {
  passwordCase = prompt ("Would you like your password to contain lower or upper case letters? \n please enter 'lower', 'upper' or 'both'");
    if (passwordCase === "lower") {
      alert("Thanks, your password will contain only lower case letters");
    } 
    else if (passwordCase === "upper") {
      alert("Thanks, your password will contain only upper case letters");
    } 
    else if (passwordCase === "both") {
      alert("Thanks, your password will contain both upper and lower case letters")
    }
    else if (passwordCase != "lower" || passwordCase != "upper" || passwordCase != "both") {
      alert("Sorry, you've entered an incorrect value");
      getPasswordCase();
    } 
  }

  function getPasswordNumericChar() {
  passwordNumericChar = prompt ("Would you like your password to contain numeric characters (1-9)? \n please enter 'yes' or 'no'");
    if (passwordNumericChar === "yes") {
      alert("Thanks, your password will contain numerical characters")
    }
    else if (passwordNumericChar === "no") {
      alert("your password will not contain any numerical characters")
    }
    else if (passwordNumericChar != "yes" || passwordNumericChar != "no") {
      alert("yes or no not entered, try having a think and trying again")
      getPasswordNumericChar();
    }
  }

  function getPasswordSpecChar() {
  passwordSpecChar = prompt ("Would you like your password to contain Special characters e.g. $@%&*, etc? \n please enter 'yes' or 'no'");
    if (passwordSpecChar === "yes") {
      alert("Thanks, your password will contain special characters")
    }
    else if (passwordSpecChar === "no") { 
      alert("your password will not contain any special characters")
    }
    else if (passwordSpecChar != "yes" || passwordSpecChar != "no") {
      alert("yes or no not entered, try having a think and trying again")
      getPasswordSpecChar();
    }
  }

getPasswordOptions(); //runs the function! Whoop! To call a function simply use it's name with and pass it any required parameters in (); 
getPasswordCase ();
getPasswordNumericChar();
getPasswordSpecChar();

// Function for getting a random element from an array
function getRandom(arr) {
  
  
  var randomUpperCase = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  console.log(randomUpperCase);
  var randomLowerCase = lowerCasedCharacters [Math.floor(Math.random() * lowerCasedCharacters.length)];
  console.log(randomLowerCase);
  var randomSpecialCharacters = specialCharacters [Math.floor(Math.random() * specialCharacters.length)];
  console.log(randomSpecialCharacters);
  var randomNumericCharacters = numericCharacters [Math.floor(Math.random() * numericCharacters.length)];
  console.log(randomNumericCharacters)



}

getRandom();


// Function to generate password with user input
function generatePassword() {
 //select a random array and draw a character based on initial selections.  
 //take all options selected, merge arrays and then 
 //repeat this 'password lenght' number of times
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

//


// References and notes: 
// https://pietschsoft.com/post/2019/07/24/call-functions-in-javascript#:~:text=How%20to%20call%20a%20function,delimited%20list%20enclosed%20in%20parenthesis.