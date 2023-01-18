const mongoose= require("mongoose");
const StudentSchema=mongoose.Schema({
    name:String,
    rollNumber:String,
    AdmissionNumber:{
       type:Number,
        //to make the field mandatory, the required:true can be used
       required:true
    },
    College:String
})
const studentModel=mongoose.model("students",StudentSchema);
module.exports=studentModel