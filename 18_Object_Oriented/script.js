// let obj={
//     "a" : 1 ,
//     "b" : "Harry"
// }

// console.log(obj)

// let animal={//it is an objects has has prototype eats
//     eats :true
// }
// let rabbit={//tit is an object that has prototype jumps
//     jumps:true
// }

// rabbit.__proto__ = animal;//rabbit inherited prototype from the animal class this is known as prototype inheritance


// //These above were theobjects for making several objects that same prototype we generally make a blueprint from them known as class

class animal{
    constructor(name){
        this.name=name//this pointer is the pointer that points to the prototype of the object for which the method is currently called
        console.log(this.name +" is created")
    }
    eats(){
        console.log("The animal eats")
    }
    jumps(){
        console.log("The animal jumps")
    }
}
//now it is a class for animal which has a constructor that is automatically called whenever the object of this class is created

//object creation for animal class

let a =new animal("Bunny")
console.log(a)//output A animal is created
//  animal {}[[Prototype]]: Object

//We can even create animal with name by passing a parameter to the constructor


