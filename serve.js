const express = require("express")
const app = express()
const cennection =require('./config/db');
const routerUser = require("./Routes/AuthRoute")
const  dotenv = require('dotenv');
const ApiError = require("./Utils/apiError")
const cookiepaeser= require("cookie-parser") // prowser annalizer cookie fy header

dotenv.config();

app.use(cookiepaeser()) //middlewer req,res
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.set("view engine", "ejs");
const PORT = process.env.PORT || 8000
app.use('/api', routerUser);


app.all('*',(req,res,next) => {
    next(new ApiError(`can't find this route: ${req.originalUrl}`,400))
});

// * handling middleware
app.use((err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.status=err.status || "error"

    res.status( err.statusCode).json({ 
        status:err.status,
        error:err,
        message:err.message,
        stack:err.stack,
     });
    });

app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})