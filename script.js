// Assignment code here
var charMin = 8;
var charMax = 128;
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var charNumbers = "0123456789";
var specialChar = "!@#$%&*+=/?()";

function generatePassword() {
  var passwordLength = parseInt(
    prompt("Please specify the length of the password you want to create")
  );
  var finalArray = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert("characters length not acceptable");
  } else {
    var includeCaseLetters = confirm(
      "would you like to include upper-case characters?"
    );
    if (includeCaseLetters === true) {
      finalArray += upperCaseLetters;
    }
    // console.log(finalArray);
    var charSpecial = confirm("would you like to add any special characters?");
    if (charSpecial === true) {
      finalArray += specialChar;
    }
    var lowerLetters = confirm(
      "would you like to use any lower-case characters?"
    );
    if (lowerLetters === true) {
      finalArray += lowerCaseLetters;
    }
    var numberRandom = confirm("would you like to use any numbers?");
    if (numberRandom === true) {
      finalArray += charNumbers;
    }
    finalArray = finalArray.split("");
    var passWordArray = "";
    // console.log(finalArray);
    for (var i = 0; i < passwordLength; i++)
    {
      var randomIndex = Math.floor(Math.random() * finalArray.length);
      passWordArray += finalArray[randomIndex];
     
    }
   

    //add upper case letters to my final Arr
    return passWordArray
  }
}

// finalArr will have all the character they will need and from there you will need a for loop to get random characters

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
