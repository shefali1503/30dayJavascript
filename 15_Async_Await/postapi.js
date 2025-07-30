// This function is using the Fetch API with the POST method to send (submit) data to a server (API endpoint).

async function getData() //You're defining an async function, which allows you to use await for handling asynchronous operations like fetching data.
{
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {//in this url we want to post the data
        //fetch() is used to send a network request.
        // You're sending a POST request — that means you're sending data to the server to "create" a new resource.
        method: 'POST',
        body: JSON.stringify({//in this body,it is the actual data you want to send, converted to JSON string.stringify is a method used to covert a json object into a string
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {//Tells the server what kind of data you’re sending (application/json).generally the info of head section
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()//.After fetching,it is the response that we will get from the server which is parsed intp javascript
    return data//response is returned
}

async function main() {
    let data = await getData()
    console.log(data)
}
