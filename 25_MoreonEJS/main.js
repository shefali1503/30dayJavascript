const express = require('express')
const blog = require('./routes/blog')
const shop =require('./routes/shop')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Hello World! post')
  console.log("this is a post request")

})

app.put('/', (req, res) => {
  res.send('Hello World! put')
  console.log("this is a PUT request")
})

app.delete('/', (req, res) => {
  res.send('Hello World! delete')
  console.log("this is a DELETE request")
})

//serving html through express
app.get('/abc', (req, res) => {
  console.log("Hello world index")
  res.sendFile('template/abc.html', { root: __dirname })
})

app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 ,name :{"harry" : "Jerry"}})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
