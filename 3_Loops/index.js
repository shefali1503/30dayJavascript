console.log("Hi i am a tutorial on loops"); 

//FOR LOOP
// let a=1;
// for(let i=0;i<100;i++){
//     console.log(a+i);
// }

// let b=2;
// for(let i=b;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


//for-in
let obj={
    name:"abc",//key:value
    role:"manager",
    company:"xyz"
};
for (const key in obj) {{
        const element = obj[key];//element=value
        console.log(key," : ",element);
        
    }
}

//for-of :this is generally used to print the value of the iterable(strings,arrays etc)
for (const c of "Shefali") {    
    console.log(c);
    
}

//while loop
let z=14
while(z<5){
    console.log(z);
    z++;
}
// do-while loop

do{
    console.log(z);
    z++;
}while(z<5);