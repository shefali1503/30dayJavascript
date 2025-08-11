const express = require('express')
const app = express()
const port = 3000
const fs = require ('fs');

const birds = require('./routes/birds.js')


app.use('/birds', birds)
//abc.txt ke liye request aayi
app.use(express.static("public"))//middleware

//req -req object
//res-response for the request object
//next
app.use( (req, res, next) => {
    // res.send("Response by the middleware")
    req.name = "data 1"
    fs.appendFileSync('log.txt' , `${Date.now()} is a ${req.method}\n`)
    console.log('LOGGED')
    next()
})

app.use('/', (req, res, next) => {
    console.log('Middleware 2')
    req.name = "data 2"
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!' + req.name)
})

app.get('/about', (req, res) => {
    res.send('Hello About!')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
