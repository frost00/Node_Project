var mail = require('nodemailer');
var transport = mail.createTransport({
  service: 'gmail',
  auth:{
    user: 'wcsuwebdev@gmail.com',
    pass: 'ugenzyworhahlqlb'
  }
});

exports.transport_PORT=function(opt){
transport.sendMail(opt,function(error,info){
  if(error){
    console.log(error)
  }else{
    console.log('Email sent: '+info.response);
  }
});
}
