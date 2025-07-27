console.log("Hello World")

//There are sometimes when we want to display the inner html of a element .WHta are the tags that are inside the element.This can be done by using "innerHTML" property of dom.                                                                  For example if we want to see the inner html of container and box class
console.log(document.querySelector(".container").innerHTML)//it has a element inside it <div class="box">Hey I am Box</div>
console.log(document.querySelector(".box").innerHTML)//whereas it only hav text inside its tag Hey I am Box

//outerHTML-it gives the innerHTML + element itself
console.log(document.querySelector(".container").outerHTML)//'<div class="container">\n        <div class="box">Hey I am Box</div>\n    </div>'

//text content-for getting only text excluding the tags we can use innertext also
console.log(document.querySelector(".container").textContent)// Hey I am Box

//tagName-used to see the tagname of the element.Can be applicable to element only
console.log(document.querySelector(".container").tagName)//returns DIV

//nodeName-used to see the nodeName of the node such as text node,elements also etc
console.log(document.querySelector(".container").nodeName)//returns DIV

//hidden - to check the element is hidden or not
console.log(document.querySelector(".container").hidden)//returns false as container is not hidden