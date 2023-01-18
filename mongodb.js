var  {MongoClient} = require('mongodb');
var url = "mongodb://127.0.0.1:27017";
const client = new  MongoClient(url);

async function get(){
    let result =  await client.connect();
    let db = result.db("Test");
    let collection = db.collection('user');
    let data =await collection.find({}).toArray()
    console.log(data);
}
get();