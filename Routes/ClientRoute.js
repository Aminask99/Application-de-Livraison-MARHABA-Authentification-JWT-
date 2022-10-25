const {Router} =require("express")
const {Client} =require("../Controllers/ClientController")
const Route = Router()


//! Method = get , URL = client , Access =
Route.get("/user/client/me",Client);



module.exports=Route;