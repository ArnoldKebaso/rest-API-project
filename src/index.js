const express = require('express')
const app = express()
let personRoute = require('./routes/person')
let fs = require('path')
app.use((req,res,next) => {
    //We are logging the current date and time and the original URL requested 
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    //We pass control to the next() middleware to end the req cycle
    next()
})
app.use(personRoute)
app.use(express.static('public'))

// We create a 404 error handler
app.use((req,res,next) =>{
    res.status(404).json({
        sucess: false,
        message:"We cannot find the resource you are looking for"
    }
        )
})


// 500 Error handler
app.use((err,req,res,next) =>{
    console.error(err.stack)
    res.sendFile(fs.join(__dirname,'../public/500.html'))
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{console.info(`Server is listening on port${PORT}`)})