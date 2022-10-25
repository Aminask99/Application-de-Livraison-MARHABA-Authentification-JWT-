// const jwt= require('jsonwebtoken')
// const User = require('../Models/AuthModel')

// const autentification = async(req,res,next)=>{

// try{

// const authToken =req.header('Autorization').replace('Bearer ', '');
// const decodedToken = jwt.verify(authToken, 'foormm'); 
// const user= await User.findOne({ _id: decodedToken._id, 'tokens.token': authToken });

//     if(!user) throw new Error();

//     req.user = user;
//  next();

// }catch(e){
//     res.status(401).send('Plzz Autentifier');
// }
// }
// module.exports=autentification;