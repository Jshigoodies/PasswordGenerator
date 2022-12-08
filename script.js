// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function checklength(intendedLength, arrayLength) {
  if(intendedLength == arrayLength){
    return true;
  }
  else {
    return false;
  }
}

function generatePassword() {
    try {
      var numLength = window.prompt("What is the length of your password? (at least 8)");
      if(numLength < 8) {
        throw "Error with length";
      }
      //Character types
      var lowerCaseCondition = window.confirm("Do you want your password to include lowercase?");
      var upperCaseCondition = window.confirm("Do you want your password to include uppercase?");
      var numericCondition = window.confirm("Do you want your password to include numbers?");
      var specialCharCondition = window.confirm("Do you want your password to include special characters?");

      // at least one character type should be selected
      if(lowerCaseCondition || upperCaseCondition || numericCondition || specialCharCondition) {
        var passwordArray = [];


        while(true) { //only will break when it reached the right length

          if(lowerCaseCondition) {
            if(checklength(numLength, passwordArray.length)) {
              break;
            }

            passwordArray.push(Math.floor(Math.random() * (122-97) + 1) + 97);

          }

          if(upperCaseCondition) {
            if(checklength(numLength, passwordArray.length)) {
              break;
            }
            passwordArray.push(Math.floor(Math.random() * (90-65) + 1) + 65);
          }

          if(numericCondition) {
            if(checklength(numLength, passwordArray.length)) {
              break;
            }
            passwordArray.push(Math.floor(Math.random() * (57-48) + 1) + 48);
          }

          if(specialCharCondition) {
            if(checklength(numLength, passwordArray.length)) {
              break;
            }
            passwordArray.push(Math.floor(Math.random() * (47-33) + 1) + 33);
          }


        }
        
        var passwordString = "";
        for(var i = 0; i < passwordArray.length; i++)
        {
          passwordString = passwordString + String.fromCharCode(passwordArray[i]);
        }
        
        return passwordString;
      }
      else {
        throw "Error";
      }


    }
    catch(err) {
      window.alert("Error try again later");
      return;
    }
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var test = String.fromCharCode(65);

// console.log(test);

// var passwordArray = [];
// passwordArray.push("hello1");
// passwordArray.push("hello2");
// passwordArray.push("hello3");
// passwordArray.push("i'm right here");

// console.log(passwordArray.toString());

// Math.floor(Math.random() * 6) + 1;


// Lowercase 97 to 122

// Uppercase 65 to 90

// Numbers 48 to 57

// special chars 33 to 47

// console.log(Math.floor(Math.random() * (47-33) + 1) + 33);