class Animal{
    constructor(name){
        this.name=name;
        console.log(this.name + " is created")
    }

    eats(){
        console.log("This animal is eating")
    }

    jumps(){
        console.log("The animal is jumping")
    }
}
//class rabit will inherit from the class Animal .extends is used to extend another class  
class rabbit extends Animal{
    constructor(){
        super("Bunny")
        console.log("Rabbit is created")
    }
    
}

// now the object with class rabbit also have the prototypes of class animal

let r1 = new rabbit()
console.log(r1)//rabbit is created
// methods overriding --> in case of inheritance if the child class has same method as per the parent class then the method of child class will override the method from parent class same goes with overriding constructor which is known as overriding constructor
//if we want to run the parent class method,we can use super keyword in that case 
console.log(r1.eats)
console.log(r1.jumps)

//output
// Bunny is created
// Rabbit is created
// rabbit { name: 'Bunny' }
// [Function: eats]
// [Function: jumps]