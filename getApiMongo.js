const express = require('express');
const db = require('./connection');
var  mongodb = require('mongodb');

const app = express();

// console.log(db);
app.get('/' ,async(req,res) =>{
    let database =await db();
    let collection =await database.collection('customers');
    let getdata = await collection.find().toArray();
   // let data =await database.find().toArray();
    // let data2 =await database.findOne({"name":"Company Inc"});
    // res.send(data2);
  //  res.send(data2);

  res.send(getdata);

});

app.get('/secondpage' ,async(req,res) =>{
    let database =await db();
    let collection =await database.collection('customers_new');
    let getdata = await collection.find().toArray();
   // let data =await database.find().toArray();
    // let data2 =await database.findOne({"name":"Company Inc"});
    // res.send(data2);
  //  res.send(data2);

  res.send(getdata);

});

app.get('/insert' ,async(req,res) =>{
    let requsetData = req.query.name;
    console.log(requsetData);
    let database =await db();
    let collection =await database.collection('test');
    let getdata = await collection.insertOne({"name":requsetData});
   // let data =await database.find().toArray();
    // let data2 =await database.findOne({"name":"Company Inc"});
    // res.send(data2);
  //  res.send(data2);

  res.send(getdata);

});
app.use(express.json());
app.post('/add' ,async(req,res) =>{
    let requsetData = req.query.name;
    console.log(requsetData);
    console.log(req.body.name);
    let database =await db();
    let collection =await database.collection('test');
    let getdata = await collection.insert(req.body);
    res.send(getdata);

});
app.post('/add' ,async(req,res) =>{
    let requsetData = req.query.name;
    console.log(requsetData);
    console.log(req.body.name);
    let database =await db();
    let collection =await database.collection('test');
    let getdata = await collection.insert(req.body);
    res.send(getdata);

});
app.put('/put/:name' ,async(req,res) =>{
    let requsetData = req.query.name;
    console.log(requsetData);
    console.log(req.body.name);
    let database =await db();
    let collection =await database.collection('test');
    let getdata = await collection.updateMany({"name":req.params.name},{$set:req.body});
    res.send(getdata);

});
app.delete('/delete/:name' ,async(req,res) =>{
    let requsetData = req.query.name;
    console.log(requsetData);
    console.log(req.body.name);
    let database =await db();
    let collection =await database.collection('test');
 //   let getdata = await collection.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    let getdata = await collection.deleteOne({name:req.params.name});

    res.send(getdata);

});
app.listen(5000)