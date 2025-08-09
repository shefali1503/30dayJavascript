const express = require('express')
// This imports the Express module into your application.
// require('express') loads the Express framework.
// const express stores the function returned by require, which you can use to create an Express app.



const app = express()//you are creating an Express application instance.Calling express() returns an app object, which represents your web server.
const port = 3000//You are defining a constant port with the value 3000.

app.use(express.static('public'))
//app.get -to get this data from the server ,app.put,app.update,app.delete (path,handler--function)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About us')
})

app.get('/contact', (req, res) => {
  res.send('Contact info')
})

app.get('/hello/:name',(req,res)=>{
  // URL:http://127.0.0.1:3000/hello/harsh/?mode=dark
  console.log(req.params)
  console.log(req.query)
  res.send(`Hello ${req.params.name}`)//req.params.name;-- Access parameter
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})//This starts the Express server and makes it listen for incoming connections on the specified port (3000).

