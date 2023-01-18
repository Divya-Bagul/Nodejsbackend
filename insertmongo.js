var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = [{ name: "Company Inc", address: "Highway 37" },{ name: " new Company Inc", address: "Highway 3" }];
//   dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [{ name: "Company Inc" },{ name: " new Company Inc"}];
    dbo.collection("customers").findOne({}, function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });