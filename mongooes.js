const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
const TestSchema = new mongoose.Schema(
    {
        name:String
    });
const main= async ()=>{
   
        const TestModel = mongoose.model('customers',TestSchema);
        let data = new TestModel({name:123123,"price":123123123});

        let save = await data.save();
        console.log(save);

}
main();
const update = async ()=>{

    const TestModel = mongoose.model('customers',TestSchema);
    let update = await TestModel.updateMany({name:"update1"},{$set:{name:"update"}});
    console.log(update);

}
update();
const deleteDB = async ()=>{ 

    const TestModel = mongoose.model('customers',TestSchema);
     let update = await TestModel.deleteMany({name:"update"});
    let find = await TestModel.find({name:"123123"});

    console.log(find);
    console.log(update);


}
deleteDB();