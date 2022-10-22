const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://AminaSk:AminaSk99@cluster0.tpaiqti.mongodb.net/marhaba?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connect to Db")
})
.catch(((error)=>{
    console.log(error)
}))