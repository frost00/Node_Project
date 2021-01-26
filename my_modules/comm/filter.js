exports.filter_search=function(input){
  var array;
  var getNamefirst;
  var getNameLast;
  var getEmail;

  if(input ===null){
    input ="test";
    return input;
  }
  var obj = input.split("=");
  //get the email address
  var first = obj[1];
  var last = obj[2];
  var mailto = obj[3];
  var value1 = first.replace("&lname","");
  var value2 = last.replace("&email","");
  var value3 = mailto.replace("%40","@");

  getNamefirst= value1;
  getNameLast= value2;
  getEmail= value3;

  //value contains email
  array =[getNamefirst,getNameLast,getEmail];
   return array;
};
