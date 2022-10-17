const express = require("express")
const app = express()
const cennection =require('./config/db');
const routerUser = require("./Routes/AuthRoute")
const MoudelAuth = require('./Models/AuthModel');
const jwt = require('jsonwebtoken');

const  dotenv = require('dotenv');

dotenv.config();







app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const JWT_SECRET ="this is joson secret from my app"
// app.get("/",(req,res, next)=>{

// let token= jwt.Auth({
//     "Name":"amina",
//   "Email":"aminasalik99@gmail.com",
//   "Password":"aminask99@"
 
// }, JWT_SECRET,{
//     expiresIn:'1h'

// }
// )
// res.json({
//     token : token
// })

// })



const PORT = process.env.PORT||8080

app.use('/api',routerUser);


app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})