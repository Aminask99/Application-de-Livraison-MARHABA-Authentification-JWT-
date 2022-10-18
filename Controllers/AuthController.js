
const User = require("../Models/AuthModel")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')


// !api /login/login=>Public:Post

const Auth =(req,res,next) =>{
    
    let UserName = req.body.UserName
    let Password = req.body.Password

          User.findOne({$or:[{Email:UserName}]})
    
            .then(user =>{
                if(user)
            {
                bcrypt.compare(Password, user.Password,function(err,result){

                    if(err)

                    {
                        res.json({
                            error:err
                        })
                    }

                    if(result)

                    {
                        let token = jwt.sign({Name: user.Name}, 'verySecretValue',{expiresIn:'1h'})
                        res.json({
                            message:'Login Succeful!',
                            token
                        })

                    }  else

                    {
                        res.json({
                            message: "Password is not matched"
                        })

                    }
                })

            } else

                {
                    res.json({
                        message:'no user found!'
                    })
                }
            })
}

// !api /register/register=>Public:Post

const Register = (req,res,next) => {
    
    bcrypt.hash(req.body.Password, 10, function(err,hashedPass){

        if(err)
        {
            res.json({
                error: err
            })
        }

        let user = new User({

                Name:req.body.Name,
                Email:req.body.Email,
                Password:hashedPass,
                status:req.body.status,
                token:req.body.token
            
        })
                user.save()

            .then(user =>{
                res.json({
                    message:'user added Successfully'
                })
            })
            .catch(error=> {
                res.json({
                    message:'error not creat user'
                })
            })
            
    })  

};


// !api /forgetpassword/forgetpassword=>Public:Post

const Forgetpassword=(req,res)=>{
    res.status(200).send('this a Forget Password function')
    
}

// !api /resetpassword/resetpassword=>Public:Post

const Resetpassword=(req,res)=>{
    res.status(200).send('this a reset Password function of')
    
}


module.exports={Auth,Register,Forgetpassword,Resetpassword}