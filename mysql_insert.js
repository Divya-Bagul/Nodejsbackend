var mysql      = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const conn = require('./mysqldb');
app.use(express.json());
app.post('/add', (req, res)=>{
    let name = req.body.name;
    console.log(name);
   
    conn.query('insert into users(name) values("'+name+'") ',(err,result)=>{
            res.send(result)
    });
    conn.end();
});
app.put('/update/:id', (req, res)=>{
    let id = req.params.id;
    let name = req.body.name;
    
    conn.query('UPDATE users SET name="'+name+'" WHERE id="'+'id'+'" ',(err,result)=>{
            res.send(result)
    });
    conn.end();
});
app.listen(5000);