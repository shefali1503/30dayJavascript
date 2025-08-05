// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function passwordValidation(password) {
//     let checklength = 0;
//     let lowercase = 0;
//     let uppercase = 0;
//     let digit = 0
//     if (password.length >= 8) { checklength++ }
    
//     if (/[a-z]/.test(password)) {
//         // /[a-z]/ matches any lowercase letter from a to z(it specifies range)
//         // .test(str) returns true if a match is found    
//         lowercase++
//     }
//     if (/[A-Z]/.test(password)) {
//         uppercase++
//     }
//     if (/[0-9]/.test(password)) {
//         digit++
//     }

//     if (uppercase === 0 || lowercase === 0 || checklength === 0 || digit === 0){
//         return "password is not right"
//     }
//      return "password is correct"

// }
function passwordValidation(password) {
    const length = password.length >=8
    const lowercase = /[a-z]/.test(password)
    const uppercase = /[A-Z]/.test(password)
    const digit = /[0-9]/.test(password)

    if (uppercase && lowercase && length && digit ){
        return "password is valid"
        
    }
     return "password is not valid"

}


let password = "hEello123"

console.log(passwordValidation(password))