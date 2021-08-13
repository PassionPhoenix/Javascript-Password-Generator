var generateBtn = document.querySelector("#generate");
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&()*+,-./:;<=>?@^[]^_`{|}~";
var symArr = sym.split("");



function writePassword() {

    function generatePassword(){
        var allChars = [];
        var result = ""
        var Length = parseInt(prompt("Enter Password Length"))
        var Upper = prompt("Include Upper Case?\n Enter Yes to validate")
        var Lower = prompt("Include Lower Case?\n Enter Yes to validate")
        var Numbers = prompt("Include Numbers?\n Enter Yes to validate")
        var Symbols = prompt("Include Symbols?\n Enter Yes to validate")
        
        if(Length < 8 || Length > 128){
           window.alert("Length mush be between 8 and 128.");
           return;
        }
        else(Length > 8 && Length < 129)

            if (Upper.toLowerCase() === "yes"){
                allChars += abcUpperArr
            }

            if (Lower.toLowerCase() === "yes"){
                allChars += abcLowerArr
            }

            if (Numbers.toLowerCase() === "yes"){
                allChars += numArr
            }

            if (Symbols.toLowerCase() === "yes"){
                allChars += symArr
            }

            for(i = 0; i < 0; i++){
            var random = Math.floor(Math.random()*allChars.length);
            password += allChars[random];
            }
            
            
            return password
    }

    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);