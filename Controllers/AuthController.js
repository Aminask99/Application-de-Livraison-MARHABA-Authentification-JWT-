const AuthModel =require("../Models/AuthModel")

// *api /login/login=>Public:Post
function auth (req,res){

   
}

// *api /register/register=>Public:Post

const Register=(req,res)=>{
    const {body} = req
    console.log(body)

AuthModel.create({...body})
.then(() =>{
    res.status(201).json({msg :"Created Ressource"})
})
.catch(error => res.status(500).json(error))

joi.validate(req.body)

 };

// *api /forgetpassword/forgetpassword=>Public:Post

const Forgetpassword=(req,res)=>{
    res.status(200).send('this a Forget Password function')
    
}

// *api /resetpassword/resetpassword=>Public:Post

const Resetpassword=(req,res)=>{
    res.status(200).send('this a reset Password function of')
    
}


module.exports={auth,Register,Forgetpassword,Resetpassword}