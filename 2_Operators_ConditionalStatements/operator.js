//operators
//arithemetic operators
// let a=2;
// let b=3;
// console.log(a+b);//addittion 5
// console.log(a-b);//sub -1
// console.log(a*b);//6
// console.log(a/b);//0.6666
// console.log(a**b);//8
// console.log(a%b);//2
// console.log(a++);//increment operator postfix and prefix dono hote hai phele print then add 
// console.log(a--);//phele print then sub

//assignment operators
let a=8;
let b=4;
a+=b;//a=a+b===12
console.log(a)//a=12
a-=b;//a=a-b===12-4===8
console.log(a)//a=8
a*=b;//a=8*4===32
console.log(a)//a=32
a/=b;//a=32/4===8
console.log(a)
a%=b;//a=8%4===0
console.log(a)//a=0
a**=b;//a=0^4=0
console.log(a)


//comparison operators
console.log(4>5);//greater than false
console.log(4>=5);//greater tha equal to false
console.log(4<5);//less than===true
console.log(4<=5);//less than equal to ==true
console.log(4==5);//equal to only value ==false
console.log(4===5);//equal to (value and datatype)==false
console.log(4!=5);//not equal to (true)
console.log(4!==5);//not equal to(vale or datatype)==false

//logical operators are used when there are two comparisons
console.log((4>5)&&(5===5));//&& return true only both are true
console.log((4>5)||(5===5));//|| return true only one is true
console.log(!(5===5));//! reverses it