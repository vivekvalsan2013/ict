// Task1: initiate app and run server at 3000
const express=require("express");
const app=new express();
const BodyParser=require("body-parser")
const Mongoose=require("mongoose")
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
const EmployeeModel=require("./model/EmployeeModel")
Mongoose.connect("mongodb+srv://VivekValsan:Vivek1111@cluster0.767pfgl.mongodb.net/EmployeeApp?retryWrites=true&w=majority")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//Task 2 : write api with error handling and appropriate api mentioned in the TODO below






//TODO: get data from db  using api '/api/employeelist'
app.get("/api/employeelist", async(req,res)=>{
    let data=await EmployeeModel.find();
    res.send(data)
})



//TODO: get single data from db  using api '/api/employeelist/:id'

app.get("/api/employeelist/:id",(req,res)=>{
    let id=req.params.id;
    let data=EmployeeModel.findOne(id);
    res.send(data);
})



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post("/api/employeelist",(req,res)=>{
    var item={
        name:req.body.name,
        location:req.body.location,
        position:req.body.designation,
        salary:req.body.salary
    }
    //embedding the new data to the model
    var data=EmployeeModel(item)
    data.save();
})




//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete("/api/employeelist/:id",(req,res)=>{
    let id=req.params.id;
    EmployeeModel.findOneAndDelete(id);
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post("/api/employeelist",(req,res)=>{
    let structure={
        name:EmployeeModel.name,
        location:EmployeeModel.location,
        position:EmployeeModel.position,
        salary:EmployeeModel.salary
    };
    let data=req.body;
    studentModel.findOneAndUpdate(structure,data,(err,data)=>{
        if (err){
            res.send(`Status:ERROR, erorr:${err}`)
        }else{
            res.send(`Status:Updated, Data:${data} `)
        }
    })
})

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

app.listen(3009,()=>{
    console.log("Server listening to Port-3000")
})



