const {Router} =require("express")
const {Livreur} =require("../Controllers/LivreurController")
const Route = Router()


//! Method = get , URL = livreur , Access =
Route.get("api/user/livreur/me",Livreur);


module.exports=Route;