async function getData() {
  const url = "https://fakestoreapi.com/products/1";
  try {//to try this code
    const response = await fetch(url);//getting response from the url
    if (!response.ok) {//it means if the response that we have fetched is not okay then we will create a new error 
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();//if the response is ok then will parse it into javascript object notation
    console.log(json);//print the response
  } 
  catch (error) {//if there was any error in the try code then it will be catched in this catch method otherwise it will be ignored
    console.error(error.message);//error will be printed
  }
}

getData()