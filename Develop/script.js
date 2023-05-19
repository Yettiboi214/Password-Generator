// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = "!@#$%^&*_=+";
var number = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var characterOptions = "",
  specialChar = confirm("select 'OK' if you want special character");
  number = confirm("select 'OK' if you would like numbers");
  lowerCase = confirm("select 'ok' if you would like lower case letters");
  upperCase = confirm("select 'OK' if you would like upper case letters");

  enter = password(prompt("how many characters would you like? 8 to 128"));
  if (passwordLength >= 8 && passwordLength <=128)

  if (!specialCharSelected && !numberSelected && !lowerCaseSelected && !upperCaseSelected) {
    alert("You must select at least one character type.");
    return password;
  }

  var passwordLength = parseInt(prompt("How many characters would you like? (8 to 128)"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return password;
  }

  
  if (specialCharSelected) {
    characterOptions += specialChar;
  }
  if (numberSelected) {
    characterOptions += number;
  }
  if (lowerCaseSelected) {
    characterOptions += lowerCase;
  }
  if (upperCaseSelected) {
    characterOptions += upperCase;
  }

 
  

  
 
  return generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
