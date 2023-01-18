// here we are creating the model of the collection

const mongoose= require("mongoose");
// defining the schema(plan model) for the database
const schema=mongoose.Schema({
    name:String,
    location:String,
    designation:String
})
//mapping the collection name with newly created schema
const testdata=mongoose.model("testdata",schema)
//exporting it access it outside
module.exports=testdata;
