//js class to create comple number and create constructor for real and complex part

class Complex{
    constructor(real,imag){
        this._real = real;
        this._imag = imag;
    }
    print_number(){
        if(this._imag > 0){
             console.log(`This complex number is ${this._real} + ${this._imag}i`)
        }
        else{
            console.log(`This complex number is ${this._real} ${this._imag}i`)
        }
       
    }
}

let c1 = new Complex(1,2)
console.log(c1.print_number())

let c2 = new Complex(11,-2)
console.log(c2.print_number())

//OUTPUT
// This complex number is 1 + 2i
// undefined
// This complex number is 11 -2i