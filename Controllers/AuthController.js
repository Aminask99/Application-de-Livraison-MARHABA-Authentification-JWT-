
const User = require("../Models/AuthModel")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const nodemailer = require("../Utils/nodmailer")



//* nodemailer

// !api/Auth=>Public:Post

const Auth =(req,res,next) =>{
    
    let UserName = req.body.UserName
    let Password = req.body.Password

          User.findOne({$or:[{Email:UserName}]})
    
            .then(user =>{
                
               
                if(user){
                    let PasswordValid = bcrypt.compareSync(req.body.Password, user.Password);


                    if (!user ) {
                        return res.send({
                            message: "Email not find"
                        })
                    }

                    if (!PasswordValid ) {
                        return res.send({
                            message: "Password is not matched"
                        })
                    }

                    if (user && PasswordValid && user.verified) {
                        return res.send({
                            message: "Login Succeful!"
                        })
                    }else{
                        return res.send({
                            message: "activate Gmail plz"
                        }) 
                    
                    }



                }
               
    
            })
         
}

// !api/register=>Public:Post

const Register = (req,res,next) => {
const caracters =
"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let activationCode ="";
for (let i =0; i<25;i++){
    activationCode+= caracters[Math.floor(Math.random() * caracters.length)];

} 
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
                activationCode: activationCode,
            
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

            sendConfirmationEmail(user.Email,user.activationCode)    
    })  
  

};
//* verifyUser
const verifyUser=(req,res)=>{
try{
      User.findOneAndUpdate({activationCode:req.params.activationCode})
        .then(user=>{
            if(!user){
           console.log("not carfimation")
            }
            user.activationCode= null
            user.verified= true
            user.save();
            res.send({
                message:"le Compte est active"
            })
        })
}catch(err){
    console.log(err)
}
  

}

// !api/forgetpassword=>Public:Post

const Forgetpassword=(req,res)=>{
    res.status(200).send('this a Forget Password function')
    
}

// !api/resetpassword=>Public:Post

const Resetpassword=(req,res)=>{
    res.status(200).send('this a reset Password function of')
    
}


module.exports={Auth,Register,verifyUser,Forgetpassword,Resetpassword}