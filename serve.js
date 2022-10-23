const express = require("express")
const app = express()
const cennection =require('./config/db');
const routerUser = require("./Routes/AuthRoute")
const  dotenv = require('dotenv');
// const authnetificate= require('./middleware/authentificate')

dotenv.config();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8000

app.use('/api', routerUser);



app.all('*',(req,res,next) => {
    const err = new Error(`can't find this route: ${req.originalUrl}`);
    next(err.message)
});

// * handling middleware
app.use((err,req,res,next)=>{

    res.status(400).json({ err });

});




app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})