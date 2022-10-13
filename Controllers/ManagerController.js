

// !api/user/manager/me=>Public:get
const Manager=(req,res)=>{
    res.status(200).send(req.body)
}


module.exports={Manager}