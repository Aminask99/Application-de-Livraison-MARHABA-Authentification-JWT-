const jwt = require('jsonwebtoken')
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
    verified: {
        type: Boolean,
        default:false
    }, 
    activationCode : {
        type: String,
    },
    tokens:[{
        token:{ 
            type: String, 
        }
    }],
    role: {
        type: mongoose.Types.ObjectId,
        ref: "Role" 
    }
 });
 UserSchema.methods.generateAuthTokenAndSaveUser = async function(){
    const token = jwt.sign({ _id: this._id.toString() }, 'foormm');
    this.tokens.push({ token })
    await this.save()
    return token

 }
 const User = mongoose.model('User',UserSchema)
 
module.exports= User