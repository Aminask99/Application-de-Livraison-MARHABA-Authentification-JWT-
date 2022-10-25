
const loginrequired= async(req,res,next)=>{


    const token =req.cookies['access-token']
    if(token){
  
      const validatoken=  await jwt.verify(token,"foormm")
      if(validatoken){
  
  res.user.validatoken.id
  next()
      }else{
  
          console.log('token expires')
      }
      }else{
  
          console.log('token not found')
      }
    }
  
  module.exports={loginrequired}


