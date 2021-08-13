var generateBtn = document.querySelector("#generate");
var abcUpperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var abcLowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numArr = ["0","1","2","3","4","5","6","7","8","9"];
var symArr = ["!","#","$","%","&","(",")",",","*","+","-",".","/",":",";","<","=",">","?","@","^","[","]","^","_","`","{","|","}","~"];



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    function generatePassword(){
        var allChars = [];
        var result = []
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

            for(i = 0; i < Length; i++){
            var random = Math.floor(Math.random()*allChars.length);
            result += allChars[random];
            }
            
            return result;
    }


    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);