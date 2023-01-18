const Mongoose= require("mongoose");
const EmployeeScehma=Mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number
})

const EmployeeModel=Mongoose.model("EmployeeDetails",EmployeeScehma);
module.exports=EmployeeModel;