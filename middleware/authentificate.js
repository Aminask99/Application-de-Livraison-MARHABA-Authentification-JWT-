const  jwt = require('jsonwebtoken')
const authnetificate = (req, res, next) =>{
    try {
const token =req=Headers.authorization.split('')[1]
const decode = jwt.verify(token,'AzQ,PI)(') 

req.user = decode
noxt()
    }
    catch(error){
        res.json({
            message : 'Authentification failed!!!' 
        })
    }
}
module.exports=authnetificate