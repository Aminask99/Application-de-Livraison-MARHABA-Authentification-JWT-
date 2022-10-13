

// !api /login/login=>Public:Post
const Auth=(req,res)=>{
    res.status(200).send(req.body)
}

// !api /register/register=>Public:Post
const Register=(req,res)=>{
    res.status(200).send('this a register function')
}

// !api /forgetpassword/forgetpassword=>Public:Post
const Forgetpassword=(req,res)=>{
    res.status(200).send('this a Forget Password function')
    
}

// !api /resetpassword/resetpassword=>Public:Post
const Resetpassword=(req,res)=>{
    res.status(200).send('this a reset Password function of')
    
}


module.exports={Auth,Register,Forgetpassword,Resetpassword}