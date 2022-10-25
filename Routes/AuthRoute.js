const Route= require('express').Router();
const {Register,Auth,verifyUser,Forgetpassword,Resetpassword,getResetpassword} =require("../Controllers/AuthController")
// const autentification = require("../middleware/Auth")

//* Method = Post , URL = Auth , Access = public
Route.post('/Auth',Auth)

//* Method = Post , URL = Register , Access = public
Route.post('/Register',Register)

//* Method = Post , URL = confirmation , Access = public
Route.get('/verifyUser/:activationCode',verifyUser)

//* Method = Post , URL = Forgetpassword , Access = public
Route.post('/Forgetpassword',Forgetpassword)

//* Method = Post , URL = Auth , Access = private
Route.get('/Resetpassword/:id/:token',Resetpassword)
//* Method = Post , URL = Auth , Access = public
Route.post('/Resetpassword/:id/:token',getResetpassword)


module.exports=Route;