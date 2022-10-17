 const mongoose = require('mongoose');

 const Schema =new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    Email: {
        type: String,
        required: true,
        max:255,
        min:6
    },
    Password: {
        type: String,
        required: true,
        min:6
    },
    status: {
        type: Boolean,
        default:false
        
    },
    token:{
        type: String,
        required: true
    }

 });
 
module.exports= mongoose.model("userdb",Schema)