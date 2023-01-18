var mysql      = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const conn = require('./mysqldb');
const { json } = require('express');
app.use(express.json());
app.get('/new', (req, res)=>{
    conn.query('SELECT * FROM  tests',(err,result)=>{
            res.send(result)
    });
    conn.end();
});
app.post('/add', (req, res)=>{
    let name = req.body.name;
   
    conn.query('insert into tests(name) values("'+name+'") ',(err,result)=>{
            res.send(result)
    });
    conn.end();
});

app.put('/update', (req, res)=>{
    let name = req.body.name;
    let id = req.body.id;

   
    conn.query('update tests set name="'+name+'" where id="'+id+'" ',(err,result)=>{
            res.send(result)
    });
    conn.end();
});

app.delete('/delete', (req, res)=>{
  
    let id = req.body.id;

   
    conn.query('delete from tests where id="'+id+'"',(err,result)=>{
            res.send(result)
    });
    conn.end();
});
app.listen(3000);