const http = require('http');
const express = require('express');
const path = require('path');
const { EventEmitter } = require('stream');
const app = express();
const publicPath = path.join(__dirname,'public');
const EventEmitterdemo = require('events');
const event =new  EventEmitterdemo();
// app.use(express.static(publicPath));


app.set('view engine','ejs');
const reqfilter = (req,res,next)=>{
    if(!req.query.name){
        res.send('please enter name in request');
    }else if(req.query.name === 'abc'){
        res.send('please noy use abc name ');
    }
    else{
            next();
    }
}
// app.use(reqfilter);




app.get('/about', function (req, res) {
    let requsetData = req.query.name;
    console.log(requsetData);
    res.send('Hello World about page '+requsetData);
  })

  app.get('/ejs',reqfilter, (req, res)=>{
    let requsetData = req.query.name;
    console.log(requsetData);
    const users ={name:"abc",phone:"1223232",skill:['c','c++','php','laravel']}
    // const users  ={requsetData}


         res.render('profile',{users});
    // res.send('Hello World'
  });
  let count = 0;
  event.on("countApi",()=>{
       // count++;  
        console.log(count++);  
  });
  app.get('/', (req, res, next) => {
        event.emit('countApi');
        let requsetData = req.query.name;
       

        try {
     
            let b = 0;
            let c = a / b ;
            res.write('value '+c);
            res.end();
           // throw new Error('BROKEN')
          } catch (err) {
            next("a in not define here")
          }
        // res.send('value is ' + requsetData);
      
   
  });



  app.listen(3000);