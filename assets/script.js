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
  passwordLength = prompt ("Hi, the length of the password needs to be between 10 and 64 characters \nEnter a password length between 10 and 64");
if (passwordLength > 9 && passwordLength < 65) {
    return passwordLength;
    // alert("Thank you, that's in the right range");
  }
  if (passwordLength < 10) {
    alert ("Too low Chicken Marengo, please try again");
    getPasswordOptions();
  }  
  else if (passwordLength > 64) {
    alert ("Too high wise guy, please try again");
    getPasswordOptions();
  }
  else if (passwordLength != numericCharacters) {
    alert ("That's a fine character Jim but 'tis no number"); 
    getPasswordOptions();
  }

  // return passwordLength;
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
    
    // return passwordCase;
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
    
    // return passwordNumericChar;
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
    
    // return passwordSpecChar;
  }

function thanksForEnteringOptions() {
  alert("Thanks, for entering your options, click generate to create you password");
}

getPasswordOptions(); 
//runs the function! Whoop! To call a function simply use it's name with and pass it any required parameters in (); 
getPasswordCase();
getPasswordNumericChar();
getPasswordSpecChar();
thanksForEnteringOptions();

// Function for getting a random element from an array

function getRandom() {

  var randomUpperCase = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  // console.log(randomUpperCase);
  var randomLowerCase = lowerCasedCharacters [Math.floor(Math.random() * lowerCasedCharacters.length)];
  // console.log(randomLowerCase);
  var randomSpecialCharacters = specialCharacters [Math.floor(Math.random() * specialCharacters.length)];
  // console.log(randomSpecialCharacters);
  var randomNumericCharacters = numericCharacters [Math.floor(Math.random() * numericCharacters.length)];
  // console.log(randomNumericCharacters)


// creates an array out of randomly selected characters from chosen character lists
//(e.g. lowercase and numbers arrays)

var selectedPasswordCharacters = [];

if (passwordCase === "lower") {
    selectedPasswordCharacters.push(randomLowerCase);
}
 
else if (passwordCase === "upper") {
  selectedPasswordCharacters.push(randomUpperCase);
 }
 else if (passwordCase === "both") {
  selectedPasswordCharacters.push(randomLowerCase, randomUpperCase); 
 }
 
if (passwordNumericChar === "yes") {
  selectedPasswordCharacters.push(randomNumericCharacters);
 }
 else if (passwordNumericChar === "no") {

 }

if (passwordSpecChar === "yes") {
  selectedPasswordCharacters.push(randomSpecialCharacters);
}
else if (passwordSpecChar === "no") {
  
}
console.log(selectedPasswordCharacters); 

return selectedPasswordCharacters; 
//returns a value for the getRandom function that is then used
// in the generate password function.  

}


// Function to generate password with user input
function generatePassword() {
  
  var finalPassword = []; //creates an empty array that has the results of getRandom pushed to it.  

  for (var i = 0; i < passwordLength; i++) {
    
    let finalCharacters = getRandom(); // 'let' creates a variable within a function (an alternative to var that is globally accessable).
    finalPassword.push(finalCharacters[Math.floor(Math.random() * finalCharacters.length)])
  } 
    finalPassword = finalPassword.join('') // turns the password into a string without commas between array members.
    
      console.log(finalPassword);  
   
    return finalPassword; 
}

// generatePassword(); // calls the function

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

// References, spare code and notes: 
// https://pietschsoft.com/post/2019/07/24/call-functions-in-javascript#:~:text=How%20to%20call%20a%20function,delimited%20list%20enclosed%20in%20parenthesis

  // function getMultipleRandom(arr, num) {
  //   const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
  //   return shuffled.slice(0, num);
  // }
  
  // const arr = specialCharacters;
  // console.log(getMultipleRandom(arr, 32)); 
  