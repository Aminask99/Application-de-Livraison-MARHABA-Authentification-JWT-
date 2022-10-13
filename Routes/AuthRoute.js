const {Router} =require("express")
const {Auth,Register,Forgetpassword,Resetpassword} =require("../Controllers/AuthController")
const Route = Router()

//! Method = Post , URL = Auth , Access =
Route.post('Api/Auth ',Auth)

//! Method = Post , URL = Register , Access =
Route.post('Api/Register ',Register)

//! Method = Post , URL = Forgetpassword , Access =
Route.post('Api/Resetpassword ',Forgetpassword)

//! Method = Post , URL = Auth , Access =
Route.post('Api/Resetpassword ',Resetpassword)

module.exports=Route;