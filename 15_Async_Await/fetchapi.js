// The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.

//settle means resolve or reject
//resolve means that are promise is fulfilled
//reject means that are promise is not fulfilled
async function getdata(url) {
    try {
        let x = await fetch(url)//fetch is sending a request to the url and as we have applied await we will get a reponse from url if we havent applied await then we would got a promise
        if (x.ok) {
            let data = await x.json()//to parse the response in json(javascript object)
            return data
        }
        else {
            throw new Error(`Response status: ${response.status}`);

        }
        // console.log(data)//the parsed reponse
        // return x//response that we got
    }
    catch(error){
        console.log(error.message)
    }
}

async function main() {
    console.log("Login")
    console.log("Type of data request")
    console.log("Something else")
    let data = await getdata('https://fakestoreapi.com/products/1')
    console.log(data)
    console.log("Process data")
    console.log("task 2")
}

main()