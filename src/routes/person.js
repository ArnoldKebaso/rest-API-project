const express = require('express')
const router = express.Router()
//This is a QueryString  => query property on the request object
// localhost:3000/person?name=thomas&age=20
router.get('/person',(req,res) =>{
    if(req.query.name){

    res.send(`You have requested a person ${req.query.name}`)
}
else{
    res.send("You have requested a person")
}
}
)
//This are the params properties to req the object
// localhost:3000/person/thomas
router.get('/person/:name',(req,res) =>{
    res.send(`You have requested a person ${req.query.name}`)
})
router.get('/error',(req,res) =>{
    throw new Error('This is a forced error')
})



module.exports = router