var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE test SET email = 'demo@gmail.com' WHERE name = 'demo'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records updated: " + result.affectedRows);
    });
  });