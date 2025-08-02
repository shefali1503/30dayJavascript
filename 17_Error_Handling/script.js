let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
//as the input taken from the prompt is a string so we have to convert it into int to get the required sum

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Variable type is not correct")
}

let sum = parseInt(a) + parseInt(b);

function main() {
    try {
        console.log("The sum is ", sum * x)
        return true
    }
    catch (error) {
        console.log("Error aa rha hai")
        return false
    }
    finally {
        console.log("Program ends.")
    }
}

main(4)

