//to create a new element of html
let div=document.createElement('div');
//set class of the div
div.className="container-2"

//to add inner html in the element
div.innerHTML="Hi am a second box <b>made by Shefali</b>"

//to append this element into the body
document.body.append(div)//always at the last


//TO INSERT THE NODES IN THE HTML
let node=document.createTextNode("Hi How are you");

node.append(".container")