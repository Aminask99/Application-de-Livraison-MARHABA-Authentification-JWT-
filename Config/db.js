const mongoose = require("mongoose");
const Role = require("../Models/role")


mongoose.connect('mongodb+srv://AminaSk:AminaSk99@cluster0.tpaiqti.mongodb.net/marhaba?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connect to Db")
    const role = new Role({
        role: "client"
    })

    role.save()
})
.catch(((error)=>{
    console.log(error)
}))