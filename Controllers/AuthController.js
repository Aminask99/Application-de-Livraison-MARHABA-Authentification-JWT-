const User = require("../Models/AuthModel")

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const nodemailer = require("../Utils/nodmailer")
const cookie = require("../Utils/cokie")
const Role = require("../Models/role")


//*  desc =>  Register User
//*  route  => api/Auth
//*  methode =>   Post
//*  access   => public

const Auth = (req, res, next) =>
{
    let UserName = req.body.UserName
    let Password = req.body.Password
    User.findOne({
            $or: [{
                Email: UserName
            }] 
        }).populate("role") // pour acceder role id

        .then(user => {
            res.cookie('access-token',cookie) //access cookie
            if (user) {
                let PasswordValid = bcrypt.compareSync(Password, user.Password); //hash Pass

                if (!user) {
                    return res.send({
                        message: "Email not find"
                    })}
                    console.log(user);
                if (!PasswordValid) {
                    return res.send({
                        message: "Password is not matched"
                    })}
           const token= user.generateAuthTokenAndSaveUser();
                if (user && PasswordValid && user.verified) {
                    res.send({
                      user,token   
                    })
                } else {
                    return res.send({
                        message: "activate Gmail plz"
                
                    })
                }}})      
}

//*  desc =>  Register User
//*  route  => api/Register
//*  methode =>   Post
//*  access   => public

const Register = async (req, res, next) => 
{
    const caracters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let activationCode = "";
    for (let i = 0; i < 25; i++) {
        activationCode += caracters[Math.floor(Math.random() * caracters.length)];
    }
    bcrypt.hash(req.body.Password, 10,  async function (err, hashedPass) { //hash Pass   index type

        if (err) {
            res.json({
                error: err
            })
        }
        let role = req.body.role || "client";
        let {_id} = await Role.findOne({role})

      let user = new User({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: hashedPass,
            activationCode: activationCode,
            role: _id
            
        })
        user.save()

            .then(user => {
                res.json({
                    message: 'user added Successfully'
                })
            })
            .catch(error => {
                res.json({
                    message: 'error not creat user'
                })
            })

        sendConfirmationEmail(user.Email, user.activationCode)
    })
};

//*  desc =>  post verify
//*  route  => api/verifyUser/:activationCode
//*  methode =>   Post
//*  access   => public

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



//*  desc =>  Post ForgetPassword
//*  route  => api/Forgetpassword 
//*  methode =>   Post
//*  access   => public

const Forgetpassword = async (req, res) => 
{
    const { Email } = req.body;
    try {
        const oldUser = await User.findOne({ Email});
        if (!oldUser) {
            return res.json({
                status: "User Not exists"
            });
        }
        const secret = process.env.JWT_SECRET_KEY + oldUser.Password; //
        const token = jwt.sign({ Email: oldUser.Email,id: oldUser._id }, secret, { expiresIn: '5m'});
        
        const link = `http://localhost:8080/api/resetPassword/${oldUser._id}/${token}`;
        let nodemailer = require('nodemailer');

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'aminasalik012@gmail.com',
                pass: 'akleailxpsosubdh'
            }
        });

        let mailOptions = { //les info 
            from: 'aminasalik012@gmail.com',
            to: Email,
            subject: 'Sending Email using Node.js',
            text: link
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        console.log(link);
    } catch (error) {
        console.log(error)
    }
}

//*  desc =>  get Reset Password
//*  route  => api/Resetpassword/:id/:token 
//*  methode =>   get
//*  access   => private

const Resetpassword = async (req, res) => {
    const { id,token} = req.params;
    console.log(req.params)

    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
        return res.json({
            status: "User Not exists"
        });
    }
    const secret = process.env.JWT_SECRET_KEY + oldUser.Password;
        try {
            const verify = jwt.verify(token, secret)
            res.render("index", {
                Email: verify.Email
            })
        } catch (error) {
            res.send("not verified")
        }
}

//*  desc =>  Post Reset Password
//*  route  => api/Resetpassword/:id/:token 
//*  methode =>   Post
//*  access   => public

const getResetpassword = async (req, res) =>
{
    const { id, token} = req.params;
    const {Password} = req.body
    const oldUser = await User.findOne({  _id: id});
    if (!oldUser) {
        return res.json({
            status: "User Not exists !!"
        });
    }
    const secret = process.env.JWT_SECRET_KEY + oldUser.Password;
        try {
            const verify = jwt.verify(token, secret);
            const encryptPass = await bcrypt.hash(Password, 10);
            await User.updateOne({
                _id: id,
            }, {
                $set: {
                    Password: encryptPass,
                },
            });
            res.json({
                status: "Pssword Update"
            })
        } catch (error) {
            res.json({
                status: "Pssword not Update"
            })
        }
}

module.exports = {
    Auth,
    Register,
    verifyUser,
    Forgetpassword,
    Resetpassword,
    getResetpassword
}