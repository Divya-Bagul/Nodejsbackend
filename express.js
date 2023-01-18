const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));

app.get('/', function (req, res) {
 
    res.send('Hello World')
  })
  app.get('/about', function (req, res) {
    let requsetData = req.query.name;
    console.log(requsetData);
    res.send('Hello World about page '+requsetData);
  })


  app.get('/new', (req, res)=>{
    let requsetData = req.query.name;
    console.log(requsetData);
    res.sendFile(`${publicPath}/new.html`);
    // res.send('Hello World')
  })
  
  app.listen(3000)