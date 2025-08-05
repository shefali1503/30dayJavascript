// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


const students = [ "Shivani" , "Neha" , "Rahul" , "Rohit" ,"Rajlakshmi" ];


for (const element of students) {
    if(element.length < 6){
        console.log(`${element} is assigned to Gryffindor`)
    }
    else if(element.length >=6 && element.length < 8){
        console.log(`${element} is assigned to Hufflepuff`)
    }
    else if(element.length >=8 && element.length < 12){
        console.log(`${element} is assigned to Ravenclaw`)
    }
    else if(element.length >=12 ){
        console.log(`${element} is assigned to Slytherin`)
    }
    
}

