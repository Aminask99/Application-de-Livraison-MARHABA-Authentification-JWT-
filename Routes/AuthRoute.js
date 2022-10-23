const Route= require('express').Router();
const {Register,Auth,verifyUser,Forgetpassword,Resetpassword,getResetpassword} =require("../Controllers/AuthController")


//! Method = Post , URL = Auth , Access = public
Route.post('/Auth',Auth)

//! Method = Post , URL = Register , Access = public
Route.post('/Register',Register)

//! Method = Post , URL = confirmation , Access = public
Route.post('/verifyUser/:activationCode',verifyUser)

//! Method = Post , URL = Forgetpassword , Access = public
Route.post('/Forgetpassword',Forgetpassword)

//! Method = Post , URL = Auth , Access = public
Route.get('/Resetpassword/:id/:token',Resetpassword)
Route.post('/Resetpassword/:id/:token',getResetpassword)


module.exports=Route;