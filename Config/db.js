const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://Aminasalik:aminaSalik99@cluster0.yd7izta.mongodb.net/marhaba?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connect to Db")
})
.catch(((error)=>{
    console.log(error)
}))