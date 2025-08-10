const express = require ("express")
const router = express.Router()

//post request

router.get('/',(req,res)=>{
    res.send("Hello.welcome to my shop");
})

router.get('/:slug',(req,res)=>{
    res.send(`Welcome to ${req.params.slug}`)
})

module.exports = router