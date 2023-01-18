var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"nodedb",
  });
  var name = 'demonew';
  var email ='demonew@gmail.com';
 
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //var sql ="CREATE TABLE test (name VARCHAR(255),  email VARCHAR(255))"z;
    // var sql = "INSERT INTO test (name,email) VALUES ('"+name+"','"+email+"')";
     var sql = "INSERT INTO test (name,email) VALUES ?";
    
    var values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
    ];
    // con.query(sql,function(err,result){
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
        // console.log("Table Created!");
        console.log("Record Inserted In Table"+result.affectedRows);
        
    
    });


  });