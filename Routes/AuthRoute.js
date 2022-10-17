const Route= require('express').Router();
const {auth,Register,Forgetpassword,Resetpassword} =require("../Controllers/AuthController")


//* Method = Post , URL = Auth , Access = public
Route.post('/auth',auth)

//* Method = Post , URL = Register , Access = public
Route.post('/Register',Register)

//* Method = Post , URL = Forgetpassword , Access = public
Route.post('/api/Resetpassword',Forgetpassword)

//* Method = Post , URL = Auth , Access = public
Route.post('/api/Resetpassword',Resetpassword)

module.exports=Route;