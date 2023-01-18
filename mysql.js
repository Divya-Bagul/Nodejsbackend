var mysql      = require('mysql');
const express = require('express');
const path = require('path');
const { deflateRawSync } = require('zlib');
const app = express();

   
//   connection.connect((err)=>{
//         if(err){
//             console.log('err');
//         }else{console.log('connect');
//     }
//   });

  app.get('/new', (req, res)=>{
  
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'laravel'
      });
    connection.connect((err)=>{
        if(err){
            console.log('err');
        }else{console.log('connect');
    }
  });
    connection.query('SELECT * FROM  tests',(err,result)=>{
       res.send(result)
           
      });
      connection.end();
    // res.send('Hello World')
  });
//   connection.query('SELECT * FROM  tests',(err,result)=>{

//     console.log(result);
//   });
 
  
  app.listen(3000);