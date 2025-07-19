//1st problem
console.log("Har\"".length);//4

//2nd problem -includes,startswith,endswith
let my_name="Shefali";

/* string.includes(searchString, position)
   searchString: The string to search for.
   position (optional): The position in the string to start searching from. Default is 0.
*/
console.log(my_name.includes("Sh"))
console.log(my_name.includes("Sha"))
console.log(my_name.includes("Sh",4))//we find the Sh in fali as the starting index is 4

/*  string.startsWith(searchString, position)
    searchString: The substring to search for.
    position (optional): The position in the string to start the search. Default is 0.
 */
console.log(my_name.startsWith("Sh"))
console.log(my_name.startsWith("Sh",3))

/*
    string.endsWith(searchString, length)
    searchString: The substring to search for.
    length (optional): If provided, it treats the string as if it were only this many characters long.
*/
console.log(my_name.endsWith("li"))
console.log(my_name.endsWith("li",3))

//3rd problem
let a="HELLOWORLD"
console.log(a.toLowerCase());

//4th problem
let st="Please give Rs 1000"
console.log(st.slice(15))

//5th problem
// st[4]=t; not possible as strings are immutable
