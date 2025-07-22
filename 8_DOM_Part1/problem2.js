let age = prompt("Enter your age")



if (age < 18)
    alert("You cannot drive until you turn 18")
else
    alert("You can drive")

let input = confirm("You want to give the again or not")

if (input){
    age = prompt("Enter your age");
    if (age < 18)
    alert("You cannot drive until you turn 18");
    else
    alert("You can drive");
}