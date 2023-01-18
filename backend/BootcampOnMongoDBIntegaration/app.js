const Express=require("express");
const app=new Express();
const Mongoose=require("mongoose")
const BodyParser=require("body-parser")
const Cors=require("cors")
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}))
app.use(Cors())
const studentModel = require("./model/student");
Mongoose.connect("mongodb+srv://VivekValsan:Vivek1111@cluster0.767pfgl.mongodb.net/NorkaFSD2022?retryWrites=true&w=majority",{useNewUrlParser:true})
// get method
app.get("/sample",async(req,res)=>{
    let getdata=await studentModel.find();
    res.send(getdata) 
})

app.post("/sample", async(req,res)=>{
    let postdata=studentModel(req.body)
    let result= await postdata.save((err,postdata)=>{
        if(err){
            res.send(`Status:ERROR(${err})`)
        }else{
            res.send("Status:Success")
        }
    })
})

// to search a particular data
app.post("/search",(req,res)=>{
    let data=req.body
    let SearchData=studentModel.find(data,(err,data)=>{
        if(err){
            res.json(`Status:Error ${err}`)
        }else {
            res.json(data)
        }
    })
})

// update 
app.post("/update",(req,res)=>{
    let AdmissionNumber=studentModel.AdmissionNumber;
    let data=req.body;
    studentModel.findOneAndUpdate(AdmissionNumber,data,(err,data)=>{
        if (err){
            res.send(`Status:ERROR, erorr:${err}`)
        }else{
            res.send(`Status:Updated, Data:${data} `)
        }
    })
})

// to delete
app.post("/delete",(req,res)=>{
    let AdmissionNumber=studentModel.AdmissionNumber;
    studentModel.findOneAndDelete(AdmissionNumber,(err)=>{
        if(err){
            res.json(`Status:Error, Error: ${err}`)
        }else{
            res.json(`Status:Succesfully deleted`)
        }
    })
})

app.listen(3001,()=>{
    console.log("Sever is listening to port number")
})