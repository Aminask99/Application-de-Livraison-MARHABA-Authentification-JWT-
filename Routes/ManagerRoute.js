const {Router} =require("express")
const {Manager} =require("../Controllers/ManagerController")
const Route = Router()


//! Method = get , URL = manager , Access =
Route.get("api/user/manager/me",Manager);


module.exports=Route;