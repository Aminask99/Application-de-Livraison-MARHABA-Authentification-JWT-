

// !api/user/client/me=>Public:Post
const Client=(req,res)=>{
    res.status(200).send(req.body)
}



module.exports={Client}