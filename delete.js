var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM test WHERE name = 'ABC'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE DEMO";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("DROP TABLE");
    });
  });