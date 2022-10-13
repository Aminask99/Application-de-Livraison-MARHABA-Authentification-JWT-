

// !api/user/livreur/me=>Public:get
const Livreur=(req,res)=>{
    res.status(200).send(req.body)
}



module.exports={Livreur}