var mysql = require('mysql');
var fs = require('fs');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"nodedb",
  });
  var arr =[];
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "SELECT * FROM test WHERE id = 1";
     con.query('SELECT * FROM test limit 5' ,function(err,result,fields){
   

        if (err) throw err;
       // console.log(result,fields);
    /// arr.push(result);
        let text = result.toString();
        for(let [index,num] of result.entries()){
            //console.log(index, num['name'],num['email']);
            arr = num['name'];
            console.log(arr);
            fs.appendFile('mynewfile1.html',arr, function (err,file) {
                if (err) throw err;
                    console.log('Savedfile!');
              });
        }
     
    });
    
    con.query(sql,function(err,result,fields){
        if (err) throw err;
       // console.log(result,fields);
    /// arr.push(result);
        let text = result.toString();
        for(let [index,num] of result.entries()){
            //console.log(index, num['name'],num['email']);
            arr = num['name'];
            console.log(arr);
            fs.appendFile('mynewfile2.html',arr, function (err,file) {
                if (err) throw err;
                    console.log('Savedfile!');
              });
        }
     
    });

    var orderby = "SELECT * FROM test  ORDER BY name";

    con.query(orderby,function(err,result,fields){
        if (err) throw err;
       // console.log(result,fields);
    /// arr.push(result);
        let text = result.toString();
        for(let [index,num] of result.entries()){
            //console.log(index, num['name'],num['email']);
            arr = num['name'];
            console.log(arr);
            fs.appendFile('mynewfileOrder.html',arr, function (err,file) {
                if (err) throw err;
                    console.log('Savedfile!');
              });
        }
     
    });
  });

