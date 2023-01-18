var  {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017";
const client = new  MongoClient(url);

async function get(){
    let result =  await client.connect();
    let db = result.db("mydb");
    // let collection = db.collection('customers');
    // return collection;
    return db;
}



// module.exports=      MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         console.log("Database created!");
//         var dbo = db.db("mydb");
//         let collection = dbo.collection("customers");
       
//         return collection;
        
//     });

 

 module.exports= get;