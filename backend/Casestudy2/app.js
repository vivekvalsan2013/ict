// Task1: initiate app and run server at 3000
var express=require("express");
var app=new express()
var bodyParser=require("body-parser")
const mongoose=require("mongoose");
var employeemodel=require("./model/employeeappmodel")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
mongoose.connect("mongodb+srv://VivekValsan:Vivek1111@cluster0.767pfgl.mongodb.net/EmployeeDatabase?retryWrites=true&w=majority")

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
app.get("/api/employeelist",async (req,res)=>{
    let data=await employeemodel
    res.send(data);
})



//TODO: get single data from db  using api '/api/employeelist/:id'

app.get("/api/employeelist/:id",async(res,req)=>{
let id=req.params.id;
let data=employeemodel.find
})



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



