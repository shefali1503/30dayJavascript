// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter(str){
    let vowelCount = 0;
    for (const element of str.toLowerCase()) {
        if(element === 'a' ||  element === 'e' || element === 'i' || element === 'o' || element === 'u' ){
            vowelCount++;
        }
    }
    return vowelCount
}


let str = "ShefaliSharma"
console.log("The total number of vowels in string is ",vowelCounter(str))
