// Task1: initiate app and run server at 3000
const express=require("express");
const app=new express();
const BodyParser=require("body-parser")
const Mongoose=require("mongoose")
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
const EmployeeModel=require("./model/EmployeeModel");
const bodyParser = require("body-parser");
Mongoose.connect("mongodb+srv://VivekValsan:Vivek1111@cluster0.767pfgl.mongodb.net/EmployeeApp?retryWrites=true&w=majority")
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}))

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist', async (req, res) => {
    try{
        const data = await EmployeeModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



//TODO: get single data from db  using api '/api/employeelist/:id'

app.get('/api/employeelist/:id', async (req, res) => {
    let id=req.params.id;
    try{
        let data = await EmployeeModel.findById(id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post("/api/employeelist",(req,res)=>{
    let sendData=new EmployeeModel({
        name:req.body.name,
        location:req.body.location,
        position:req.body.position,
        salary:req.body.salary

    })
    try{
        const dataToSave = sendData.save();
        res.status(200).json(dataToSave)
    }catch(err){
        res.json({message: error.message})
    }
})



//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete('/api/employeelist/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let data = await EmployeeModel.findByIdAndDelete(id)
        res.send(data);
    }
    catch (error) {
        res.json({ message: error.message })
    }
})


//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put("/api/employeelist",async (req,res)=>{
    // let receiveData={
    //     name:req.body.name,
    //     location:req.body.location,
    //     position:req.body.position,
    //     salary:req.body.salary
    // }
    try {
       let result= await EmployeeModel.updateOne({name:req.body.name,location:req.body.location,position:req.body.position,salary:req.body.salary})

        res.json(result);
    }
    catch (error) {
        res.json({ message: error.message });
    }
})

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

app.listen(3000,()=>{
    console.log("Server listening to Port-3000")
})

