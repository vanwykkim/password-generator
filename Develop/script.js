///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

  var lengValid = false;
  //length of password to make
  var leng = 0;
  var choiceValid = false;
  //array to hold what to include in password
  var choiceArr = new Array(4);
  //password to return
  var password = "";
  //arrays to hold character choices
  var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charArr = ["!", "?", "#", "%", "*", "$", "&"];
  //array to hold character choices from selections
  var includeArr = new Array();

//loops if a valid password length has not been chosen
  while (!lengValid){
    let lengStr = prompt('Choose a length between 8 and 128.');
    //check if a number and set string to number or ask for number
    if(!isNaN(lengStr)){
      leng = Number(lengStr);
    }else{
      alert("You must enter a number.");
      continue;
    }
    //check if number is in range - prompt if not
    if(leng > 128 || leng < 8 ){
      alert("Please choose a number in the range 8-128.");
    }else{
      lengValid = true;
    }
  }

// validation to check if at least 1 character choice has been made. Loops again if not
  while(!choiceValid){
    alert("You must use at least 1 of the character choices" + "\n" + "(numbers, uppercase, lowercase, special)");
    choiceArr[0] = confirm("Include numbers?");
    choiceArr[1] = confirm("Include uppercase letters?");
    choiceArr[2] = confirm("Include lowercase letters?");
    choiceArr[3] = confirm("Include special characters?");
    //checks that at least one character choice was chosen otherwise loops again. 
    for(var i = 0; i < 4; i++){
      if(choiceArr[i]== true){
        choiceValid = true;
      }
    }
  }
  //add numbers if true
  if(choiceArr[0]){
    includeArr = includeArr.concat(numArr);
  }
  //add uppercase letters if true
  if(choiceArr[1]){
    for(var i = 0; i < letterArr.length; i++){
      includeArr.push(letterArr[i].toUpperCase());
      console.log("letterArr[i]");
    }
  }
  //add lowercase letters if true
  if(choiceArr[2]){
    includeArr = includeArr.concat(letterArr);
  }
  //add special characters if true
  if(choiceArr[3]){
    includeArr = includeArr.concat(charArr);
  }

  //make password string concatonate on randoms til hit password leng
  for(var i = 0; i < leng; i++){
    password += includeArr[(Math.floor(Math.random() * includeArr.length))];
  }
  //return the completed password
  return password;

}

  

  




