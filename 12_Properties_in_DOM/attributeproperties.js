//to check it has mentioned attribute or not
document.querySelector(".container").hasAttribute("class")
// true

//to get the value of the mentioned attribute
document.querySelector(".container").getAttribute("class")
// 'container'

//to set the mentioned attribute with the given value
document.querySelector(".container").setAttribute("id","cont-")
// undefined

//to return all the attributes of element as collection
document.querySelector(".container").attributes
// NamedNodeMap {0: class, 1: id, class: class, id: id, length: 2}0: class1: idclass: classid: idlength: 2[[Prototype]]: NamedNodeMap

//to remove the mentioned attribute
document.querySelector(".container").removeAttribute("id")