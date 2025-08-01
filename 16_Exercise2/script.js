async function Delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    })
}


async function add_html(element) {//adding text into div.text
    await Delay()
    let div = document.createElement('div')
    div.innerHTML = element
    document.querySelector(".text").append(div)

}

async function main(){
    let t=setInterval(() => {
        let div=document.getElementsByTagName('div')
        let last=div[div.length-1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        } 
    }, 100);
    
    const text = [
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];

    for (const element of text) {
        await add_html(element)
    }
}

main()
