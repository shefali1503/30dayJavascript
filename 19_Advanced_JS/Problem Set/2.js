//to find the average of the array using spread

const arr=[10,20,30,40,50]
function average(...arr){
    result=0
    for (const element of arr) {
        result=(result + element);
    }
    return result/arr.length
}
console.log(average(...arr));