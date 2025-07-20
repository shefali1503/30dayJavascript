//map function for making a new array froman existing array
const a=[1,2,3,4,5]
const newarr=a.map((value,index,arr)=>{
    return value*10
})
console.log(newarr);

//filter method
//to applya particular function and filter out the elements of an array
const a1=[12,8,5,3,6,71]
const greater_than_5 = e=>{
    if(e>5){
        return true
    }
        return false
}
console.log(a1.filter(greater_than_5))

//reduce method is used to reduce the array into one value by by giving allthe values to a function

const arr2=[12,13,10,20]

const add=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(add))

array from("Ha")