const jwt = require('jsonwebtoken')
 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const RoolSchema =new Schema({
    role: {
        type: String,
        required: true,
    },  
 });
 
 const rool = mongoose.model('Role',RoolSchema)
module.exports= rool