const Route= require('express').Router();
const {Register,Auth,verifyUser} =require("../Controllers/AuthController")


//! Method = Post , URL = Auth , Access = public
Route.post('/Auth',Auth)

//! Method = Post , URL = Register , Access = public
Route.post('/Register',Register)

//! Method = Post , URL = confirmation , Access = public
Route.post('/verifyUser/:activationCode',verifyUser)

//! Method = Post , URL = Forgetpassword , Access = public
// Route.post('/api/Resetpassword',Forgetpassword)

//! Method = Post , URL = Auth , Access = public
// Route.post('/api/Resetpassword',Resetpassword)

module.exports=Route;