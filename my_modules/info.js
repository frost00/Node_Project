var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "%83#G!xyZ2$4S",
  database: "mydb"
});



exports.info_db = function(one,two,three,four)
{
  con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "INSERT INTO customer (firstname,lastname,email,phone) VALUES ('"+one+"','"+two+"','"+three+"','"+four+"')";
    con.query(sql,function(err, result){
      if(err) throw err;
      console.log("1 record inserted");
    });
  });
}
