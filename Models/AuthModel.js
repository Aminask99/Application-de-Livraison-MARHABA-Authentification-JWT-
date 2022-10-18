 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const UserSchema =new Schema({
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
   

 });
 
 const User = mongoose.model('User',UserSchema)
module.exports= User