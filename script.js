// Assignment code here
var charMin = 8
var charMax = 128
var upperCaseLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var charNumbers = ['0123456789']
var specialChar = ['!@#$%&*+=/?()']

var finalArr = [upperCaseLetters,charNumbers, specialChar]

function generatePassword () {
  var passwordLength = prompt("Please specify the length of the password you want to create")
  console.log(passwordLength)
  if (passwordLength < 8 ||  passwordLength > 128) {
    alert("characters length not acceptable");
  }
  var upperCase = confirm("would you like to include uppercase characters?")

  if (upperCaseLetters ===true){
    console.log(finalArr)
    //add upper case letters to my final Arr
  }






  // finalArr will have all the character they will need and from there you will need a for loop to get random characters
  return(upperCaseLetters, charNumbers,specialChar)
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
