const characters =[
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const lowerCaseLetters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const upperCaseLetters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const symbols = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

function generatePassword() {
    let passwordLength = document.getElementById("length").value
    let passwordCharacters = []
    let includeLowerCase = document.getElementById("include-lowercase").checked
    let includeUpperCase = document.getElementById("include-uppercase").checked
    let includeNumbers = document.getElementById("include-numbers").checked
    let includeSymbols = document.getElementById("include-symbols").checked
    
    if(includeLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerCaseLetters)
    }
    if(includeUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperCaseLetters)
    }
    if(includeNumbers) {
        passwordCharacters = passwordCharacters.concat(numbers)
    }
    if(includeSymbols) {
        passwordCharacters = passwordCharacters.concat(symbols)
    }
    
    let pass1El = document.getElementById("pass-1")
    pass1El.textContent = ""
    
    let pass2El = document.getElementById("pass-2")
    pass2El.textContent = ""

    for (let i = 0 ; i < passwordLength ; i++) {
        let randomIndex = Math.floor( Math.random()*passwordCharacters.length )
        pass1El.textContent += passwordCharacters[randomIndex]
    }
    for (let i = 0 ; i < passwordLength ; i++) {
        let randomIndex = Math.floor( Math.random()*passwordCharacters.length )
        pass2El.textContent += passwordCharacters[randomIndex]
    }
}

function copyText(passwordNumber){
    let text
    if(passwordNumber === 1) {
        text = document.getElementById("pass-1")
    }else if(passwordNumber === 2){
        text = document.getElementById("pass-2")
    }

    if(text.textContent === ""){
        return alert("Please generate a password first!")
    }
    
    navigator.clipboard.writeText(text.textContent);
    alert("Copied the password!")

}