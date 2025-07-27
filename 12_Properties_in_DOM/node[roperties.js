// 1. append():Adds a node or text to the end of a parent element.
// const parent = document.getElementsByClassName('.container');
// const newNode = document.getElementsByTagName('div');
// newNode.textContent = 'Appended!';
// parent.append(newNode);
document.querySelector(".container").append("Appended")
document.querySelector(".container").prepend("Pre Appended")
document.querySelector(".container").before("Before Inserted")
document.querySelector(".container").after("After inserted")
document.querySelector(".container").replaceWith("I am a container")
