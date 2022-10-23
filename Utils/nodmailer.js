const nodemailer = require("nodemailer");


  let transport = nodemailer.createTransport({
    service:"Gmail",
    auth: {
      user: "aminasalik012@gmail.com", 
      pass: "akleailxpsosubdh", 
    },
  });

  module.exports= sendConfirmationEmail =(Email,activationCode)=>{
    transport
            .sendMail({
                from:"aminasalik012@gmail.com",
                to: Email,
                subject:"sending mailusing for testing",
                html: `<h1> helo </h1>
                <h4> Modifier your Password  </h4>
                <a href=http://localhost:8080/api/verifyUser/${activationCode}> Cliquer !! </a> </div>`,
                
    
            })


            .catch((err)=>
             console.log(err))
 
}





