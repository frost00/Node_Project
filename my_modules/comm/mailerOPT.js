var mail = require('nodemailer');

exports.mail_Opt = function(arrIN){
var mailOpt = {
  from: 'wcsuwebdev@gmail.com',
  to: arrIN[2],
  subject: 'All Signed up !',
  text: 'Hello, '+arrIN[0]+' '+arrIN[1]+'\n'+'http://localhost:8080/views/page2.html'
};
return mailOpt;
}
