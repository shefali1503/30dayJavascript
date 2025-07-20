const arr=[1,2,3,4,5]

console.log(arr)//it will print the array
console.log(arr[2])//gives the element at the second index
console.log(arr.length)//length of the  array
arr[1]=20//aarrays are mutable as their orginal elements can be changed
console.log(arr)

console.log(typeof(arr));//in js arrays are considered as objects only so their type is object

//tostring method
console.log(arr.toString())

//join method
console.log(arr.join("-"))//joined using a seperator mentioned

//push and pop
console.log(arr.pop( ))//[1,20,3,4]
arr.push(7)//[1,20,3,4,7]
console.log(arr)

//shift and unshift
console.log(arr.shift())//[20,3,4,7]removes the first element and return it
arr.unshift(7)//[7,20,3,4,7]
console.log(arr)


delete arr[0]//element at the first index will be deleted
console.log(arr)//[empty, 20, 3, 4, 7]
console.log(arr[0])

//concat
const a1=[1,2,3]
const a2=[4,5,6]
console.log(a1.concat(a2))

//sort
const a=[78,1,25,0,9]
console.log(a.sort())
console.log(a)

//splice
const nums=[10,20,30,40,50]
//delete elements
console.log(nums.splice(1,2))
console.log(nums)
//add elements
nums.splice(1,0,20,30)
console.log(nums)
//replace elements
nums.splice(1,2,200,300)
console.log(nums)

//slice
const nums2=[1,2,3,4,5]
console.log(nums2.slice(2))//start index to end index 3,4,5
console.log(nums2.slice(1,3))//[2,3] start to end-1 index