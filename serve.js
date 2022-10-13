const express = require("express")
const routerUser= require("./Routes/AuthRoute")
const app=express()

app.use(routerUser);


app.listen(7070, ()=>{
    console.log("Port is 7070");
})