// password create krke de or saath mai password ke one lowercase one uppercase and one special character
//10 letters  
function generatePassword(length) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const allChars = lowercase + uppercase + numbers + symbols
    let password=""

    for(let i = 0 ; i < length ;i++){
        let rand = Math.floor(Math.random() * allChars.length )
        password += allChars[rand]
    }

    return password
}

// Example usage
const myPassword = generatePassword(10);
console.log("Generated Password:", myPassword);