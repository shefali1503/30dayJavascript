console.log("Hello")

//in order to change the background color of the box3of box class
let boxes=document.getElementsByClassName("box")
console.log(boxes)//display all the elements that has class box as a collection
boxes[2].style.backgroundColor="red"

//if i want to chnage a particular elemeent i can do it by giving a id
//for eg i want to make the box skyblue that has id blue i can do it throught js by following code

document.getElementById("skyblue").style.backgroundColor="skyblue"

//there is another way to select a single element throught the css selectors-this will only select the first element of the class box .Here .box tells that box is a class
document.querySelector(".box").style.backgroundColor="green"

//we can even select all the elements(collection) through css selectors
//for example if we want to change the height of all the elemnts of box class so we cannot directly apply style on it as we are targeting multiple elements at once so 

// document.querySelectorAll(".box").style.backgroundColor="green" will give error we have to use loops on it

//another method by for each loop
document.querySelectorAll(".box").forEach(e=>{
    // console.log(e)-prints all the elemenets of class boxes
    e.style.color="blue"
})

let allboxes=document.querySelectorAll(".box")
for(let i=0;i<allboxes.length;i++){
    allboxes[i].style.backgroundColor="pink"
}

//we can evene get the elements through the name of the tag.For eg if we want to access all the div tags of a page then we can use the foll
console.log(document.getElementsByTagName("div"))
//it will return this HTMLCollection(8) [div.container, div.box, div.box, div.box, div.box, div.box, div#skyblue.box, div.box, skyblue: div#skyblue.box]

//to check if a elements matches a particular selection or not we uses element.matches("css")
let e=document.getElementsByTagName("div")
console.log(e)
e[0].matches(".container")//will return true as e[0] has .container class

//closest firstly check if the element has the css selector then its parent and then itsgrandparent and  so on .If any of the ancestor has the css selector return element that has css otherwise null

e[2].closest(".container")//e[2] is a div.box and its parent as .container so it will return the container element

//contains
console.log(
    e[0].contains(e[2])//true
)
console.log(e[0].contains(document.body))//false