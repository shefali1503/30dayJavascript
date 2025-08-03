//Getters and Setters in JS-Some classes include getters and setters to get and set the class properties
// In JavaScript, getters and setters are special methods that let you define custom behavior when accessing or setting properties of an object. They're commonly used in classes, but also work in plain objects.

class Person{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}

const p= new Person("Rahul")
console.log(p.name);
p.name ="Bob"
console.log(p.name)

//instanceof operator-to check whether the object belongs to the class or not.Returns true when object belongs to the class otherwise false

console.log(p instanceof Person)//true
