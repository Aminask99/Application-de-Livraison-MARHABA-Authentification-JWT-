const cennection =require('./Config/db');
const express = require("express")
const routerUser= require("./Routes/AuthRoute")
const app=express()

const PORT =process.env.PORT||7070
app.use(routerUser);

// app.get('/', (req, res, next) => {
//     try {
//        console.log("Hello error!")
//     }
//     catch (error) {
//         next(error)
//     }
//   })



app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})