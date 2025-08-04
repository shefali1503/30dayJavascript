let delay =()=>{
    return new Promise((resolve,reject)=>
        setTimeout(() => {
        resolve()
    }, 5000)
)}

async function addHTHL(element) {
    await delay()
    let innerdiv = document.createElement("div");
    innerdiv.innerHTML = element;
    document.querySelector(".container").append(innerdiv);
}

async function main() {

    let t = setInterval(() => {
        let div = document.getElementsByTagName('div')
        if (div.length === 0) return;
        let last = div[div.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);


    const array = ["Hacking Aashish <sup>15</sup> username", "Username found aashish 17", "Connecting to facebook"];
    
    for (const element of array) {
        await addHTHL(element);
    }

}
main()




