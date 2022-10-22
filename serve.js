const express = require("express")
const app = express()
const cennection =require('./config/db');
const routerUser = require("./Routes/AuthRoute")
const  dotenv = require('dotenv');
// const authnetificate= require('./middleware/authentificate')

dotenv.config();


app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT = process.env.PORT || 8000

app.use('/api', routerUser);


app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})


