const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://AminaSalik:aminasalik99@cluster0.yvvyg9n.mongodb.net/marhaba?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connect to Db")
})
.catch(((error)=>{
    console.log(error)
}))