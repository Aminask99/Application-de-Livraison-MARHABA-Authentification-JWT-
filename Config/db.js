const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://dbUser:amsl99@cluster0.oztzoud.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connect to Db")
})
.catch(((error)=>{
    console.log(error)
}))